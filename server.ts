import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

const app = express();
const PORT = 3000;

app.use(express.json({ limit: "15mb" }));

// In-memory quote requests store for demonstration & retrieval
interface QuoteRequest {
  id: string;
  timestamp: string;
  name: string;
  phone: string;
  email: string;
  projectAddress: string;
  projectType: string;
  projectSize: string;
  timeframe: string;
  description: string;
  hasPhoto: boolean;
}

const quoteRequests: QuoteRequest[] = [];

// Lazy Gemini AI initialization
let aiClient: GoogleGenAI | null = null;
function getAIClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
    return null;
  }
  if (!aiClient) {
    aiClient = new GoogleGenAI({ apiKey });
  }
  return aiClient;
}

// Health check endpoint
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", business: "Stone Creek Concrete LLC", city: "Fargo, ND" });
});

// Quote submission endpoint
app.post("/api/quote", (req, res) => {
  try {
    const {
      name,
      phone,
      email,
      projectAddress,
      projectType,
      projectSize,
      timeframe,
      description,
      hasPhoto,
    } = req.body;

    if (!name || !phone || !email || !projectType) {
      return res.status(400).json({
        success: false,
        error: "Please provide your name, phone number, email address, and project type.",
      });
    }

    const referenceId = `SCC-${Date.now().toString().slice(-6)}`;
    const newQuote: QuoteRequest = {
      id: referenceId,
      timestamp: new Date().toISOString(),
      name,
      phone,
      email,
      projectAddress: projectAddress || "Fargo Area",
      projectType,
      projectSize: projectSize || "Not specified",
      timeframe: timeframe || "Flexible",
      description: description || "",
      hasPhoto: Boolean(hasPhoto),
    };

    quoteRequests.push(newQuote);

    return res.json({
      success: true,
      referenceId,
      message: "Thank you! Your quote request has been received. Our team will review your project details and contact you promptly.",
    });
  } catch (error) {
    console.error("Error processing quote request:", error);
    return res.status(500).json({
      success: false,
      error: "An unexpected error occurred while submitting your quote request. Please call us directly at 701-712-0609.",
    });
  }
});

