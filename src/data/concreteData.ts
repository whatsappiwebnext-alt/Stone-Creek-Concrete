import { ConcreteService, GalleryProject, TestimonialItem } from "../types";

export const BUSINESS_INFO = {
  name: "Stone Creek Concrete LLC",
  tagline: "Quality Craftsmanship, Durable Materials, Exceptional Customer Service",
  secondaryTagline: "Precision, Punctuality, and Professionalism",
  philosophy: "At Stone Creek Concrete LLC, we understand that concrete is more than just a material; it is the foundation of your home or business. We treat it with the care and respect it deserves.",
  address: "1760 42nd St S, Fargo, ND 58103-4486",
  location: "Fargo, North Dakota",
  phone: "701-712-0609",
  phoneDisplay: "(701) 712-0609",
  email: "info@stonecreekconcretellc.com",
  website: "https://stonecreekconcretellc.com",
  serviceRadius: "Fargo, West Fargo, Moorhead, Dilworth, Horace, and surrounding Red River Valley communities",
  license: "North Dakota Trade License #000046657 (Active through March 1, 2027)",
  bbbRating: "BBB Accredited with A+ Rating (Accredited since Oct 2022)",
  homeAdvisorRating: "Approved HomeAdvisor Pro • 5.0 Rating",
  hours: "Monday – Saturday: 9:00 AM – 6:00 PM | Sunday: Closed",
  paymentAccepted: "Credit Cards, Checks, Cash",
  guarantee: "Free Consultations, Transparent Estimates & Project Warranties",
};

