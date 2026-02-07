// ─── Combo Page Content Generator ────────────────────────────────────────────
// Generates unique, deterministic content for each suburb + service combination.
// Used by suburb-service combo pages (1200+ pages).
// All content is Australian English. Same inputs always produce the same output.

export interface ComboContent {
  intro: string;
  benefits: string[];
  faqs: { question: string; answer: string }[];
}

// ─── Deterministic Hash Function ─────────────────────────────────────────────
// Simple string hash that produces a consistent positive integer for any input.
// This ensures the same suburb+service combination always selects the same
// template variants, making output fully deterministic for prerendering.

function hashString(str: string): number {
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) + hash + str.charCodeAt(i)) | 0;
  }
  return Math.abs(hash);
}

function pick<T>(items: T[], hash: number, offset: number = 0): T {
  return items[(hash + offset) % items.length];
}

// ─── Service-Specific Knowledge ──────────────────────────────────────────────
// Each service has unique terminology, treatment details, and selling points
// that make the generated content feel expert-level rather than generic.

interface ServiceContext {
  treatmentMethods: string[];
  riskFactors: string[];
  urgencyPhrases: string[];
  inspectionDetails: string[];
  preventionTips: string[];
  certifications: string[];
  responseTime: string;
  warrantyInfo: string;
}

