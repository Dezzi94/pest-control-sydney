// ─── Council Area Extended Content ───────────────────────────────────────────
// Rich SEO content for each of the 12 council areas serviced across Sydney.
// Slugs match exactly with shared/routes/all-routes.ts

export interface CouncilContent {
  slug: string;
  description: string;
  commonPests: string[];
  landmarks: string[];
  faqs: { question: string; answer: string }[];
}

export const COUNCIL_CONTENT: CouncilContent[] = [
  {
    slug: "city-of-sydney",
    description:
      "The City of Sydney is the beating heart of Australia's largest metropolis, encompassing the CBD, Surry Hills, Pyrmont, Ultimo, and Darlinghurst. With its dense mix of high-rise apartments, heritage terraces, commercial towers, and hospitality venues, the area presents unique pest management challenges. Older buildings in Surry Hills and Darlinghurst are particularly susceptible to cockroach and rodent infestations due to ageing plumbing and shared wall cavities. The waterfront precincts around Pyrmont and Darling Harbour attract rodents drawn to food waste from restaurants and bars. Underground car parks and service tunnels beneath the CBD provide ideal harbourage for German cockroaches and rats. Our technicians are experienced in working with strata managers, commercial landlords, and food-service operators across the City of Sydney, delivering discreet treatments that comply with council health regulations and minimise disruption to businesses and residents alike. We service postcodes 2000, 2007, 2009, and 2010 with same-day availability.",
    commonPests: [
      "German cockroaches",
      "Rats and mice",
      "Bedbugs",
      "Silverfish",
      "Pigeons",
    ],
    landmarks: [
      "Sydney Opera House",
      "Darling Harbour",
      "Hyde Park",
      "Central Station",
      "Chinatown",
    ],
    faqs: [
      {
        question: "Do you service high-rise apartments in the CBD?",
        answer:
          "Yes, we regularly treat apartments from studio units to penthouses throughout the CBD. We coordinate with building managers and concierge teams for seamless access. Our treatments are low-odour and safe for enclosed spaces.",
      },
      {
        question: "How do you handle pest control in restaurants and cafes?",
        answer:
          "We offer tailored commercial pest management plans that meet NSW Food Authority requirements. Treatments are scheduled outside trading hours and we provide full compliance documentation for health inspections.",
      },
      {
        question: "Are cockroaches common in Surry Hills terraces?",
        answer:
          "Very common. The ageing plumbing, shared wall cavities, and proximity to hospitality venues in Surry Hills make it a hotspot for German cockroaches. Gel bait treatments combined with sanitation advice deliver the best long-term results.",
      },
      {
        question: "What is the most effective rodent control method for inner-city buildings?",
        answer:
          "We use a combination of tamper-proof bait stations, mechanical traps, and exclusion work to seal entry points. In the CBD, ongoing monitoring programs are essential because neighbouring buildings can serve as a source of re-infestation.",
      },
      {
        question: "Do you offer same-day pest control in Sydney CBD?",
        answer:
          "Yes, we have technicians based in the inner city and can often attend within a few hours of your call. For urgent situations such as rodent sightings in food premises, we prioritise same-day response.",
      },
    ],
  },
  {
    slug: "inner-west-council",
    description:
      "The Inner West council area takes in beloved suburbs such as Newtown, Glebe, Balmain, Leichhardt, and Marrickville — a patchwork of Federation homes, workers' cottages, converted warehouses, and bustling dining strips. The area's mature tree canopy and established gardens provide habitat for spiders, ants, and possums, while older timber-framed homes are at risk of termite damage. Newtown's vibrant King Street restaurant strip and Marrickville's industrial food producers attract cockroaches and rodents. Subfloor areas beneath elevated timber homes in Balmain and Glebe are prone to dampness, creating ideal conditions for termites, silverfish, and fungal decay. The Inner West's proximity to the Cooks River and Iron Cove also brings mosquitoes and drain flies in the warmer months. Our Inner West technicians know these suburbs intimately and tailor treatments to the unique building styles and environmental conditions found across postcodes 2037 through 2204.",
    commonPests: [
      "Termites",
      "Cockroaches",
      "Rats and mice",
      "Spiders",
      "Possums",
    ],
    landmarks: [
      "King Street, Newtown",
      "Glebe Markets",
      "Balmain Peninsula",
      "Sydney Fish Market (bordering)",
      "Marrickville Metro",
    ],
    faqs: [
      {
        question: "Are termites common in the Inner West?",
        answer:
          "Extremely. Many homes in Glebe, Balmain, and Leichhardt are timber-framed Federation or Victorian-era buildings. Damp subfloors and mature trees in close proximity to houses create high termite risk. We recommend annual timber pest inspections for all Inner West properties.",
      },
      {
        question: "I'm renting a terrace in Newtown — who pays for pest control?",
        answer:
          "Under NSW tenancy law, landlords are generally responsible for pest control unless the infestation was caused by the tenant. We can provide a report that helps clarify responsibility. Speak to your property manager and they can arrange treatment.",
      },
      {
        question: "How do you remove possums legally in the Inner West?",
        answer:
          "Under NSW National Parks and Wildlife legislation, possums are protected. We install one-way exclusion doors to allow possums to leave, then seal all entry points. Any possum caught must be released within 150 metres of the capture site on the same property, at dusk.",
      },
      {
        question: "What spider species should I worry about in Balmain?",
        answer:
          "Sydney funnel-web spiders, redback spiders, and white-tailed spiders are all found in the Inner West. Gardens, rockeries, and subfloor areas are common harbourage spots. We treat perimeters, gardens, and roof voids to reduce spider populations.",
      },
      {
        question: "Do you offer pest control packages for Inner West landlords?",
        answer:
          "Yes, we offer annual pest management packages for landlords and property managers covering the Inner West. These include scheduled treatments for cockroaches, spiders, ants, and silverfish, plus discounted termite inspections for each property.",
      },
    ],
  },
  {
    slug: "northern-beaches-council",
    description:
      "Stretching from Manly to Palm Beach, the Northern Beaches is one of Sydney's most desirable coastal regions — and one of its most challenging for pest management. The combination of bushland reserves, sandy soils, high humidity, and proximity to national parks means properties here face a distinctive set of pest pressures. Funnel-web spiders thrive in the moist bush surrounds of Dee Why, Brookvale, and the Mona Vale hinterland. Termite activity is particularly aggressive due to the sandy, well-drained soils that subterranean termites favour. Coastal suburbs like Manly and Dee Why see rodent activity fuelled by restaurant waste, while properties backing onto Ku-ring-gai Chase or Garigal National Park contend with possums, bush rats, and ticks. The warmer months bring mosquitoes and sandflies to beach-facing homes. Our Northern Beaches team is equipped with thermal imaging for termite detection, spider-specific treatments for funnel-web zones, and tick management programs for bush-adjacent properties across postcodes 2095 to 2108.",
    commonPests: [
      "Funnel-web spiders",
      "Termites",
      "Ticks",
      "Rodents",
      "Mosquitoes",
    ],
    landmarks: [
      "Manly Beach",
      "Dee Why Lagoon",
      "Ku-ring-gai Chase National Park",
      "Mona Vale Headland",
      "Warringah Mall, Brookvale",
    ],
    faqs: [
      {
        question: "Are funnel-web spiders really that common on the Northern Beaches?",
        answer:
          "Yes, the Northern Beaches is one of the highest funnel-web density areas in Sydney. The moist, sheltered bush areas from Dee Why through to Palm Beach are prime funnel-web habitat. We recommend a perimeter spider treatment before the warmer months, especially for properties near bushland.",
      },
      {
        question: "How serious is the termite risk on the Northern Beaches?",
        answer:
          "Very serious. The sandy soils across the Northern Beaches are ideal for subterranean termites. We see high termite activity from Manly through to Mona Vale. Annual inspections using thermal imaging and moisture meters are strongly recommended for all homes in the area.",
      },
      {
        question: "Can you help with tick control for my Mona Vale property?",
        answer:
          "Absolutely. Bush-adjacent properties in Mona Vale, Bayview, and Newport are particularly affected by paralysis ticks. We treat yard perimeters, garden beds, and leaf-litter zones with targeted acaricides to significantly reduce tick populations.",
      },
      {
        question: "Do you service rental properties for Northern Beaches real estate agents?",
        answer:
          "Yes, we work with many property management firms across the Northern Beaches. We offer priority scheduling, direct invoicing to the agency, and detailed reports that satisfy landlord and tenancy obligations.",
      },
      {
        question: "What should I do about rodents near my Manly restaurant?",
        answer:
          "Rodent control for food premises requires a structured approach — tamper-proof bait stations, regular monitoring, exclusion work, and detailed record-keeping for council compliance. We provide ongoing commercial programs with monthly service visits and documentation.",
      },
    ],
  },
  {
    slug: "waverley-council",
    description:
      "Waverley Council covers some of Sydney's most iconic eastern suburbs, including Bondi, Bronte, Vaucluse, Dover Heights, and Waverley. The coastal environment, cliff-top homes, and mixture of grand residences and older apartment blocks present a varied pest landscape. Cockroaches and silverfish thrive in the older brick apartment buildings along Bondi Road and throughout the Bronte and Waverley flats. Rodents are common in the laneway networks behind Bondi Junction's commercial precinct, while coastal properties in Vaucluse and Dover Heights face issues with bird nesting (particularly Indian mynas and pigeons) and redback spiders in sandstone retaining walls. The Eastern Suburbs' mild, humid microclimate supports year-round pest activity that doesn't experience the same winter drop-off seen in western Sydney. Our Waverley team understands the specific building types in this area — from Art Deco flats to sandstone mansions — and tailors each treatment accordingly, servicing postcodes 2024, 2026, and 2030.",
    commonPests: [
      "Cockroaches",
      "Rodents",
      "Redback spiders",
      "Silverfish",
      "Bird pests (pigeons and mynas)",
    ],
    landmarks: [
      "Bondi Beach",
      "Bronte Beach",
      "Bondi to Coogee Coastal Walk",
      "Waverley Cemetery",
      "Vaucluse House",
    ],
    faqs: [
      {
        question: "Why are cockroaches so persistent in Bondi apartments?",
        answer:
          "Many Bondi apartment blocks were built in the 1920s-1960s with shared plumbing risers, gaps around pipe penetrations, and limited sealing between units. German cockroaches travel between units via these pathways. Effective control often requires treating multiple units or the entire building in coordination with the strata manager.",
      },
      {
        question: "Are there termites in the Eastern Suburbs?",
        answer:
          "While termite risk is lower in the Eastern Suburbs compared to western Sydney, it is not zero. Properties with mature trees, garden beds against walls, or timber subfloors can still attract termites. We recommend inspections every 1-2 years, especially for older homes in Waverley and Bronte.",
      },
      {
        question: "Can you install bird deterrents on my Vaucluse balcony?",
        answer:
          "Yes, we install bird netting, spike strips, and visual deterrents on balconies, ledges, and rooflines. For heritage properties in Vaucluse, we select discreet solutions that maintain the building's appearance while effectively preventing nesting.",
      },
      {
        question: "How quickly can you come out for a rodent problem in Bondi Junction?",
        answer:
          "We typically offer same-day service for Bondi Junction and surrounding suburbs. Rodent sightings in food premises or homes with children are treated as a priority. Request a quote online for the earliest available appointment.",
      },
      {
        question: "Do you offer strata pest control packages for Waverley buildings?",
        answer:
          "Yes, we provide annual strata pest management programs covering common areas, bin rooms, gardens, and individual unit treatments. We work directly with strata managers and owners' corporations to coordinate access and scheduling.",
      },
    ],
  },
  {
    slug: "willoughby-city-council",
    description:
      "Willoughby City Council encompasses the leafy lower north shore suburbs of Chatswood, Artarmon, Northbridge, Castlecrag, and Willoughby. The area is characterised by a mix of modern apartment developments (particularly around Chatswood), established family homes on large blocks, and bushland reserves along the Middle Harbour foreshore. This blend of urban density and native vegetation creates overlapping pest pressures. Apartments in Chatswood's CBD contend with cockroaches and rodents typical of high-density living, while homes in Castlecrag and Northbridge — many designed in the Griffin heritage style amid natural bushland — face spider, tick, and termite risks. The mature eucalyptus canopy throughout the area supports possum populations that frequently move into roof cavities. Subterranean termites are active across the council area, particularly in properties with gardens abutting bushland. Our technicians servicing the Willoughby area carry thermal cameras as standard for termite detection and are experienced in treating both high-rise units and bush-surrounded homes across postcodes 2063 to 2068.",
    commonPests: [
      "Termites",
      "Spiders (funnel-web and redback)",
      "Possums",
      "Cockroaches",
      "Ticks",
    ],
    landmarks: [
      "Chatswood Chase",
      "Castlecrag Griffin Heritage Precinct",
      "Northbridge Baths",
      "Artarmon Reserve",
      "Willoughby Leisure Centre",
    ],
    faqs: [
      {
        question: "Is Castlecrag a high-risk area for termites?",
        answer:
          "Yes. Castlecrag homes are often timber-framed, set into natural sandstone, and surrounded by mature eucalypts — all factors that increase termite risk. The area's proximity to bushland reserves means termite colonies are well-established nearby. Annual inspections are essential.",
      },
      {
        question: "Do you treat apartments in the Chatswood high-rise precinct?",
        answer:
          "Absolutely. We service many apartment buildings in the Chatswood CBD, including towers along Victoria Avenue and Railway Street. We coordinate with building managers for access to common areas and individual units, using low-odour treatments suitable for high-density living.",
      },
      {
        question: "What spider treatments do you recommend for Northbridge properties?",
        answer:
          "For Northbridge homes near the bushland, we recommend a comprehensive perimeter and garden treatment targeting funnel-webs and redbacks, applied before the warmer months. We treat under decks, around rockeries, retaining walls, and garden bed edges where spiders harbour.",
      },
      {
        question: "How do you handle possum problems in Willoughby homes?",
        answer:
          "We install one-way possum exclusion doors and seal all entry points once the animal has left. Under NSW law, possums must be released on the property at dusk. We also install possum nesting boxes as alternative shelter to discourage re-entry into your roof.",
      },
      {
        question: "Can you provide a pest and building report for a Chatswood property purchase?",
        answer:
          "Yes, our pre-purchase timber pest inspections comply with AS 4349.3 and include thermal imaging. We inspect the full property including subfloor, roof void, exterior, gardens, and outbuildings. Reports are delivered within 24 hours of inspection.",
      },
    ],
  },
  {
    slug: "parramatta-council",
    description:
      "The City of Parramatta is western Sydney's central hub, encompassing Parramatta, Westmead, North Parramatta, Harris Park, and Granville. As one of Sydney's fastest-growing urban centres, Parramatta presents a unique mix of pest challenges driven by rapid development, older housing stock, and the warm, humid climate of western Sydney. The Parramatta River corridor attracts mosquitoes and rodents, while the construction boom has disturbed termite colonies, pushing them into neighbouring residential properties. Older fibro and weatherboard homes in Granville and Harris Park are particularly vulnerable to termite attack, with the clay soils retaining moisture that termites thrive on. German cockroach infestations are common in the dense apartment buildings around Parramatta CBD, and the thriving restaurant and food-court scene along Church Street and Eat Street generates rodent pressure. Summer temperatures in western Sydney regularly exceed 35 degrees Celsius, driving ants, cockroaches, and spiders to seek shelter indoors. We service all of Parramatta council across postcodes 2142 to 2151.",
    commonPests: [
      "Termites",
      "German cockroaches",
      "Rats and mice",
      "Ants",
      "Mosquitoes",
    ],
    landmarks: [
      "Parramatta Park and Old Government House",
      "Westmead Hospital Precinct",
      "Church Street dining strip",
      "Parramatta River foreshore",
      "Granville Town Centre",
    ],
    faqs: [
      {
        question: "Why is termite risk so high in western Sydney?",
        answer:
          "Western Sydney's clay soils retain moisture, and the warmer temperatures accelerate termite colony growth. Many properties in Parramatta, Granville, and North Parramatta were built with minimal termite protection. The ongoing construction in the area also disturbs existing colonies, causing them to migrate to nearby homes.",
      },
      {
        question: "How do I protect my Harris Park home from termites?",
        answer:
          "We recommend an annual termite inspection using thermal imaging, followed by installation of a chemical soil barrier or baiting system. For older Harris Park homes, checking subfloor ventilation and reducing soil-to-timber contact around the perimeter is also essential.",
      },
      {
        question: "Do you provide pest control for Parramatta restaurants and food courts?",
        answer:
          "Yes, we manage pest control programs for numerous food premises throughout Parramatta CBD and Church Street. Our programs include monthly inspections, targeted treatments, and full documentation for council health compliance.",
      },
      {
        question: "Are mosquitoes a problem near the Parramatta River?",
        answer:
          "Mosquito activity is notably higher for properties along the Parramatta River, particularly during the warmer months. We offer yard treatments that target mosquito resting sites and can advise on reducing breeding habitat around your property.",
      },
      {
        question: "What areas of Parramatta council do you cover?",
        answer:
          "We cover the entire Parramatta LGA including Parramatta CBD, Westmead, North Parramatta, Harris Park, and Granville. Our technicians are based locally and can typically offer same-day service for urgent callouts in the area.",
      },
    ],
  },
  {
    slug: "sutherland-shire",
    description:
      "The Sutherland Shire — affectionately known as 'The Shire' — stretches from Cronulla's coastline to the bushland of Engadine and the Royal National Park. This unique position between coast and bush means Shire properties face an exceptionally broad range of pest pressures. Coastal suburbs like Cronulla and Caringbah see cockroach and rodent infestations common to urban areas, while properties in Engadine and Gymea bordering the Royal National Park contend with funnel-web spiders, paralysis ticks, bush rats, and possums. Termite activity across the Shire is among the highest in Sydney due to the sandy soils, extensive eucalyptus cover, and warm conditions. The older fibro homes common in Miranda and Gymea are particularly vulnerable. Drain flies and mosquitoes are prevalent near Cronulla's waterways and Gwawley Bay. The Shire's strong family-oriented community means many of our clients prioritise child-safe and pet-friendly treatment options, which we are well equipped to provide across postcodes 2227 to 2233.",
    commonPests: [
      "Termites",
      "Funnel-web spiders",
      "Paralysis ticks",
      "Cockroaches",
      "Rodents",
    ],
    landmarks: [
      "Cronulla Beach",
      "Royal National Park",
      "Miranda Westfield",
      "Gymea Bay",
      "Engadine bushland trails",
    ],
    faqs: [
      {
        question: "Is the Sutherland Shire a high-risk termite area?",
        answer:
          "Yes, the Shire is one of Sydney's highest-risk areas for termites. The sandy soils, warm climate, and proximity to large tracts of bushland mean termite colonies are widespread. We recommend annual timber pest inspections for every property in the Shire.",
      },
      {
        question: "How do I protect my family from paralysis ticks in Engadine?",
        answer:
          "Yard treatments with registered acaricides can significantly reduce tick populations. We treat garden beds, leaf litter zones, and lawn edges where ticks wait for hosts. Combined with regular checks on children and pets, this provides strong protection during tick season (August to February).",
      },
      {
        question: "Do you use pet-safe products in residential treatments?",
        answer:
          "Yes, all our treatments in the Shire use APVMA-registered products that are safe for families and pets when applied according to label directions. We advise on re-entry times and any precautions for specific products used.",
      },
      {
        question: "Can you remove a funnel-web spider I've found at my Gymea home?",
        answer:
          "We can attend for emergency spider removal and recommend a full perimeter treatment to reduce funnel-web activity around your home. We also advise on garden maintenance steps that make your property less attractive to funnel-webs.",
      },
      {
        question: "What is the cost of a general pest treatment in the Sutherland Shire?",
        answer:
          "A standard general pest treatment for a 3-bedroom home in the Shire starts from $189. This covers cockroaches, spiders, ants, and silverfish. Exact pricing depends on property size and pest type. We provide free quotes online.",
      },
    ],
  },
  {
    slug: "randwick-council",
    description:
      "Randwick City Council covers the south-eastern suburbs of Coogee, Maroubra, Randwick, Kensington, and Kingsford — a densely populated area with a mix of coastal apartments, interwar bungalows, and student housing near the University of New South Wales. The coastal environment brings consistent humidity that supports cockroach and silverfish activity year-round. Older brick and fibro homes in Maroubra and Kingsford are susceptible to termite damage, with the heavier clay soils in the area retaining the moisture that termites need. The high proportion of rental properties and share houses, particularly around Kensington and Kingsford, means pest issues can go unreported until infestations become severe. Rodents are a concern in commercial strips along Anzac Parade and around Randwick Racecourse, where food waste and older infrastructure provide ideal conditions. Flea infestations are common in the area's many pet-friendly rental properties. We provide both residential and commercial pest management across postcodes 2031 to 2035, including strata treatments for the large apartment complexes common in Coogee and Maroubra.",
    commonPests: [
      "Cockroaches",
      "Rodents",
      "Termites",
      "Fleas",
      "Silverfish",
    ],
    landmarks: [
      "Coogee Beach",
      "Maroubra Beach",
      "UNSW Kensington Campus",
      "Randwick Racecourse",
      "The Spot, Randwick",
    ],
    faqs: [
      {
        question: "Are cockroaches worse near the coast in Coogee and Maroubra?",
        answer:
          "The higher humidity levels in coastal suburbs do support larger cockroach populations. Australian and American cockroaches thrive in the moist conditions around Coogee and Maroubra, while German cockroaches are common in apartment blocks throughout the area.",
      },
      {
        question: "I'm a landlord with rental properties in Kingsford — do you offer multi-property discounts?",
        answer:
          "Yes, we offer discounted rates for landlords and property managers with multiple properties. We can schedule treatments across your portfolio efficiently and provide consolidated invoicing and reporting.",
      },
      {
        question: "How do you handle flea treatments in rental properties?",
        answer:
          "We treat all carpeted areas, rugs, upholstered furniture, and outdoor areas where pets rest. We also treat subfloor areas and garden beds. For best results, we recommend treating the property and having pets treated by a veterinarian simultaneously.",
      },
      {
        question: "Is there termite risk near Randwick Racecourse?",
        answer:
          "Yes, the established trees and gardens around the racecourse and Centennial Park provide habitat for termite colonies. Properties in Randwick and Kensington should have regular termite inspections, particularly those with mature trees or garden beds against the building.",
      },
      {
        question: "Do you service UNSW student accommodation and share houses?",
        answer:
          "Yes, we service many share houses and student rentals around UNSW in Kensington and Kingsford. We work with tenants and landlords to arrange convenient treatment times and provide affordable general pest packages for shared living situations.",
      },
    ],
  },
  {
    slug: "north-sydney-council",
    description:
      "North Sydney Council takes in the lower north shore suburbs of North Sydney, Crows Nest, Neutral Bay, Kirribilli, and McMahons Point. This compact, affluent area is a mix of commercial high-rises, heritage homes, and waterfront apartments, all nestled between Sydney Harbour and the bushland corridors of the north shore. The older Federation and Victorian homes in Kirribilli and McMahons Point feature timber subfloors and weatherboard cladding that are attractive to termites, while the commercial towers in the North Sydney CBD and Crows Nest dining strip generate rodent and cockroach pressure. The harbourside position means many properties deal with high humidity, which supports persistent cockroach and silverfish activity. Possums are common in the area's tree-lined streets, frequently taking up residence in roof cavities. North Sydney's strata buildings — from heritage conversions to modern towers — require coordinated pest management across common areas and individual units. Our North Sydney team works closely with strata managers and commercial building operators across postcodes 2060, 2061, 2065, and 2089.",
    commonPests: [
      "Cockroaches",
      "Rats and mice",
      "Termites",
      "Possums",
      "Silverfish",
    ],
    landmarks: [
      "Luna Park",
      "North Sydney CBD",
      "Kirribilli House",
      "Neutral Bay Ferry Wharf",
      "Crows Nest dining precinct",
    ],
    faqs: [
      {
        question: "Do you provide commercial pest control for North Sydney offices?",
        answer:
          "Yes, we service numerous commercial premises in the North Sydney CBD, including offices, co-working spaces, and retail tenancies. We schedule treatments outside business hours and provide documentation for workplace health and safety compliance.",
      },
      {
        question: "Are termites a risk in Kirribilli's older homes?",
        answer:
          "Absolutely. Many Kirribilli homes are 80-100 years old with timber subfloors, weatherboard cladding, and established gardens — all conditions that favour termite activity. Given the value of these properties, regular inspections are a wise investment.",
      },
      {
        question: "How do you manage pest control in heritage buildings?",
        answer:
          "We take special care with heritage properties, using non-invasive inspection methods like thermal imaging and avoiding treatments that could damage original timbers or finishes. Our approach protects both the building and its heritage value.",
      },
      {
        question: "Can you help with a possum in my Neutral Bay roof?",
        answer:
          "Yes, we install one-way exclusion devices and seal all entry points. Possums are protected under NSW law, so we follow the legal process of allowing them to leave voluntarily and providing alternative shelter such as a possum nesting box.",
      },
      {
        question: "What is the rodent situation like around Crows Nest restaurants?",
        answer:
          "The Crows Nest dining strip generates food waste that attracts rodents, particularly in the laneways behind restaurants. We provide ongoing rodent management programs for commercial operators and nearby residential properties affected by rodent activity.",
      },
    ],
  },
  {
    slug: "ryde-council",
    description:
      "The City of Ryde covers the suburban corridor from Ryde and West Ryde through to Eastwood, North Ryde, and Meadowbank along the Parramatta River. This area has experienced significant urban renewal, with new apartment developments alongside established family homes from the 1950s to 1970s. The mix of old and new construction creates varied pest challenges. Older homes in Ryde and West Ryde — often with brick veneer construction on concrete slabs or timber stumps — are susceptible to termite attack, with the Parramatta River corridor providing moisture that supports termite colonies. The bustling Eastwood shopping district, known for its Asian restaurants and grocers, generates cockroach and rodent pressure in commercial premises. North Ryde's Macquarie Park business precinct includes large campus-style offices that require integrated pest management programs. Meadowbank's waterfront position along the river makes it prone to mosquitoes and drain flies. Ants are a persistent issue across the entire council area, particularly in the warmer months when species like black house ants and coastal brown ants become highly active, entering kitchens through the smallest cracks. We service all Ryde postcodes from 2112 to 2122.",
    commonPests: [
      "Termites",
      "Cockroaches",
      "Ants",
      "Rodents",
      "Mosquitoes",
    ],
    landmarks: [
      "Macquarie University and Macquarie Centre",
      "Eastwood shopping precinct",
      "Meadowbank Wharf and riverfront",
      "Ryde Park",
      "Top Ryde City shopping centre",
    ],
    faqs: [
      {
        question: "Do you service the Macquarie Park business precinct?",
        answer:
          "Yes, we provide commercial pest management for offices, warehouses, and retail premises throughout Macquarie Park. Our programs include scheduled treatments, monitoring, and compliance documentation suitable for corporate tenancy requirements.",
      },
      {
        question: "Are termites common in older Ryde homes?",
        answer:
          "Very common. Many 1950s-1970s homes in Ryde and West Ryde have minimal termite protection. The proximity to the Parramatta River corridor provides moisture that supports active termite colonies. We recommend annual inspections and, where warranted, installation of a chemical barrier or baiting system.",
      },
      {
        question: "What pest problems affect Eastwood restaurants?",
        answer:
          "German cockroaches and rodents are the primary concerns for Eastwood food premises. The dense concentration of restaurants and food retailers means pest pressure is high. We offer monthly commercial programs with documentation that satisfies council health inspectors.",
      },
      {
        question: "Why are ants such a problem in Ryde during summer?",
        answer:
          "Summer heat drives ant colonies to forage more aggressively and seek water and food indoors. Coastal brown ants and black house ants are the most common species in Ryde. We use targeted baiting systems that the foraging ants carry back to the colony, eliminating the source.",
      },
      {
        question: "Can you treat my Meadowbank apartment for drain flies?",
        answer:
          "Yes, drain flies breed in the organic build-up inside drains and pipes. We treat the drains with enzymatic cleaners and insecticides to eliminate breeding sites, and advise on regular drain maintenance to prevent recurrence.",
      },
    ],
  },
  {
    slug: "blacktown-council",
    description:
      "Blacktown City Council is one of the largest local government areas in Sydney, covering the rapidly growing suburbs of Blacktown, Seven Hills, Quakers Hill, Kellyville, and Stanhope Gardens. This sprawling western Sydney region features a broad mix of housing — from 1960s-era fibro cottages in Blacktown and Seven Hills to brand-new estate developments in Kellyville and Stanhope Gardens. The hot western Sydney summers, with temperatures regularly exceeding 40 degrees Celsius, drive pest activity to intense levels. Termites are the number one concern across the entire LGA; the clay soils, warm conditions, and remaining pockets of Cumberland Plain woodland provide ideal termite habitat. German cockroaches are prevalent in the older housing stock, while new developments in Kellyville and Stanhope Gardens see ant infestations as disturbed soil and fresh landscaping attract colonies. Rodents are drawn to the retail and industrial precincts around Blacktown CBD and Prospect Highway. The growth corridor along the North West Metro line is seeing increased pest pressures as construction activity displaces established colonies into neighbouring homes. We are one of the most active pest control providers in the Blacktown LGA, servicing postcodes 2147, 2148, 2155, 2763, and 2768.",
    commonPests: [
      "Termites",
      "Cockroaches",
      "Ants",
      "Rodents",
      "Spiders",
    ],
    landmarks: [
      "Blacktown CBD and Max Webber Library",
      "Westpoint Blacktown shopping centre",
      "Kellyville Village and North West Metro station",
      "Nurragingy Reserve",
      "Featherdale Wildlife Park",
    ],
    faqs: [
      {
        question: "Is Blacktown the worst area in Sydney for termites?",
        answer:
          "Blacktown is consistently one of the highest-risk areas for termite activity in Greater Sydney. The combination of clay soils, warm temperatures, and ageing housing stock with minimal termite protection makes the area extremely susceptible. Annual inspections are absolutely essential for every Blacktown property.",
      },
      {
        question: "My new home in Kellyville has ants everywhere — is this normal?",
        answer:
          "Very common in new estates. Construction activity disturbs ant colonies and the fresh landscaping attracts new ones. We treat the perimeter and garden beds with a transfer-effect product that eliminates the colony at its source, not just the visible ants.",
      },
      {
        question: "Do you offer pest control for warehouses along Prospect Highway?",
        answer:
          "Yes, we service commercial and industrial premises throughout the Blacktown LGA. Warehouses are prone to rodent and cockroach infestations due to stored goods and loading dock areas. We provide ongoing monitoring and treatment programs tailored to your industry requirements.",
      },
      {
        question: "How much does a termite inspection cost in Seven Hills?",
        answer:
          "A comprehensive termite inspection in Seven Hills typically starts from a competitive quote based on property size. We use thermal imaging, moisture detection, and visual inspection in accordance with AS 4349.3. Contact us for a free quote specific to your property.",
      },
      {
        question: "Are there funnel-web spiders in the Blacktown area?",
        answer:
          "Funnel-web spiders are less common in Blacktown compared to the northern suburbs and Shire, but they are still found in gardens, particularly near remnant bush and creek corridors. Redback spiders are more prevalent across the LGA, especially in sheds, meter boxes, and garden furniture.",
      },
    ],
  },
  {
    slug: "canterbury-bankstown",
    description:
      "The Canterbury-Bankstown council area spans the inner-south-west suburbs of Bankstown, Canterbury, Campsie, Lakemba, and Punchbowl. This densely populated area features a mix of 1950s-1970s brick homes, newer apartment developments, and a vibrant commercial district centred on Bankstown CBD and the Campsie strip. The area's older housing stock, combined with warm western Sydney temperatures and proximity to the Cooks River and Salt Pan Creek, creates persistent pest challenges. Cockroaches — both German and Australian species — are the most common complaint across the LGA, thriving in the older apartment blocks and commercial kitchens. Rodent activity is high around Bankstown's restaurant and market areas. Termites remain a significant concern, particularly for the fibro and weatherboard homes still found in Canterbury, Punchbowl, and Lakemba. The Cooks River corridor supports mosquito breeding, and drain flies are common in the ageing stormwater infrastructure. Ants and silverfish round out the most frequent pest issues in the area. We have been servicing Canterbury-Bankstown for years and understand the specific needs of this diverse, dynamic community across postcodes 2193 to 2200.",
    commonPests: [
      "German cockroaches",
      "Rats and mice",
      "Termites",
      "Ants",
      "Drain flies",
    ],
    landmarks: [
      "Bankstown Central shopping centre",
      "Canterbury Racecourse",
      "Campsie commercial strip",
      "Cooks River foreshore",
      "Bankstown RSL",
    ],
    faqs: [
      {
        question: "Why are German cockroaches such a big problem in Canterbury-Bankstown?",
        answer:
          "The area's high-density housing, older plumbing, shared wall cavities, and the warm climate all contribute to German cockroach populations. In apartment blocks, cockroaches migrate between units through pipe penetrations. Effective control requires gel bait treatments in kitchens and bathrooms, combined with building-wide coordination where possible.",
      },
      {
        question: "Do you treat restaurants and food shops in the Campsie strip?",
        answer:
          "Yes, we service many food premises along Beamish Street in Campsie and throughout Bankstown CBD. We understand the compliance requirements for food premises and provide monthly treatment programs with detailed service reports for council health inspections.",
      },
      {
        question: "Is it worth getting a termite inspection for a 1960s brick home in Punchbowl?",
        answer:
          "Absolutely. Many 1960s homes in Punchbowl and Lakemba were built without modern termite barriers. The clay soils and established gardens create ideal conditions for termite activity. A thermal imaging inspection can detect active termites before significant damage occurs.",
      },
      {
        question: "What causes drain flies in my Bankstown bathroom?",
        answer:
          "Drain flies breed in the organic sludge that builds up inside drains, pipes, and floor waste gullies. The older plumbing in many Bankstown homes creates ideal breeding conditions. We treat the drain systems directly and recommend enzymatic drain cleaners for ongoing prevention.",
      },
      {
        question: "How much is general pest control for a 3-bedroom home in Lakemba?",
        answer:
          "A standard general pest treatment covering cockroaches, spiders, ants, and silverfish for a typical 3-bedroom home in Lakemba starts from $189. We offer free online quotes, and same-day service is often available for the Canterbury-Bankstown area.",
      },
    ],
  },
];

// ─── Helper ──────────────────────────────────────────────────────────────────

export function getCouncilContent(slug: string): CouncilContent | undefined {
  return COUNCIL_CONTENT.find((c) => c.slug === slug);
}