// Chatbot endpoint
app.post("/api/chat", async (req, res) => {
  try {
    const { message, history } = req.body;

    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "A message is required." });
    }

    const ai = getAIClient();

    const systemInstruction = `You are the helpful virtual concrete assistant for Stone Creek Concrete LLC, a premier concrete contractor based in Fargo, North Dakota.
Business Information:
- Name: Stone Creek Concrete LLC
- Location & Address: 1760 42nd St S, Fargo, ND 58103
- Phone: 701-712-0609 / (701) 712-0609
- Email: info@stonecreekconcretellc.com
- Hours: Monday - Saturday, 9:00 AM - 6:00 PM
- Credentials: North Dakota Contractor License #000046657, BBB Accredited Business with A+ Rating, Approved HomeAdvisor Pro (5.0 Stars)
- Philosophy: "At Stone Creek Concrete LLC, we understand that concrete is more than just a material; it is the foundation of your home or business. We treat it with the care and respect it deserves."
- Values: Precision, Punctuality, and Professionalism
- Services offered: Concrete Driveways, Concrete Patios, Steps & Stoops, Sidewalks & Walkways, Masonry Inlays, Slabs & Foundations, Permeable Pavers, Exposed Pea Gravel, Foundation Repair, and Commercial Flatwork.
- Service Area: Fargo, West Fargo, Moorhead, Horace, Dilworth, Casselton, Cass County, and Red River Valley.
- Local climate context: Concrete in Fargo faces extreme freeze-thaw cycles and expansive Red River Valley clay soils. Proper base preparation (compacted crushed rock), adequate slab thickness (typically 4" for residential patios/walkways, 5-6" for driveways/shop floors), proper rebar reinforcement grid, air-entrainment (5-7% air entrainment for exterior durability), and timely control joints are critical.
- Important tone & guidelines:
  * Be polite, knowledgeable, concise, and professional.
  * Answer technical questions about concrete finishes (broom, smooth steel trowel, stamped, exposed aggregate, permeable pavers, masonry inlays), thickness recommendations, and project planning.
  * Help calculate square footage if requested (Length in feet × Width in feet = Square Feet).
  * IMPORTANT: Explain that all final project quotes require an on-site evaluation or formal review. Never guarantee exact prices or invent unverified claims.
  * Encourage visitors to submit a quote request on the website or call (701) 712-0609 for prompt scheduling.`;

    if (ai) {
      try {
        // Prepare chat history if present
        let conversationPrompt = `${systemInstruction}\n\n`;
        if (Array.isArray(history) && history.length > 0) {
          const recentHistory = history.slice(-6);
          recentHistory.forEach((h: { sender: string; text: string }) => {
            conversationPrompt += `${h.sender === "user" ? "Customer" : "Assistant"}: ${h.text}\n`;
          });
        }
        conversationPrompt += `Customer: ${message}\nAssistant:`;

        const response = await ai.models.generateContent({
          model: "gemini-3.8-flash",
          contents: conversationPrompt,
          config: {
            maxOutputTokens: 350,
            temperature: 0.7,
          },
        });

        const reply = response.text || "I'd be happy to help with your concrete project! Please call us at 701-712-0609 or request a free quote through our online form.";
        return res.json({ reply });
      } catch (genError) {
        console.warn("Gemini API call failed, using intelligent fallback response:", genError);
      }
    }

    // Fallback response if Gemini key is not configured or fails
    const lower = message.toLowerCase();
    let fallbackReply = "Stone Creek Concrete LLC specializes in high-quality driveways, patios, sidewalks, garage floors, slabs, foundations, and commercial concrete across Fargo, ND. For an accurate quote or to schedule a consultation, please call us directly at 701-712-0609 or submit our Free Quote form on this page!";

    if (lower.includes("driveway") || lower.includes("car")) {
      fallbackReply = "For driveways in Fargo, ND, we recommend 5 to 6 inches of 4,000+ PSI air-entrained concrete with rebar reinforcement over a properly compacted gravel sub-base to withstand North Dakota freeze-thaw cycles. Would you like to request a free quote, or call us at 701-712-0609?";
    } else if (lower.includes("patio") || lower.includes("backyard") || lower.includes("stamped") || lower.includes("decorative")) {
      fallbackReply = "We build custom concrete patios in Fargo featuring traditional non-slip broom finishes, decorative stamped textures (like slate or ashlar stone), and colored borders. You can submit your dimensions in our quote form or call 701-712-0609 to discuss design options!";
    } else if (lower.includes("cost") || lower.includes("price") || lower.includes("estimate") || lower.includes("how much")) {
      fallbackReply = "Concrete project costs depend on total square footage, slab thickness, site excavation, sub-base prep, and finish type (e.g. broom vs stamped). We provide free, straightforward estimates for Fargo homeowners and businesses. Fill out our quote form or give us a call at 701-712-0609!";
    } else if (lower.includes("phone") || lower.includes("call") || lower.includes("contact") || lower.includes("email")) {
      fallbackReply = "You can reach Stone Creek Concrete LLC directly by phone at 701-712-0609 or email us at info@stonecreekconcretellc.com. We serve Fargo, North Dakota and surrounding communities!";
    } else if (lower.includes("size") || lower.includes("sq ft") || lower.includes("calculate") || lower.includes("square feet")) {
      fallbackReply = "To calculate square footage, simply multiply Length in feet by Width in feet (for example: a 20' × 24' patio is 480 sq ft). Check out our interactive project estimator on this page to calculate your yardage and submit it directly with your quote request!";
    }

    return res.json({ reply: fallbackReply });
  } catch (error) {
    console.error("Chat endpoint error:", error);
    return res.status(500).json({
      reply: "We are here to assist with your Fargo concrete project! Please call Stone Creek Concrete LLC at 701-712-0609 or submit a quote request.",
    });
  }
});

// Vite middleware or static serving
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Stone Creek Concrete server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