const SERVICE_CONTEXTS: Record<string, ServiceContext> = {
  "termite-inspection": {
    treatmentMethods: [
      "thermal imaging cameras",
      "Termatrac T3i radar detection",
      "moisture meters and conductivity probes",
      "borescope visual inspection",
    ],
    riskFactors: [
      "mature trees within 50 metres of the building",
      "damp subfloor areas or poor drainage",
      "timber-to-ground contact around the property",
      "previous termite history in the neighbourhood",
    ],
    urgencyPhrases: [
      "Early detection can save you tens of thousands of dollars in structural repairs",
      "One in three Sydney homes will experience termite activity at some point",
      "Termites can cause significant structural damage before any visible signs appear",
    ],
    inspectionDetails: [
      "full interior, exterior, roof void, and subfloor examination",
      "inspection of fences, retaining walls, garden beds, and outbuildings",
      "assessment of all accessible timber elements throughout the property",
    ],
    preventionTips: [
      "Remove stored timber, cardboard, and cellulose debris from subfloor areas",
      "Ensure drainage directs water away from the building perimeter",
      "Maintain a clear inspection zone of at least 75mm around the building edge",
    ],
    certifications: [
      "Australian Standard AS 4349.3 compliant",
      "fully licensed under NSW Fair Trading",
      "AEPMA-accredited inspectors",
    ],
    responseTime: "within 24 to 48 hours",
    warrantyInfo: "Inspection reports are valid for the date of inspection and include clear recommendations for ongoing monitoring",
  },
  "termite-control": {
    treatmentMethods: [
      "Termidor HE chemical soil barriers",
      "Sentricon Always Active baiting systems",
      "Altriset (chlorantraniliprole) perimeter treatments",
      "Exterra in-ground monitoring and baiting stations",
    ],
    riskFactors: [
      "active termite colonies detected during inspection",
      "previous termite damage or treatment history",
      "high soil moisture levels around the foundations",
      "neighbouring properties with known termite activity",
    ],
    urgencyPhrases: [
      "Active termites require immediate professional treatment to prevent escalating damage",
      "Every week of delay allows termite colonies to consume more structural timber",
      "Swift treatment is essential to protect your home's structural integrity",
    ],
    inspectionDetails: [
      "full assessment of colony size and species identification",
      "mapping of termite entry points and mud leads",
      "evaluation of soil conditions and treatment accessibility",
    ],
    preventionTips: [
      "Maintain your chemical barrier or baiting system according to the warranty schedule",
      "Book annual re-inspections to ensure ongoing protection",
      "Fix any plumbing leaks that create moisture near the foundations",
    ],
    certifications: [
      "licensed to apply Schedule 7 termiticides under NSW regulations",
      "Termidor Accredited Applicator",
      "AEPMA member with full professional indemnity insurance",
    ],
    responseTime: "within 24 hours for active infestations",
    warrantyInfo: "Chemical barriers are backed by warranties of up to 8 years, subject to annual inspections",
  },
  "rodent-control": {
    treatmentMethods: [
      "tamper-proof bait stations with second-generation anticoagulants",
      "mechanical snap traps in sensitive areas",
      "exclusion work including gap sealing and mesh installation",
      "tracking powder in wall cavities and roof voids",
    ],
    riskFactors: [
      "food scraps and pet food left accessible overnight",
      "gaps around pipes, cables, and doorframes wider than 10mm",
      "overgrown vegetation and garden debris against the building",
      "neighbouring construction disturbing established rodent populations",
    ],
    urgencyPhrases: [
      "Rodents can gnaw through electrical wiring, creating a serious fire hazard",
      "A single pair of rats can produce over 1,500 offspring in a year under ideal conditions",
      "Rodent droppings and urine pose genuine health risks including leptospirosis and salmonella",
    ],
    inspectionDetails: [
      "identification of entry points, harbourage areas, and travel routes",
      "assessment of rodent species (Norway rat, roof rat, or house mouse)",
      "evaluation of food sources and environmental attractants",
    ],
    preventionTips: [
      "Store food in sealed containers and clean up scraps immediately",
      "Seal gaps around pipes, cables, and under doors with steel wool and sealant",
      "Trim vegetation and remove garden debris from against the building",
    ],
    certifications: [
      "licensed for rodenticide application under NSW EPA regulations",
      "trained in humane trapping and wildlife-safe practices",
      "compliant with all council pest management guidelines",
    ],
    responseTime: "same-day for urgent rodent sightings",
    warrantyInfo: "Rodent control programs include a service warranty with free follow-up visits within the warranty period",
  },
  "cockroach-treatment": {
    treatmentMethods: [
      "professional gel bait application in harbourage zones",
      "insect growth regulators (IGRs) to break the breeding cycle",
      "residual surface sprays along baseboards and entry points",
      "crack and crevice treatment in kitchens and bathrooms",
    ],
    riskFactors: [
      "shared wall cavities in terraces and apartments",
      "ageing plumbing and drainage providing moisture",
      "food preparation areas with organic build-up",
      "warm, humid conditions in subfloor and roof voids",
    ],
    urgencyPhrases: [
      "Cockroaches contaminate food and surfaces with bacteria including E. coli and Salmonella",
      "German cockroaches can multiply rapidly — a single egg case contains up to 40 nymphs",
      "Cockroach allergens are a leading trigger for asthma, particularly in children",
    ],
    inspectionDetails: [
      "identification of cockroach species and infestation severity",
      "inspection of kitchens, bathrooms, laundries, and subfloor areas",
      "assessment of plumbing fixtures and potential moisture sources",
    ],
    preventionTips: [
      "Wipe down kitchen surfaces and clean under appliances regularly",
      "Fix dripping taps and leaking pipes — cockroaches need water to survive",
      "Seal gaps around plumbing penetrations in walls and floors",
    ],
    certifications: [
      "licensed pesticide applicator under NSW regulations",
      "trained in integrated pest management (IPM) principles",
      "products registered with the Australian Pesticides and Veterinary Medicines Authority (APVMA)",
    ],
    responseTime: "same-day service available",
    warrantyInfo: "Cockroach treatments are backed by a service warranty with free retreatment if cockroaches return within the warranty period",
  },
  "spider-treatment": {
    treatmentMethods: [
      "residual surface spray to external perimeters and eaves",
      "web removal and direct treatment of harbourage areas",
      "roof void and subfloor dusting for long-lasting protection",
      "garden and rockery treatment targeting ground-dwelling species",
    ],
    riskFactors: [
      "gardens with dense ground cover, mulch, and rockeries",
      "external lighting that attracts insects and, in turn, spiders",
      "cluttered storage areas in garages and sheds",
      "proximity to bushland or parks with established spider populations",
    ],
    urgencyPhrases: [
      "Sydney is home to venomous species including funnel-webs and redbacks",
      "Children and pets are particularly vulnerable to spider bites in garden and play areas",
      "Professional treatment significantly reduces the risk of dangerous spider encounters around your home",
    ],
    inspectionDetails: [
      "identification of spider species and risk level",
      "inspection of gardens, eaves, fences, letterboxes, and outdoor furniture",
      "assessment of lighting, vegetation, and harbourage conditions",
    ],
    preventionTips: [
      "Wear gloves when gardening and check shoes left outside",
      "Reduce outdoor lighting or switch to warm-toned LEDs that attract fewer insects",
      "Keep garden beds, mulch, and compost bins away from external walls",
    ],
    certifications: [
      "licensed and experienced in treating venomous Australian species",
      "products safe for use around children and pets when dry",
      "AEPMA-accredited with up-to-date species identification training",
    ],
    responseTime: "same-day for venomous spider sightings",
    warrantyInfo: "Spider treatments include a warranty period with free retreatment if activity persists",
  },
  "ant-control": {
    treatmentMethods: [
      "liquid and gel bait formulations targeting the colony",
      "non-repellent perimeter sprays that ants carry back to the nest",
      "granular baits for garden and path treatments",
      "direct nest injection for large established colonies",
    ],
    riskFactors: [
      "pavers, garden edging, and retaining walls providing harbourage",
      "sweet or protein food sources left accessible",
      "established ant trails along building foundations",
      "moisture around air conditioning units, taps, and garden irrigation",
    ],
    urgencyPhrases: [
      "Some ant species can cause damage to electrical wiring and building infrastructure",
      "Ant colonies can number in the hundreds of thousands and are difficult to eliminate without professional treatment",
      "DIY sprays often scatter ant colonies, making the problem worse by causing budding",
    ],
    inspectionDetails: [
      "identification of ant species (key for selecting the right bait formulation)",
      "tracing ant trails to locate nest sites and entry points",
      "assessment of food sources and environmental attractants",
    ],
    preventionTips: [
      "Clean up food spills promptly and store sweet foods in sealed containers",
      "Seal cracks and gaps around windows, doors, and pipe penetrations",
      "Trim tree branches and vegetation that touch the building and create ant bridges",
    ],
    certifications: [
      "trained in ant species identification for targeted treatment selection",
      "licensed under NSW Fair Trading for residential and commercial pest control",
      "all products APVMA-registered and applied according to label directions",
    ],
    responseTime: "within 24 to 48 hours",
    warrantyInfo: "Ant treatments include a service warranty — if ants return within the warranty period, we retreat at no charge",
  },
  "flea-treatment": {
    treatmentMethods: [
      "professional-grade surface spray with residual insecticide",
      "insect growth regulators (IGRs) to prevent larvae from developing",
      "targeted treatment of carpets, rugs, soft furnishings, and pet bedding areas",
      "outdoor yard treatment for flea harbourage in grass and sandy soil",
    ],
    riskFactors: [
      "dogs, cats, or other pets in the household",
      "sandy soil and shaded areas in the yard where fleas breed",
      "carpeted floors and soft furnishings that harbour flea eggs and larvae",
      "visiting wildlife such as possums or bandicoots introducing fleas",
    ],
    urgencyPhrases: [
      "Flea bites cause intense itching and can trigger allergic dermatitis in both humans and pets",
      "Flea pupae can remain dormant for months, emerging when they detect vibration and warmth",
      "A thorough professional treatment is essential to break the flea lifecycle",
    ],
    inspectionDetails: [
      "identification of flea species and lifecycle stage",
      "assessment of pet sleeping areas and common harbourage zones",
      "inspection of carpets, subfloor areas, and outdoor environments",
    ],
    preventionTips: [
      "Treat all household pets with a veterinarian-recommended flea prevention product",
      "Vacuum carpets, rugs, and soft furnishings thoroughly and frequently",
      "Wash pet bedding in hot water weekly during flea season",
    ],
    certifications: [
      "licensed for indoor and outdoor insecticide application",
      "products safe for families and pets when used according to label directions",
      "experienced in coordinating treatment with veterinary flea programs",
    ],
    responseTime: "within 24 to 48 hours",
    warrantyInfo: "Flea treatments include a warranty period, with a follow-up visit recommended two weeks after the initial treatment to target emerging pupae",
  },
  "bedbug-treatment": {
    treatmentMethods: [
      "targeted residual spray to bed frames, mattress seams, and harbourage points",
      "professional dust application in cracks, crevices, and electrical fittings",
      "heat treatment for severe infestations",
      "mattress and box spring encasements to trap remaining bedbugs",
    ],
    riskFactors: [
      "recent travel or hotel stays introducing bedbugs in luggage",
      "second-hand furniture or mattresses brought into the home",
      "shared accommodation, backpackers, and high-turnover rental properties",
      "neighbouring apartments in multi-unit buildings",
    ],
    urgencyPhrases: [
      "Bedbugs multiply quickly — a small problem can become a serious infestation within weeks",
      "Bedbug bites cause itchy welts and significant psychological distress",
      "Professional treatment is the only reliable way to eliminate an established bedbug infestation",
    ],
    inspectionDetails: [
      "thorough inspection of mattresses, bed frames, headboards, and bedside furniture",
      "checking curtains, skirting boards, picture frames, and electrical fittings",
      "identification of harbourage sites and assessment of infestation severity",
    ],
    preventionTips: [
      "Inspect luggage carefully after travelling and wash clothing in hot water",
      "Use mattress encasements to create a barrier against bedbugs",
      "Avoid purchasing second-hand mattresses or upholstered furniture",
    ],
    certifications: [
      "licensed and trained in bedbug-specific treatment protocols",
      "experienced with both chemical and heat treatment approaches",
      "AEPMA-accredited with ongoing professional development in bedbug management",
    ],
    responseTime: "within 24 hours — we understand the urgency",
    warrantyInfo: "Bedbug treatments typically require 2-3 visits spaced two weeks apart, all included in the quoted price, with a warranty against recurrence",
  },
  "wasp-removal": {
    treatmentMethods: [
      "direct nest treatment with professional knockdown insecticide",
      "removal of accessible nests after treatment",
      "residual spray to the nest site to prevent rebuilding",
      "full protective equipment for safe, close-range treatment",
    ],
    riskFactors: [
      "eaves, pergolas, and undercover areas where wasps build nests",
      "wall cavities and roof voids accessible through gaps in the building",
      "garden sheds, letterboxes, and outdoor furniture harbourage",
      "food and drink left outdoors attracting foraging wasps",
    ],
    urgencyPhrases: [
      "Wasp stings can cause severe allergic reactions including anaphylaxis",
      "Disturbing a wasp nest without proper equipment is extremely dangerous",
      "Professional removal eliminates the risk of multiple stings from an agitated colony",
    ],
    inspectionDetails: [
      "identification of wasp species (paper wasps, European wasps, or mud-daubers)",
      "location and assessment of all nests on the property",
      "evaluation of risk to occupants, children, and pets",
    ],
    preventionTips: [
      "Seal gaps and openings around the roofline, eaves, and wall cavities",
      "Keep outdoor food and drinks covered, especially sweet beverages",
      "Check eaves, pergolas, and sheds regularly for early-stage nest construction",
    ],
    certifications: [
      "licensed for the application of aerosol knockdown insecticides",
      "equipped with full protective suits for safe nest removal",
      "experienced in identifying and treating all Sydney wasp species",
    ],
    responseTime: "same-day for active wasp nests near living or high-traffic areas",
    warrantyInfo: "Treated nests are guaranteed not to reactivate — if wasps rebuild in the same location, we retreat free of charge",
  },
  "silverfish-control": {
    treatmentMethods: [
      "residual surface spray in wardrobes, bookcases, and storage areas",
      "professional dust application behind skirting boards and in wall cavities",
      "targeted treatment of bathrooms, laundries, and damp areas",
      "crack and crevice treatment around architraves and built-in cupboards",
    ],
    riskFactors: [
      "high humidity in bathrooms, laundries, and poorly ventilated rooms",
      "stored paper, books, cardboard, and linen providing food sources",
      "older homes with plaster walls and timber skirting boards",
      "subfloor dampness creating moisture throughout the home",
    ],
    urgencyPhrases: [
      "Silverfish damage books, documents, clothing, wallpaper, and stored items",
      "Silverfish thrive in humid conditions and can be very difficult to eliminate without professional help",
      "A professional treatment targets silverfish at every life stage for complete control",
    ],
    inspectionDetails: [
      "assessment of moisture levels and ventilation throughout the property",
      "inspection of wardrobes, bookcases, linen cupboards, and storage areas",
      "identification of silverfish harbourage and feeding sites",
    ],
    preventionTips: [
      "Reduce humidity with exhaust fans, dehumidifiers, and improved ventilation",
      "Store valuable papers and fabrics in sealed plastic containers",
      "Fix leaking taps and pipes and ensure subfloor areas are well ventilated",
    ],
    certifications: [
      "licensed for indoor insecticide and dust application",
      "products selected for safety in wardrobes and living spaces",
      "experienced in treating both residential and commercial storage environments",
    ],
    responseTime: "within 24 to 48 hours",
    warrantyInfo: "Silverfish treatments are backed by a service warranty with free retreatment if activity persists within the warranty period",
  },
  "bird-control": {
    treatmentMethods: [
      "bird netting installation over eaves, balconies, and courtyards",
      "stainless steel bird spike systems on ledges and parapets",
      "visual and auditory deterrent devices",
      "bird wire tension systems for heritage and commercial buildings",
    ],
    riskFactors: [
      "flat ledges, parapets, and air conditioning units providing roosting sites",
      "food waste from restaurants and outdoor dining areas",
      "building design with sheltered overhangs and nesting recesses",
      "proximity to water features, parks, and harbourside environments",
    ],
    urgencyPhrases: [
      "Bird droppings are acidic and cause permanent damage to paintwork, stonework, and roofing",
      "Bird nests in gutters and downpipes cause blockages and water damage",
      "Bird droppings carry diseases including histoplasmosis, psittacosis, and cryptococcosis",
    ],
    inspectionDetails: [
      "identification of bird species and nesting/roosting patterns",
      "assessment of building features and potential deterrent solutions",
      "evaluation of food sources and environmental attractants in the area",
    ],
    preventionTips: [
      "Eliminate food sources including spilled grain, pet food, and open waste bins",
      "Install bird netting or spikes before nesting season begins",
      "Keep gutters clear of nesting material and debris",
    ],
    certifications: [
      "licensed for bird deterrent installation under NSW regulations",
      "experienced with heritage buildings and council-approved methods",
      "AEPMA member with specialist bird management training",
    ],
    responseTime: "within 48 hours for assessment and quoting",
    warrantyInfo: "Bird deterrent installations are covered by a product and workmanship warranty, typically 5 to 10 years depending on the system",
  },
  "pantry-pest-control": {
    treatmentMethods: [
      "identification and removal of infested food products",
      "targeted residual spray to pantry shelving, cracks, and crevices",
      "pheromone monitoring traps for ongoing detection",
      "crack and crevice treatment in food storage areas",
    ],
    riskFactors: [
      "stored grains, cereals, flour, dried fruits, and spices",
      "bulk-purchased food stored for extended periods",
      "inadequate food storage containers allowing pest access",
      "warm kitchen conditions accelerating pantry pest reproduction",
    ],
    urgencyPhrases: [
      "Pantry moths and weevils contaminate food, rendering it unfit for consumption",
      "A single infested product can spread pantry pests throughout your entire kitchen",
      "Professional treatment targets all life stages — eggs, larvae, pupae, and adults",
    ],
    inspectionDetails: [
      "thorough inspection of all stored food products for signs of infestation",
      "assessment of pantry construction, shelving, and sealing",
      "identification of pantry pest species for targeted treatment",
    ],
    preventionTips: [
      "Store dry goods in airtight glass or hard plastic containers",
      "Rotate stored food and use older products first",
      "Clean pantry shelves regularly and vacuum cracks and crevices",
    ],
    certifications: [
      "licensed for food-safe pesticide application",
      "trained in HACCP-compatible pest management for domestic kitchens",
      "all products APVMA-registered and approved for use near food",
    ],
    responseTime: "within 24 to 48 hours",
    warrantyInfo: "Pantry pest treatments include a warranty period with a follow-up inspection to confirm elimination",
  },
  "drain-fly-treatment": {
    treatmentMethods: [
      "biocide foam treatment of drain interiors to remove organic build-up",
      "enzyme-based drain cleaners that destroy larvae and breeding substrate",
      "residual spray application around drain openings and wet areas",
      "drain inspection to identify structural issues contributing to the problem",
    ],
    riskFactors: [
      "organic build-up inside drain pipes and floor wastes",
      "infrequently used drains with stagnant water and biofilm",
      "bathroom and kitchen renovations disturbing drainage systems",
      "damaged or poorly sealed floor waste grates",
    ],
    urgencyPhrases: [
      "Drain flies breed inside the organic sludge lining your pipes — surface cleaning will not fix the problem",
      "Left untreated, drain fly populations can grow rapidly, with adults emerging from multiple drains",
      "Professional drain treatment eliminates the breeding site, not just the adult flies",
    ],
    inspectionDetails: [
      "identification of affected drains using tape testing and visual inspection",
      "assessment of drain condition and organic build-up levels",
      "inspection of floor wastes, shower drains, and seldom-used fixtures",
    ],
    preventionTips: [
      "Run water through all drains weekly, including guest bathrooms and laundry drains",
      "Clean drain grates and remove hair and organic debris regularly",
      "Consider periodic enzyme drain treatments to prevent biofilm accumulation",
    ],
    certifications: [
      "licensed for biocide and insecticide application in wet areas",
      "experienced in diagnosing and treating drain-related pest issues",
      "products safe for all common plumbing materials",
    ],
    responseTime: "within 24 to 48 hours",
    warrantyInfo: "Drain fly treatments include a follow-up visit if flies persist after the initial treatment and recommended standing period",
  },
  "possum-removal": {
    treatmentMethods: [
      "one-way exclusion doors allowing possums to exit but not re-enter",
      "sealing of all entry points with galvanised steel mesh and timber",
      "installation of possum nesting boxes as alternative habitat",
      "roof and soffit repairs to prevent future access",
    ],
    riskFactors: [
      "gaps in roofline, soffit, and fascia boards providing entry points",
      "overhanging tree branches giving possums roof access",
      "older homes with deteriorating timber and gaps in the building envelope",
      "established possum populations in the local area",
    ],
    urgencyPhrases: [
      "Possums in the roof cause noise disturbance, damage to insulation, and odour from urine and droppings",
      "Possums can chew electrical wiring, creating fire risks",
      "Licensed removal must comply with strict NSW National Parks and Wildlife regulations",
    ],
    inspectionDetails: [
      "identification of possum species (brushtail or ringtail)",
      "location of all entry and exit points around the roof and building",
      "assessment of damage to insulation, wiring, and building materials",
    ],
    preventionTips: [
      "Trim tree branches at least 1.5 metres back from the roofline",
      "Repair gaps in soffit, fascia, and roofing before possums move in",
      "Install possum guards on overhead cables and tree trunks near the building",
    ],
    certifications: [
      "licensed under NSW National Parks and Wildlife Act for possum handling",
      "all removal work compliant with OEH guidelines",
      "experienced in humane exclusion methods that satisfy council requirements",
    ],
    responseTime: "within 48 hours for assessment and installation of exclusion devices",
    warrantyInfo: "Possum exclusion work is warranted against re-entry for 12 months, provided tree trimming and maintenance recommendations are followed",
  },
  "bee-removal": {
    treatmentMethods: [
      "safe removal of bee swarms by experienced handlers",
      "extraction of established hives from wall cavities and roof voids",
      "live relocation of swarms to local beekeepers where possible",
      "sealing of entry points after hive removal to prevent re-colonisation",
    ],
    riskFactors: [
      "wall cavities, roof voids, and meter boxes providing hive sites",
      "flowering gardens and water sources attracting swarms",
      "previous hive sites retaining pheromone scent that attracts new swarms",
      "spring and early summer swarming season (September to January)",
    ],
    urgencyPhrases: [
      "Bee stings can cause life-threatening anaphylaxis in allergic individuals",
      "Established hives in wall cavities can damage plaster and attract secondary pests",
      "Swarms can arrive suddenly — prompt professional removal ensures safety",
    ],
    inspectionDetails: [
      "assessment of whether the bees are a transient swarm or an established hive",
      "identification of bee species (European honeybees vs native species)",
      "evaluation of hive size, location, and accessibility for safe removal",
    ],
    preventionTips: [
      "Seal gaps and holes in external walls, especially weep holes and cable penetrations",
      "Have previous hive sites professionally cleaned to remove pheromone residue",
      "Check the property during spring and summer for early signs of hive establishment",
    ],
    certifications: [
      "experienced bee handlers with appropriate protective equipment",
      "committed to live relocation wherever safely possible",
      "licensed for insecticide application when removal is not feasible",
    ],
    responseTime: "same-day for swarms near high-traffic areas, doorways, or where children are present",
    warrantyInfo: "Hive removal includes sealing of the entry point and cleaning of the cavity to reduce the chance of re-colonisation",
  },
  "tick-treatment": {
    treatmentMethods: [
      "residual perimeter spray targeting tick harbourage in vegetation",
      "granular treatment of lawns, garden beds, and bush edges",
      "targeted spray application to fence lines, paths, and pet runs",
      "vegetation management advice to reduce tick habitat",
    ],
    riskFactors: [
      "properties adjacent to bushland, reserves, or national parks",
      "long grass, leaf litter, and dense vegetation in the yard",
      "native wildlife (bandicoots, possums) carrying ticks through the property",
      "humid coastal and near-bushland environments",
    ],
    urgencyPhrases: [
      "The Australian paralysis tick can cause life-threatening illness in pets and serious reactions in humans",
      "Tick-borne diseases and allergic reactions, including mammalian meat allergy, are an increasing concern",
      "Professional yard treatment significantly reduces tick encounters for your family and pets",
    ],
    inspectionDetails: [
      "assessment of vegetation, leaf litter, and wildlife activity on the property",
      "identification of tick species and risk factors specific to the location",
      "evaluation of pet areas, children's play zones, and high-traffic garden paths",
    ],
    preventionTips: [
      "Keep lawns short and remove leaf litter from garden beds and fence lines",
      "Create gravel or mulch barriers between bushland and living areas",
      "Check pets and family members for ticks after time spent outdoors",
    ],
    certifications: [
      "licensed for outdoor insecticide application under NSW regulations",
      "trained in tick species identification and risk assessment",
      "products selected for efficacy against the Australian paralysis tick",
    ],
    responseTime: "within 24 to 48 hours",
    warrantyInfo: "Tick treatments provide residual protection for several weeks, with seasonal top-up treatments recommended in high-risk areas",
  },
  "mite-control": {
    treatmentMethods: [
      "targeted residual spray for bird mite and rodent mite infestations",
      "dust application in roof voids, wall cavities, and subfloor areas",
      "identification and removal of mite source (bird nests, rodent harbourage)",
      "treatment of soft furnishings, bedding areas, and affected rooms",
    ],
    riskFactors: [
      "bird nests in the roof void, eaves, or air conditioning ducts",
      "recent removal of birds or rodents leaving mites without a host",
      "old nesting material left in place after birds have departed",
      "poultry or aviaries near the dwelling",
    ],
    urgencyPhrases: [
      "Bird mites will bite humans when their bird host leaves, causing intense itching and discomfort",
      "Mite infestations can be extremely distressing and difficult to self-treat",
      "Professional treatment must address both the mites and their source to achieve lasting results",
    ],
    inspectionDetails: [
      "identification of mite species (bird mites, rodent mites, or dust mites)",
      "inspection of roof void, eaves, and external areas for bird nests",
      "assessment of rodent activity that may be the mite source",
    ],
    preventionTips: [
      "Remove old bird nests from roof voids, eaves, and air conditioning systems",
      "Install bird-proofing to prevent nesting near the building",
      "Address rodent issues promptly, as rodent mites can transfer to human occupants",
    ],
    certifications: [
      "licensed for indoor and roof void insecticide application",
      "experienced in diagnosing mite species for targeted treatment",
      "AEPMA-accredited with specialist training in mite management",
    ],
    responseTime: "within 24 hours — we understand how distressing mite infestations can be",
    warrantyInfo: "Mite treatments include a follow-up visit to confirm elimination and re-treat if necessary",
  },
  "general-pest-control": {
    treatmentMethods: [
      "internal spray and gel bait application for cockroaches and silverfish",
      "external perimeter spray targeting spiders, ants, and crawling insects",
      "roof void dusting for long-lasting protection against a range of pests",
      "web removal from eaves, windows, and outdoor areas",
    ],
    riskFactors: [
      "seasonal changes driving pests indoors for shelter and food",
      "gaps around doors, windows, and pipe penetrations",
      "gardens and landscaping providing harbourage for spiders and ants",
      "older homes with more entry points and harbourage areas",
    ],
    urgencyPhrases: [
      "Regular general pest treatment keeps cockroaches, spiders, ants, and silverfish under control year-round",
      "Prevention is more effective and less costly than reacting to an established infestation",
      "A comprehensive treatment protects your home and family from the most common Sydney household pests",
    ],
    inspectionDetails: [
      "full internal and external inspection for pest activity and risk factors",
      "assessment of entry points, harbourage areas, and moisture issues",
      "recommendations for ongoing pest prevention measures",
    ],
    preventionTips: [
      "Book annual general pest treatments to maintain year-round protection",
      "Keep kitchens and bathrooms clean and dry",
      "Seal gaps around doors, windows, and utility penetrations",
    ],
    certifications: [
      "fully licensed and insured under NSW Fair Trading",
      "AEPMA member committed to responsible pest management",
      "all products APVMA-registered and safe for families and pets when dry",
    ],
    responseTime: "same-day and next-day appointments available",
    warrantyInfo: "General pest treatments are backed by a 6-month warranty covering cockroaches, spiders, ants, and silverfish",
  },
  "commercial-pest-control": {
    treatmentMethods: [
      "integrated pest management (IPM) programs tailored to the business",
      "HACCP-compliant treatments for food businesses",
      "scheduled maintenance programs with regular inspections and treatments",
      "digital reporting and compliance documentation for audits",
    ],
    riskFactors: [
      "food handling, storage, and preparation areas",
      "high foot traffic introducing pests from outside",
      "waste management areas and loading docks",
      "complex building layouts with multiple tenants and shared services",
    ],
    urgencyPhrases: [
      "A pest sighting in a commercial premises can damage your reputation and trigger council enforcement action",
      "Food businesses must maintain pest-free conditions to comply with the NSW Food Act 2003",
      "Proactive commercial pest management protects your business, your staff, and your customers",
    ],
    inspectionDetails: [
      "comprehensive site assessment including all food handling and storage areas",
      "review of waste management, delivery areas, and staff facilities",
      "risk analysis and development of a customised pest management plan",
    ],
    preventionTips: [
      "Maintain strict cleaning schedules in food preparation and storage areas",
      "Ensure waste bins have tight-fitting lids and are emptied regularly",
      "Train staff to report pest sightings immediately",
    ],
    certifications: [
      "HACCP-trained technicians for food industry compliance",
      "ISO-aligned pest management documentation and reporting",
      "AEPMA commercial member with full public liability and professional indemnity insurance",
    ],
    responseTime: "same-day emergency response for commercial clients",
    warrantyInfo: "Commercial contracts include scheduled visits, priority response, and full compliance documentation for council and third-party audits",
  },
  "pre-purchase-inspection": {
    treatmentMethods: [
      "thermal imaging to detect concealed termite activity",
      "moisture meters and radar detection for non-invasive assessment",
      "comprehensive visual inspection of all accessible areas",
      "borescope inspection of concealed spaces where access permits",
    ],
    riskFactors: [
      "previous termite damage that may have been cosmetically repaired",
      "evidence of past treatments suggesting a history of termite problems",
      "property features such as timber subfloors, garden beds against walls, and poor drainage",
      "location in a high-risk termite area of Sydney",
    ],
    urgencyPhrases: [
      "Buying a property without a pest inspection can leave you with thousands of dollars in hidden damage",
      "A pre-purchase pest inspection gives you the information you need to negotiate with confidence",
      "Identifying termite damage before settlement protects your investment and your future",
    ],
    inspectionDetails: [
      "full inspection to Australian Standard AS 4349.3",
      "assessment of the building, outbuildings, fences, and grounds for timber pest activity and damage",
      "detailed report suitable for solicitors, conveyancers, and lenders",
    ],
    preventionTips: [
      "Always get a pest inspection before committing to a property purchase",
      "Ask the vendor or agent if there is a history of termite treatment on the property",
      "If the inspection reveals previous damage, engage a builder to assess structural integrity",
    ],
    certifications: [
      "reports compliant with Australian Standard AS 4349.3",
      "accepted by solicitors, conveyancers, banks, and insurance companies",
      "fully licensed and insured inspectors with professional indemnity cover",
    ],
    responseTime: "within 24 to 48 hours — we understand settlement deadlines",
    warrantyInfo: "Inspection reports are valid for the date of inspection and provide a snapshot of conditions at that time",
  },
};