export const CONCRETE_SERVICES: ConcreteService[] = [
  {
    id: "concrete-driveways",
    title: "Concrete Driveways",
    shortDescription: "Heavy-duty residential and commercial driveways engineered for North Dakota freeze-thaw durability, heavy vehicle loading, and lasting curb appeal.",
    fullDescription: "A concrete driveway is an enduring investment in your property's value and accessibility. In Fargo, deep sub-zero winters and expansive clay soils demand rigorous subgrade compaction, positive drainage grading, 4,000+ PSI air-entrained mix designs, and structural steel rebar. Stone Creek Concrete LLC handles complete new driveway installations, widening extensions, and careful tear-outs of settled or spalled concrete.",
    recommendedThickness: "5\" - 6\" (designed for vehicular & truck loads)",
    typicalReinforcement: "#4 rebar grid tied on 18\" or 24\" centers",
    idealFinish: "Non-slip medium broom with smooth hand-tooled picture-frame borders",
    features: [
      "Engineered base preparation and mechanical crushed-gravel compaction",
      "Steel rebar grid reinforcement to stop settling and separation",
      "Laser-checked pitch for positive drainage away from foundation and garage",
      "Precision tooled control joints to manage thermal freeze-thaw movement",
      "High-durability air-entrained concrete (5%-7% air content for frost protection)"
    ],
    imageUrl: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1000&q=80",
    category: "residential"
  },
  {
    id: "concrete-patios",
    title: "Concrete Patios",
    shortDescription: "Custom outdoor living spaces tailored to your backyard lifestyle, from clean modern broom finishes to elegant stamped stone textures and fire pit surrounds.",
    fullDescription: "Transform your backyard into an inviting outdoor living sanctuary. Whether you envision a spacious entertainment patio, outdoor dining area, grill station, or fire pit pad, Stone Creek Concrete LLC builds solid, perfectly pitched surfaces. Choose from classic brushed textures, integral color tones, or stamped stone patterns with seamless transitions to your landscaping.",
    recommendedThickness: "4\" with thickened perimeter turn-downs",
    typicalReinforcement: "Steel rebar grid or synthetic macro-fiber reinforcement",
    idealFinish: "Fine broom, stamped slate, or exposed aggregate with protective UV sealer",
    features: [
      "Custom architectural layouts: curved perimeters, geometric steps, and landing transitions",
      "Seamless integration with patio doors, landscape borders, and retaining walls",
      "Optional conduit integration for outdoor lighting and sound systems",
      "Isolation and expansion joints engineered to safeguard foundation walls",
      "Protective acrylic sealers for stain, moisture, and UV resistance"
    ],
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
    category: "residential"
  },
  {
    id: "concrete-steps-stoops",
    title: "Concrete Steps & Stoops",
    shortDescription: "Solid monolithic poured entry stairs and front stoops built with uniform rise/run geometry, non-slip treads, and frost-heave anchoring.",
    fullDescription: "Poured-in-place concrete entry stairs and front stoops provide superior durability compared to hollow or precast units. Stone Creek Concrete LLC anchors steps directly into your foundation or solid footings with rebar dowels, ensuring your steps will not tilt, pull away, or settle over harsh Fargo winters.",
    recommendedThickness: "Solid monolithic pour anchored with frost footings",
    typicalReinforcement: "Structural rebar cage with foundation-pinned dowels",
    idealFinish: "Non-slip safety broom finish with clean bullnose or square safety edges",
    features: [
      "Strict code-compliant rise and run dimensions for safe daily footing",
      "Structural rebar dowels pinned to foundation to prevent frost settling",
      "Traction-textured treads designed for icy North Dakota winter conditions",
      "Rigid formwork producing clean, modern architectural lines"
    ],
    imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80",
    category: "residential"
  },
  {
    id: "concrete-sidewalks-walkways",
    title: "Concrete Sidewalks & Walkways",
    shortDescription: "Safe, smooth, and code-compliant pedestrian walkways connecting entryways, driveways, backyards, and commercial storefronts.",
    fullDescription: "Cracked, sunken, or spalling walkways create hazardous trip points and detract from your property's value. We install code-compliant, properly pitched sidewalks that safely channel rainwater away from your foundation while giving family, guests, and customers comfortable, sure-footed access all year.",
    recommendedThickness: "4\" uniform depth over compacted base",
    typicalReinforcement: "#3 rebar ties and fiber reinforcement",
    idealFinish: "Light-to-medium directional broom finish for slip resistance",
    features: [
      "Trip-hazard elimination and precision subgrade leveling",
      "Seamless transitions to porch stoops, driveway approaches, and curbs",
      "Fargo city sidewalk specifications and ADA compliance",
      "Clean edge tooling and expansion joints to manage thermal movement"
    ],
    imageUrl: "https://images.unsplash.com/photo-1584463699042-3a5fc76402ec?auto=format&fit=crop&w=1000&q=80",
    category: "residential"
  },
  {
    id: "masonry-inlays-decorative-borders",
    title: "Masonry Inlays & Decorative Borders",
    shortDescription: "Artisan brick and natural stone inlays integrated into concrete flatwork, creating distinctive contrast and high-end architectural appeal.",
    fullDescription: "Elevate standard concrete with custom masonry inlays and borders. Stone Creek Concrete LLC embeds pavers, natural stone, or brick banding along driveway edges, patio perimeters, and entryway pathways to deliver timeless elegance and bespoke curb appeal.",
    recommendedThickness: "Engineered flush with surrounding concrete flatwork",
    typicalReinforcement: "Reinforced mortar bed and mechanical anchors",
    idealFinish: "Flush architectural contrast with sealed masonry joints",
    features: [
      "Custom brick, paver, or natural stone border combinations",
      "Flush transitions that avoid trip hazards or snowplow catches",
      "Reinforced bedding to prevent inlay shifting or loose stones",
      "UV-stable joint sealants that lock out moisture and weeds"
    ],
    imageUrl: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=1000&q=80",
    category: "decorative"
  },
  {
    id: "concrete-slabs-foundations",
    title: "Concrete Slabs & Foundations",
    shortDescription: "Structural monolithic floating slabs, shop floors, and foundation additions engineered for Red River Valley ground conditions.",
    fullDescription: "From detached garages and hobby shops to pole barn slabs and equipment pads, your building requires an unyielding, level foundation. We design and pour custom slabs with thickened perimeter footings, heavy vapor barriers, and load-rated rebar matrices engineered specifically for your building's structural specifications.",
    recommendedThickness: "4\" to 8\" based on structure and machinery loads",
    typicalReinforcement: "Heavy-gauge #4 or #5 rebar grid with thickened edge footings",
    idealFinish: "Flat steel machine trowel or non-slip light texture",
    features: [
      "Thickened perimeter turn-downs for heavy perimeter wall bearing",
      "Laser-level screeding ensuring flat, level slab tolerances",
      "Cast-in-place anchor bolts aligned with building framing plans",
      "High-grade vapor barrier preventing ground moisture and dampness"
    ],
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=1000&q=80",
    category: "structural"
  },
  {
    id: "permeable-pavers",
    title: "Permeable Pavers",
    shortDescription: "Eco-friendly permeable paving systems designed for superior stormwater management, natural drainage, and zero puddle buildup.",
    fullDescription: "Permeable pavers provide an environmentally responsible, attractive paving alternative for driveways, patios, and walkways. By allowing rainwater and snowmelt to filter naturally into an open-graded aggregate base, permeable systems eliminate standing water, recharge local groundwater, and reduce storm sewer runoff.",
    recommendedThickness: "Deep open-graded crushed stone base with permeable bedding",
    typicalReinforcement: "Geotextile fabric separation and interlocking stone matrix",
    idealFinish: "Architectural permeable pavers with clean aggregate joint infill",
    features: [
      "Rapid surface water infiltration preventing puddle formation and ice sheets",
      "Heavy load capability suitable for passenger vehicles and light trucks",
      "Reduces runoff burden on municipal stormwater systems",
      "Modern aesthetic with diverse color, texture, and pattern choices"
    ],
    imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80",
    category: "decorative"
  },
  {
    id: "exposed-pea-gravel",
    title: "Exposed Pea Gravel & Aggregates",
    shortDescription: "Natural stone aggregate finishes delivering rugged durability, rich multi-toned texture, and superior all-weather slip resistance.",
    fullDescription: "Exposed aggregate concrete reveals the natural stones and pea gravel embedded within the mix, creating a textured, rustic finish that is as tough as it is beautiful. Highly resistant to freeze-thaw cycles and naturally skid-resistant, exposed aggregate is ideal for driveways, pool decks, patios, and entryway paths.",
    recommendedThickness: "4\" to 5\" air-entrained specialty mix",
    typicalReinforcement: "Continuous steel rebar grid with fiber additives",
    idealFinish: "Precision-washed exposed stone with clear protective solvent sealer",
    features: [
      "Natural multi-toned stone appearance that complements landscape elements",
      "High traction surface that prevents slipping during wet or snowy weather",
      "Superior resistance to surface wear and vehicular traffic",
      "Enhanced with deep-penetrating sealers to highlight rich natural stone colors"
    ],
    imageUrl: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1000&q=80",
    category: "decorative"
  },
  {
    id: "foundation-repair-maintenance",
    title: "Foundation Repair & Concrete Maintenance",
    shortDescription: "Structural crack repair, slab stabilization, subgrade remediation, and preventative maintenance extending concrete life.",
    fullDescription: "Prompt concrete maintenance prevents small hairline cracks from turning into costly structural failures. Stone Creek Concrete LLC provides professional concrete repair, crack sealing, surface remediation, and targeted replacement to restore the structural safety and appearance of your home or commercial property.",
    recommendedThickness: "Matched to structural engineering specifications",
    typicalReinforcement: "Epoxy-grouted rebar dowels and structural anchors",
    idealFinish: "Color and texture matched to existing structure",
    features: [
      "Precision structural crack routing and commercial polyurethane/epoxy sealing",
      "Subgrade void correction and water drainage redirection",
      "Protection of building foundation from frost-heave and hydrostatic pressure",
      "Preventative commercial sealing extending concrete lifespan"
    ],
    imageUrl: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000&q=80",
    category: "structural"
  },
  {
    id: "commercial-concrete",
    title: "Commercial Concrete Flatwork",
    shortDescription: "Commercial flatwork, dumpster pads, loading approaches, and construction planning built to commercial specifications and deadlines.",
    fullDescription: "Commercial projects require strict adherence to engineering drawings, coordination with project managers, and high-strength concrete capable of handling commercial snowplows and continuous truck traffic. Stone Creek Concrete LLC delivers dependable commercial flatwork, building maintenance, and construction planning with clear communication.",
    recommendedThickness: "6\" to 8\" high-strength commercial design (4,500+ PSI)",
    typicalReinforcement: "#4 or #5 rebar grid with dowel baskets and keyed joints",
    idealFinish: "Heavy-duty commercial broom or hardened machine trowel",
    features: [
      "Heavy reinforced dumpster pads and loading dock approaches",
      "Commercial parking lots, aprons, curbs, and ADA accessibility ramps",
      "High early-strength mix options for minimized business downtime",
      "Full OSHA-compliant job site safety and certified crew management"
    ],
    imageUrl: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1000&q=80",
    category: "commercial"
  }
];

