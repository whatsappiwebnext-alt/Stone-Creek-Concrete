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
    imageUrl: "https://stonecreekconcretellc.com/images/gallery/gallery_65.jpg",
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
    imageUrl: "https://stonecreekconcretellc.com/images/gallery/gallery_45.jpg",
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
    imageUrl: "https://stonecreekconcretellc.com/images/gallery/gallery_55.jpg",
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
    imageUrl: "https://stonecreekconcretellc.com/images/gallery/gallery_68.jpg",
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
    imageUrl: "https://stonecreekconcretellc.com/images/gallery/gallery_56.jpg",
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
    imageUrl: "https://stonecreekconcretellc.com/images/gallery/gallery_60.jpg",
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
    imageUrl: "https://stonecreekconcretellc.com/images/gallery/gallery_53.jpg",
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
    imageUrl: "https://stonecreekconcretellc.com/images/gallery/gallery_41.jpg",
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
    imageUrl: "https://stonecreekconcretellc.com/images/gallery/gallery_59.jpg",
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
    imageUrl: "https://stonecreekconcretellc.com/images/gallery/gallery_58.jpg",
    category: "commercial"
  }
];

export const GALLERY_PROJECTS: GalleryProject[] = [
  {
    id: "proj-68",
    title: "Residential Entry Sidewalk & Walkway",
    category: "Sidewalks",
    location: "Fargo, ND",
    description: "Clean poured concrete sidewalk connecting driveway to the entryway with smooth hand-tooled picture-frame borders and slip-resistant broom finish.",
    specs: "210 sq ft • 4\" Slab • Air-entrained 4,000 PSI",
    finishType: "Non-slip broom with smooth picture-frame borders",
    imageUrl: "https://stonecreekconcretellc.com/images/gallery/gallery_68.jpg"
  },
  {
    id: "proj-67",
    title: "Reinforced Full Concrete Driveway Replacement",
    category: "Driveways",
    location: "Fargo & West Fargo, ND",
    description: "Full residential driveway replacement built with 5.5-inch 4,500 PSI mix, tied rebar grid, and expansion joints for frost protection.",
    specs: "840 sq ft • 5.5\" Slab • #4 Rebar on 18\" centers",
    finishType: "Broom finish with hand-tooled control joints",
    imageUrl: "https://stonecreekconcretellc.com/images/gallery/gallery_67.jpg"
  },
  {
    id: "proj-66",
    title: "Curved Landscape Walkway & Approach",
    category: "Sidewalks",
    location: "Fargo, ND",
    description: "Custom-curved pedestrian walkway with continuous smooth finish and positive 1/4\" per foot slope away from foundation.",
    specs: "180 sq ft • 4\" Slab • Positive drainage pitch",
    finishType: "Fine directional broom texture",
    imageUrl: "https://stonecreekconcretellc.com/images/gallery/gallery_66.jpg"
  },
  {
    id: "proj-65",
    title: "Double-Stall Concrete Driveway & Apron",
    category: "Driveways",
    location: "Fargo, ND",
    description: "Heavy-duty driveway installation engineered for harsh North Dakota winter freeze-thaw cycles and heavy vehicle parking.",
    specs: "720 sq ft • 5.5\" Slab • Rebar reinforced",
    finishType: "Light broom finish with tooled edges",
    imageUrl: "https://stonecreekconcretellc.com/images/gallery/gallery_65.jpg"
  },
  {
    id: "proj-64",
    title: "Front Porch Approach Sidewalk",
    category: "Sidewalks",
    location: "Fargo, ND",
    description: "Precision-leveled sidewalk poured flush with existing front stoop and garage approach to permanently eliminate trip hazards.",
    specs: "160 sq ft • 4\" Thickness • Clean isolation joints",
    finishType: "Non-skid safety broom",
    imageUrl: "https://stonecreekconcretellc.com/images/gallery/gallery_64.jpg"
  },
  {
    id: "proj-63",
    title: "Metro Area Commercial Flatwork & Entry",
    category: "Commercial Projects",
    location: "Fargo & Moorhead, ND",
    description: "Commercial entrance flatwork built with high-early strength mix, ADA compliance, and heavy pedestrian traffic durability.",
    specs: "1,150 sq ft • 6\" Heavy Mix • Tied rebar grid",
    finishType: "Industrial broom finish",
    imageUrl: "https://stonecreekconcretellc.com/images/gallery/gallery_63.jpg"
  },
  {
    id: "proj-62",
    title: "Neighborhood Sidewalk Replacement",
    category: "Sidewalks",
    location: "Fargo, ND",
    description: "City-compliant sidewalk section poured over mechanically compacted crushed gravel sub-base for frost heave protection.",
    specs: "280 sq ft • 4\" Uniform depth • ADA compliant",
    finishType: "Medium directional broom",
    imageUrl: "https://stonecreekconcretellc.com/images/gallery/gallery_62.jpg"
  },
  {
    id: "proj-61",
    title: "3-Stall Garage Driveway & Extension",
    category: "Driveways",
    location: "West Fargo, ND",
    description: "Expansive 3-stall driveway with dedicated parking pad extension, straight control cuts, and laser-checked drainage pitch.",
    specs: "1,050 sq ft • 5\" Core • Rebar reinforced",
    finishType: "Broom finish with decorative picture-frame border",
    imageUrl: "https://stonecreekconcretellc.com/images/gallery/gallery_61.jpg"
  },
  {
    id: "proj-60",
    title: "Engineered Concrete Foundation Walls & Footings",
    category: "Foundations & Slabs",
    location: "Fargo, ND",
    description: "Structural foundation footings and stem walls poured with laser precision and tied steel cages for maximum load support.",
    specs: "Engineered specs • Continuous footing with rebar cage",
    finishType: "Structural formwork smooth finish",
    imageUrl: "https://stonecreekconcretellc.com/images/gallery/gallery_60.jpg"
  },
  {
    id: "proj-59",
    title: "Residential Home Foundation Prep & Pour",
    category: "Foundations & Slabs",
    location: "Fargo, ND",
    description: "Deep frost foundation pour designed for Fargo expansive clay soil conditions, preventing settling and moisture intrusion.",
    specs: "Monolithic frost footings • Pinned foundation dowels",
    finishType: "Structural foundation concrete",
    imageUrl: "https://stonecreekconcretellc.com/images/gallery/gallery_59.jpg"
  },
  {
    id: "proj-58",
    title: "Commercial Equipment Slab & Apron",
    category: "Foundations & Slabs",
    location: "Fargo, ND",
    description: "Heavy-duty monolithic slab designed for machinery, vehicle lifts, and high structural load capacities.",
    specs: "1,400 sq ft • 6\" 4,500 PSI • Dowel baskets",
    finishType: "Power-troweled smooth hard finish",
    imageUrl: "https://stonecreekconcretellc.com/images/gallery/gallery_58.jpg"
  },
  {
    id: "proj-57",
    title: "Driveway Tear-Out & Modern Replacement",
    category: "Driveways",
    location: "Fargo, ND",
    description: "Removal of cracked, sunken concrete replaced with solid reinforced concrete flatwork and positive yard drainage.",
    specs: "680 sq ft • 5\" Air-Entrained 4,000 PSI",
    finishType: "Broom finish with hand-tooled margins",
    imageUrl: "https://stonecreekconcretellc.com/images/gallery/gallery_57.jpg"
  },
  {
    id: "proj-56",
    title: "Custom Flatwork & Decorative Border Detail",
    category: "Commercial Projects",
    location: "Fargo & West Fargo, ND",
    description: "Detailed concrete work with precision borders, clean grade adjustments, and seamless curb transitions.",
    specs: "450 sq ft • 5\" Slab • Rebar grid",
    finishType: "Smooth hand-tooled picture frame",
    imageUrl: "https://stonecreekconcretellc.com/images/gallery/gallery_56.jpg"
  },
  {
    id: "proj-55",
    title: "Monolithic Poured Front Entry Steps",
    category: "Steps & Stoops",
    location: "Fargo, ND",
    description: "Solid monolithic concrete entry stairs anchored into the foundation with rebar dowels to permanently prevent settling.",
    specs: "3-Riser Monolithic Pour • Frost-pinned dowels",
    finishType: "Non-slip safety tread broom finish",
    imageUrl: "https://stonecreekconcretellc.com/images/gallery/gallery_55.jpg"
  },
  {
    id: "proj-54",
    title: "Custom Tiered Concrete Step Landing",
    category: "Steps & Stoops",
    location: "West Fargo, ND",
    description: "Uniform rise and run entry steps providing safe, sturdy footing in freezing winter rain and snow conditions.",
    specs: "Uniform 7\" rise / 11\" run • Steel reinforced",
    finishType: "Textured non-skid treads",
    imageUrl: "https://stonecreekconcretellc.com/images/gallery/gallery_54.jpg"
  },
  {
    id: "proj-53",
    title: "Storage Shed & Detached Garage Slab",
    category: "Foundations & Slabs",
    location: "Fargo, ND",
    description: "Floating slab with thickened edges and integrated vapor barrier, ready for timber framing and storage.",
    specs: "400 sq ft • 4\" Interior / 10\" Thickened Edge",
    finishType: "Smooth troweled finish",
    imageUrl: "https://stonecreekconcretellc.com/images/gallery/gallery_53.jpg"
  },
  {
    id: "proj-52",
    title: "Metro Residential Paving & Approach",
    category: "Driveways",
    location: "Fargo & Moorhead, ND",
    description: "Longitudinal driveway and entryway paving with carefully formed expansion joints to protect existing structures.",
    specs: "780 sq ft • 5\" Thickness • Air-entrained mix",
    finishType: "Medium non-slip broom",
    imageUrl: "https://stonecreekconcretellc.com/images/gallery/gallery_52.jpg"
  },
  {
    id: "proj-51",
    title: "Outdoor Living Space & Walkway Integration",
    category: "Patios",
    location: "Fargo & West Fargo, ND",
    description: "Backyard entertaining space poured with clean transitions into garden walkways and perimeter turf.",
    specs: "540 sq ft • 4\" Slab • Fiber reinforced",
    finishType: "Light broom finish with smooth borders",
    imageUrl: "https://stonecreekconcretellc.com/images/gallery/gallery_51.jpg"
  },
  {
    id: "proj-50",
    title: "Municipal & Residential Sidewalk Installation",
    category: "Sidewalks",
    location: "Fargo, ND",
    description: "Pedestrian sidewalk construction featuring deep gravel compaction, 4\" uniform pour, and hand-tooled control joints.",
    specs: "320 sq ft • 4\" Depth • Straight tooled joints",
    finishType: "Standard slip-resistant broom",
    imageUrl: "https://stonecreekconcretellc.com/images/gallery/gallery_50.jpg"
  },
  {
    id: "proj-49",
    title: "Driveway Replacement & Garage Threshold",
    category: "Driveways",
    location: "Fargo, ND",
    description: "Complete sub-base re-grading and concrete pour to handle snowplow weight and eliminate water pooling near garage threshold.",
    specs: "820 sq ft • 5.5\" Thickness • Heavy rebar",
    finishType: "Traction broom finish",
    imageUrl: "https://stonecreekconcretellc.com/images/gallery/gallery_49.jpg"
  },
  {
    id: "proj-48",
    title: "Backyard Patio Living Project",
    category: "Patios",
    location: "Fargo & West Fargo, ND",
    description: "Spacious backyard patio designed for family gatherings, grilling, and outdoor patio furniture.",
    specs: "480 sq ft • 4\" Slab • Expansion joints",
    finishType: "Directional broom finish",
    imageUrl: "https://stonecreekconcretellc.com/images/gallery/gallery_48.jpg"
  },
  {
    id: "proj-47",
    title: "Patio Step-Down & Foundation Stoop",
    category: "Steps & Stoops",
    location: "Fargo, ND",
    description: "Custom poured transition steps from patio sliding glass doors down to the main concrete outdoor living surface.",
    specs: "Solid monolithic concrete • Pinned to home footing",
    finishType: "Non-slip surface with smooth bullnose edges",
    imageUrl: "https://stonecreekconcretellc.com/images/gallery/gallery_47.jpg"
  },
  {
    id: "proj-46",
    title: "Heavy Equipment Shop Slab",
    category: "Foundations & Slabs",
    location: "Fargo Industrial Area, ND",
    description: "High-PSI interior concrete slab with vapor retarder and rebar chairs, engineered for vehicle storage and heavy tools.",
    specs: "1,200 sq ft • 6\" 5,000 PSI • Machine troweled",
    finishType: "Hard machine trowel finish",
    imageUrl: "https://stonecreekconcretellc.com/images/gallery/gallery_46.jpg"
  },
  {
    id: "proj-45",
    title: "Backyard Entertainment Concrete Patio",
    category: "Patios",
    location: "Fargo, ND",
    description: "Outdoor patio slab created with positive slope for rain drainage away from foundation, providing a solid surface for furniture.",
    specs: "600 sq ft • 4\" Thickness • Rebar grid",
    finishType: "Medium broom with tooled picture-frame edge",
    imageUrl: "https://stonecreekconcretellc.com/images/gallery/gallery_45.jpg"
  },
  {
    id: "proj-44",
    title: "Utility Pad & Concrete Equipment Slab",
    category: "Foundations & Slabs",
    location: "Fargo, ND",
    description: "Level reinforced slab for AC units, backup generators, and trash container pads, engineered to resist settling.",
    specs: "240 sq ft • 5\" Slab • Rebar reinforced",
    finishType: "Light broom finish",
    imageUrl: "https://stonecreekconcretellc.com/images/gallery/gallery_44.jpg"
  },
  {
    id: "proj-43",
    title: "Backyard Living Patio Behind House",
    category: "Patios",
    location: "Fargo, ND",
    description: "Classic residential patio providing ample open space for outdoor dining, fire pits, and family entertainment.",
    specs: "550 sq ft • 4\" Slab • 4,000 PSI air-entrained",
    finishType: "Broom finish with smooth border",
    imageUrl: "https://stonecreekconcretellc.com/images/gallery/gallery_43.jpg"
  },
  {
    id: "proj-42",
    title: "Full Perimeter Backyard Patio Slab",
    category: "Patios",
    location: "West Fargo, ND",
    description: "Large patio flatwork poured directly against backyard landscaping with clean control joints to prevent irregular cracking.",
    specs: "620 sq ft • 4\" Slab • Fiber reinforced",
    finishType: "Uniform broom finish",
    imageUrl: "https://stonecreekconcretellc.com/images/gallery/gallery_42.jpg"
  },
  {
    id: "proj-41",
    title: "Outdoor Lounge Patio & Grill Station",
    category: "Patios",
    location: "Fargo, ND",
    description: "Low-maintenance concrete patio designed for outdoor cooking, lounge seating, and year-round outdoor use.",
    specs: "480 sq ft • 4\" Thickness • Hand-tooled borders",
    finishType: "Light broom finish with framed border",
    imageUrl: "https://stonecreekconcretellc.com/images/gallery/gallery_41.jpg"
  },
  {
    id: "proj-40",
    title: "Solid Poured Entry Stoop & Footings",
    category: "Steps & Stoops",
    location: "Fargo, ND",
    description: "Heavy-duty entry stoop poured monolithically with frost footings to resist Red River Valley clay ground heave.",
    specs: "Monolithic solid pour • Rebar pinned to foundation",
    finishType: "Non-slip safety broom",
    imageUrl: "https://stonecreekconcretellc.com/images/gallery/gallery_40.jpg"
  },
  {
    id: "proj-39",
    title: "Fargo & West Fargo Residential Paving Project",
    category: "Driveways",
    location: "Fargo & West Fargo, ND",
    description: "Comprehensive driveway approach and entry flatwork with clean lines, smooth edges, and exceptional curing quality.",
    specs: "900 sq ft • 5\" Slab • Rebar grid on 18\" centers",
    finishType: "Architectural broom finish with tooled joints",
    imageUrl: "https://stonecreekconcretellc.com/images/gallery/gallery_39.jpg"
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