// Fallback context for any service slug not explicitly listed above
const DEFAULT_SERVICE_CONTEXT: ServiceContext = {
  treatmentMethods: [
    "targeted professional-grade treatment",
    "residual insecticide application",
    "integrated pest management techniques",
    "ongoing monitoring and prevention measures",
  ],
  riskFactors: [
    "environmental conditions favouring pest activity",
    "structural features providing pest harbourage",
    "seasonal changes driving pests indoors",
    "proximity to food and water sources",
  ],
  urgencyPhrases: [
    "Professional treatment delivers faster and more lasting results than DIY approaches",
    "Early intervention prevents a minor pest issue from becoming a major infestation",
    "Our licensed technicians use products and methods not available over the counter",
  ],
  inspectionDetails: [
    "thorough assessment of the property for pest activity and risk factors",
    "identification of pest species for targeted treatment",
    "evaluation of harbourage areas and environmental conditions",
  ],
  preventionTips: [
    "Seal gaps and cracks around the building exterior",
    "Maintain cleanliness and reduce clutter in storage areas",
    "Book regular pest inspections to catch issues early",
  ],
  certifications: [
    "fully licensed and insured under NSW regulations",
    "AEPMA member with ongoing professional development",
    "all products APVMA-registered and applied according to label directions",
  ],
  responseTime: "within 24 to 48 hours",
  warrantyInfo: "All treatments are backed by a service warranty with free follow-up if pests return within the warranty period",
};