export const GALLERY_PROJECTS: GalleryProject[] = [
  {
    id: "proj-1",
    title: "Reinforced 3-Stall Driveway & Approach",
    category: "Driveways",
    location: "1760 42nd St S Area, Fargo, ND",
    description: "Complete tear-out of settled asphalt replaced with 5.5-inch 4,500 PSI air-entrained concrete, heavy rebar grid, and hand-tooled control joints.",
    specs: "980 sq ft • 5.5\" Thickness • #4 Rebar on 18\" centers",
    finishType: "Non-slip broom with 4\" smooth picture-frame borders",
    imageUrl: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "proj-2",
    title: "Custom Ashlar Slate Stamped Patio",
    category: "Decorative Concrete",
    location: "South Fargo, ND",
    description: "Expansive outdoor entertainment patio with integrated charcoal border, stamped ashlar slate texture, and sealed with a UV-resistant protective coat.",
    specs: "640 sq ft • 4\" Slab • Dual-tone charcoal & slate pigment",
    finishType: "Deep slate stamp texture with protective gloss sealer",
    imageUrl: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "proj-3",
    title: "Backyard Curved Living Patio & Fire Pit Ring",
    category: "Patios",
    location: "Fargo, ND",
    description: "Curved outdoor living area poured with seamless transition to natural grass and recessed fire pit pad with dedicated sub-base drainage.",
    specs: "520 sq ft • 4\" Monolithic with perimeter footing",
    finishType: "Directional fine broom with smooth perimeter border",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "proj-4",
    title: "Monolithic Heated Shop Floor & Apron",
    category: "Foundations",
    location: "West Fargo Metro Area, ND",
    description: "Heavy-duty 6\" slab designed for automotive lifts, featuring 15-mil vapor barrier, rebar reinforcement chairs, and precision laser screed finish.",
    specs: "1,800 sq ft • 6\" 5,000 PSI • Perimeter turn-down footings",
    finishType: "Hard steel machine trowel with densifier",
    imageUrl: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "proj-5",
    title: "Residential Front Entry Walkway & Step Landing",
    category: "Sidewalks",
    location: "North Fargo, ND",
    description: "Modern rectilinear front walkway connecting driveway to porch stoop, engineered with positive 1/4\" per foot drainage pitch away from siding.",
    specs: "240 sq ft • 4\" Thickness • Clean sawed joints",
    finishType: "Medium broom finish for winter slip-resistance",
    imageUrl: "https://images.unsplash.com/photo-1584463699042-3a5fc76402ec?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "proj-6",
    title: "Commercial Apron & Heavy Loading Pad",
    category: "Commercial Projects",
    location: "Fargo Industrial District, ND",
    description: "High-early commercial flatwork designed for daily freight and delivery trucks, complete with dowel baskets and heavy sub-base compaction.",
    specs: "2,400 sq ft • 8\" Heavy Commercial Mix • #5 Rebar grid",
    finishType: "Industrial heavy broom finish",
    imageUrl: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "proj-7",
    title: "Detached Garage Slab with Thickened Perimeter",
    category: "Foundations",
    location: "Fargo, ND",
    description: "Floating monolithic slab for detached 2-car garage with thickened perimeter grade beam and anchor bolts set to framing specifications.",
    specs: "576 sq ft • 5\" Core with 12\" Thickened Edge",
    finishType: "Steel trowel finish with smooth border",
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "proj-8",
    title: "Decorative Stamped Border Driveway Extension",
    category: "Driveways",
    location: "Fargo, ND",
    description: "Driveway widening project integrating an 8-foot parking stall extension bordered by a dark bronze stamped slate decorative band.",
    specs: "420 sq ft • 5\" Air-Entrained Mix • Tied to existing slab",
    finishType: "Combination broom center with stamped decorative border",
    imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80"
  }
];

