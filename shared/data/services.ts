// ─── Service Extended Content ────────────────────────────────────────────────
// Rich SEO content for each of the 20 pest control services.
// Slugs match exactly with shared/routes/all-routes.ts

export interface ServiceContent {
  slug: string;
  longDescription: string;
  process: { title: string; description: string }[];
  benefits: string[];
  faqs: { question: string; answer: string }[];
  priceNote: string;
}

export const SERVICE_CONTENT: ServiceContent[] = [
  // ──────────────────────────────────────────────────────────────────────────
  // 1. Termite Inspection
  // ──────────────────────────────────────────────────────────────────────────
  {
    slug: "termite-inspection",
    longDescription: `Termites cause more damage to Australian homes than fires, floods, and storms combined. In Sydney alone, an estimated one in three homes will be affected by termite activity at some point, and the average cost of termite damage repair exceeds $10,000. A professional termite inspection is the single most important step you can take to protect your property and your investment.

Our termite inspections are conducted in strict accordance with Australian Standard AS 4349.3 — the benchmark for timber pest inspections in this country. Every inspection is carried out by a licensed, experienced technician using professional-grade equipment including thermal imaging cameras, moisture meters, and Termatrac radar detection units. These tools allow us to detect termite activity behind walls, under floors, and inside timbers without any destructive investigation.

During a typical inspection, our technician will thoroughly examine all accessible areas of your property. This includes the interior of the building (walls, skirting boards, door frames, window frames, and built-in cabinetry), the roof void, the subfloor (if accessible), the exterior perimeter, fences, retaining walls, garden beds, tree stumps, and any outbuildings such as garages and sheds. We pay particular attention to high-risk areas — wet areas like bathrooms, laundries, and kitchens where moisture attracts termites, as well as areas where timber contacts or is close to the ground.

The inspection typically takes between one and two hours for an average three-bedroom home, depending on accessibility and property size. At the conclusion, you will receive a detailed written report complete with photographs, diagrams, and clear recommendations. If we detect active termites, we will outline the treatment options available and provide a written quote for remediation.

We recommend annual termite inspections for all Sydney properties. Properties in high-risk areas — including much of western Sydney, the Northern Beaches, the Sutherland Shire, and any home with mature trees or gardens abutting the building — may benefit from inspections every six to twelve months. Regular inspections are also a condition of most termite treatment warranties.

Whether you are a homeowner wanting peace of mind, a buyer conducting due diligence before purchase, or a property manager fulfilling your duty of care, our termite inspections give you the information you need to make informed decisions about your property.`,
    process: [
      {
        title: "Book Your Inspection",
        description:
          "Request a quote online and we will confirm a convenient time, often within 24 hours.",
      },
      {
        title: "Comprehensive Property Assessment",
        description:
          "Our licensed technician inspects all accessible areas using thermal imaging, moisture detection, and radar equipment to identify termite activity and risk factors.",
      },
      {
        title: "Detailed Report Delivery",
        description:
          "You receive a written report with findings, photographs, risk assessment, and clear recommendations — typically within 24 hours of inspection.",
      },
      {
        title: "Treatment Plan (if required)",
        description:
          "If termite activity or damage is found, we provide a tailored treatment proposal with options, pricing, and warranty details so you can make an informed decision.",
      },
    ],
    benefits: [
      "Inspections conducted to Australian Standard AS 4349.3 by licensed technicians",
      "Thermal imaging, moisture meters, and Termatrac radar detection included at no extra cost",
      "Detailed written report with photographs delivered within 24 hours",
      "Non-invasive detection methods — no damage to walls or floors",
      "Annual inspection reminders to keep your property protected year after year",
    ],
    faqs: [
      {
        question: "How long does a termite inspection take?",
        answer:
          "A thorough termite inspection typically takes 1 to 2 hours for a standard 3-bedroom home. Larger properties, multi-storey buildings, or homes with extensive gardens and outbuildings may take longer. We never rush an inspection — thoroughness is the whole point.",
      },
      {
        question: "What equipment do you use during inspections?",
        answer:
          "We use thermal imaging cameras (FLIR), professional moisture meters, and Termatrac T3i radar detection units. Thermal cameras detect heat differentials caused by termite activity behind walls, while radar can confirm live termite movement inside timbers without breaking them open.",
      },
      {
        question: "How often should I get a termite inspection?",
        answer:
          "We recommend annual inspections for all Sydney properties. In high-risk areas such as western Sydney, the Northern Beaches, or homes adjacent to bushland, inspections every 6-12 months are advisable. Regular inspections are also required to maintain most termite treatment warranties.",
      },
      {
        question: "Will the inspection damage my walls or floors?",
        answer:
          "No. Our inspections are completely non-invasive. We use thermal imaging and radar to detect activity behind surfaces without drilling, cutting, or removing any materials. If invasive inspection is ever recommended, we will discuss this with you first and obtain your consent.",
      },
      {
        question: "Can I use your inspection report for a property purchase?",
        answer:
          "Yes. Our timber pest inspection reports comply with AS 4349.3 and are accepted by solicitors, conveyancers, banks, and insurance companies. We can provide a combined pre-purchase pest and building report if required.",
      },
    ],
    priceNote:
      "Termite inspection pricing is provided as a tailored quote based on property size, accessibility, and location. Contact us for a free, no-obligation quote — most inspections for standard homes in Sydney are very competitively priced.",
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 2. Termite Control (Treatment)
  // ──────────────────────────────────────────────────────────────────────────
  {
    slug: "termite-control",
    longDescription: `When termites are found in your Sydney home, swift and effective treatment is essential to stop the damage and protect your property's structural integrity. Our termite control services combine industry-leading products with proven methodologies to eliminate active colonies and create long-term barriers that prevent re-infestation.

We offer two primary treatment approaches, and often recommend a combination for maximum protection. Chemical soil barriers involve applying a liquid termiticide — such as Termidor (fipronil) or Altriset (chlorantraniliprole) — to the soil around and beneath your home's perimeter. This creates a continuous treated zone that termites cannot pass through without being exposed to the product. Transfer-effect termiticides like Termidor are particularly effective because affected termites carry the active ingredient back to the colony, creating a cascading elimination effect. Chemical barriers typically last five to eight years and are backed by a manufacturer's warranty.

Termite baiting systems, such as the Sentricon Always Active or Exterra systems, use strategically placed in-ground stations around your property. These stations contain a bait matrix that termites feed on and share with their colony mates, including the queen. Over weeks to months, the entire colony is eliminated. Baiting systems are ideal for properties where chemical barriers are difficult to install — for example, homes with extensive paving, landscaping, or limited access around the perimeter.

For active infestations within the building, we may also apply direct colony treatments such as dusting with fipronil or colony control foams to rapidly reduce termite numbers while the broader barrier or baiting program takes effect.

Every treatment begins with a comprehensive inspection to determine the species of termite, the extent of activity, and the most appropriate treatment strategy for your property. We explain all options clearly, including relative costs, timelines, and warranty terms, so you can make an informed decision.

Post-treatment, we provide ongoing monitoring and warranty coverage. Annual inspections are included with most treatment plans to ensure the protection remains effective and to catch any new activity early. Our technicians document everything and provide you with a treatment certificate that is valuable for insurance purposes and future property sales.

We use only APVMA-registered products from leading manufacturers including BASF, Bayer, Syngenta, and FMC. All treatments are applied by licensed, insured technicians in accordance with Australian Standards and product label directions.`,
    process: [
      {
        title: "Detailed Inspection & Species Identification",
        description:
          "We assess the extent of termite activity, identify the species, locate entry points, and determine the best treatment strategy for your specific property and situation.",
      },
      {
        title: "Treatment Plan & Quote",
        description:
          "You receive a clear proposal outlining the recommended treatment method (chemical barrier, baiting system, or combination), timeline, costs, and warranty terms.",
      },
      {
        title: "Professional Treatment Application",
        description:
          "Our licensed technicians apply the treatment using industry-leading products. For chemical barriers, this involves trenching and/or drilling around the perimeter. For baiting, stations are installed at strategic intervals.",
      },
      {
        title: "Monitoring & Warranty",
        description:
          "We schedule follow-up inspections to confirm colony elimination and monitor barrier integrity. Ongoing warranty coverage provides peace of mind — if termites return within the warranty period, we re-treat at no cost.",
      },
    ],
    benefits: [
      "Industry-leading products from BASF (Termidor), Bayer, Syngenta, and FMC",
      "Choice of chemical barriers, baiting systems, or combination treatments tailored to your property",
      "All work performed by licensed, insured technicians in accordance with Australian Standards",
      "Written warranty with annual monitoring inspections included",
      "Treatment certificates provided for insurance and resale documentation",
    ],
    faqs: [
      {
        question: "What is the best termite treatment method?",
        answer:
          "The best method depends on your property. Chemical soil barriers (e.g., Termidor) provide excellent perimeter protection and are cost-effective for most homes. Baiting systems (e.g., Sentricon) are ideal where barriers are difficult to install. We often recommend a combination of both for maximum protection.",
      },
      {
        question: "How long does a chemical termite barrier last?",
        answer:
          "A chemical barrier using products like Termidor typically provides effective protection for 5-8 years. The manufacturer's warranty varies by product but is usually 5 years for a full perimeter treatment. Annual inspections are required to maintain the warranty.",
      },
      {
        question: "Is termite treatment safe for my family and pets?",
        answer:
          "Yes. All products we use are APVMA-registered and approved for use around homes. Chemical barriers are applied to the soil beneath and around the building, not inside living areas. We advise on any specific precautions and re-entry times relevant to your treatment.",
      },
      {
        question: "How much does termite treatment cost in Sydney?",
        answer:
          "Termite treatment for a standard 3-bedroom home in Sydney typically starts from $299 for targeted treatments. Full perimeter chemical barriers and baiting systems are priced based on linear metres and property size. We provide detailed, transparent quotes with no hidden costs.",
      },
      {
        question: "Do I need annual inspections after treatment?",
        answer:
          "Yes. Annual inspections are essential to verify that the treatment remains effective and to detect any new termite activity early. Most treatment warranties require annual inspections to remain valid. We send reminders so you never miss one.",
      },
    ],
    priceNote:
      "Termite treatment pricing starts from $299 for targeted treatments. Full perimeter chemical barriers and baiting system installations are quoted based on property size and linear metres. We provide free, no-obligation quotes with all costs clearly itemised.",
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 3. Rodent Control
  // ──────────────────────────────────────────────────────────────────────────
  {
    slug: "rodent-control",
    longDescription: `Rats and mice are among the most common and destructive pests in Sydney homes and businesses. The three species most frequently encountered are the Norway rat (Rattus norvegicus), the roof rat (Rattus rattus), and the common house mouse (Mus musculus). Each presents different challenges — roof rats are agile climbers that nest in roof cavities and wall voids, Norway rats are burrowers found in subfloors and gardens, and mice can squeeze through gaps as small as 6 millimetres to access your home.

Beyond the obvious concerns of contaminated food and droppings, rodents pose serious health risks. They are vectors for diseases including leptospirosis, salmonella, and hantavirus. Their constant gnawing damages electrical wiring (creating fire risks), plumbing, insulation, and structural timbers. A single pair of mice can produce up to 2,000 offspring in a year under ideal conditions, which is why early intervention is critical.

Our rodent control programs are built on the principles of Integrated Pest Management (IPM). Rather than simply laying bait and hoping for the best, we take a holistic approach that addresses the root causes of infestation. The process begins with a thorough inspection to identify the species, assess population levels, locate entry points, nesting sites, and food sources, and map the rodent activity patterns using tracking dust and visual indicators.

Treatment typically involves a strategic combination of tamper-proof bait stations, mechanical snap traps, and exclusion work. Bait stations are placed in secure locations along rodent runways — against walls, behind appliances, in roof voids, and subfloor areas. We use second-generation anticoagulant baits in locked, tamper-resistant stations to minimise any risk to children, pets, and non-target wildlife.

Exclusion is the cornerstone of lasting rodent control. Our technicians seal entry points using steel wool, metal flashing, cement, and other rodent-proof materials. Common entry points include gaps around pipes, damaged weave holes in brickwork, torn eave linings, and gaps under doors. We also advise on sanitation measures — removing food sources, securing bins, clearing garden debris, and trimming vegetation away from the building.

Follow-up visits are an important component of our rodent programs. We return to check traps and bait stations, replenish as needed, and verify that exclusion work is holding. For commercial premises such as restaurants, warehouses, and food manufacturing facilities, we offer ongoing monitoring programs with regular scheduled visits and detailed documentation.

All rodent control work is carried out humanely and in compliance with NSW regulations. We prioritise methods that deliver swift, effective results while minimising suffering and environmental impact.`,
    process: [
      {
        title: "Inspection & Assessment",
        description:
          "We identify the rodent species, locate entry points, nesting sites, and food sources. Tracking dust and visual indicators help map activity patterns throughout your property.",
      },
      {
        title: "Strategic Baiting & Trapping",
        description:
          "Tamper-proof bait stations and mechanical traps are placed along rodent runways in secure locations — roof voids, subfloors, behind appliances, and along exterior walls.",
      },
      {
        title: "Exclusion & Proofing",
        description:
          "We seal entry points with rodent-proof materials including steel wool, metal flashing, and cement. This prevents new rodents from entering once the existing population is eliminated.",
      },
      {
        title: "Follow-Up & Monitoring",
        description:
          "We return to check and replenish stations, remove trapped rodents, verify exclusion work, and confirm the infestation is resolved. Ongoing programs are available for commercial premises.",
      },
    ],
    benefits: [
      "Comprehensive approach combining baiting, trapping, and exclusion for lasting results",
      "Tamper-proof bait stations safe for homes with children and pets",
      "Entry point sealing to prevent re-infestation — not just a temporary fix",
      "All work compliant with NSW health and safety regulations",
      "Ongoing monitoring programs available for commercial food premises",
    ],
    faqs: [
      {
        question: "How do I know if I have rats or mice?",
        answer:
          "Signs include droppings (mouse droppings are small and pointed, rat droppings are larger and capsule-shaped), gnaw marks on food packaging or wiring, scratching noises in walls or ceilings (especially at night), greasy rub marks along walls, and a musty odour. Our technician will confirm the species during inspection.",
      },
      {
        question: "Is rodent bait safe around children and pets?",
        answer:
          "We use bait exclusively inside tamper-proof, lockable stations that children and pets cannot open. The stations are placed in secure, concealed locations. We also offer non-toxic monitoring options and mechanical traps where bait is not appropriate.",
      },
      {
        question: "How long does it take to get rid of rats?",
        answer:
          "Most residential rodent infestations are brought under control within 1-2 weeks. However, complete elimination — including exclusion work and monitoring — typically takes 2-4 weeks. Severe infestations or large properties may take longer.",
      },
      {
        question: "Will you seal up the entry points?",
        answer:
          "Yes. Entry point sealing (exclusion) is a core part of our rodent control program. Without it, new rodents will simply move in to replace the ones that have been eliminated. We use durable, rodent-proof materials and check our work during follow-up visits.",
      },
      {
        question: "What attracts rodents to my home?",
        answer:
          "The three essentials are food, water, and shelter. Unsecured rubbish bins, pet food left out overnight, compost heaps, dripping taps, dense garden vegetation, and gaps in the building envelope all attract rodents. We provide tailored sanitation advice during every service.",
      },
    ],
    priceNote:
      "Rodent control for a standard residential property starts from $199 and includes inspection, baiting, trapping, and a follow-up visit. Exclusion work is quoted separately based on the number and complexity of entry points. Commercial programs are priced on a monthly retainer basis.",
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 4. Cockroach Treatment
  // ──────────────────────────────────────────────────────────────────────────
  {
    slug: "cockroach-treatment",
    longDescription: `Cockroaches are one of the most reviled and persistent pests in Sydney, and for good reason. They contaminate food and surfaces with bacteria including Salmonella, E. coli, and Staphylococcus. Their shed skins and droppings are a major trigger for asthma and allergies, particularly in children. And their ability to reproduce rapidly means a small problem can become a serious infestation in a matter of weeks.

The most common species found in Sydney homes are the German cockroach (Blattella germanica), the Australian cockroach (Periplaneta australasiae), the American cockroach (Periplaneta americana), and the smoky brown cockroach (Periplaneta fuliginosa). German cockroaches are the most problematic — they live exclusively indoors, breed rapidly (a single egg case produces 30-40 nymphs), and are commonly found in kitchens and bathrooms. The larger Australian and American cockroaches are primarily outdoor species that enter buildings through gaps, drains, and open doors, particularly on warm, humid evenings.

Our cockroach treatment approach is tailored to the species present and the severity of the infestation. For German cockroaches, gel bait technology is the most effective solution. We apply small dots of professional-grade gel bait in cracks, crevices, hinges, and harbourage points throughout kitchens and wet areas. The cockroaches feed on the bait and carry it back to the harbourage, where it spreads through the population via coprophagy and contact transfer. Insect growth regulators (IGRs) are added to disrupt the breeding cycle and prevent nymphs from reaching maturity.

For larger peridomestic cockroach species, we apply a residual spray treatment to external perimeters, entry points, garden beds, subfloor areas, and roof voids. This creates a barrier that kills cockroaches on contact as they attempt to enter the building. We also treat internal skirting boards, behind appliances, and around plumbing penetrations.

In severe infestations, particularly in commercial kitchens and multi-unit residential buildings, we may combine gel baits, residual sprays, dusts (applied into wall cavities and electrical conduits), and IGRs for a comprehensive knockdown. Flushing agents can be used to drive cockroaches out of deep harbourages for immediate reduction.

All products we use are APVMA-registered and chosen for their efficacy and safety profile. Gel baits are applied in concealed locations and pose minimal risk to occupants. Spray treatments use low-odour formulations and we advise on ventilation and re-entry times.

For strata buildings and commercial premises, we offer ongoing cockroach management programs with scheduled visits and compliance documentation. In apartment blocks, coordinated treatments across multiple units are far more effective than treating individual units in isolation.`,
    process: [
      {
        title: "Species Identification & Assessment",
        description:
          "We identify which cockroach species are present, assess the severity, and locate harbourage points, entry paths, and contributing factors such as moisture or sanitation issues.",
      },
      {
        title: "Targeted Treatment Application",
        description:
          "Gel baits are applied in cracks, crevices, and harbourage zones for German cockroaches. Residual sprays are applied to perimeters, entry points, and subfloor areas for larger species. IGRs disrupt the breeding cycle.",
      },
      {
        title: "Sanitation & Exclusion Advice",
        description:
          "We advise on reducing food and water sources, sealing gaps around pipes and doors, and improving ventilation in wet areas to make your property less hospitable to cockroaches.",
      },
      {
        title: "Follow-Up & Monitoring",
        description:
          "We recommend a follow-up visit 2-4 weeks after treatment to assess results and reapply as needed. For German cockroach infestations, a second treatment is often included in the service.",
      },
    ],
    benefits: [
      "Species-specific treatments — German cockroaches get gel bait, larger species get perimeter barriers",
      "Professional-grade gel baits that cascade through the colony for total elimination",
      "Insect growth regulators (IGRs) to break the breeding cycle and prevent re-infestation",
      "Low-odour, family-safe products with clear re-entry time guidance",
      "Strata and multi-unit programs available for apartment buildings",
    ],
    faqs: [
      {
        question: "What is the difference between German cockroaches and Australian cockroaches?",
        answer:
          "German cockroaches are small (12-15mm), light brown, and live exclusively indoors — mainly in kitchens and bathrooms. They breed rapidly and are the most difficult species to control. Australian cockroaches are larger (30-35mm), dark brown with yellow markings, and primarily live outdoors, entering homes through gaps and drains.",
      },
      {
        question: "Why do I still see cockroaches after treatment?",
        answer:
          "It is normal to see increased cockroach activity for several days after treatment. Gel baits and flushing agents drive cockroaches out of harbourages, and it takes time for the bait to cascade through the population. If activity persists beyond 2-3 weeks, contact us for a follow-up application.",
      },
      {
        question: "Is cockroach treatment safe for my kitchen?",
        answer:
          "Yes. Gel baits are applied in concealed cracks and crevices — inside hinges, behind appliances, under sinks — not on food preparation surfaces. The product is contained in small dots and poses no risk to food when applied correctly by a licensed technician.",
      },
      {
        question: "How often should I get cockroach treatment?",
        answer:
          "For most Sydney homes, an annual general pest treatment that includes cockroach control is sufficient. Properties with ongoing German cockroach pressure — such as older apartment buildings — may benefit from treatments every 3-6 months.",
      },
      {
        question: "Can cockroaches come up through the drains?",
        answer:
          "Yes. American and Australian cockroaches can enter through floor waste drains, particularly if the water seal in the trap has evaporated. We treat around drain openings and recommend running water through infrequently used drains to maintain the water seal.",
      },
    ],
    priceNote:
      "Cockroach treatment for a standard 3-bedroom home starts from $159 and includes gel bait application, perimeter spray, and a follow-up check. Multi-unit and commercial pricing is available on request.",
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 5. Spider Treatment
  // ──────────────────────────────────────────────────────────────────────────
  {
    slug: "spider-treatment",
    longDescription: `Sydney is home to some of Australia's most medically significant spiders, including the Sydney funnel-web (Atrax robustus), the redback spider (Latrodectus hasselti), and the white-tailed spider (Lampona cylindrata). While most spider species found in and around homes are harmless, the presence of dangerous species — particularly in homes with children and pets — warrants professional treatment.

Funnel-web spiders are ground-dwelling and favour moist, sheltered habitats such as garden beds, rockeries, compost heaps, and subfloor areas. They are most active after rain and during the warmer months (November to March), when males wander in search of mates and can enter homes through gaps under doors, laundry vents, and ground-level windows. Funnel-web bites are a medical emergency and require immediate first aid and hospitalisation.

Redback spiders are found throughout Sydney in dry, sheltered locations — under outdoor furniture, in meter boxes, sheds, garages, pot plants, and playground equipment. While redback bites are painful and can cause systemic illness, an effective antivenom is available and fatalities are extremely rare with modern treatment.

White-tailed spiders are hunting spiders that prey on other spiders, particularly black house spiders. They are commonly found inside homes, often in bedding, clothing left on the floor, or towels. Their bites cause localised pain and can occasionally lead to skin ulceration.

Our spider treatment targets both the spiders and their habitat. We apply a residual insecticide to the areas where spiders harbour and travel — external wall surfaces, eaves, window frames, door frames, fences, garden beds, rockeries, retaining walls, subfloor areas, and roof voids. We also remove existing webs and egg sacs, which reduces the population and forces survivors into contact with treated surfaces.

For funnel-web management, we treat ground-level harbourage zones including garden beds, mulched areas, rockeries, and around pool fencing. We advise on habitat modification — reducing ground-level shelter, improving drainage, clearing leaf litter, and ensuring shoes are stored off the ground.

Internal treatments focus on skirting boards, behind furniture, in cupboards, and around window and door frames. We use low-toxicity, low-odour products suitable for indoor use and advise on ventilation and re-entry times.

Spider treatments are most effective when applied before the warmer months (September-October) to reduce populations before peak activity. We recommend annual perimeter treatments for all Sydney homes, with additional treatments for properties in high-risk areas such as the Northern Beaches, the Shire, and bush-adjacent suburbs.`,
    process: [
      {
        title: "Property Inspection",
        description:
          "We identify the spider species present, locate harbourage areas, webs, and egg sacs, and assess risk factors such as proximity to bushland, garden conditions, and building entry points.",
      },
      {
        title: "Web Removal & External Treatment",
        description:
          "We remove existing webs and egg sacs, then apply a residual insecticide to all external surfaces — walls, eaves, fences, garden beds, rockeries, and subfloor areas.",
      },
      {
        title: "Internal Treatment",
        description:
          "Low-odour products are applied to skirting boards, window frames, door frames, and other internal harbourage zones. We treat behind furniture and inside cupboards as needed.",
      },
      {
        title: "Prevention Advice",
        description:
          "We advise on reducing spider habitat — clearing leaf litter, sealing gaps, improving outdoor lighting placement (which attracts insects that spiders feed on), and storing shoes off the ground.",
      },
    ],
    benefits: [
      "Targets medically significant species including funnel-webs and redbacks",
      "Comprehensive treatment covering internal, external, and garden areas",
      "Web and egg sac removal to reduce active populations immediately",
      "Low-odour, family-safe products with clear re-entry time guidance",
      "Pre-season treatments available before the warmer months for proactive protection",
    ],
    faqs: [
      {
        question: "Can you guarantee there will be no spiders after treatment?",
        answer:
          "While we cannot guarantee a completely spider-free property (spiders can migrate from neighbouring areas), our treatment dramatically reduces populations and activity. The residual effect continues to kill spiders that cross treated surfaces for months after application.",
      },
      {
        question: "Is spider treatment safe for children and pets?",
        answer:
          "Yes. We use APVMA-registered products at label rates and advise on re-entry times, which are typically 1-2 hours for external areas once the product has dried. Pets should be kept off treated garden beds for 24 hours as a precaution.",
      },
      {
        question: "When is the best time to treat for spiders?",
        answer:
          "The ideal time is September to October, before peak spider activity in summer. Treating before the warmer months reduces populations ahead of the breeding season. However, we can treat at any time of year if you are experiencing a spider problem.",
      },
      {
        question: "Do you treat for funnel-web spiders specifically?",
        answer:
          "Yes. For properties in funnel-web zones (Northern Beaches, Sutherland Shire, bushland-adjacent areas), we apply specific ground-level treatments to garden beds, mulched areas, rockeries, and around pools. We also advise on habitat modification to make your property less attractive to funnel-webs.",
      },
      {
        question: "How often should I get spider treatment?",
        answer:
          "We recommend annual perimeter treatments for most Sydney homes. Properties near bushland, with extensive gardens, or in known funnel-web areas may benefit from treatments every 6 months — before summer and before autumn.",
      },
    ],
    priceNote:
      "Spider treatment for a standard 3-bedroom home starts from $179 and includes internal and external treatment plus web removal. Properties with large gardens, bush surrounds, or funnel-web concerns may be quoted individually.",
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 6. Ant Control
  // ──────────────────────────────────────────────────────────────────────────
  {
    slug: "ant-control",
    longDescription: `Ants are the most frequently encountered household pest in Sydney. While they rarely pose a direct health risk, persistent ant infestations are frustrating, unhygienic, and surprisingly difficult to resolve with off-the-shelf products. The key to effective ant control lies in understanding the species involved and targeting the colony, not just the individual ants you can see.

The most common ant species in Sydney homes include the black house ant (Ochetellus glaber), the coastal brown ant (Pheidole megacephala), the white-footed house ant (Technomyrmex difficilis), the Argentine ant (Linepithema humile), and the green-headed ant (Rhytidoponera metallica). Each species has different nesting habits, foraging patterns, and bait preferences, which is why correct identification is the first step in any effective treatment.

Black house ants and coastal brown ants are the most common indoor invaders, forming trailing lines along walls, benchtops, and into food storage areas. Their colonies can contain thousands of workers and multiple queens, making them resilient to surface sprays that only kill the visible foragers. Argentine ants form massive supercolonies that can extend across multiple properties, requiring a coordinated approach.

Our ant control strategy centres on professional-grade bait systems. We use slow-acting, transfer-effect baits that foraging ants carry back to the colony and share with nest mates, larvae, and queens through a process called trophallaxis. This eliminates the colony at its source — not just the ants you see in your kitchen. Different species prefer different bait formulations (sugar-based, protein-based, or oil-based), and our technicians select the appropriate product based on species identification.

In addition to baiting, we apply a non-repellent perimeter spray around the building exterior, entry points, and along ant trails. Non-repellent products are critical because ants cannot detect the treated zone and walk through it freely, picking up the active ingredient and transferring it to nest mates. Repellent sprays — including most retail products — simply redirect ant trails to a different entry point without killing the colony.

For ant species that nest within buildings (such as white-footed house ants in wall cavities), we may apply insecticidal dust into wall voids, ceiling spaces, and electrical conduits to reach nesting sites directly.

We also advise on environmental modifications to reduce ant activity — sealing food containers, wiping down surfaces, fixing leaking taps (ants seek water), trimming vegetation away from the building, and ensuring garden beds are not banked up against external walls.`,
    process: [
      {
        title: "Species Identification",
        description:
          "We identify the ant species, locate trails and nesting sites, and determine the most effective bait formulation and treatment approach for your specific situation.",
      },
      {
        title: "Targeted Baiting",
        description:
          "Professional-grade, slow-acting baits are placed along foraging trails and near entry points. Worker ants carry the bait back to the colony, eliminating the queen and the entire nest.",
      },
      {
        title: "Perimeter Barrier",
        description:
          "A non-repellent residual spray is applied around the building's external perimeter, entry points, and along walls to create an undetectable treated zone that ants cross freely.",
      },
      {
        title: "Prevention & Follow-Up",
        description:
          "We advise on sanitation, food storage, and landscaping changes to discourage ants. A follow-up check ensures the colony has been eliminated and adjusts treatment if needed.",
      },
    ],
    benefits: [
      "Colony elimination through transfer-effect baits — not just surface-level knockdown",
      "Species-specific bait selection for maximum efficacy",
      "Non-repellent perimeter sprays that ants cannot detect or avoid",
      "Treatment of wall cavities and concealed nesting sites where necessary",
      "Prevention advice to reduce the environmental factors that attract ants",
    ],
    faqs: [
      {
        question: "Why don't off-the-shelf ant sprays work?",
        answer:
          "Retail ant sprays are repellent products — they kill the ants you spray directly but repel the rest, causing them to find a new trail into your home. The colony remains intact and the problem persists. Professional non-repellent products and transfer-effect baits target the colony at its source.",
      },
      {
        question: "How long does ant treatment take to work?",
        answer:
          "You should see a significant reduction in ant activity within 3-7 days as the bait takes effect within the colony. Complete elimination typically occurs within 2-3 weeks. We advise not wiping up ant trails during this period, as the trailing ants are carrying bait back to the nest.",
      },
      {
        question: "Will ants come back after treatment?",
        answer:
          "Once the colony is eliminated, those ants will not return. However, new colonies from neighbouring properties can move into the area over time. Our perimeter treatment provides residual protection for several months, and we recommend annual treatments to maintain a barrier.",
      },
      {
        question: "Are green ants dangerous?",
        answer:
          "Green-headed ants (Rhytidoponera metallica) are common in Sydney gardens and can deliver a painful sting, though serious reactions are rare. They nest in soil and garden beds. We can treat affected areas to reduce populations around high-traffic zones like play areas and paths.",
      },
      {
        question: "Do you treat for carpenter ants?",
        answer:
          "Carpenter ants are less common in Sydney than in some other regions, but they do occur and can damage timber by excavating galleries for nesting (they don't eat wood like termites). We treat carpenter ants with targeted baits and dusts applied directly to nesting sites.",
      },
    ],
    priceNote:
      "Ant control for a standard residential property starts from $129 and includes species identification, internal and external treatment, and a follow-up check. Larger properties and commercial premises are quoted individually.",
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 7. Flea Treatment
  // ──────────────────────────────────────────────────────────────────────────
  {
    slug: "flea-treatment",
    longDescription: `Fleas are a common and distressing pest in Sydney homes, particularly those with cats and dogs. The cat flea (Ctenocephalides felis) is by far the most prevalent species, affecting both cats and dogs despite its name. Flea bites cause intense itching in humans and animals, and heavy infestations can cause flea allergy dermatitis, anaemia in young animals, and transmit tapeworms.

Understanding the flea life cycle is essential for effective treatment. Adult fleas account for only about 5% of the total population in an infested environment. The remaining 95% consists of eggs, larvae, and pupae embedded in carpets, rugs, pet bedding, upholstered furniture, and outdoor soil. Flea larvae feed on organic debris and dried blood (adult flea faeces) deep in carpet fibres and cracks in floorboards. The pupal stage is the most resilient — flea pupae can remain dormant for months, protected in a silk cocoon that is resistant to most insecticides, and emerge as hungry adults when they detect vibration, warmth, or carbon dioxide from a potential host.

This is why simply treating your pet is not enough to resolve a flea infestation. The breeding population living in your home's environment must be eliminated to break the cycle. Our flea treatment program targets all life stages across all affected areas.

We begin by treating all carpeted areas, rugs, and soft furnishings with a combination of a fast-acting adulticide and an insect growth regulator (IGR). The adulticide kills existing adult fleas on contact, while the IGR prevents eggs and larvae from developing into biting adults, breaking the breeding cycle. We pay particular attention to areas where pets rest, sleep, and travel — under furniture, along walls, and near doorways.

Hard floors are treated along edges, in cracks between floorboards, and in any crevices where debris accumulates. Subfloor areas beneath elevated homes are treated if pets have access. Outdoor areas — lawns, garden beds, kennels, and shaded areas where pets lie — receive an external treatment to eliminate fleas in the yard.

For best results, we recommend coordinating the home treatment with veterinary flea treatment for all pets in the household. Treating the environment without treating the pets (or vice versa) will result in the infestation returning.

After treatment, it is normal to see some flea activity for up to 2-3 weeks as pupae hatch. These emerging adults will be killed by contact with the treated surfaces, and the IGR prevents any new eggs from developing. If significant activity continues beyond 3 weeks, we provide a complimentary follow-up treatment.`,
    process: [
      {
        title: "Inspection & Assessment",
        description:
          "We identify the extent of the infestation, locate hotspots (pet resting areas, carpets, furniture), and assess whether outdoor areas are also affected.",
      },
      {
        title: "Indoor Treatment",
        description:
          "All carpeted areas, rugs, soft furnishings, skirting boards, and floorboard cracks are treated with a combination adulticide and insect growth regulator (IGR) to target all life stages.",
      },
      {
        title: "Outdoor Treatment",
        description:
          "Lawns, garden beds, kennels, and shaded areas where pets rest are treated to eliminate outdoor flea populations and prevent re-infestation from the yard.",
      },
      {
        title: "Follow-Up & Prevention",
        description:
          "We advise on pet treatment coordination, regular vacuuming (which stimulates pupal hatching into treated zones), and washing pet bedding. A follow-up treatment is available if activity persists beyond 3 weeks.",
      },
    ],
    benefits: [
      "Dual-action treatment targeting adult fleas and immature stages with IGR technology",
      "Comprehensive coverage — indoors, outdoors, and subfloor areas as needed",
      "Breaks the breeding cycle to prevent recurrence, not just temporary knockdown",
      "Guidance on coordinating pet treatments for maximum effectiveness",
      "Follow-up treatment included if flea activity persists beyond the expected timeframe",
    ],
    faqs: [
      {
        question: "Why am I still seeing fleas after treatment?",
        answer:
          "It is normal to see flea activity for 2-3 weeks after treatment as pupae hatch. Pupal cocoons are resistant to insecticides, so emerging adults must contact treated surfaces to be killed. Frequent vacuuming accelerates this process by stimulating hatching. If activity continues beyond 3 weeks, we provide a free follow-up.",
      },
      {
        question: "Do I need to treat my pets as well?",
        answer:
          "Yes. Environmental treatment alone will not resolve the infestation if untreated pets continue to bring fleas into the home. We recommend coordinating your home treatment with a veterinary flea product (oral or topical) for all cats and dogs in the household.",
      },
      {
        question: "Should I vacuum before or after flea treatment?",
        answer:
          "Vacuum thoroughly before treatment to remove debris and stimulate pupal hatching. After treatment, wait 24 hours, then vacuum frequently (every 1-2 days for 2 weeks). This stimulates remaining pupae to hatch into treated surfaces and removes dead fleas and debris.",
      },
      {
        question: "Can fleas live in homes without pets?",
        answer:
          "Yes. Fleas can be brought in by visiting animals, wildlife (possums, cats), or may already be present from previous pet owners. Flea pupae can remain dormant for months in carpets and only emerge when they detect vibration from new occupants. We regularly treat rental properties between tenancies for this reason.",
      },
      {
        question: "Is flea treatment safe for my baby?",
        answer:
          "Yes. All products we use are APVMA-registered and applied at label rates. We advise keeping infants off treated carpets until the product has dried (typically 2-4 hours) and maintaining good ventilation during drying. Our products have an excellent safety profile when applied correctly.",
      },
    ],
    priceNote:
      "Flea treatment for a standard 3-bedroom home starts from $149 and includes full internal treatment with IGR, plus outdoor treatment of pet resting areas. Larger homes or properties requiring extensive outdoor treatment may be quoted separately.",
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 8. Bedbug Treatment
  // ──────────────────────────────────────────────────────────────────────────
  {
    slug: "bedbug-treatment",
    longDescription: `Bedbugs (Cimex lectularius) have made a dramatic resurgence in Sydney and across Australia in recent decades, driven by increased international travel and the development of insecticide resistance in bedbug populations. These small, flat, reddish-brown insects feed exclusively on blood — typically while you sleep — and their bites can cause intensely itchy welts, anxiety, sleep disturbance, and secondary skin infections from scratching.

Bedbugs are hitchhikers. They spread primarily through luggage, second-hand furniture, clothing, and bedding. They do not discriminate by cleanliness — five-star hotels, backpacker hostels, private homes, and public transport can all harbour infestations. Once established, bedbugs are notoriously difficult to eliminate without professional help due to their ability to hide in the smallest cracks, their resistance to many common insecticides, and their capacity to survive for months without a blood meal.

Our bedbug treatment programs are thorough, methodical, and effective. We offer two primary treatment options: targeted chemical treatment and heat treatment. In many cases, a combination of both delivers the best results.

Chemical treatment involves the application of residual insecticides and insecticidal dusts to all harbourage areas — mattress seams, bed frames, headboards, bedside tables, skirting boards, picture frames, electrical outlets, and any cracks and crevices within crawling distance of sleeping areas. We use products specifically formulated for bedbug control, including those effective against insecticide-resistant strains. Insect growth regulators and desiccant dusts (such as diatomaceous earth) complement the primary treatment by targeting different life stages and resistance mechanisms.

Heat treatment involves raising the temperature in affected rooms to 55-60 degrees Celsius using professional heating equipment. At these temperatures, all life stages of bedbugs — adults, nymphs, and eggs — are killed within minutes. Heat treatment penetrates into furniture, mattresses, wall cavities, and carpet piles where chemical sprays may not reach. It is also chemical-free, making it an excellent option for sensitive environments.

Pre-treatment preparation is important. We provide a detailed preparation checklist that includes laundering bedding and clothing at 60 degrees, reducing clutter around beds, and vacuuming mattresses and carpet edges. Proper preparation significantly improves treatment outcomes.

Post-treatment monitoring using interception devices (placed under bed legs) and visual inspections helps confirm elimination. Most bedbug treatments require two visits spaced 10-14 days apart to catch nymphs that hatch from eggs after the initial treatment.

We treat residential homes, hotels, hostels, aged care facilities, and other accommodation providers throughout Sydney. All work is discreet, and we understand the sensitivity surrounding bedbug infestations.`,
    process: [
      {
        title: "Detailed Inspection & Confirmation",
        description:
          "We thoroughly inspect bedrooms, living areas, and furniture to confirm bedbug presence, assess the extent of infestation, and identify all harbourage zones. Visual inspection is supplemented with interception monitors.",
      },
      {
        title: "Pre-Treatment Preparation",
        description:
          "We provide a preparation checklist. You launder bedding at 60°C, vacuum mattresses and carpet edges, and reduce clutter. Proper preparation is critical for treatment success.",
      },
      {
        title: "Treatment Application",
        description:
          "Targeted chemical treatment (residual sprays, dusts, and IGRs) is applied to all harbourage areas. Heat treatment is applied where appropriate to penetrate deep into furniture and wall cavities.",
      },
      {
        title: "Follow-Up Treatment & Monitoring",
        description:
          "A second treatment is conducted 10-14 days later to eliminate newly hatched nymphs. Interception devices are checked and ongoing monitoring confirms the infestation has been fully resolved.",
      },
    ],
    benefits: [
      "Proven effective against insecticide-resistant bedbug strains",
      "Combination of chemical and heat treatments for thorough elimination",
      "Two-visit treatment protocol to catch all life stages including eggs",
      "Discreet service — unmarked vehicles and confidential treatment",
      "Post-treatment monitoring with interception devices to confirm elimination",
    ],
    faqs: [
      {
        question: "How do I know if I have bedbugs?",
        answer:
          "Signs include small blood spots on sheets, dark faecal staining on mattress seams, shed skins, and itchy bites typically on exposed skin (arms, shoulders, neck). Live bedbugs are small (4-5mm), flat, and reddish-brown. Check mattress seams, bed frame joints, and headboard crevices with a torch.",
      },
      {
        question: "Can I get rid of bedbugs myself?",
        answer:
          "DIY treatments are rarely effective against bedbugs. Over-the-counter sprays do not penetrate harbourage areas effectively, and many bedbug populations are resistant to common retail insecticides. Professional treatment using specialised products and methods is strongly recommended.",
      },
      {
        question: "Do I need to throw away my mattress?",
        answer:
          "In most cases, no. Our treatment targets bedbugs within the mattress without damaging it. We may recommend encasing the mattress in a bedbug-proof cover after treatment. Only severely infested or damaged mattresses need replacement.",
      },
      {
        question: "How long does bedbug treatment take?",
        answer:
          "The initial treatment takes 2-4 hours depending on the size of the infestation and the number of rooms affected. A follow-up treatment 10-14 days later takes 1-2 hours. The full elimination process, including monitoring, typically spans 3-4 weeks.",
      },
      {
        question: "Will bedbugs come back after treatment?",
        answer:
          "If the treatment is thorough and all life stages are eliminated, the infestation will not return on its own. However, re-introduction can occur through travel, visitors, or second-hand items. We advise on prevention measures including luggage management and regular inspections.",
      },
    ],
    priceNote:
      "Bedbug treatment starts from $399 for a single-room treatment and includes two visits plus monitoring. Multi-room treatments and heat-only programs are priced based on the scope of infestation. We provide detailed quotes following inspection.",
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 9. Wasp Removal
  // ──────────────────────────────────────────────────────────────────────────
  {
    slug: "wasp-removal",
    longDescription: `Wasps are a common nuisance across Sydney, particularly during the warmer months from October to April. The most frequently encountered species are paper wasps (Polistes and Ropalidia species), European wasps (Vespula germanica), and mud-dauber wasps (Sceliphron species). While mud-daubers are generally docile and solitary, paper wasps and European wasps can be aggressive, especially when their nest is disturbed, and their stings are painful — potentially life-threatening for individuals with allergies.

Paper wasps build their characteristic open-celled nests under eaves, gutters, pergolas, fences, outdoor furniture, letterboxes, and barbecue covers. Nests start small in spring with a single queen and grow throughout summer, potentially reaching the size of a dinner plate with dozens of wasps. European wasps build enclosed nests, often underground in garden beds or in wall cavities and roof voids. Their nests can grow very large — containing thousands of workers — and they are significantly more aggressive than paper wasps, especially in autumn when colonies decline and workers become food-stressed.

Attempting to remove a wasp nest without proper training and protective equipment is dangerous. Wasps release alarm pheromones when disturbed, triggering a coordinated attack from the entire colony. Multiple stings can cause serious medical complications even in non-allergic individuals. European wasp stings, in particular, are associated with a high rate of anaphylactic reactions.

Our wasp removal service is performed by licensed technicians wearing full protective equipment. For visible nests (paper wasps under eaves, etc.), we apply a rapid-knockdown insecticide directly into the nest, then physically remove it once the wasps have been eliminated. For concealed nests (European wasps in wall cavities or underground), we apply insecticidal dust into the nest entrance, which is carried throughout the colony by returning foragers.

We also treat the surrounding area with a residual insecticide to deter wasps from rebuilding in the same location. For properties with recurring wasp problems, we offer pre-season treatments in early spring to eliminate founding queens before nests are established.

After nest removal, we inspect for additional nests on the property and advise on reducing attractants — covering food and drinks outdoors, securing bin lids, removing fallen fruit, and sealing gaps where wasps might enter the building.

Our service covers residential homes, schools, childcare centres, outdoor dining areas, and commercial premises across Sydney. We prioritise same-day response for wasp callouts, particularly when nests are near high-traffic areas or where there are allergy concerns.`,
    process: [
      {
        title: "Assessment & Safety Zone",
        description:
          "We locate the nest, identify the wasp species, assess the risk, and establish a safe perimeter. Occupants and pets are advised to stay clear during treatment.",
      },
      {
        title: "Nest Treatment",
        description:
          "Using full protective equipment, we apply a rapid-knockdown insecticide directly into the nest (visible nests) or into the entry point (concealed nests). The product eliminates all wasps within the colony.",
      },
      {
        title: "Nest Removal & Cleanup",
        description:
          "Once the wasps are eliminated, we physically remove the nest (where accessible) and clean up any debris. Concealed nests are left to decompose naturally after treatment.",
      },
      {
        title: "Deterrent Treatment",
        description:
          "We apply a residual insecticide to the nest site and surrounding areas to discourage wasps from rebuilding. We also check for additional nests on the property.",
      },
    ],
    benefits: [
      "Same-day service available for wasp emergencies — we prioritise safety",
      "Fully equipped technicians with professional protective gear",
      "Complete nest elimination and physical removal where accessible",
      "Residual deterrent treatment to prevent rebuilding",
      "Service covers residential, schools, childcare centres, and commercial venues",
    ],
    faqs: [
      {
        question: "Is it safe to remove a wasp nest myself?",
        answer:
          "We strongly advise against DIY wasp nest removal. Disturbing a nest triggers aggressive defensive behaviour from the entire colony. Without proper protective equipment and insecticides, you risk multiple stings which can cause serious medical reactions. Call a professional.",
      },
      {
        question: "How quickly can you come out for a wasp nest?",
        answer:
          "We offer same-day service for wasp callouts in most areas of Sydney. Nests near children, schools, or outdoor dining areas are treated as a priority. Request a quote online and we'll arrange the earliest available technician.",
      },
      {
        question: "What is the difference between paper wasps and European wasps?",
        answer:
          "Paper wasps build open, umbrella-shaped nests under sheltered structures and are moderately aggressive. European wasps build large enclosed nests (often underground or in wall cavities), are bright yellow and black, and are significantly more aggressive. European wasps are also attracted to food and drinks, unlike paper wasps.",
      },
      {
        question: "Will wasps rebuild after you remove the nest?",
        answer:
          "We apply a residual deterrent to the nest site to discourage rebuilding. However, other wasp queens may choose the same general area if conditions are favourable. Our deterrent treatment significantly reduces this likelihood.",
      },
      {
        question: "What should I do if I'm stung by a wasp?",
        answer:
          "Apply a cold pack to reduce pain and swelling. Take antihistamine for mild reactions. If you experience difficulty breathing, facial swelling, dizziness, or widespread hives, call 000 immediately — these are signs of anaphylaxis requiring emergency treatment.",
      },
    ],
    priceNote:
      "Wasp nest removal starts from $89 for a single accessible nest. Multiple nests, concealed nests (in wall cavities or underground), and nests at height may incur additional charges. We provide an exact price on arrival after assessing the situation.",
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 10. Silverfish Control
  // ──────────────────────────────────────────────────────────────────────────
  {
    slug: "silverfish-control",
    longDescription: `Silverfish (Lepisma saccharina) are small, wingless insects with a distinctive silvery-grey, fish-like appearance and wriggling movement. They are one of the oldest insect species on Earth, having existed for over 400 million years. In Sydney homes, silverfish thrive in dark, humid environments — bathrooms, laundries, wardrobes, linen cupboards, bookshelves, and storage areas are their preferred habitats.

While silverfish do not bite or transmit disease, they cause significant damage to household items. They feed on starch, cellulose, and protein — meaning your books, wallpaper, photographs, clothing (especially cotton, linen, and silk), documents, cardboard boxes, and stored papers are all at risk. They also feed on glue and adhesive bindings, which is why valuable book collections are particularly vulnerable. In severe infestations, silverfish can damage stored clothing, important documents, and family photographs beyond repair.

Sydney's coastal humidity makes many suburbs ideal silverfish habitat. The problem is especially acute in older homes with poor ventilation, in bathrooms without exhaust fans, in wardrobes against external walls (where condensation forms), and in subfloor areas with rising damp. Silverfish are nocturnal and shy, which means infestations often go unnoticed until significant damage has occurred.

Our silverfish treatment program combines chemical treatment with environmental recommendations for lasting control. We apply residual insecticide and insecticidal dust to silverfish harbourage areas — inside wardrobes and cupboards, along skirting boards, in bathroom and laundry cabinets, behind bookshelves, in roof voids, and in subfloor spaces. Dust formulations are particularly effective for silverfish because they penetrate into cracks, wall cavities, and carpet edges where silverfish hide during the day.

We also apply insect growth regulators to prevent immature silverfish from reaching breeding age, which reduces populations over time even if some adults survive the initial treatment.

Environmental modification is equally important for long-term silverfish control. We assess your property for humidity issues and advise on improvements such as installing exhaust fans in bathrooms, improving subfloor ventilation, using dehumidifiers in problem areas, avoiding direct contact between stored items and external walls, and using sealed plastic containers instead of cardboard boxes for storage.

Our silverfish treatment is included as standard in our general pest control package, but we also offer targeted silverfish treatments for properties with specific silverfish concerns, such as homes with valuable book or document collections, wardrobes with sensitive clothing, or storage facilities.`,
    process: [
      {
        title: "Inspection & Humidity Assessment",
        description:
          "We identify silverfish activity zones, assess humidity levels, and check for contributing factors like poor ventilation, rising damp, and condensation in wardrobes and bathrooms.",
      },
      {
        title: "Targeted Treatment",
        description:
          "Residual insecticide and dust formulations are applied to harbourage areas — wardrobes, skirting boards, bathrooms, bookshelves, and roof voids. IGRs disrupt the silverfish breeding cycle.",
      },
      {
        title: "Environmental Recommendations",
        description:
          "We provide tailored advice on reducing humidity, improving ventilation, and protecting valuable items with sealed containers, silica gel packets, and appropriate storage practices.",
      },
      {
        title: "Follow-Up",
        description:
          "We recommend a check at 4-6 weeks to assess the effectiveness of treatment and environmental changes, with reapplication if necessary.",
      },
    ],
    benefits: [
      "Targeted treatments using dust formulations that reach silverfish in concealed harbourage areas",
      "Insect growth regulators to break the breeding cycle for long-term control",
      "Humidity assessment and ventilation advice to address the root cause",
      "Protection for valuable books, documents, clothing, and photographs",
      "Included in our general pest control package, or available as a standalone treatment",
    ],
    faqs: [
      {
        question: "Are silverfish harmful?",
        answer:
          "Silverfish do not bite or transmit disease, but they cause damage to paper, books, clothing, photographs, wallpaper, and other starch-based materials. In severe infestations, the damage to stored items can be significant and irreplaceable.",
      },
      {
        question: "Why are there so many silverfish in my bathroom?",
        answer:
          "Silverfish thrive in humid environments. Bathrooms without exhaust fans or with poor ventilation create ideal conditions. They hide in cracks, behind tiles, and in cabinets during the day and emerge at night to feed on paper and organic debris.",
      },
      {
        question: "How do I protect my books from silverfish?",
        answer:
          "Store valuable books in sealed glass-fronted cabinets or plastic containers. Keep shelving away from external walls where condensation can form. Reduce room humidity with exhaust fans or dehumidifiers. Professional treatment of the room and surrounding areas will further reduce silverfish populations.",
      },
      {
        question: "Does general pest control cover silverfish?",
        answer:
          "Yes. Our general pest control treatment includes silverfish as standard, alongside cockroaches, spiders, and ants. If silverfish are your primary concern, let us know when booking so we can focus additional attention on your wardrobe, bathroom, and storage areas.",
      },
      {
        question: "How long does silverfish treatment take to work?",
        answer:
          "You should notice a significant reduction in silverfish activity within 1-2 weeks. Complete control, especially with the IGR component, may take 4-6 weeks as the breeding cycle is disrupted. The residual effect of the treatment continues to work for several months.",
      },
    ],
    priceNote:
      "Silverfish treatment for a standard 3-bedroom home starts from $139 as a standalone service. Silverfish treatment is also included in our general pest control package (from $189), which covers cockroaches, spiders, ants, and silverfish in one visit.",
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 11. Bird Control
  // ──────────────────────────────────────────────────────────────────────────
  {
    slug: "bird-control",
    longDescription: `Pest birds — primarily pigeons (Columba livia), Indian mynas (Acridotheres tristis), and starlings (Sturnus vulgaris) — are a significant nuisance for Sydney property owners. Their droppings deface and corrode building surfaces, their nesting materials block gutters and drainage, and they carry diseases and parasites including bird mites, histoplasmosis, and psittacosis. For commercial properties, bird infestations can result in failed health inspections, stock contamination, and damage to signage and equipment.

Bird droppings are not merely unsightly — they are acidic and progressively damage painted surfaces, concrete, metal roofing, stone, and timber. The cost of ongoing cleaning far exceeds the investment in a proper deterrent system. Bird mites, which live in nests and can migrate into living and working spaces when birds leave, cause intensely itchy bites and are a common secondary pest issue.

Our bird control services focus on humane, long-term deterrent solutions rather than lethal methods. We design and install bird management systems tailored to the species, the building type, and the severity of the problem.

Bird netting is the most effective and versatile solution for excluding birds from specific areas. We install UV-stabilised, flame-retardant netting over balconies, courtyards, loading docks, warehouse interiors, and plant rooms. Our netting is available in various mesh sizes to exclude different bird species and is installed with stainless steel fixings and tensioning systems for durability and aesthetics.

Bird spike systems are ideal for ledges, parapets, signage, and narrow surfaces where birds roost. We use stainless steel spikes on commercial buildings and polycarbonate spikes on residential properties where a less visible profile is preferred. Spikes prevent landing without harming the birds.

For larger areas such as rooflines, solar panel arrays, and flat roofs, we install bird wire systems — tensioned stainless steel wires at specific heights that prevent birds from landing comfortably. Post-and-wire systems are particularly effective for pigeons on heritage buildings where aesthetics are important.

We also offer visual deterrents, sonic deterrents, and gel-based repellents for specific applications. Solar panel bird proofing — using mesh skirting around panel arrays — prevents pigeons from nesting underneath, which is an increasingly common problem in Sydney.

All installations are carried out by technicians trained in working at height, with full safety certification. We provide warranties on all materials and workmanship and can arrange ongoing maintenance programs for commercial clients.`,
    process: [
      {
        title: "Site Assessment",
        description:
          "We inspect the property, identify the bird species, assess the extent of the problem, and design a deterrent solution tailored to the building type, location, and aesthetic requirements.",
      },
      {
        title: "System Design & Quote",
        description:
          "We provide a detailed proposal with drawings, material specifications, and pricing. For strata and commercial properties, we liaise with building managers and owners to ensure approval.",
      },
      {
        title: "Installation",
        description:
          "Our height-certified technicians install the chosen system — netting, spikes, wire, or a combination. All fixings are marine-grade stainless steel for durability. Existing droppings and nesting material are removed.",
      },
      {
        title: "Cleanup & Warranty",
        description:
          "We clean up all bird droppings and nesting debris from treated areas. A warranty on materials and workmanship is provided, and we offer ongoing maintenance programs for commercial clients.",
      },
    ],
    benefits: [
      "Humane, non-lethal deterrent systems that comply with Australian wildlife regulations",
      "Professional-grade UV-stabilised netting, stainless steel spikes, and wire systems",
      "Discreet installations that maintain building aesthetics — important for heritage and residential properties",
      "Solar panel bird proofing to protect your investment from nesting damage",
      "Height-certified technicians with full safety compliance for all installations",
    ],
    faqs: [
      {
        question: "Is it legal to deter birds in Sydney?",
        answer:
          "Yes. Deterrent systems (netting, spikes, wire) are legal for all pest bird species including pigeons, Indian mynas, and starlings. Native bird species are protected under NSW law and cannot be harmed, but humane exclusion is permitted. We design all systems to be species-appropriate and compliant.",
      },
      {
        question: "How long do bird deterrent installations last?",
        answer:
          "Our netting systems are UV-stabilised and typically last 10-15 years. Stainless steel spike and wire systems can last 20+ years with minimal maintenance. We warranty our materials and workmanship and offer periodic maintenance inspections.",
      },
      {
        question: "Can you stop pigeons nesting under my solar panels?",
        answer:
          "Yes. Solar panel bird proofing is one of our most requested services. We install galvanised mesh skirting around the perimeter of the solar panel array, preventing pigeons from accessing the space underneath. This protects your panels and roof from droppings and nesting debris.",
      },
      {
        question: "Do you clean up bird droppings?",
        answer:
          "Yes. Droppings and nesting material removal is included in our installation service. For ongoing cleaning without deterrent installation, we offer scheduled cleaning services for commercial properties, including sanitisation of affected surfaces.",
      },
      {
        question: "What about bird mites from an old nest?",
        answer:
          "Bird mites are a common secondary issue when bird nests are disturbed or removed. We treat affected areas with a residual insecticide that eliminates mites. If you are experiencing bird mite bites after nest removal, contact us promptly — early treatment prevents the problem from spreading.",
      },
    ],
    priceNote:
      "Bird control pricing depends on the type of system, area to be covered, and building height. Simple residential spike installations start from $249. Netting, wire systems, and solar panel proofing are quoted individually following a site assessment.",
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 12. Pantry Pest Control
  // ──────────────────────────────────────────────────────────────────────────
  {
    slug: "pantry-pest-control",
    longDescription: `Pantry pests — also known as stored product pests — include Indian meal moths (Plodia interpunctella), Mediterranean flour moths, grain weevils, rice weevils, sawtoothed grain beetles, drugstore beetles, and biscuit beetles. These insects infest dry food products including flour, rice, pasta, cereals, dried fruit, nuts, spices, chocolate, pet food, and bird seed. They are among the most common kitchen pests in Sydney and are typically introduced via infested products purchased from the supermarket or market.

Indian meal moths are the most visible pantry pest, with adult moths (small, about 10mm, with copper-banded wings) flying around kitchens, particularly at night. However, it is the larval stage that does the damage — tiny cream-coloured caterpillars that burrow through food products, leaving behind webbing, frass (droppings), and contamination. A single female moth can lay up to 400 eggs, and in Sydney's warm climate, the lifecycle from egg to adult can be as short as 4 weeks, meaning populations can explode rapidly.

Weevils and beetles are harder to spot. Rice weevils (small, dark, with a distinctive snout) bore into individual rice grains and cereal kernels to lay eggs. Sawtoothed grain beetles (small, flat, brown) infest a huge range of dry products and can chew through packaging. These pests can be present in products at the time of purchase, as eggs and larvae are too small to see and can survive processing.

Our pantry pest treatment begins with a thorough inspection of your pantry, kitchen cupboards, and any other food storage areas. We identify the pest species, locate the source of infestation (often a forgotten or rarely used food item), and assess the extent of the problem.

Treatment involves a combination of sanitation, physical removal, and targeted insecticide application. We guide you through removing and disposing of infested products, then apply a residual insecticide to pantry shelves, cupboard interiors, cracks, crevices, and surrounding areas. We also install pheromone traps to monitor for remaining moth activity and catch adult males, reducing the breeding population.

Preventive measures are a key part of the service. We advise on transferring all dry goods into airtight glass or hard plastic containers, checking new products before storing them, rotating stock to use older items first, and cleaning pantry shelves regularly. Bay leaves and pheromone traps placed in the pantry can serve as early warning systems.

For commercial food premises — bakeries, restaurants, supermarkets, and food warehouses — we provide more extensive treatment programs with regular monitoring, fumigation options, and compliance documentation.`,
    process: [
      {
        title: "Pantry Inspection",
        description:
          "We examine all food storage areas, identify the pest species, and locate the source of infestation. Every product is checked for signs of contamination, webbing, or larvae.",
      },
      {
        title: "Source Removal",
        description:
          "Infested products are identified and disposed of. Pantry shelves are vacuumed thoroughly to remove eggs, larvae, and debris from cracks and shelf liners.",
      },
      {
        title: "Treatment & Monitoring",
        description:
          "A residual insecticide is applied to pantry shelves, cupboard interiors, and surrounding cracks. Pheromone traps are installed to monitor ongoing moth activity and catch adult males.",
      },
      {
        title: "Prevention Advice",
        description:
          "We advise on airtight food storage, stock rotation, regular pantry cleaning, and early detection methods to prevent future infestations.",
      },
    ],
    benefits: [
      "Expert identification of the specific pantry pest species for targeted treatment",
      "Thorough source removal and sanitation to eliminate the breeding population",
      "Pheromone traps for ongoing monitoring and early detection of recurrence",
      "Practical advice on food storage and prevention that lasts beyond the treatment",
      "Commercial programs available for bakeries, restaurants, and food warehouses",
    ],
    faqs: [
      {
        question: "Where do pantry moths come from?",
        answer:
          "Pantry moths are almost always introduced via infested food products — flour, rice, cereal, dried fruit, nuts, or pet food. The eggs and small larvae are invisible to the naked eye and can be present at the time of purchase. Once inside your pantry, they spread to other products.",
      },
      {
        question: "Do I need to throw away all my pantry food?",
        answer:
          "Not necessarily. We inspect each product and only advise disposing of those that show signs of infestation (webbing, larvae, exit holes, unusual clumping). Unopened, properly sealed products are usually fine. Transferring all dry goods into airtight containers prevents further spread.",
      },
      {
        question: "How do pheromone traps work?",
        answer:
          "Pheromone traps contain a synthetic version of the female moth's sex pheromone that attracts male moths onto a sticky surface. While they won't eliminate an infestation on their own, they reduce the breeding population and serve as an excellent monitoring tool to detect activity early.",
      },
      {
        question: "Can pantry pests make me sick?",
        answer:
          "Consuming food contaminated with pantry pest larvae or droppings is unpleasant but generally not harmful. However, heavily infested products should be discarded. The main concern is food waste, contamination, and the frustration of an ongoing infestation.",
      },
      {
        question: "How do I prevent pantry pests from coming back?",
        answer:
          "Store all dry goods in airtight glass or hard plastic containers. Check new products before putting them in the pantry. Rotate stock so older items are used first. Clean pantry shelves regularly and vacuum cracks and corners. Place a pheromone trap in the pantry as an early warning system.",
      },
    ],
    priceNote:
      "Pantry pest treatment is quoted based on the extent of infestation and the size of the affected area. Residential treatments typically include inspection, treatment, pheromone traps, and a follow-up check. Contact us for a free quote.",
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 13. Drain Fly Treatment
  // ──────────────────────────────────────────────────────────────────────────
  {
    slug: "drain-fly-treatment",
    longDescription: `Drain flies (Psychodidae family), also known as moth flies or sewer gnats, are small, fuzzy, moth-like insects that are commonly found in Sydney bathrooms, laundries, kitchens, and commercial food premises. While they do not bite or transmit disease directly, their presence indicates organic build-up in drains and plumbing — and in large numbers, they are a significant nuisance and a hygiene concern, particularly in food preparation environments.

Drain flies breed in the thin film of organic sludge (biofilm) that accumulates inside drains, pipes, floor waste gullies, grease traps, and septic systems. Each female can lay up to 100 eggs in this biofilm, and in Sydney's warm climate, the life cycle from egg to adult takes just 8-24 days. This rapid reproduction means a small population can become a large infestation very quickly if the breeding source is not addressed.

The key to effective drain fly control is identifying and eliminating the breeding source. Killing the adult flies with insecticide alone will not resolve the problem — the larvae and pupae developing in the drain biofilm will continue to emerge. Our approach addresses both the adults and the breeding environment.

During inspection, we identify which drains, pipes, or fixtures are harbouring drain fly larvae. This is done by placing clear tape over drain openings overnight — emerging adults stick to the tape and confirm the active breeding sites. We also check floor waste gullies, infrequently used drains (where the water seal may have evaporated), grease traps, and any areas of standing water or organic accumulation.

Treatment involves a multi-step process. First, we mechanically clean the affected drains using enzymatic drain cleaners or, in commercial settings, high-pressure drain cleaning, to remove the organic biofilm that larvae feed on. This is the most important step. Second, we apply a residual insecticide to surfaces around drain openings, floor waste gullies, and walls near breeding sites to kill adult flies on contact. Third, for commercial kitchens and food premises, we may install UV light fly traps near affected areas to capture adults.

For properties with recurring drain fly problems, ongoing maintenance is essential. We recommend regular enzymatic drain treatment, ensuring all drains have functioning water seals (running water through infrequently used drains), and addressing any plumbing issues such as broken seals, cracked pipes, or poor drainage that contribute to organic accumulation.

Drain flies in commercial food premises can result in failed health inspections and pest management audit failures. Our commercial programs include regular monitoring, scheduled treatments, and detailed documentation to maintain compliance.`,
    process: [
      {
        title: "Source Identification",
        description:
          "We locate the specific drains, pipes, and fixtures where drain flies are breeding using tape tests, visual inspection, and assessment of plumbing condition. Every potential breeding site is checked.",
      },
      {
        title: "Drain Cleaning & Biofilm Removal",
        description:
          "The organic biofilm inside affected drains is removed using enzymatic cleaners or mechanical cleaning. This eliminates the larval food source and is the critical step for lasting control.",
      },
      {
        title: "Adult Fly Treatment",
        description:
          "A residual insecticide is applied to surfaces around drain openings and adjacent walls to kill adult flies on contact. UV light traps may be installed in commercial settings.",
      },
      {
        title: "Prevention & Maintenance",
        description:
          "We advise on regular drain maintenance, water seal checks, and plumbing repairs to prevent biofilm accumulation and recurrence. Scheduled maintenance programs are available for commercial premises.",
      },
    ],
    benefits: [
      "Targets the breeding source (drain biofilm), not just the adult flies",
      "Enzymatic drain cleaning removes the organic material larvae feed on",
      "Identification of all active breeding sites prevents partial treatment",
      "Ongoing maintenance programs for commercial kitchens and food premises",
      "Plumbing assessment to address underlying issues contributing to the problem",
    ],
    faqs: [
      {
        question: "What are drain flies and where do they come from?",
        answer:
          "Drain flies are small (2-4mm), fuzzy, moth-like insects that breed in the organic sludge inside drains, pipes, and floor waste gullies. They are commonly found in bathrooms, laundries, and kitchens. The larvae develop in the biofilm and emerge as adults from drain openings.",
      },
      {
        question: "Why do drain flies keep coming back?",
        answer:
          "If drain flies keep returning, the breeding source has not been fully eliminated. The organic biofilm inside the affected drain needs to be physically removed — killing adult flies alone does not address the larvae developing in the drain. Professional drain cleaning combined with insecticide treatment provides lasting results.",
      },
      {
        question: "Can drain flies come from the sewer?",
        answer:
          "Drain flies can breed in sewer pipes, but they typically enter homes through drains with evaporated water seals or damaged plumbing. Running water through all drains at least weekly maintains the water seal and prevents sewer-dwelling flies from entering.",
      },
      {
        question: "Are drain flies harmful?",
        answer:
          "Drain flies do not bite or transmit disease directly. However, they breed in unsanitary organic sludge, and their presence indicates poor drain hygiene. In food premises, drain flies are a hygiene concern and can cause compliance failures during health inspections.",
      },
      {
        question: "How long does drain fly treatment take to work?",
        answer:
          "Adult drain fly numbers should drop significantly within 24-48 hours of treatment. However, larvae and pupae already developing in drains may continue to emerge for up to 2 weeks. If the breeding source has been properly cleaned, these will be the last to emerge.",
      },
    ],
    priceNote:
      "Drain fly treatment is quoted based on the number of affected drains and the scope of cleaning required. Residential treatments include inspection, drain cleaning, insecticide application, and a follow-up check. Contact us for a free assessment.",
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 14. Possum Removal
  // ──────────────────────────────────────────────────────────────────────────
  {
    slug: "possum-removal",
    longDescription: `Possums are a common and often frustrating wildlife issue for Sydney homeowners. The two species most frequently found in urban areas are the common brushtail possum (Trichosurus vulpecula) and the common ringtail possum (Pseudocheirus peregrinus). While possums are endearing in their natural habitat, when they take up residence in your roof cavity they can cause significant noise disturbance, damage to insulation and wiring, staining from urine, and unpleasant odours.

It is critical to understand that possums are protected native animals under the NSW National Parks and Wildlife Act 1974. It is illegal to harm, kill, or relocate possums more than 150 metres from the point of capture. Possums caught in cage traps must be released on the same property at dusk on the day of capture. Unlicensed possum removal can result in significant fines. Our possum management service is fully licensed and compliant with all NSW regulations.

Brushtail possums are the more common roof-dwelling species. They are larger (up to 4kg), solitary, and highly territorial. They typically access roof cavities through gaps in the eaves, broken tiles, lifted ridge capping, and gaps around plumbing or electrical penetrations. Once inside, they establish a latrine area (causing staining and odour), scratch and gnaw at building materials, and can damage electrical wiring — creating a fire risk.

Ringtail possums are smaller, more social, and typically nest in dense vegetation or purpose-built dreys (nests). They are less likely to enter roof cavities but will use them if natural nesting sites are unavailable.

Our possum removal process is designed to be humane, effective, and legally compliant. We begin with a thorough inspection of your roof void and the building exterior to confirm possum presence, identify the species, and locate all entry and exit points. We then install a one-way exclusion device — a specially designed door or flap — at the primary entry point, allowing the possum to leave at dusk to feed but preventing re-entry. All other potential entry points are sealed with durable materials such as steel mesh, metal flashing, and timber.

As a condition of responsible possum management, we install a possum nesting box on the property to provide alternative shelter. This reduces the likelihood of the possum seeking access to another part of the building or a neighbouring property. The nesting box is positioned in a suitable tree or under the eaves, at an appropriate height and orientation.

After 3-5 nights, we return to confirm the possum has vacated, remove the one-way device, and permanently seal the final entry point. We also clean and deodorise the roof void if staining or odour is present.

Our service covers all Sydney suburbs and we hold the necessary NSW National Parks and Wildlife licence for possum management.`,
    process: [
      {
        title: "Inspection & Entry Point Mapping",
        description:
          "We inspect the roof void, eaves, and exterior to confirm possum presence, identify the species, and map all entry and exit points used by the animal.",
      },
      {
        title: "One-Way Exclusion Device Installation",
        description:
          "A one-way door or flap is fitted at the primary entry point. All other access points are sealed with steel mesh and metal flashing. The possum can leave to feed at dusk but cannot re-enter.",
      },
      {
        title: "Nesting Box Installation",
        description:
          "A possum nesting box is installed on the property in a suitable tree or under the eaves, providing alternative shelter and reducing the likelihood of the possum attempting to re-enter.",
      },
      {
        title: "Follow-Up & Permanent Sealing",
        description:
          "After 3-5 nights, we return to confirm the possum has vacated, remove the exclusion device, and permanently seal the final entry point. Roof void cleaning and deodorising is available.",
      },
    ],
    benefits: [
      "Fully licensed and compliant with NSW National Parks and Wildlife regulations",
      "Humane one-way exclusion method — no trapping, no harm to the possum",
      "Complete entry point sealing to prevent re-entry by any wildlife",
      "Nesting box provided as alternative shelter, included in the service",
      "Roof void cleaning and deodorising available to remove staining and odours",
    ],
    faqs: [
      {
        question: "Is it legal to remove possums in NSW?",
        answer:
          "You cannot harm, kill, or relocate possums. Under NSW law, possums must be managed using humane exclusion methods. If trapped, they must be released on the same property at dusk. We hold the necessary licence and follow all regulations to the letter.",
      },
      {
        question: "How long does possum removal take?",
        answer:
          "The initial visit (inspection, exclusion device installation, and sealing) takes 2-3 hours. The possum typically vacates within 1-3 nights. We return after 3-5 nights to confirm, remove the device, and do the final seal. The entire process spans about a week.",
      },
      {
        question: "Will the possum just get into my neighbour's roof instead?",
        answer:
          "The nesting box we install provides the possum with a comfortable, dry, safe alternative shelter. In most cases, possums readily adopt the nesting box. However, we recommend advising neighbours to check their own roofs and seal any potential entry points.",
      },
      {
        question: "Can possums damage electrical wiring?",
        answer:
          "Yes. Possums gnaw on materials in the roof void, including electrical wiring insulation. This creates a genuine fire risk. If you suspect possum activity in your roof, have it addressed promptly and consider an electrical inspection as well.",
      },
      {
        question: "Do you clean the roof after the possum is gone?",
        answer:
          "Yes, we offer roof void cleaning and deodorising as an add-on service. Possum urine and droppings cause staining and strong odour. We remove soiled insulation, sanitise affected areas, and apply an odour-neutralising treatment.",
      },
    ],
    priceNote:
      "Possum removal is quoted based on the number of entry points, roof accessibility, and whether cleaning is required. The service includes inspection, one-way exclusion device, sealing of all entry points, a nesting box, and a follow-up visit. Contact us for a free quote.",
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 15. Bee Removal
  // ──────────────────────────────────────────────────────────────────────────
  {
    slug: "bee-removal",
    longDescription: `Bees are vital pollinators and an essential part of Australia's ecosystem. However, when a bee swarm settles on your property or a colony establishes a hive in a wall cavity, roof void, or other structural space, it can become a safety concern — particularly for families with young children, the elderly, or anyone with bee sting allergies.

In Sydney, the most commonly encountered species is the European honeybee (Apis mellifera). Honeybees form large colonies of 20,000 to 80,000 individuals and produce significant quantities of honeycomb and honey within their nesting cavity. When bees establish a hive inside a building structure, the colony can cause damage through moisture, honey seepage, wax moth infestation, and the attraction of other pests such as ants, cockroaches, and rodents.

Bee swarms — a large cluster of bees hanging from a tree branch, fence, or building — are a natural part of the bee reproductive cycle. A swarm is a colony in transit, looking for a new home, and will often move on within 24-72 hours if left undisturbed. Swarms are generally docile because the bees have no hive or brood to defend. However, if a swarm settles in an inconvenient or dangerous location, professional removal is warranted.

Our bee removal service prioritises live relocation wherever possible. We work with local beekeepers who take the relocated colonies and integrate them into their apiaries. Live bee removal involves carefully capturing the queen and as many workers as possible, transferring them into a hive box, and transporting them to the beekeeper. For swarms, this is often straightforward. For established hives in wall cavities or roof spaces, it may require opening the cavity to access the colony and remove the honeycomb.

In some situations, live removal is not feasible — for example, when a hive is deeply embedded in a sealed wall cavity, when the colony is aggressive (Africanised genetics are occasionally encountered), or when there is an immediate safety risk. In these cases, we use targeted insecticidal treatment to eliminate the colony, followed by removal of the honeycomb and sealing of the cavity to prevent future colonisation and secondary pest attraction.

Regardless of the method used, we always seal the entry point after removal to prevent a new swarm from being attracted to the same location. Bees are drawn to the pheromone residues left by previous colonies, and an unsealed cavity will almost certainly be recolonised.

We provide bee removal services for residential homes, schools, childcare centres, commercial buildings, and public spaces throughout Sydney. Same-day service is available for urgent situations.`,
    process: [
      {
        title: "Assessment & Safety",
        description:
          "We assess the location, size, and accessibility of the swarm or hive, identify any immediate safety risks, and determine whether live relocation or treatment is the most appropriate approach.",
      },
      {
        title: "Removal or Treatment",
        description:
          "For swarms and accessible hives, we perform live removal and transfer the bees to a local beekeeper. For inaccessible or dangerous hives, we apply targeted treatment to eliminate the colony safely.",
      },
      {
        title: "Honeycomb Removal & Cleanup",
        description:
          "Honeycomb is removed from the cavity to prevent honey seepage, wax moth infestation, and attraction of secondary pests. The area is cleaned and any structural openings are repaired.",
      },
      {
        title: "Entry Point Sealing",
        description:
          "All access points are sealed with durable materials to prevent future swarms from being attracted by residual pheromones and recolonising the same location.",
      },
    ],
    benefits: [
      "Live bee relocation to local beekeepers wherever possible — environmentally responsible",
      "Safe handling by experienced technicians with full protective equipment",
      "Complete honeycomb removal to prevent secondary pest problems and structural damage",
      "Entry point sealing to prevent recolonisation of the same location",
      "Same-day service available for urgent bee removal situations",
    ],
    faqs: [
      {
        question: "Will you kill the bees?",
        answer:
          "We prioritise live relocation wherever possible and work with local beekeepers to rehome colonies. However, when live removal is not safe or feasible (deeply embedded hives, aggressive colonies, or immediate danger to people), targeted treatment may be necessary.",
      },
      {
        question: "Should I wait for a bee swarm to leave on its own?",
        answer:
          "Swarms often move on within 24-72 hours. If the swarm is in a non-threatening location away from people and pets, waiting is a reasonable approach. If it is near a doorway, playground, or high-traffic area, or if anyone nearby has a bee allergy, professional removal is recommended.",
      },
      {
        question: "Why do bees keep coming back to the same spot?",
        answer:
          "Bees are attracted by pheromone residues left by previous colonies. If a hive is removed without sealing the entry point and cleaning the cavity, new swarms will be drawn to the same location. We always seal cavities and remove comb to prevent recolonisation.",
      },
      {
        question: "Can bees damage my house?",
        answer:
          "Yes. Established hives in wall cavities or roof voids produce large quantities of honeycomb and honey. Honey can seep through plaster, stain ceilings, and attract secondary pests. The moisture from honey production can also cause timber rot and plaster damage over time.",
      },
      {
        question: "What should I do if someone is stung?",
        answer:
          "Remove the stinger by scraping sideways (don't squeeze it), apply a cold pack, and take antihistamine for mild reactions. If the person experiences difficulty breathing, facial swelling, dizziness, or widespread hives, call 000 immediately — these are signs of anaphylaxis.",
      },
    ],
    priceNote:
      "Bee removal is quoted based on the location, accessibility, and size of the colony. Swarm removal is generally less expensive than established hive removal, which may require cavity access and structural repair. Contact us for a free assessment.",
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 16. Tick Treatment
  // ──────────────────────────────────────────────────────────────────────────
  {
    slug: "tick-treatment",
    longDescription: `The Australian paralysis tick (Ixodes holocyclus) is one of the most medically significant tick species in the world, and Sydney's bushland-adjacent suburbs are a hotspot for tick encounters. Found along the entire eastern seaboard, paralysis ticks are most active from August to February (spring through summer) and are prevalent in areas with native bush, tall grass, and leaf litter — particularly the Northern Beaches, Sutherland Shire, upper north shore, and any suburb bordering national park or reserve bushland.

Paralysis tick bites can cause serious illness in humans, including localised allergic reactions, tick paralysis (a progressive ascending paralysis caused by neurotoxin in the tick's saliva), and mammalian meat allergy (alpha-gal syndrome), which can develop after a single sensitising tick bite and results in a lifelong allergy to red meat and mammalian products. In dogs, paralysis ticks are a veterinary emergency — untreated tick paralysis in dogs is frequently fatal.

Our tick treatment service targets the tick population in your yard, reducing the risk of encounters for your family and pets. We apply registered acaricides (tick-specific insecticides) to the areas where ticks are most likely to be found — garden bed edges, leaf litter zones, low vegetation, fence lines, lawn borders, under decks, and along bush boundary areas. These products have a residual effect that continues to kill ticks for several weeks after application.

We tailor our treatment to the specific conditions of your property. Properties directly backing onto bushland require a more comprehensive treatment than those in open suburban settings. We assess vegetation density, shade patterns, moisture levels, and wildlife corridors to determine where ticks are most likely to quest (wait for a passing host with front legs extended).

Environmental modification advice is an important part of our service. We recommend reducing leaf litter accumulation, keeping lawns short, creating a cleared buffer zone (bark, gravel, or paving) between bushland and living areas, removing low-hanging vegetation along pathways, and keeping play equipment away from bush edges. These measures significantly reduce tick encounters.

We recommend pre-season treatment in August-September (before peak tick activity) and a mid-season booster in November-December for high-risk properties. For properties with ongoing concerns, we offer seasonal tick management programs with scheduled treatments throughout the tick season.

In addition to yard treatments, we advise on personal protection — wearing light-coloured clothing, using DEET-based repellents, performing thorough tick checks after outdoor activity, and correct tick removal technique (freeze or use fine-tipped tweezers; never squeeze the body).`,
    process: [
      {
        title: "Property Assessment",
        description:
          "We assess your property's tick risk by examining vegetation, proximity to bushland, shade patterns, leaf litter, and wildlife corridors. This determines the treatment zones and intensity required.",
      },
      {
        title: "Targeted Acaricide Application",
        description:
          "Registered tick-specific insecticides are applied to garden beds, leaf litter zones, fence lines, lawn edges, under decks, and bush boundary areas where ticks quest for hosts.",
      },
      {
        title: "Environmental Modification Advice",
        description:
          "We advise on landscaping changes to reduce tick habitat — clearing leaf litter, creating buffer zones, reducing low vegetation, and positioning play areas away from bush edges.",
      },
      {
        title: "Seasonal Program Planning",
        description:
          "For high-risk properties, we recommend a seasonal treatment schedule with pre-season and mid-season applications to maintain protection throughout the tick season (August-February).",
      },
    ],
    benefits: [
      "Reduces paralysis tick populations in your yard for safer family and pet outdoor time",
      "Targeted treatment of tick questing zones based on your property's specific layout",
      "Seasonal treatment programs available for bush-adjacent properties",
      "Expert environmental modification advice to make your property less tick-friendly",
      "Guidance on personal tick prevention and correct tick removal technique",
    ],
    faqs: [
      {
        question: "How effective is yard treatment for ticks?",
        answer:
          "Professional yard treatment can reduce tick populations by 80-90% in treated areas. However, ticks can be carried in by wildlife passing through the property. Ongoing seasonal treatments combined with environmental modification provide the best long-term protection.",
      },
      {
        question: "Is tick treatment safe for my pets?",
        answer:
          "Yes. The products we use are registered for use in areas where pets access. We advise keeping pets off treated areas until the product has dried (typically 2-4 hours). Tick treatment for your yard should complement (not replace) veterinary tick prevention for your pets.",
      },
      {
        question: "When is tick season in Sydney?",
        answer:
          "Peak paralysis tick season in Sydney is August to February, with the highest activity from September to November. However, ticks can be encountered at any time of year in suitable habitat. We recommend pre-season treatment in August and a mid-season booster in November.",
      },
      {
        question: "How should I remove a tick?",
        answer:
          "The recommended method in Australia is to freeze the tick using a product like Wart-Off Freeze or ether-based spray, then let it drop off or remove it with fine-tipped tweezers. Never squeeze the tick body, use methylated spirits, or burn it — these methods can cause the tick to inject more toxin.",
      },
      {
        question: "Can tick bites cause meat allergy?",
        answer:
          "Yes. Bites from the Australian paralysis tick can trigger mammalian meat allergy (alpha-gal syndrome). This is an allergic reaction to a sugar molecule found in red meat and other mammalian products. It can develop after even a single sensitising tick bite and may be lifelong. This is another reason to minimise tick exposure.",
      },
    ],
    priceNote:
      "Tick treatment pricing is based on property size, vegetation density, and proximity to bushland. We provide free quotes for all tick treatment enquiries. Seasonal programs with multiple scheduled treatments are available at a discounted rate.",
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 17. Mite Control
  // ──────────────────────────────────────────────────────────────────────────
  {
    slug: "mite-control",
    longDescription: `Mite infestations in Sydney homes are more common than many people realise, and they can be extremely distressing. The most frequently encountered species include bird mites (Ornithonyssus bursa and Dermanyssus gallinae), dust mites (Dermatophagoides pteronyssinus), and occasionally scabies mites, rat mites, and straw itch mites. Each species has different causes, symptoms, and treatment approaches.

Bird mites are the most common cause of mite complaints in Sydney homes. These tiny (less than 1mm), semi-transparent mites naturally live in bird nests, feeding on the blood of nesting birds. When the birds leave the nest — either naturally after fledging or because the nest is disturbed or removed — the starving mites migrate into the nearest living spaces in search of a blood meal. They enter through gaps around eaves, ceiling vents, light fittings, and air conditioning ducts. Bird mite bites cause intense itching, particularly at night, and can lead to significant distress and sleep disturbance. They are most common in spring and early summer when bird nesting activity peaks.

Our bird mite treatment begins with identifying and removing the source nest (with appropriate permits for protected species). We then treat the affected rooms and the nest site with a residual insecticide that kills mites on contact and continues to work for weeks. Insecticidal dust is applied into the ceiling void, wall cavities, and around light fittings and vents where mites enter. All bedding and clothing should be washed on a hot cycle. The treatment typically resolves the problem within 1-2 weeks, although some residual itching may persist for several days after the mites are eliminated.

Dust mites are microscopic and present in virtually every home. They feed on dead skin cells and thrive in mattresses, pillows, carpets, and upholstered furniture. While they do not bite, their faeces and shed skins are a major trigger for allergies and asthma, affecting up to 45% of Australians. Our dust mite treatment involves applying a denaturing agent (tannic acid or benzyl benzoate) to carpets, mattresses, and soft furnishings to neutralise the allergen proteins. We also advise on environmental controls — allergen-proof mattress and pillow covers, regular hot washing of bedding, reducing carpet and soft furnishings, and maintaining low indoor humidity.

For rat mites, straw itch mites, and other less common species, we identify the source, eliminate it, and apply targeted treatment to affected areas.

All mite treatments are accompanied by detailed advice on environmental management to prevent recurrence. We understand that mite infestations can cause significant psychological distress, and we approach every case with sensitivity and thoroughness.`,
    process: [
      {
        title: "Identification & Source Location",
        description:
          "We identify the mite species, locate the source (bird nest, rodent nest, or environmental factors), and assess the extent of the infestation within the home.",
      },
      {
        title: "Source Removal",
        description:
          "The nest or harbourage source is removed or treated. For bird mites, the nest is removed and the nest site is treated. For dust mites, allergen-denaturing products are applied.",
      },
      {
        title: "Interior Treatment",
        description:
          "Residual insecticide and insecticidal dust are applied to affected rooms, ceiling voids, wall cavities, and entry points (light fittings, vents, eave gaps). All cracks and crevices are treated.",
      },
      {
        title: "Prevention & Environmental Advice",
        description:
          "We seal entry points from the ceiling void, advise on bird-proofing eaves, and provide guidance on allergen reduction, bedding management, and humidity control to prevent recurrence.",
      },
    ],
    benefits: [
      "Accurate identification of the mite species for targeted, effective treatment",
      "Source elimination — not just treating symptoms but removing the cause",
      "Treatment of ceiling voids, wall cavities, and hidden entry points where mites originate",
      "Allergen-denaturing treatments available for dust mite allergy sufferers",
      "Compassionate, thorough service — we understand how distressing mite infestations can be",
    ],
    faqs: [
      {
        question: "What do bird mite bites look like?",
        answer:
          "Bird mite bites appear as small red welts or bumps, often in clusters or lines, typically on exposed skin — arms, neck, and torso. They are intensely itchy, especially at night when mites are most active. The bites are often mistaken for bed bug bites or scabies.",
      },
      {
        question: "Where do bird mites come from?",
        answer:
          "Bird mites live in bird nests, particularly those of pigeons, starlings, Indian mynas, and native species like magpies. When birds leave or nests are disturbed, the starving mites enter homes through eave gaps, ceiling vents, and light fittings seeking a blood meal.",
      },
      {
        question: "Can dust mites be completely eliminated?",
        answer:
          "Dust mites cannot be completely eliminated from any home — they are a natural part of the indoor environment. However, their populations and the allergens they produce can be significantly reduced through allergen-proof covers, regular hot washing, low humidity, and professional denaturing treatments.",
      },
      {
        question: "How long does it take for bird mites to go away after treatment?",
        answer:
          "Most bird mite infestations resolve within 1-2 weeks after professional treatment. The residual insecticide continues to kill mites that emerge from concealed harbourage areas. Some residual itching may persist for several days after the mites are gone due to the histamine response in your skin.",
      },
      {
        question: "Are mites dangerous?",
        answer:
          "Bird mites do not transmit disease but their bites cause intense itching and can lead to secondary skin infections from scratching. Dust mites are a major trigger for asthma and allergies. While mites are not dangerous in the same way as some other pests, infestations can significantly impact quality of life.",
      },
    ],
    priceNote:
      "Mite treatment is quoted based on the species, the extent of infestation, and the number of rooms requiring treatment. Bird mite treatments include nest removal, interior treatment, and a follow-up check. Contact us for a free assessment.",
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 18. General Pest Control
  // ──────────────────────────────────────────────────────────────────────────
  {
    slug: "general-pest-control",
    longDescription: `A general pest control treatment is the most popular and cost-effective way to protect your Sydney home from the everyday pests that are a fact of life in our climate. Our general pest treatment covers the four most common household pest groups — cockroaches, spiders, ants, and silverfish — in a single, comprehensive visit.

This is the treatment we recommend for every Sydney home at least once a year. The combination of our warm, humid climate, diverse building stock, and proximity to bushland and waterways means that pest pressure in Sydney is year-round and persistent. An annual general pest treatment creates a protective barrier that significantly reduces pest activity inside and outside your home for 6-12 months.

Our general pest treatment is not a one-size-fits-all spray. We tailor every treatment to the specific conditions of your property. The visit begins with a walkthrough inspection where we assess pest activity, identify problem areas, and note any environmental factors that may be contributing to pest issues — poor drainage, vegetation against walls, food sources, or moisture problems.

External treatment is the first line of defence. We apply a residual insecticide to the full perimeter of the building — around the base of external walls, window frames, door frames, eaves, weep holes, and any gaps or penetrations. Garden beds, retaining walls, fence lines, and outdoor entertainment areas are also treated. This creates a continuous barrier that intercepts pests before they enter the building.

Internal treatment targets the areas where pests harbour — skirting boards, behind appliances, under sinks, inside cupboards, in bathrooms and laundries, and around plumbing penetrations. For cockroaches, we apply gel bait in kitchens and wet areas. For spiders, we remove webs and treat window frames and cornices. For silverfish, we apply dust into wardrobes, linen cupboards, and bathroom cabinets.

The roof void and subfloor (where accessible and applicable) are treated with insecticidal dust to address spiders, cockroaches, and silverfish in these concealed areas. These spaces are often overlooked in DIY treatments but are critical harbourage zones.

All products we use are APVMA-registered, low-odour, and selected for their safety profile and residual efficacy. We use products from leading manufacturers including BASF, Bayer, and Syngenta. Our technicians advise on ventilation and re-entry times (typically 30-60 minutes once surfaces have dried) and answer any questions about the products used.

We stand behind every general pest treatment with a service warranty. If pests return within the warranty period, we re-treat at no additional cost. For properties that want maximum protection, we offer annual service plans with scheduled treatments and priority booking.`,
    process: [
      {
        title: "Property Walkthrough",
        description:
          "We inspect the property to assess current pest activity, identify problem areas, and note environmental factors. This allows us to tailor the treatment to your specific situation rather than applying a generic spray.",
      },
      {
        title: "External Barrier Treatment",
        description:
          "A residual insecticide is applied to the full building perimeter — walls, eaves, windows, doors, weep holes, garden beds, retaining walls, and outdoor areas. This creates a barrier that intercepts pests before they enter.",
      },
      {
        title: "Internal Treatment",
        description:
          "Skirting boards, wet areas, cupboards, behind appliances, and plumbing penetrations are treated. Gel bait is applied for cockroaches. Webs are removed and spider harbourage zones are treated. Wardrobes receive silverfish treatment.",
      },
      {
        title: "Roof Void & Subfloor (if applicable)",
        description:
          "Insecticidal dust is applied into the roof void and subfloor to treat spiders, cockroaches, and silverfish in these concealed areas. These are critical harbourage zones that DIY treatments miss.",
      },
    ],
    benefits: [
      "Covers cockroaches, spiders, ants, and silverfish in one comprehensive visit",
      "Tailored to your property — not a generic spray-and-pray approach",
      "Full perimeter barrier plus internal, roof void, and subfloor treatment",
      "Low-odour, family-safe products with fast re-entry times",
      "Service warranty — if pests return within the warranty period, we re-treat free of charge",
    ],
    faqs: [
      {
        question: "What pests does general pest control cover?",
        answer:
          "Our standard general pest treatment covers cockroaches (all species), spiders (including redbacks), ants, and silverfish. It does not include termites, rodents, bedbugs, or fleas, which require separate specialist treatments. We offer bundle pricing if you need multiple services.",
      },
      {
        question: "How long does the treatment take?",
        answer:
          "A general pest treatment for a standard 3-bedroom home typically takes 45-60 minutes. Larger homes, properties with extensive gardens, or those requiring roof void and subfloor access may take longer.",
      },
      {
        question: "Do I need to leave the house during treatment?",
        answer:
          "We recommend vacating the treated areas for 30-60 minutes while surfaces dry. You do not need to leave the property entirely. Pets should be kept off treated surfaces until dry. Fish tanks should be covered and aerators turned off during internal spraying.",
      },
      {
        question: "How often should I get general pest control?",
        answer:
          "We recommend annual treatment for most Sydney homes. Properties with higher pest pressure — older homes, near bushland, near water, or with previous infestations — may benefit from treatments every 6 months. Our annual service plans offer scheduled treatments at a discounted rate.",
      },
      {
        question: "Is general pest control safe for my baby or pregnant family member?",
        answer:
          "Yes. All products we use are APVMA-registered and extensively safety-tested. We use low-odour formulations and advise on ventilation and re-entry times. If anyone in the household has specific sensitivities, let us know and we can adjust our product selection.",
      },
    ],
    priceNote:
      "General pest control for a standard 3-bedroom home starts from $189 and includes cockroaches, spiders, ants, and silverfish. Larger homes and properties requiring roof void or subfloor access may be priced slightly higher. We offer free online quotes.",
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 19. Commercial Pest Control
  // ──────────────────────────────────────────────────────────────────────────
  {
    slug: "commercial-pest-control",
    longDescription: `Commercial pest management requires a fundamentally different approach to residential pest control. The stakes are higher — pest sightings in a restaurant can trigger a closure order, in a hotel they can destroy a brand's reputation overnight, and in a warehouse they can contaminate entire shipments of stock. Commercial pest control is not just about eliminating pests; it is about preventing them, documenting everything, and maintaining continuous compliance with industry regulations.

Our commercial pest management programs are built on Integrated Pest Management (IPM) principles, as recommended by the Australian Environmental Pest Managers Association (AEPMA) and required by NSW Food Authority, SafeWork NSW, and industry-specific quality systems including HACCP, SQF, and BRC.

We service a wide range of commercial premises across Sydney, including restaurants and cafes, hotels and serviced apartments, food manufacturing and processing facilities, supermarkets and retail food outlets, warehouses and distribution centres, offices and co-working spaces, schools and childcare centres, aged care facilities, hospitals and medical centres, and strata-managed commercial buildings.

Every commercial program begins with a comprehensive risk assessment of the premises. We identify existing pest activity, potential entry points, harbourage areas, food and water sources, waste management practices, and any structural deficiencies that may contribute to pest risk. Based on this assessment, we develop a tailored pest management plan that specifies treatment methods, monitoring protocols, service frequency, and reporting requirements.

Regular scheduled service visits are the backbone of commercial pest management. Depending on the industry and risk level, visits may be weekly, fortnightly, monthly, or quarterly. During each visit, our technician inspects monitoring devices (bait stations, glue boards, pheromone traps, UV light traps), treats active pest issues, checks for new risk factors, and documents all findings and actions in a detailed service report.

Documentation is critical for compliance. Our digital reporting system provides complete traceability — every service visit, product used, pest sighting, and corrective action is recorded and available to you, your auditor, or council health inspectors on demand. We provide pest activity trend reports, treatment certificates, MSDS documentation, and compliance summaries.

Our commercial pest management capabilities include rodent control (tamper-proof stations, monitoring, exclusion), cockroach management (gel baits, IGRs, targeted sprays), stored product pest programs, fly management (UV traps, ILTs, drain treatments), bird management (netting, spikes, wire systems), and termite protection for commercial buildings.

We assign a dedicated account manager to every commercial client, ensuring consistency, accountability, and a deep understanding of your specific requirements. Emergency callouts are prioritised with same-day response, and we provide 24/7 contact availability for urgent pest issues.`,
    process: [
      {
        title: "Comprehensive Risk Assessment",
        description:
          "We conduct a thorough inspection of the premises, identifying existing pest activity, risk factors, entry points, and compliance gaps. This forms the basis of your tailored pest management plan.",
      },
      {
        title: "Tailored Pest Management Plan",
        description:
          "We develop a detailed plan specifying treatment methods, monitoring protocols, service frequency, reporting requirements, and KPIs — all aligned with your industry standards and compliance needs.",
      },
      {
        title: "Scheduled Service Visits",
        description:
          "Regular visits (weekly to quarterly, depending on risk level) include inspection of monitoring devices, active treatment of pest issues, risk factor assessment, and comprehensive digital reporting.",
      },
      {
        title: "Reporting & Continuous Improvement",
        description:
          "Digital service reports, pest activity trends, treatment certificates, and compliance summaries are provided. We review the program regularly and adjust strategies based on data and changing conditions.",
      },
    ],
    benefits: [
      "IPM-based programs meeting NSW Food Authority, HACCP, SQF, and BRC requirements",
      "Comprehensive digital reporting with complete traceability for audits and inspections",
      "Dedicated account manager for consistency and accountability",
      "Emergency callout service with same-day priority response",
      "Coverage for all commercial pest types — rodents, cockroaches, flies, stored product pests, birds, and termites",
    ],
    faqs: [
      {
        question: "How often do commercial premises need pest control?",
        answer:
          "Food premises (restaurants, cafes, food manufacturers) typically require monthly service visits at minimum, with higher-risk operations on fortnightly or weekly schedules. Offices and warehouses may only need quarterly visits. We tailor the frequency to your specific risk level and industry requirements.",
      },
      {
        question: "Do you provide documentation for health inspections and audits?",
        answer:
          "Yes. Our digital reporting system provides complete documentation — service reports, pest activity logs, product records, MSDS sheets, treatment certificates, and compliance summaries. This documentation is available on demand for council health inspectors, auditors, and quality assurance reviews.",
      },
      {
        question: "Can you service my restaurant outside trading hours?",
        answer:
          "Absolutely. We schedule treatments before or after trading hours to avoid disruption. Early morning, late evening, and weekend service is available. For food premises, out-of-hours treatment is standard practice to maintain food safety.",
      },
      {
        question: "What is Integrated Pest Management (IPM)?",
        answer:
          "IPM is a systematic approach that combines inspection, monitoring, exclusion, sanitation, and targeted chemical treatment to manage pests with minimal environmental impact. It focuses on prevention rather than reactive treatment and is the industry standard for commercial pest management in Australia.",
      },
      {
        question: "Do you offer pest control for strata commercial buildings?",
        answer:
          "Yes. We manage pest control programs for strata commercial buildings including offices, retail, and mixed-use developments. We coordinate with strata managers, handle common areas and individual tenancies, and provide consolidated reporting for the owners' corporation.",
      },
    ],
    priceNote:
      "Commercial pest management programs are quoted individually based on premises size, industry type, risk level, and service frequency. We provide a detailed proposal following the initial risk assessment. Contact us to arrange a free, no-obligation site inspection.",
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 20. Pre-Purchase Inspection
  // ──────────────────────────────────────────────────────────────────────────
  {
    slug: "pre-purchase-inspection",
    longDescription: `Buying a property is likely the largest financial decision you will make. A pre-purchase timber pest inspection is an essential part of your due diligence, providing critical information about the structural condition and pest history of the property before you commit. In Sydney's competitive property market, buyers who skip this step risk inheriting costly pest damage that may not be visible during a standard building inspection.

Our pre-purchase timber pest inspections are conducted in accordance with Australian Standard AS 4349.3 (Inspection of Buildings — Timber Pest Inspections) and provide a comprehensive assessment of the property's pest status. The inspection covers all accessible areas including the interior (walls, floors, doors, windows, skirting, architraves, built-in cabinetry), the roof void, the subfloor (where accessible), the exterior perimeter, fences, retaining walls, garden beds, tree stumps, outbuildings, and any timber structures.

We use professional-grade inspection equipment including thermal imaging cameras (FLIR), professional moisture meters, and Termatrac T3i radar detection units. Thermal imaging detects heat differentials caused by termite activity, moisture, or damaged timbers behind walls and under floors. Moisture meters identify elevated moisture levels that indicate active termite damage or conditions conducive to termite attack. Radar detection can confirm live termite movement inside timbers without destructive investigation.

Our inspection report is a detailed, photographic document that covers four key areas. First, evidence of live (active) termite infestation — the most critical finding, requiring immediate treatment. Second, evidence of previous termite damage — timber that has been damaged by past termite activity, which may or may not have been treated. Third, conditions conducive to termite attack — factors such as high moisture, poor ventilation, garden beds against walls, stored timber, and tree stumps that increase the risk of future infestation. Fourth, the presence of other timber pests including borers and wood decay fungi.

Each finding is documented with photographs, location details, and a clear assessment of severity. We provide practical recommendations for each issue identified — from immediate treatment requirements to preventive measures that can reduce future risk.

The report is delivered within 24 hours of inspection (same-day express reports available on request) and is accepted by solicitors, conveyancers, banks, and insurance companies. It can be used to negotiate the purchase price, request repairs from the vendor, or make an informed decision about whether to proceed with the purchase.

We also offer combined pre-purchase pest and building inspections in partnership with qualified building inspectors, providing a single comprehensive report that covers both structural and pest assessments. This is a convenient and cost-effective option for buyers who want complete peace of mind.

Whether you are buying a house, townhouse, apartment, or commercial property anywhere in Sydney, our pre-purchase inspection gives you the information you need to buy with confidence.`,
    process: [
      {
        title: "Booking & Access Arrangements",
        description:
          "You book the inspection and we coordinate access with the real estate agent or vendor. We can often attend within 24-48 hours of booking to meet tight settlement timelines.",
      },
      {
        title: "Comprehensive Property Inspection",
        description:
          "Our licensed technician inspects all accessible areas using thermal imaging, moisture detection, and radar. Every accessible timber element is assessed for live infestation, previous damage, and conducive conditions.",
      },
      {
        title: "Detailed Report Delivery",
        description:
          "A comprehensive photographic report is delivered within 24 hours, covering active infestation, previous damage, conducive conditions, and other timber pests. Express same-day reports are available.",
      },
      {
        title: "Consultation & Recommendations",
        description:
          "We are available to discuss the report findings with you, your solicitor, or your building inspector. If treatment is needed, we provide a separate treatment quote so you can factor costs into your purchase decision.",
      },
    ],
    benefits: [
      "Inspections conducted to Australian Standard AS 4349.3 — accepted by solicitors, banks, and insurers",
      "Thermal imaging, moisture meters, and radar detection included at no extra cost",
      "Detailed photographic report delivered within 24 hours (express same-day available)",
      "Combined pest and building inspections available for complete property assessment",
      "Helps you negotiate price, request vendor repairs, or avoid a costly mistake",
    ],
    faqs: [
      {
        question: "Is a pre-purchase pest inspection really necessary?",
        answer:
          "We strongly recommend it for every property purchase in Sydney. Termite damage is not always visible during a casual walkthrough, and repairs can cost tens of thousands of dollars. The inspection fee is a tiny fraction of the property price and provides invaluable peace of mind.",
      },
      {
        question: "What is the difference between a building inspection and a pest inspection?",
        answer:
          "A building inspection assesses the structural condition of the property (foundations, walls, roof, plumbing, electrical). A pest inspection specifically assesses timber pest activity and damage (termites, borers, wood decay). They are complementary and we recommend both. We offer combined inspections for convenience.",
      },
      {
        question: "Can you do the inspection before auction day?",
        answer:
          "Yes. We recommend booking the inspection during the pre-auction viewing period. We coordinate with the agent to attend at a suitable time and provide the report well before auction day so you can bid with confidence.",
      },
      {
        question: "What if the inspection finds termites?",
        answer:
          "Finding termites during a pre-purchase inspection is valuable information. It allows you to factor treatment costs into your offer, negotiate a price reduction, request the vendor treat the problem before settlement, or walk away from the purchase. We provide a separate treatment quote if requested.",
      },
      {
        question: "How long does the inspection take?",
        answer:
          "A pre-purchase inspection typically takes 1-2 hours for a standard 3-bedroom home, depending on accessibility and property size. Larger homes, multi-storey properties, or those with extensive gardens and outbuildings may take longer. We never rush a pre-purchase inspection.",
      },
    ],
    priceNote:
      "Pre-purchase timber pest inspection pricing is provided as a tailored quote based on property size, type, and location. Combined pest and building inspection packages are available at a discounted rate. Contact us for a free, no-obligation quote — we can often attend within 24 hours.",
  },
];

// ─── Helper ──────────────────────────────────────────────────────────────────

export function getServiceContent(slug: string): ServiceContent | undefined {
  return SERVICE_CONTENT.find((s) => s.slug === slug);
}