function getServiceContext(serviceSlug: string): ServiceContext {
  return SERVICE_CONTEXTS[serviceSlug] ?? DEFAULT_SERVICE_CONTEXT;
}

// ─── Intro Templates ─────────────────────────────────────────────────────────
// Each template produces 2-3 natural sentences. The variation ensures that
// neighbouring suburb pages for the same service do not read identically.

const INTRO_TEMPLATES: ((
  serviceName: string,
  suburbName: string,
  postcode: string,
  councilName: string,
  ctx: ServiceContext,
) => string)[] = [
  (serviceName, suburbName, postcode, councilName, ctx) =>
    `Looking for professional ${serviceName.toLowerCase()} services in ${suburbName} (${postcode})? Our licensed technicians provide thorough, effective ${serviceName.toLowerCase()} across the ${councilName} area, using ${ctx.treatmentMethods[0]} and ${ctx.treatmentMethods[1]}. ${ctx.urgencyPhrases[0]}, and our local team is ready to help — typically responding ${ctx.responseTime}.`,

  (serviceName, suburbName, postcode, councilName, ctx) =>
    `${suburbName} residents and property owners trust Pest Control Sydney for reliable ${serviceName.toLowerCase()} services in the ${postcode} postcode area. Servicing ${suburbName} and surrounding suburbs in the ${councilName} region, our technicians use ${ctx.treatmentMethods[0]} and ${ctx.treatmentMethods[1]} to deliver lasting results. ${ctx.urgencyPhrases[1]}.`,

  (serviceName, suburbName, postcode, councilName, ctx) =>
    `If you need ${serviceName.toLowerCase()} in ${suburbName}, our experienced team is here to help. We service the entire ${councilName} area including ${suburbName} (${postcode}), providing ${ctx.certifications[0]} treatments that give you confidence the job is done right. ${ctx.urgencyPhrases[2]}.`,

  (serviceName, suburbName, postcode, councilName, ctx) =>
    `${suburbName} (${postcode}) homeowners understand the importance of professional pest management. Our ${serviceName.toLowerCase()} service in the ${councilName} area combines ${ctx.treatmentMethods[0]} with ${ctx.treatmentMethods[2]} to deliver comprehensive results. Whether you are dealing with an active problem or looking for preventative protection, our local team responds ${ctx.responseTime}.`,

  (serviceName, suburbName, postcode, councilName, ctx) =>
    `Pest Control Sydney delivers expert ${serviceName.toLowerCase()} to homes and businesses in ${suburbName} and across the ${councilName} council area. Our technicians are ${ctx.certifications[0]}, ensuring you receive the highest standard of service in the ${postcode} area. ${ctx.urgencyPhrases[0]}.`,

  (serviceName, suburbName, postcode, councilName, ctx) =>
    `Searching for trusted ${serviceName.toLowerCase()} in ${suburbName} (${postcode})? Our ${councilName}-based technicians deliver fast, professional service backed by years of local experience. We use ${ctx.treatmentMethods[1]} and ${ctx.treatmentMethods[2]} for reliable outcomes. ${ctx.urgencyPhrases[1]}.`,

  (serviceName, suburbName, postcode, councilName, ctx) =>
    `For ${suburbName} residents in the ${postcode} postcode, finding a dependable ${serviceName.toLowerCase()} provider is essential. Pest Control Sydney has been servicing the ${councilName} region for years, and our team understands the specific conditions that affect properties in ${suburbName}. ${ctx.urgencyPhrases[2]}.`,

  (serviceName, suburbName, postcode, councilName, ctx) =>
    `Our ${serviceName.toLowerCase()} service in ${suburbName} covers residential and commercial properties throughout the ${councilName} area. With technicians who are ${ctx.certifications[1]}, we bring professional expertise to every job in the ${postcode} area. ${ctx.urgencyPhrases[0]}, and we are committed to providing same-day and next-day appointments whenever possible.`,
];