export const TESTIMONIALS_SAMPLE: TestimonialItem[] = [
  {
    id: "test-1",
    clientName: "Mark R.",
    location: "Fargo, ND",
    projectType: "Driveway Replacement & Approach",
    comment: "Stone Creek Concrete did an outstanding job on our driveway. The crew arrived on time, prepared the base thoroughly, and the finish looks clean and razor sharp. High level of professionalism and integrity throughout.",
    rating: 5
  },
  {
    id: "test-2",
    clientName: "Sarah & David T.",
    location: "South Fargo, ND",
    projectType: "Stamped Concrete Patio & Steps",
    comment: "From the initial consultation to the final sealing, communication was straightforward and professional. The stamped patio and entry steps transformed our home. Truly quality craftsmanship with durable materials.",
    rating: 5
  },
  {
    id: "test-3",
    clientName: "Brian K.",
    location: "West Fargo, ND",
    projectType: "Shop Floor & Equipment Slab",
    comment: "Poured a 1,200 sq ft heated shop slab. The floor is dead level, the saw cuts are straight, and their attention to the slope at the overhead doors was spot on. Highly recommend their skilled team.",
    rating: 5
  }
];

export const FAQS = [
  {
    q: "Why is concrete installation unique in Fargo, North Dakota?",
    a: "Fargo experiences extreme seasonal temperature swings, from -30°F in winter to over 90°F in summer, alongside high-shrinkage Red River Valley clay soils. Proper concrete installation requires excavating unstable clay, compacting a clean crushed gravel base, pouring a 4,000+ PSI air-entrained mix (5%-7% microscopic air voids for freeze-thaw relief), steel rebar reinforcement, and intentional expansion joints to prevent frost-heave damage."
  },
  {
    q: "What concrete services does Stone Creek Concrete LLC provide?",
    a: "We provide comprehensive residential and commercial concrete solutions across Fargo and surrounding areas: concrete driveways, patios, steps and stoops, sidewalks and walkways, masonry inlays, concrete slabs and foundations, permeable pavers, exposed pea gravel, foundation repair, and commercial concrete flatwork."
  },
  {
    q: "Is Stone Creek Concrete LLC licensed, accredited, and insured in North Dakota?",
    a: "Yes. Stone Creek Concrete LLC is a licensed North Dakota contractor (ND Trade License #000046657, active through March 1, 2027), an accredited Better Business Bureau business with an A+ rating (accredited since Oct 2022), and an approved HomeAdvisor Pro with a 5.0 rating. We provide free estimates and project warranties on our work."
  },
  {
    q: "What are your business hours and how do I schedule an estimate?",
    a: "We are open Monday through Saturday from 9:00 AM to 6:00 PM (Closed Sundays). You can request a free on-site estimate by calling our direct Fargo line at (701) 712-0609 or submitting the online quote request form on our website."
  },
  {
    q: "How soon can I walk or drive on my new concrete?",
    a: "Foot traffic is generally safe after 24 to 48 hours depending on temperature and curing conditions. We recommend waiting at least 7 days before parking passenger cars on a new driveway, and 14 to 28 days before parking heavy trucks, RVs, or trailers."
  }
];