// ─── Benefit Templates ───────────────────────────────────────────────────────
// Each template generates a benefit string that combines location and service.

const BENEFIT_TEMPLATES: ((
  serviceName: string,
  suburbName: string,
  postcode: string,
  councilName: string,
  ctx: ServiceContext,
) => string)[] = [
  (_, suburbName, postcode, __, ___) =>
    `Local ${suburbName} technicians who know the ${postcode} area and can respond quickly`,

  (serviceName, suburbName, _, __, ctx) =>
    `${ctx.treatmentMethods[0].charAt(0).toUpperCase() + ctx.treatmentMethods[0].slice(1)} included as standard for every ${serviceName.toLowerCase()} in ${suburbName}`,

  (_, __, ___, ____, ctx) =>
    `${ctx.certifications[0].charAt(0).toUpperCase() + ctx.certifications[0].slice(1)} — giving you peace of mind the work meets the highest standards`,

  (_, suburbName, __, ___, ctx) =>
    `Fast response times — we typically attend ${suburbName} properties ${ctx.responseTime}`,

  (serviceName, _, __, ___, ctx) =>
    `${ctx.warrantyInfo.charAt(0).toUpperCase() + ctx.warrantyInfo.slice(1)}`,

  (_, suburbName, postcode, councilName, __) =>
    `Extensive experience servicing homes and businesses in ${suburbName} (${postcode}) and surrounding ${councilName} suburbs`,

  (serviceName, _, __, ___, ctx) =>
    `${ctx.treatmentMethods[1].charAt(0).toUpperCase() + ctx.treatmentMethods[1].slice(1)} for thorough ${serviceName.toLowerCase()} results`,

  (_, suburbName, __, ___, ____) =>
    `Transparent, upfront pricing for ${suburbName} residents with no hidden fees or call-out charges`,

  (serviceName, suburbName, _, __, ctx) =>
    `Detailed report and prevention recommendations tailored to your ${suburbName} property after every ${serviceName.toLowerCase()} service`,

  (_, __, ___, ____, ctx) =>
    `${ctx.certifications[1].charAt(0).toUpperCase() + ctx.certifications[1].slice(1)} — fully licensed, insured, and committed to responsible pest management`,

  (_, suburbName, __, ___, ____) =>
    `Child-safe and pet-friendly treatment options available for ${suburbName} families`,

  (serviceName, _, __, ___, ctx) =>
    `Comprehensive ${ctx.inspectionDetails[0]} before any ${serviceName.toLowerCase()} treatment begins`,
];

// ─── FAQ Templates ───────────────────────────────────────────────────────────
// Each template generates a question-answer pair combining location and service.

const FAQ_TEMPLATES: ((
  serviceName: string,
  suburbName: string,
  postcode: string,
  councilName: string,
  ctx: ServiceContext,
) => { question: string; answer: string })[] = [
  (serviceName, suburbName, _, __, ctx) => ({
    question: `How much does ${serviceName.toLowerCase()} cost in ${suburbName}?`,
    answer: `The cost of ${serviceName.toLowerCase()} in ${suburbName} depends on the size of your property, the severity of the issue, and the treatment method required. We provide free, no-obligation quotes and transparent pricing. ${ctx.warrantyInfo.charAt(0).toUpperCase() + ctx.warrantyInfo.slice(1)}. Call us on (02) 8765-4321 for a quote tailored to your situation.`,
  }),

  (serviceName, suburbName, postcode, councilName, ctx) => ({
    question: `How quickly can you get to ${suburbName} for ${serviceName.toLowerCase()}?`,
    answer: `We have technicians servicing the ${councilName} area daily and can typically attend ${suburbName} (${postcode}) ${ctx.responseTime}. For urgent situations, same-day service is often available — call (02) 8765-4321 to check current availability.`,
  }),

  (serviceName, suburbName, _, __, ctx) => ({
    question: `Is your ${serviceName.toLowerCase()} service in ${suburbName} safe for children and pets?`,
    answer: `Yes. All products we use for ${serviceName.toLowerCase()} in ${suburbName} are APVMA-registered and applied according to strict label directions. Our technicians will advise you on any precautions, but in most cases treated areas are safe for children and pets once dry. We also offer low-toxicity and gel bait options for sensitive environments.`,
  }),

  (serviceName, suburbName, _, __, ctx) => ({
    question: `What methods do you use for ${serviceName.toLowerCase()} in ${suburbName}?`,
    answer: `Our ${serviceName.toLowerCase()} service in ${suburbName} uses ${ctx.treatmentMethods[0]}, ${ctx.treatmentMethods[1]}, and ${ctx.treatmentMethods[2]}. The specific approach depends on the species involved, the severity of the issue, and the layout of your property. Our technician will recommend the most effective method after a thorough inspection.`,
  }),

  (serviceName, suburbName, _, __, ctx) => ({
    question: `Do you offer a warranty for ${serviceName.toLowerCase()} in ${suburbName}?`,
    answer: `Yes. ${ctx.warrantyInfo.charAt(0).toUpperCase() + ctx.warrantyInfo.slice(1)}. This means if the problem recurs within the warranty period, we will return to your ${suburbName} property and retreat at no additional cost.`,
  }),

  (serviceName, suburbName, postcode, councilName, ctx) => ({
    question: `What causes ${serviceName.toLowerCase().replace(/treatment|control|removal|inspection/gi, "problems").replace(/problems problems/, "problems")} in ${suburbName}?`,
    answer: `In ${suburbName} (${postcode}), common contributing factors include ${ctx.riskFactors[0]} and ${ctx.riskFactors[1]}. The ${councilName} area's environmental conditions can also play a role, with ${ctx.riskFactors[2]} being a frequent factor. Our technician will identify the specific causes during your inspection and provide tailored advice.`,
  }),

  (serviceName, suburbName, _, __, ctx) => ({
    question: `How can I prevent needing ${serviceName.toLowerCase()} again in ${suburbName}?`,
    answer: `After treatment, we recommend the following to reduce the risk of recurrence: ${ctx.preventionTips[0]}. ${ctx.preventionTips[1]}. ${ctx.preventionTips[2]}. We also provide a written prevention guide specific to your ${suburbName} property.`,
  }),

  (serviceName, suburbName, postcode, _, ctx) => ({
    question: `Are your ${serviceName.toLowerCase()} technicians licensed to work in ${suburbName}?`,
    answer: `Absolutely. Every Pest Control Sydney technician is ${ctx.certifications[0]} and ${ctx.certifications[1]}. We carry full public liability insurance and all work in ${suburbName} (${postcode}) is carried out in compliance with NSW regulations.`,
  }),

  (serviceName, suburbName, _, __, ctx) => ({
    question: `What should I do to prepare for ${serviceName.toLowerCase()} at my ${suburbName} home?`,
    answer: `Preparation depends on the specific treatment, and we will provide detailed instructions when you book. General tips include ensuring access to the areas being treated, moving small items away from walls and skirting boards, and keeping pets away from treated areas until the product is dry. Our team will guide you through everything when they arrive at your ${suburbName} property.`,
  }),

  (serviceName, suburbName, _, councilName, ctx) => ({
    question: `Can you treat both residential and commercial properties in ${suburbName}?`,
    answer: `Yes. We provide ${serviceName.toLowerCase()} for homes, apartments, offices, retail premises, restaurants, and warehouses across ${suburbName} and the wider ${councilName} area. Commercial clients benefit from scheduled maintenance programs and compliance documentation for council and third-party audits.`,
  }),

  (serviceName, suburbName, _, __, ctx) => ({
    question: `How long does ${serviceName.toLowerCase()} take for a ${suburbName} home?`,
    answer: `The duration depends on the size of your property and the extent of the issue. Most residential ${serviceName.toLowerCase()} appointments in ${suburbName} are completed within one to two hours. More extensive treatments or inspections may take longer, and our technician will provide a time estimate when they assess the job.`,
  }),

  (serviceName, suburbName, postcode, _, ctx) => ({
    question: `Do I need to leave my ${suburbName} home during ${serviceName.toLowerCase()}?`,
    answer: `In most cases, you do not need to vacate the property. Our technician will advise if any specific areas need to be cleared during treatment. Products used for ${serviceName.toLowerCase()} in ${suburbName} (${postcode}) are selected for their low odour and safety profile. Pets may need to be kept away from treated areas until dry.`,
  }),
];

// ─── Main Content Generator ─────────────────────────────────────────────────

export function getComboContent(
  serviceName: string,
  serviceSlug: string,
  suburbName: string,
  suburbPostcode: string,
  councilName: string,
): ComboContent {
  const ctx = getServiceContext(serviceSlug);

  // Create a combined hash from the service and suburb for deterministic selection
  const comboKey = `${serviceSlug}::${suburbName}::${suburbPostcode}`;
  const hash = hashString(comboKey);

  // Select intro template
  const intro = pick(INTRO_TEMPLATES, hash, 0)(
    serviceName,
    suburbName,
    suburbPostcode,
    councilName,
    ctx,
  );

  // Select 3 unique benefits using different offsets to avoid duplicates
  const benefitCount = BENEFIT_TEMPLATES.length;
  const benefitIndices: number[] = [];
  let offset = hash % benefitCount;
  while (benefitIndices.length < 3) {
    if (!benefitIndices.includes(offset % benefitCount)) {
      benefitIndices.push(offset % benefitCount);
    }
    offset++;
  }
  const benefits = benefitIndices.map((idx) =>
    BENEFIT_TEMPLATES[idx](serviceName, suburbName, suburbPostcode, councilName, ctx),
  );

  // Select 3 unique FAQs using different offsets to avoid duplicates
  const faqCount = FAQ_TEMPLATES.length;
  const faqIndices: number[] = [];
  let faqOffset = (hash + 7) % faqCount; // different seed offset to decorrelate from benefits
  while (faqIndices.length < 3) {
    if (!faqIndices.includes(faqOffset % faqCount)) {
      faqIndices.push(faqOffset % faqCount);
    }
    faqOffset++;
  }
  const faqs = faqIndices.map((idx) =>
    FAQ_TEMPLATES[idx](serviceName, suburbName, suburbPostcode, councilName, ctx),
  );

  return { intro, benefits, faqs };
}
