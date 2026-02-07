/**
 * Suburb-Specific Content Data
 *
 * Locally relevant content for each of the 60 suburbs.
 * Used by prerender script and suburb page components.
 */

export interface SuburbContent {
  slug: string;
  councilSlug: string;
  localIntro: string;
  commonPests: string[];
  faqs: { question: string; answer: string }[];
}

export const SUBURB_CONTENT: SuburbContent[] = [
  // ── City of Sydney ──────────────────────────────────────────────────────────
  {
    slug: "sydney-cbd",
    councilSlug: "city-of-sydney",
    localIntro:
      "Sydney CBD (postcode 2000) is the commercial heart of Sydney, home to iconic landmarks like the Queen Victoria Building, Martin Place, and Circular Quay. With thousands of restaurants, hotels, and office towers packed into a dense urban grid, pest pressures in the CBD are among the highest in Australia. Older heritage buildings along George Street and Pitt Street provide harbourage for cockroaches and rodents, while waterfront precincts near Darling Harbour attract drain flies and silverfish. Our technicians service CBD strata buildings, commercial kitchens, and retail premises seven days a week.",
    commonPests: ["Cockroaches", "Rodents", "Bedbugs", "Drain Flies", "Ants"],
    faqs: [
      { question: "Do you service high-rise apartments in Sydney CBD?", answer: "Yes. We regularly treat apartments and common areas in CBD strata buildings. We coordinate with building managers for access and minimise disruption to residents." },
      { question: "How quickly can you attend a CBD pest emergency?", answer: "We offer same-day service throughout the CBD. Because our technicians are based locally, response times are typically under two hours during business hours." },
      { question: "Are your treatments safe for restaurants and food outlets?", answer: "Absolutely. We use food-safe, APVMA-approved products and can schedule treatments outside trading hours to meet your food safety compliance requirements." },
    ],
  },
  {
    slug: "surry-hills",
    councilSlug: "city-of-sydney",
    localIntro:
      "Surry Hills (postcode 2010) is one of Sydney's most vibrant inner-city neighbourhoods, known for its terrace houses, lively cafe culture along Crown Street, and proximity to Central Station. The mix of Victorian-era terraces and modern apartments creates varied pest habitats. Subfloor voids in older terraces attract termites, while the dense restaurant strip from Crown Street to Bourke Street makes cockroach and rodent management essential. Our Surry Hills technicians understand the unique challenges of treating heritage-listed properties while maintaining building character.",
    commonPests: ["Termites", "Cockroaches", "Rodents", "Spiders", "Ants"],
    faqs: [
      { question: "Can you inspect terrace house subfloors in Surry Hills?", answer: "Yes. Many Surry Hills terraces have accessible subfloors where termites thrive. We use thermal imaging and moisture meters to detect activity without disturbing original timbers." },
      { question: "Do you treat shared walls between terraces?", answer: "We do. Terrace rows share party walls, so we recommend coordinated treatments with neighbours for best results, especially for cockroach and rodent control." },
      { question: "What pest control is needed for Surry Hills cafes?", answer: "Most cafes require regular cockroach gel baiting, rodent monitoring, and drain fly treatments. We provide ongoing pest management plans that satisfy council health inspections." },
    ],
  },
  {
    slug: "pyrmont",
    councilSlug: "city-of-sydney",
    localIntro:
      "Pyrmont (postcode 2009) has transformed from industrial wharves into a thriving residential and entertainment precinct centred around The Star casino, the Sydney Fish Market, and Darling Island. High-rise apartments overlooking Blackwattle Bay are prone to ant and cockroach issues on lower floors, while the proximity to water sources attracts drain flies and silverfish. Older converted warehouse apartments along Harris Street can harbour rodents. Our Pyrmont team services apartments, commercial premises, and waterfront hospitality venues throughout the peninsula.",
    commonPests: ["Ants", "Cockroaches", "Drain Flies", "Rodents", "Silverfish"],
    faqs: [
      { question: "Are pests common in Pyrmont waterfront apartments?", answer: "Proximity to Blackwattle Bay and Darling Harbour does increase moisture levels, attracting drain flies and silverfish. Regular perimeter treatments help keep these pests at bay." },
      { question: "Can you treat apartments near the Sydney Fish Market?", answer: "Yes, we frequently service Pyrmont apartments. Food-related pest activity is higher near the Fish Market precinct, making quarterly treatments a smart investment." },
      { question: "Do you provide pest control for Pyrmont strata buildings?", answer: "We do. We work with strata managers across Pyrmont to deliver building-wide treatments, including common areas, bin rooms, and car parks." },
    ],
  },
  {
    slug: "ultimo",
    councilSlug: "city-of-sydney",
    localIntro:
      "Ultimo (postcode 2007) is a compact inner-city suburb adjacent to the University of Technology Sydney and the Powerhouse Museum. Its mix of student accommodation, older workers' cottages, and modern apartment towers creates diverse pest challenges. High tenant turnover in share houses can introduce bedbugs and fleas, while older buildings along Jones and Harris Streets harbour cockroaches and silverfish. We service Ultimo residences, student housing, and the many small businesses along Broadway.",
    commonPests: ["Cockroaches", "Bedbugs", "Fleas", "Silverfish", "Ants"],
    faqs: [
      { question: "Do you offer pest control for student housing in Ultimo?", answer: "Yes. We provide affordable pest treatments for share houses and student apartments. Bedbug inspections are especially popular before and after lease changeovers." },
      { question: "How do you handle bedbug treatments in Ultimo apartments?", answer: "We use a combination of heat treatment and targeted insecticide application. Most treatments can be completed within a single day with minimal preparation needed." },
      { question: "Are cockroaches a big problem in Ultimo?", answer: "The density of food outlets along Broadway and the age of many buildings means cockroach activity is common. Regular gel baiting and perimeter sprays provide effective control." },
    ],
  },
  {
    slug: "darlinghurst",
    councilSlug: "city-of-sydney",
    localIntro:
      "Darlinghurst (postcode 2010) is a cosmopolitan inner-city suburb famous for Oxford Street, the Darlinghurst Road entertainment precinct, and its beautifully restored Victorian and Art Deco buildings. The concentration of restaurants, bars, and heritage terraces makes pest management essential. Cockroaches thrive in the warm kitchen environments along Oxford Street, while termites can damage the timber frames of heritage buildings. Rodents are drawn to lane-way bins behind hospitality venues. Our Darlinghurst technicians provide discreet, after-hours treatments for homes and businesses.",
    commonPests: ["Cockroaches", "Rodents", "Termites", "Spiders", "Bedbugs"],
    faqs: [
      { question: "Do you provide after-hours pest control in Darlinghurst?", answer: "Yes. Many of our Darlinghurst clients are hospitality businesses that need treatments after closing. We offer evening and early morning appointments to minimise disruption." },
      { question: "Are termites a risk in Darlinghurst heritage buildings?", answer: "Definitely. The timber frames and subfloor voids in Victorian terraces are prime termite habitat. We recommend annual timber pest inspections for all heritage properties in the area." },
      { question: "What about rodent control near Oxford Street?", answer: "Rodent activity is common behind restaurants and bars. We install tamper-resistant bait stations and recommend bin management improvements to reduce attractants." },
    ],
  },

  // ── Inner West ──────────────────────────────────────────────────────────────
  {
    slug: "newtown",
    councilSlug: "inner-west-council",
    localIntro:
      "Newtown (postcode 2042) is the Inner West's cultural hub, famous for King Street's eclectic mix of cafes, vintage shops, and live music venues. The suburb's iconic Victorian terrace houses, many with original timber floors and subfloor voids, require vigilant pest management. Termite activity is well-documented in Newtown's older housing stock, and the busy hospitality strip attracts cockroaches and rodents. Our Newtown team knows these terraces inside out and provides treatments tailored to heritage properties.",
    commonPests: ["Termites", "Cockroaches", "Rodents", "Spiders", "Ants"],
    faqs: [
      { question: "Are Newtown terraces at risk of termites?", answer: "Yes. The timber subfloors and weatherboard additions on many Newtown terraces make them vulnerable to subterranean termites. Annual inspections are strongly recommended." },
      { question: "Can you treat my Newtown terrace without chemicals?", answer: "We offer low-toxicity and bait-based treatments suitable for families and pets. For termites, monitoring stations provide a chemical-free detection method." },
      { question: "How much does pest control cost in Newtown?", answer: "General pest treatments for a standard terrace start from $189. Termite inspections are quoted separately based on property size. Contact us for a free estimate." },
    ],
  },
  {
    slug: "glebe",
    councilSlug: "inner-west-council",
    localIntro:
      "Glebe (postcode 2037) is a leafy harbourside suburb beside Blackwattle Bay, known for Glebe Point Road's bookshops and cafes, Jubilee Park, and its heritage-listed Victorian and Federation homes. The established tree canopy and proximity to water create ideal conditions for termites, while the suburb's mature gardens attract spiders and ants. Possums are also common in Glebe's older roof cavities. Our technicians service everything from stately Glebe mansions to compact terraces along the point.",
    commonPests: ["Termites", "Spiders", "Possums", "Ants", "Cockroaches"],
    faqs: [
      { question: "Do you remove possums from Glebe roofs?", answer: "Yes. We're licensed for possum removal under NSW National Parks and Wildlife regulations. We humanely trap and relocate possums, then seal entry points to prevent re-entry." },
      { question: "Is termite risk high in Glebe?", answer: "Very high. The combination of mature trees, harbour moisture, and timber-framed heritage homes makes Glebe one of Sydney's termite hotspots. Annual inspections are essential." },
      { question: "Can you treat gardens for spiders in Glebe?", answer: "We provide external spider web treatments and perimeter sprays that target funnel-webs, redbacks, and other common garden spiders found in Glebe properties." },
    ],
  },
  {
    slug: "balmain",
    councilSlug: "inner-west-council",
    localIntro:
      "Balmain (postcode 2041) occupies a scenic peninsula on Sydney Harbour, renowned for its heritage streetscapes, Balmain Tigers rugby league history, and the popular Saturday markets at the Town Hall. Workers' cottages and sandstone terraces line the narrow streets, and the maritime environment creates elevated moisture levels that attract termites and silverfish. Rodent activity increases around the foreshore parks and ferry wharves. Our Balmain technicians provide discreet, effective treatments for this tightly-knit peninsula community.",
    commonPests: ["Termites", "Rodents", "Silverfish", "Cockroaches", "Spiders"],
    faqs: [
      { question: "Do you service Balmain peninsula properties?", answer: "Yes. We service all of Balmain including the narrow lane-way properties. Our technicians carry compact equipment suited to tight access points common in the area." },
      { question: "Why are silverfish common in Balmain?", answer: "The harbour proximity creates elevated humidity, which silverfish thrive in. Older bathrooms and laundries in Balmain terraces are particularly prone to silverfish activity." },
      { question: "Can you inspect Balmain sandstone terraces for termites?", answer: "Absolutely. While termites don't eat sandstone, they often access timber framing through gaps in mortar joints. We use thermal imaging to detect hidden activity." },
    ],
  },
  {
    slug: "leichhardt",
    councilSlug: "inner-west-council",
    localIntro:
      "Leichhardt (postcode 2040), known as Sydney's 'Little Italy', centres around Norton Street with its Italian restaurants, cafes, and the Italian Forum. The suburb features a mix of Federation homes, California bungalows, and newer townhouses. Leichhardt's established gardens and proximity to the Hawthorne Canal provide harbourage for a range of pests. Cockroach activity is common in the restaurant precinct, while residential properties face termite, ant, and spider challenges. We service both the commercial strip and surrounding residential streets.",
    commonPests: ["Cockroaches", "Termites", "Ants", "Spiders", "Rodents"],
    faqs: [
      { question: "Do you service Norton Street restaurants in Leichhardt?", answer: "Yes. We provide commercial pest management for many Norton Street food businesses, including regular cockroach treatments, rodent monitoring, and drain fly control." },
      { question: "Are California bungalows in Leichhardt prone to termites?", answer: "They can be. The timber weatherboard cladding and subfloor voids typical of Leichhardt bungalows are attractive to termites. Regular inspections help catch problems early." },
      { question: "How often should I get pest control in Leichhardt?", answer: "We recommend quarterly treatments for food businesses and annual general pest control for homes. Termite inspections should be done at least once per year." },
    ],
  },
  {
    slug: "marrickville",
    councilSlug: "inner-west-council",
    localIntro:
      "Marrickville (postcode 2204) is a diverse suburb undergoing rapid gentrification, blending industrial warehouses with Victorian cottages and new apartment developments along the Cooks River corridor. The former industrial sites and older housing stock create varied pest challenges, from rodents in converted warehouses to termites in timber cottages. The Cooks River environs attract mosquitoes and drain flies. Marrickville's thriving food scene along Illawarra Road also brings commercial pest management needs. Our team provides comprehensive pest solutions across this evolving suburb.",
    commonPests: ["Rodents", "Termites", "Cockroaches", "Drain Flies", "Ants"],
    faqs: [
      { question: "Are warehouse conversions in Marrickville prone to pests?", answer: "Yes. Former industrial buildings often have gaps in walls and floors that allow rodent entry. We recommend sealing works alongside baiting programs for best results." },
      { question: "Do you service new apartments in Marrickville?", answer: "We do. Even new builds can have pest issues, particularly ants and cockroaches that enter through plumbing penetrations. We treat individual units and common areas." },
      { question: "Is the Cooks River causing pest issues in Marrickville?", answer: "Proximity to the river increases moisture and attracts drain flies, mosquitoes, and some rodent species. Properties backing onto the river corridor benefit from regular perimeter treatments." },
    ],
  },

  // ── Northern Beaches ────────────────────────────────────────────────────────
  {
    slug: "manly",
    councilSlug: "northern-beaches-council",
    localIntro:
      "Manly (postcode 2095), accessible by ferry from Circular Quay, is one of Sydney's most iconic beachside suburbs. The Corso pedestrian mall, Manly Beach, and Shelly Beach attract millions of visitors annually. The coastal salt air and sandy soils create specific pest challenges including aggressive termite species, persistent ant colonies, and spiders drawn to beachfront gardens. Tourist accommodation along the beachfront requires proactive pest management. Our Manly technicians understand coastal pest biology and provide treatments designed for the marine environment.",
    commonPests: ["Termites", "Ants", "Spiders", "Cockroaches", "Fleas"],
    faqs: [
      { question: "Do coastal conditions in Manly increase termite risk?", answer: "Yes. The warm, humid coastal climate and sandy soils in Manly are ideal for subterranean termites. Properties with garden beds against walls are particularly vulnerable." },
      { question: "Are fleas common in Manly?", answer: "Flea activity spikes in Manly during warmer months, especially in homes with pets that visit the beach and parks. We treat both indoor areas and outdoor sandy zones." },
      { question: "Do you treat Manly holiday rentals?", answer: "Yes, we service holiday accommodation throughout Manly. We offer turnaround treatments between guests and ongoing management plans for property managers." },
    ],
  },
  {
    slug: "dee-why",
    councilSlug: "northern-beaches-council",
    localIntro:
      "Dee Why (postcode 2099) is the commercial centre of the Northern Beaches, with a bustling town centre, Dee Why Beach, and the Dee Why Lagoon wildlife reserve. The mix of apartment towers, fibro cottages, and newer developments creates varied pest profiles. The lagoon environment supports high mosquito and drain fly populations, while the older fibro homes are susceptible to termite damage. Cockroaches and ants are common in apartment complexes. Our Dee Why team provides residential and commercial pest control across this busy Northern Beaches hub.",
    commonPests: ["Termites", "Cockroaches", "Ants", "Drain Flies", "Spiders"],
    faqs: [
      { question: "Does the Dee Why Lagoon attract more pests?", answer: "Properties near the lagoon do experience higher levels of mosquitoes, drain flies, and moisture-loving pests. Perimeter treatments and drainage management help reduce activity." },
      { question: "Can you treat fibro houses in Dee Why for termites?", answer: "Yes. While termites don't eat fibro sheeting, they access the timber framing behind it. Thermal imaging helps us detect concealed termite activity without damaging walls." },
      { question: "Do you service Dee Why apartment buildings?", answer: "We service many apartment complexes across Dee Why, treating individual units and common areas including bin rooms, gardens, and car parks." },
    ],
  },
  {
    slug: "mona-vale",
    councilSlug: "northern-beaches-council",
    localIntro:
      "Mona Vale (postcode 2103) sits at the northern end of the Northern Beaches, known for Mona Vale Beach, the Mona Vale Golf Course, and its semi-rural character with larger blocks and established gardens. The bushland interface along Mona Vale Road brings wildlife-related pest issues, including possums, ticks, and funnel-web spiders. Larger properties with garden sheds and timber fencing provide ample termite habitat. Our Mona Vale technicians specialise in bush-interface pest management and provide thorough property inspections.",
    commonPests: ["Termites", "Spiders", "Ticks", "Possums", "Ants"],
    faqs: [
      { question: "Are funnel-web spiders common in Mona Vale?", answer: "The bushland surrounds of Mona Vale are known funnel-web habitat. We provide targeted spider treatments for gardens, subfloors, and around swimming pools where funnel-webs shelter." },
      { question: "Do you treat for ticks in Mona Vale?", answer: "Yes. Paralysis ticks are active in bushland areas around Mona Vale. We treat gardens and yard perimeters to reduce tick populations, especially important for families with pets." },
      { question: "How do I protect my Mona Vale property from termites?", answer: "We recommend annual inspections, chemical soil barriers around foundations, and monitoring stations. Reducing garden mulch against walls and fixing leaking taps also helps." },
    ],
  },
  {
    slug: "brookvale",
    councilSlug: "northern-beaches-council",
    localIntro:
      "Brookvale (postcode 2100) is the Northern Beaches' industrial and commercial hub, home to Warringah Mall, Brookvale Oval, and numerous warehouses and light industrial premises. The commercial concentration means pest management for food manufacturers, breweries, and retail outlets is a core part of our Brookvale service. Residential streets surrounding the commercial precinct feature post-war brick homes and newer townhouses. Rodent activity is common around commercial bins, while cockroaches and ants affect both business and residential properties.",
    commonPests: ["Rodents", "Cockroaches", "Ants", "Spiders", "Silverfish"],
    faqs: [
      { question: "Do you provide commercial pest control in Brookvale?", answer: "Yes. We service warehouses, food manufacturers, retail outlets, and offices throughout Brookvale's commercial precinct. Tailored pest management plans meet industry compliance requirements." },
      { question: "Are rodents a problem near Brookvale industrial areas?", answer: "Rodent activity is higher around commercial and industrial sites due to food waste and storage areas. We install monitoring stations and implement exclusion works to manage populations." },
      { question: "Can you treat the Warringah Mall precinct?", answer: "We service many businesses in and around Warringah Mall. Commercial treatments are scheduled outside trading hours to avoid disruption to customers and staff." },
    ],
  },
  {
    slug: "palm-beach",
    councilSlug: "northern-beaches-council",
    localIntro:
      "Palm Beach (postcode 2108) occupies the northern tip of the Northern Beaches peninsula, famous for Barrenjoey Lighthouse, the Home and Away filming locations, and its exclusive waterfront properties. The bushland of Ku-ring-gai Chase National Park borders Palm Beach to the west, bringing wildlife-related pest challenges including possums, bush rats, ticks, and funnel-web spiders. Many properties feature extensive timber decking and landscaping that require regular termite monitoring. Our Palm Beach technicians provide premium pest management for this pristine coastal community.",
    commonPests: ["Termites", "Possums", "Ticks", "Spiders", "Rodents"],
    faqs: [
      { question: "Do possums damage Palm Beach properties?", answer: "Possums commonly nest in roof cavities, causing noise and damage to insulation and wiring. We provide licensed possum removal and install one-way exits and exclusion measures." },
      { question: "Is tick treatment available in Palm Beach?", answer: "Yes. Paralysis ticks are prevalent in Palm Beach's bushland fringe. We treat gardens and outdoor living areas to reduce tick populations, particularly during the warmer months." },
      { question: "How often should Palm Beach properties be inspected for termites?", answer: "Given the bushland setting and timber-heavy construction common in Palm Beach, we recommend inspections every 12 months at minimum, with monitoring stations for ongoing protection." },
    ],
  },

  // ── Waverley ────────────────────────────────────────────────────────────────
  {
    slug: "bondi",
    councilSlug: "waverley-council",
    localIntro:
      "Bondi (postcode 2026) is one of the world's most famous beach suburbs, drawing visitors to Bondi Beach, the Bondi to Coogee coastal walk, and the vibrant cafe scene along Hall Street and Campbell Parade. The mix of Art Deco apartments, Federation homes, and modern developments creates diverse pest environments. Sandy soils and coastal humidity fuel termite activity, while the dense apartment blocks along Campbell Parade attract cockroaches and ants. Tourist accommodation requires consistent pest management. Our Bondi technicians deliver fast, effective treatments across this iconic suburb.",
    commonPests: ["Cockroaches", "Ants", "Termites", "Fleas", "Spiders"],
    faqs: [
      { question: "Are cockroaches common in Bondi apartments?", answer: "Very common. The density of apartments and restaurants along Campbell Parade means cockroach populations can build quickly. Regular gel baiting and perimeter treatments keep them under control." },
      { question: "Do you treat Bondi holiday apartments?", answer: "Yes. We provide pre-arrival treatments for holiday rentals and ongoing pest management for Airbnb and short-stay property managers across Bondi." },
      { question: "Is termite risk high near Bondi Beach?", answer: "The sandy coastal soils and warm humidity create favourable termite conditions. Properties with garden beds against foundations should have annual inspections." },
    ],
  },
  {
    slug: "bronte",
    councilSlug: "waverley-council",
    localIntro:
      "Bronte (postcode 2024) is a family-friendly Eastern Suburbs beach village centred around Bronte Beach, Bronte Park, and the ocean pool. The suburb features a charming mix of workers' cottages, semi-detached homes, and newer builds nestled into the coastal hillside. The sheltered valley and established gardens create favourable conditions for spiders and termites, while the beachside cafes along Bronte Road attract cockroaches. The Bronte Gully parkland brings possums into residential areas. Our team provides tailored pest solutions for Bronte's unique coastal village character.",
    commonPests: ["Spiders", "Termites", "Cockroaches", "Possums", "Ants"],
    faqs: [
      { question: "Are funnel-web spiders found in Bronte?", answer: "Funnel-webs are occasionally found in Bronte gardens, particularly in rockeries and garden beds near Bronte Gully. We provide targeted spider treatments for garden areas and subfloors." },
      { question: "Do possums affect Bronte homes?", answer: "Yes. The Bronte Gully bushland corridor brings possums into residential roof spaces. We provide licensed removal and entry point sealing to prevent recurrence." },
      { question: "How do I protect my Bronte cottage from termites?", answer: "Annual inspections combined with a chemical soil barrier or monitoring station system provides the best protection for Bronte's older timber-framed cottages." },
    ],
  },
  {
    slug: "vaucluse",
    councilSlug: "waverley-council",
    localIntro:
      "Vaucluse (postcode 2030) is one of Sydney's most prestigious harbourside suburbs, home to Vaucluse House, Nielsen Park, and expansive waterfront estates. The mature gardens, sandstone walls, and established tree canopy of these grand properties create premium termite habitat. Larger grounds also harbour spider populations, including redbacks in garden sheds and retaining walls. Possum activity in heritage roof cavities is common. Our Vaucluse technicians provide discreet, white-glove pest management for this exclusive Eastern Suburbs enclave.",
    commonPests: ["Termites", "Spiders", "Possums", "Ants", "Rodents"],
    faqs: [
      { question: "Do you provide discreet pest control for Vaucluse estates?", answer: "Absolutely. We understand the privacy requirements of Vaucluse residents. Our technicians arrive in unmarked vehicles and work with your property manager to minimise disruption." },
      { question: "Are termites a concern for Vaucluse heritage properties?", answer: "Yes. The mature trees and extensive gardens typical of Vaucluse properties create significant termite risk. Comprehensive annual inspections covering all structures are essential." },
      { question: "Can you treat large Vaucluse gardens for spiders?", answer: "We provide full garden spider treatments including retaining walls, pool areas, garden sheds, and boundary fencing. Treatments target redbacks, funnel-webs, and other dangerous species." },
    ],
  },
  {
    slug: "dover-heights",
    councilSlug: "waverley-council",
    localIntro:
      "Dover Heights (postcode 2030) is a clifftop suburb overlooking the Pacific Ocean, known for its dramatic coastal views, Dudley Page Reserve, and mid-century modern homes. The exposed clifftop position brings strong winds but also salt-laden air that can deteriorate timber elements, making termite-damaged wood more vulnerable. The suburb's gardens, perched above the sandstone cliffs, attract spiders and ant colonies. Our Dover Heights technicians service the range of residential properties from post-war homes to contemporary architectural builds.",
    commonPests: ["Termites", "Spiders", "Ants", "Cockroaches", "Silverfish"],
    faqs: [
      { question: "Does the coastal exposure in Dover Heights affect pest risk?", answer: "The salt air can weaken timber, making termite damage progress faster. Regular inspections help catch issues before structural damage occurs. Wind-borne ants also colonise exposed sites." },
      { question: "Are spiders common in Dover Heights gardens?", answer: "Yes. Redback spiders favour the sandstone retaining walls and garden structures common in Dover Heights. Regular external treatments help manage populations." },
      { question: "Do you service all property types in Dover Heights?", answer: "We treat everything from heritage homes to modern glass-and-steel builds. Our treatments are adapted to each property's construction type and pest risk profile." },
    ],
  },
  {
    slug: "waverley",
    councilSlug: "waverley-council",
    localIntro:
      "Waverley (postcode 2024) is a residential suburb sitting on the ridge between Bondi and Bronte, centred around Waverley Park, the historic Waverley Cemetery, and Charing Cross village. The suburb's inter-war homes and Federation semis feature timber floors and subfloor voids that are susceptible to termite attack. Waverley Park's mature trees support spider and ant populations that migrate into adjacent homes. The Charing Cross shopping strip attracts cockroaches and rodents. Our Waverley technicians provide reliable pest management for this established Eastern Suburbs community.",
    commonPests: ["Termites", "Cockroaches", "Ants", "Spiders", "Rodents"],
    faqs: [
      { question: "Are termites active near Waverley Park?", answer: "The mature trees in and around Waverley Park are known termite host sites. Properties adjacent to the park should maintain active monitoring stations and have annual inspections." },
      { question: "Do you treat the Charing Cross shopping area?", answer: "Yes. We service cafes, restaurants, and retail shops around Charing Cross village with tailored commercial pest management plans." },
      { question: "How much does a termite inspection cost in Waverley?", answer: "Termite inspections for a standard Waverley home are competitively priced. Contact us for a free quote based on your property size and access conditions." },
    ],
  },

  // ── Willoughby ──────────────────────────────────────────────────────────────
  {
    slug: "chatswood",
    councilSlug: "willoughby-city-council",
    localIntro:
      "Chatswood (postcode 2067) is the Lower North Shore's major commercial centre, featuring Westfield Chatswood, Chatswood Chase, and a thriving Asian dining precinct along Victoria Avenue. The suburb blends high-rise apartment towers with established residential streets of brick and timber homes. Commercial kitchens and food courts create significant cockroach and rodent pressures, while residential properties face termite risks from the established tree canopy. Our Chatswood team services apartments, restaurants, and retail premises across this busy suburban centre.",
    commonPests: ["Cockroaches", "Rodents", "Termites", "Ants", "Spiders"],
    faqs: [
      { question: "Do you service Chatswood restaurants and food courts?", answer: "Yes. We provide ongoing pest management for many Chatswood food businesses, including cockroach gel baiting, rodent monitoring, and compliance documentation for council health inspections." },
      { question: "Are high-rise apartments in Chatswood affected by pests?", answer: "Cockroaches and ants are the most common issues in Chatswood apartment towers. They travel through plumbing risers and wall cavities between units, making building-wide treatments most effective." },
      { question: "Is termite risk high in Chatswood residential streets?", answer: "Yes. The established gardens and mature trees on streets like Fullers Road and Centennial Avenue create favourable termite conditions. Annual inspections are recommended." },
    ],
  },
  {
    slug: "artarmon",
    councilSlug: "willoughby-city-council",
    localIntro:
      "Artarmon (postcode 2064) is a well-connected North Shore suburb with a quiet residential core surrounded by a significant industrial and commercial precinct. The Artarmon Industrial Area is one of Sydney's largest, housing warehouses, offices, and manufacturing businesses. Residential streets feature charming brick bungalows and Federation homes. The mix of commercial and residential uses means pest management needs vary widely, from rodent control in warehouses to termite protection for heritage homes. Our Artarmon team handles both commercial and residential pest requirements.",
    commonPests: ["Rodents", "Cockroaches", "Termites", "Ants", "Spiders"],
    faqs: [
      { question: "Do you provide commercial pest control in the Artarmon Industrial Area?", answer: "Yes. We service warehouses, offices, and food businesses throughout the Artarmon industrial precinct with tailored pest management programs and compliance documentation." },
      { question: "Are Artarmon bungalows at risk of termites?", answer: "The timber subfloors and weatherboard elements in many Artarmon bungalows are attractive to termites. Properties near the reserve are at elevated risk. Annual inspections are essential." },
      { question: "How do you handle rodents in Artarmon warehouses?", answer: "We implement integrated rodent management including bait stations, snap traps, and exclusion works to seal entry points. Regular monitoring ensures ongoing control." },
    ],
  },
  {
    slug: "northbridge",
    councilSlug: "willoughby-city-council",
    localIntro:
      "Northbridge (postcode 2063) is a leafy harbourside suburb between Middle Harbour and the Flat Rock Creek bushland. The suburb features generous family homes set among established gardens, with Northbridge Baths and Sailors Bay Reserve providing waterfront recreation. The bushland interface brings funnel-web spiders, ticks, and possums into residential areas, while the harbour proximity sustains elevated termite activity. Our Northbridge technicians specialise in bush-interface pest management and provide comprehensive property inspections.",
    commonPests: ["Termites", "Spiders", "Possums", "Ticks", "Ants"],
    faqs: [
      { question: "Are funnel-web spiders common in Northbridge?", answer: "Yes. The bushland reserves around Northbridge are prime funnel-web habitat. We treat gardens, subfloor spaces, and pool areas where funnel-webs commonly shelter during warmer months." },
      { question: "Do you treat for ticks in Northbridge?", answer: "We provide garden and perimeter tick treatments, particularly important for Northbridge properties backing onto bushland. Treatments are most effective when applied before tick season peaks." },
      { question: "Is possum removal available in Northbridge?", answer: "Yes. We're licensed for possum removal under NSW regulations. We humanely trap and relocate possums, then seal roof and wall entry points to prevent return." },
    ],
  },
  {
    slug: "castlecrag",
    councilSlug: "willoughby-city-council",
    localIntro:
      "Castlecrag (postcode 2068) is an exclusive harbourside suburb designed by Walter Burley Griffin, featuring his distinctive stone houses and a strong bushland character. The suburb's heavy tree canopy, sandstone outcrops, and Middle Harbour foreshore create a natural environment that supports diverse pest populations. Termites thrive in the mature eucalyptus trees, funnel-web spiders inhabit the rocky gardens, and possums frequently nest in older roof cavities. Our Castlecrag technicians provide environmentally sensitive pest management that respects the suburb's unique heritage and natural setting.",
    commonPests: ["Termites", "Spiders", "Possums", "Ants", "Ticks"],
    faqs: [
      { question: "How do you manage pests in Castlecrag's bushland setting?", answer: "We use targeted, low-impact treatments that are effective against pests while minimising environmental impact. Our approach respects Castlecrag's heritage-listed landscape character." },
      { question: "Are Walter Burley Griffin houses in Castlecrag at termite risk?", answer: "The stone construction provides some protection, but timber elements within these heritage homes remain vulnerable. We conduct careful inspections using non-invasive thermal imaging." },
      { question: "Do you treat Castlecrag properties for funnel-web spiders?", answer: "Yes. The rocky sandstone gardens in Castlecrag are ideal funnel-web habitat. We provide targeted treatments for gardens, retaining walls, and around swimming pools." },
    ],
  },
  {
    slug: "willoughby",
    councilSlug: "willoughby-city-council",
    localIntro:
      "Willoughby (postcode 2068) is a family-oriented North Shore suburb centred around Willoughby Road's shops and cafes, the Willoughby Leisure Centre, and several well-maintained parks. The suburb features a mix of brick homes, townhouses, and apartments surrounded by established gardens. The adjacent Naremburn and Willoughby parks provide green corridors that attract spiders, ants, and occasional possums. Termite activity is moderate due to the mature trees throughout residential streets. Our Willoughby team delivers consistent, reliable pest control for families and local businesses.",
    commonPests: ["Termites", "Ants", "Spiders", "Cockroaches", "Rodents"],
    faqs: [
      { question: "Do you service homes near Willoughby Park?", answer: "Yes. Properties near parks often experience higher pest activity due to the green corridors connecting bushland to gardens. We provide perimeter treatments and monitoring for these properties." },
      { question: "What is the most common pest in Willoughby?", answer: "Ants and spiders are the most frequently reported pests in Willoughby, followed by cockroaches in apartments and termites in older timber-floored homes." },
      { question: "How often should I get pest control for my Willoughby home?", answer: "We recommend annual general pest treatments for most Willoughby homes, with quarterly treatments for properties with persistent ant or cockroach issues." },
    ],
  },

  // ── Parramatta ──────────────────────────────────────────────────────────────
  {
    slug: "parramatta",
    councilSlug: "parramatta-council",
    localIntro:
      "Parramatta (postcode 2150) is Sydney's second CBD and the geographic heart of Greater Sydney. The Church Street dining precinct, Westfield Parramatta, and Parramatta Park surround a rapidly growing skyline of residential and commercial towers. The Parramatta River corridor creates elevated moisture levels that attract termites, drain flies, and cockroaches. The density of restaurants and food outlets along Church Street and Eat Street requires rigorous commercial pest management. Our Parramatta team services everything from heritage properties in the park precinct to brand-new high-rise apartments.",
    commonPests: ["Cockroaches", "Rodents", "Termites", "Ants", "Drain Flies"],
    faqs: [
      { question: "Do you service Parramatta CBD restaurants?", answer: "Yes. We provide commercial pest management for restaurants, cafes, and food courts throughout Parramatta CBD, including Church Street and Eat Street precincts." },
      { question: "Are high-rise apartments in Parramatta affected by pests?", answer: "New high-rises can still experience cockroach and ant issues, particularly on lower floors. Plumbing penetrations and shared waste areas provide entry points. Building-wide treatments are most effective." },
      { question: "Is termite risk high near the Parramatta River?", answer: "Yes. The river corridor provides moisture that subterranean termites depend on. Properties within 500 metres of the river should maintain annual inspections and active monitoring." },
    ],
  },
  {
    slug: "westmead",
    councilSlug: "parramatta-council",
    localIntro:
      "Westmead (postcode 2145) is dominated by the Westmead Hospital campus, the Children's Hospital at Westmead, and the expanding Westmead health and education precinct. Residential areas feature a mix of older brick homes and new apartment developments catering to medical professionals and students. The proximity to Parramatta Park and Toongabbie Creek increases termite and mosquito activity. Our Westmead team services residential properties, medical facilities, and the growing apartment precinct, using treatments safe for healthcare-adjacent environments.",
    commonPests: ["Termites", "Cockroaches", "Ants", "Rodents", "Mosquitoes"],
    faqs: [
      { question: "Do you provide pest control for medical facilities in Westmead?", answer: "Yes. We use low-odour, healthcare-safe treatments suitable for medical environments. Our technicians work around clinical schedules to minimise disruption to patients and staff." },
      { question: "Are new Westmead apartments pest-free?", answer: "Not necessarily. Construction activity can disturb pest populations, and new buildings attract ants and cockroaches through plumbing and service penetrations. Early treatment prevents establishment." },
      { question: "Is termite risk high near Parramatta Park?", answer: "Very high. The mature trees and moisture in the park create ideal termite conditions. Westmead properties near the park should have annual inspections and active monitoring systems." },
    ],
  },
  {
    slug: "north-parramatta",
    councilSlug: "parramatta-council",
    localIntro:
      "North Parramatta (postcode 2151) is a residential suburb known for the heritage-listed North Parramatta Government Precinct (former Female Factory and lunatic asylum grounds) and its proximity to Parramatta CBD. The suburb features a mix of post-war brick homes, newer townhouses, and heritage properties. The heritage precinct's overgrown grounds and the Cumberland Hospital campus harbour significant pest populations that can spread to surrounding homes. Our North Parramatta team provides proactive pest management for this historically rich suburb.",
    commonPests: ["Termites", "Rodents", "Cockroaches", "Spiders", "Ants"],
    faqs: [
      { question: "Do heritage buildings in North Parramatta affect pest activity?", answer: "The older buildings and grounds in the heritage precinct can harbour large pest populations. Properties adjacent to these sites benefit from more frequent pest monitoring and perimeter treatments." },
      { question: "Are rodents a problem in North Parramatta?", answer: "Rodent activity is moderate, particularly near the heritage precinct and older commercial areas. We install monitoring stations and recommend property maintenance to reduce harbourage." },
      { question: "What termite treatments work best for North Parramatta homes?", answer: "Chemical soil barriers combined with monitoring stations provide the most effective protection for the brick and timber homes typical of North Parramatta." },
    ],
  },
  {
    slug: "harris-park",
    councilSlug: "parramatta-council",
    localIntro:
      "Harris Park (postcode 2150) is a culturally diverse suburb famous for its Indian and Sri Lankan restaurant strip along Wigram Street, earning it the nickname 'Sydney's Little India'. The dense concentration of restaurants and food businesses creates significant commercial pest management demands. Residential areas feature older fibro and brick homes alongside new apartment developments near the station. The Parramatta River border attracts moisture-dependent pests. Our Harris Park team services both the vibrant restaurant precinct and surrounding residential streets.",
    commonPests: ["Cockroaches", "Rodents", "Ants", "Drain Flies", "Termites"],
    faqs: [
      { question: "Do you service Wigram Street restaurants in Harris Park?", answer: "Yes. We provide regular cockroach, rodent, and drain fly treatments for many Harris Park restaurants. We schedule treatments outside trading hours and provide compliance certificates." },
      { question: "Are cockroaches worse near Harris Park restaurants?", answer: "Commercial food activity does increase cockroach populations in surrounding areas. Residential properties near the restaurant strip benefit from more frequent treatments." },
      { question: "Is pest control needed for new Harris Park apartments?", answer: "Yes. New apartments near the station and river can experience ant, cockroach, and drain fly issues. Early treatment prevents pest populations from establishing." },
    ],
  },
  {
    slug: "granville",
    councilSlug: "parramatta-council",
    localIntro:
      "Granville (postcode 2142) is a residential and commercial suburb at the junction of the Western and Cumberland rail lines. The suburb features older fibro and brick homes, industrial pockets along Parramatta Road, and a multicultural shopping precinct around the station. The older housing stock and industrial areas create varied pest challenges, from termites in timber-framed homes to rodents around commercial premises. The Duck River corridor on the suburb's border adds moisture-related pest pressures. Our Granville team provides affordable, effective pest solutions for this working community.",
    commonPests: ["Termites", "Cockroaches", "Rodents", "Ants", "Spiders"],
    faqs: [
      { question: "Are older Granville homes prone to termites?", answer: "Yes. Many Granville homes were built with timber subfloors and weatherboard cladding in the post-war era. These materials are attractive to termites, making regular inspections essential." },
      { question: "Do you provide affordable pest control in Granville?", answer: "We offer competitive pricing for Granville residents. General pest treatments start from $189, and we provide free quotes for all services." },
      { question: "Is rodent control available for Granville businesses?", answer: "Yes. We service commercial and industrial premises throughout Granville with rodent baiting programs, exclusion works, and monitoring systems." },
    ],
  },

  // ── Sutherland Shire ────────────────────────────────────────────────────────
  {
    slug: "cronulla",
    councilSlug: "sutherland-shire",
    localIntro:
      "Cronulla (postcode 2230) is the Sutherland Shire's premier beachside suburb, known for Cronulla Beach, the Esplanade dining strip, and the ferry to Bundeena across Port Hacking. The sandy coastal soils and warm humidity create aggressive termite conditions, while the beach lifestyle brings flea and tick issues for pet-owning families. The restaurant precinct along Cronulla Street attracts cockroaches and rodents. Art Deco apartments along the Esplanade require regular strata pest management. Our Cronulla team provides beachside-specific pest solutions for this popular Shire suburb.",
    commonPests: ["Termites", "Cockroaches", "Fleas", "Ants", "Rodents"],
    faqs: [
      { question: "Are termites aggressive in Cronulla's sandy soil?", answer: "Yes. Sandy soils allow termites to tunnel more easily and reach foundations faster. Cronulla properties should have chemical soil barriers and annual inspections as standard." },
      { question: "Do you treat for fleas in Cronulla homes?", answer: "Flea treatments are one of our most requested services in Cronulla, especially for pet-owning households near the beach. We treat indoors and outdoor sandy areas." },
      { question: "Can you service Cronulla Esplanade apartments?", answer: "Yes. We work with strata managers across Cronulla to treat individual units and common areas, including basement car parks and bin rooms." },
    ],
  },
  {
    slug: "miranda",
    councilSlug: "sutherland-shire",
    localIntro:
      "Miranda (postcode 2228) is the Sutherland Shire's commercial hub, anchored by Westfield Miranda shopping centre, one of Sydney's largest malls. The surrounding residential streets feature well-maintained brick homes with established gardens. The proximity to the Georges River and Yowie Bay wetlands creates elevated moisture levels that support termite and mosquito populations. The commercial centre attracts cockroaches and rodents. Our Miranda team services residential properties, retail businesses, and the many food outlets within and around the Westfield precinct.",
    commonPests: ["Termites", "Cockroaches", "Rodents", "Ants", "Mosquitoes"],
    faqs: [
      { question: "Do you service businesses near Westfield Miranda?", answer: "Yes. We provide commercial pest management for food outlets, retail stores, and offices in and around Westfield Miranda, with treatments scheduled outside trading hours." },
      { question: "Is termite risk high in Miranda?", answer: "The proximity to the Georges River and established tree canopy creates moderate to high termite risk. Annual inspections are recommended for all Miranda properties." },
      { question: "Are mosquitoes a problem near Miranda wetlands?", answer: "Properties near the Yowie Bay wetlands can experience higher mosquito activity. We provide perimeter treatments that help reduce mosquito numbers around outdoor living areas." },
    ],
  },
  {
    slug: "gymea",
    councilSlug: "sutherland-shire",
    localIntro:
      "Gymea (postcode 2227) is a family-friendly Shire suburb nestled between Gymea Bay on the Port Hacking and the Royal National Park bushland corridor. The suburb centres around Gymea Village shopping strip and features comfortable brick homes on generous blocks. The bushland interface brings spiders, ticks, and possums, while the bay proximity supports termite activity. Gymea families with children and pets prioritise safe, effective pest control. Our Gymea technicians use family-safe products and provide thorough treatments for this bush-meets-bay suburb.",
    commonPests: ["Spiders", "Termites", "Ticks", "Possums", "Ants"],
    faqs: [
      { question: "Are funnel-web spiders found in Gymea?", answer: "Yes. Gymea's bushland setting means funnel-webs are regularly encountered in gardens and subfloor areas. We provide seasonal spider treatments targeting known harbourage sites." },
      { question: "Do you use family-safe products in Gymea?", answer: "Absolutely. We prioritise low-toxicity treatments safe for children and pets. Our technicians advise on re-entry times and any precautions needed." },
      { question: "Is tick treatment important in Gymea?", answer: "Very important, especially for properties near bushland and for families with pets. Paralysis ticks are active in the area from spring through autumn." },
    ],
  },
  {
    slug: "caringbah",
    councilSlug: "sutherland-shire",
    localIntro:
      "Caringbah (postcode 2229) is a well-positioned Shire suburb between Cronulla and Miranda, with a handy shopping precinct along Kingsway and Port Hacking Road. The suburb's brick and tile homes sit on established blocks with mature gardens. Caringbah's central location means pest pressures come from both the commercial precinct and the surrounding residential green corridors. Termites, ants, and cockroaches are the most common complaints. Our Caringbah team provides efficient, reliable pest services for this convenient Shire location.",
    commonPests: ["Termites", "Ants", "Cockroaches", "Spiders", "Rodents"],
    faqs: [
      { question: "Are termites common in Caringbah?", answer: "Yes. The established gardens and mature trees throughout Caringbah provide termite habitat. Properties with older timber subfloors are particularly at risk." },
      { question: "Do you treat ant infestations in Caringbah?", answer: "Ant control is one of our most common services in Caringbah. We use a combination of gel baits, granules, and perimeter sprays to eliminate colonies." },
      { question: "Can you provide a pest control plan for my Caringbah home?", answer: "Yes. We offer annual pest management plans that include scheduled treatments for general pests and termite inspections, giving you year-round protection." },
    ],
  },
  {
    slug: "engadine",
    councilSlug: "sutherland-shire",
    localIntro:
      "Engadine (postcode 2233) is the Sutherland Shire's gateway to the Royal National Park, a bushland suburb with a village atmosphere centred around Engadine Square. Homes are set among tall eucalyptus trees on sloping blocks, creating a strong bush-meets-suburb character. This bushland setting brings significant pest challenges: termites thrive in the eucalyptus canopy, paralysis ticks are prevalent, funnel-web spiders inhabit the rocky gardens, and possums are frequent roof visitors. Our Engadine team specialises in bushland-interface pest management for this unique community.",
    commonPests: ["Termites", "Ticks", "Spiders", "Possums", "Ants"],
    faqs: [
      { question: "Is Engadine high risk for termites?", answer: "Very high. The dense eucalyptus canopy provides extensive termite habitat, and the sloping terrain can trap moisture against foundations. Annual inspections and monitoring stations are strongly recommended." },
      { question: "Are paralysis ticks a concern in Engadine?", answer: "Paralysis ticks are common in Engadine's bushland fringes. We treat yards and gardens to reduce tick populations, especially important for families with dogs and cats." },
      { question: "Do you remove possums from Engadine roofs?", answer: "Yes. Possum removal is a regular service in Engadine. We use licensed, humane methods and install possum-proof barriers to prevent re-entry into roof cavities." },
    ],
  },

  // ── Randwick ────────────────────────────────────────────────────────────────
  {
    slug: "coogee",
    councilSlug: "randwick-council",
    localIntro:
      "Coogee (postcode 2034) is a popular Eastern Suburbs beach community known for Coogee Beach, Wylie's Baths, and the Coogee Bay Hotel. The suburb features a mix of Art Deco apartments, semi-detached homes, and newer developments along the beachfront. Sandy coastal soils support termite activity, while the dense apartment blocks and hospitality venues along Coogee Bay Road attract cockroaches and rodents. The backpacker and holiday accommodation scene requires proactive bedbug monitoring. Our Coogee team provides beach-suburb pest solutions for residents and businesses.",
    commonPests: ["Cockroaches", "Termites", "Bedbugs", "Ants", "Rodents"],
    faqs: [
      { question: "Are bedbugs a problem in Coogee accommodation?", answer: "Coogee's backpacker hostels and holiday apartments do see bedbug activity. We provide inspection and heat-treatment services for accommodation providers, with quick turnaround times." },
      { question: "Do you treat Coogee Beach cafes and restaurants?", answer: "Yes. We service food businesses along Coogee Bay Road and Arden Street with regular cockroach and rodent treatments, scheduled to avoid peak trading times." },
      { question: "Is termite risk high near Coogee Beach?", answer: "Sandy soils along the beachfront are favourable for termites. Properties with timber subfloors or direct ground contact should maintain annual inspections." },
    ],
  },
  {
    slug: "maroubra",
    councilSlug: "randwick-council",
    localIntro:
      "Maroubra (postcode 2035) is the largest suburb in the Randwick LGA, stretching from Maroubra Beach to the Heffron Park precinct. Known locally as 'the Bra', the suburb features post-war brick homes, newer apartments, and housing commission areas. The coastal exposure and sandy soils create termite-friendly conditions, while the diverse housing stock brings varied pest challenges. Cockroaches and ants are common across all property types. The Maroubra Junction shopping precinct and numerous food outlets require commercial pest management. Our team services the full breadth of this large coastal suburb.",
    commonPests: ["Termites", "Cockroaches", "Ants", "Spiders", "Rodents"],
    faqs: [
      { question: "Do you service all areas of Maroubra?", answer: "Yes. We service Maroubra from the beachfront to South Maroubra and the Maroubra Junction precinct. Our technicians know the area well and can attend most callouts same-day." },
      { question: "Are post-war brick homes in Maroubra prone to termites?", answer: "While brick provides some protection, termites access timber framing through weep holes, expansion joints, and plumbing penetrations. Internal timber elements remain vulnerable." },
      { question: "Can you treat Maroubra Junction food businesses?", answer: "We provide commercial pest management for restaurants, takeaways, and food retailers around Maroubra Junction, including regular treatments and compliance documentation." },
    ],
  },
  {
    slug: "randwick",
    councilSlug: "randwick-council",
    localIntro:
      "Randwick (postcode 2031) is home to the famous Royal Randwick Racecourse, the University of NSW campus, and the new Randwick Health and Education precinct centred on the Prince of Wales Hospital. The suburb blends stately Federation homes, inter-war bungalows, and newer developments near the light rail corridor. The Randwick Environment Park and Centennial Park border provide green corridors that attract termites, spiders, and possums. Our Randwick technicians service homes, university accommodation, and the growing mixed-use precinct around the light rail stops.",
    commonPests: ["Termites", "Spiders", "Cockroaches", "Possums", "Ants"],
    faqs: [
      { question: "Do properties near Centennial Park face higher pest risk?", answer: "Yes. The mature trees and green spaces of Centennial Park harbour termites, spiders, and possums that migrate into adjacent Randwick properties. Regular monitoring is recommended." },
      { question: "Can you treat student accommodation in Randwick?", answer: "We service several student accommodation buildings near UNSW, providing regular cockroach and bedbug treatments with minimal disruption to residents." },
      { question: "Are possums a problem in Randwick?", answer: "Possums from Centennial Park and the Randwick Environment Park frequently enter roof cavities. We provide licensed removal and entry point sealing." },
    ],
  },
  {
    slug: "kensington",
    councilSlug: "randwick-council",
    localIntro:
      "Kensington (postcode 2033) is a residential suburb adjacent to the UNSW Kensington campus, Centennial Park, and the Royal Randwick Racecourse. The suburb features a mix of California bungalows, red brick semis, and newer apartment buildings. The high student population creates unique pest challenges, with frequent tenant turnover introducing bedbugs and cockroaches. The proximity to parklands and the racecourse green spaces supports termite and ant activity. Our Kensington team provides reliable pest services for landlords, students, and established homeowners.",
    commonPests: ["Cockroaches", "Bedbugs", "Ants", "Termites", "Spiders"],
    faqs: [
      { question: "Do you treat rental properties in Kensington?", answer: "Yes. We work with landlords and property managers across Kensington to maintain pest-free rental properties. End-of-lease and between-tenant treatments are popular services." },
      { question: "Are bedbugs common in Kensington share houses?", answer: "High tenant turnover, particularly in student share houses, does increase bedbug risk. We provide inspections and heat treatments for landlords concerned about bedbug activity." },
      { question: "Is termite risk elevated near the racecourse?", answer: "The mature trees and irrigated grounds of the racecourse can harbour termites. Kensington properties adjacent to the racecourse should maintain annual inspections." },
    ],
  },
  {
    slug: "kingsford",
    councilSlug: "randwick-council",
    localIntro:
      "Kingsford (postcode 2032) is a multicultural suburb at the intersection of Anzac Parade and Gardeners Road, close to UNSW and the new light rail line. The suburb is known for its bustling Asian restaurant strip along Anzac Parade and its mix of fibro cottages, brick homes, and newer apartment developments. The high density of food outlets attracts cockroaches and rodents, while the older housing stock faces termite and ant challenges. Our Kingsford team provides both residential and commercial pest management for this busy, diverse suburb.",
    commonPests: ["Cockroaches", "Rodents", "Ants", "Termites", "Drain Flies"],
    faqs: [
      { question: "Do you service Kingsford restaurants on Anzac Parade?", answer: "Yes. We provide regular pest management for many Kingsford restaurants, including cockroach gel baiting, rodent monitoring, and drain fly treatments. Compliance certificates are provided." },
      { question: "Are fibro houses in Kingsford at risk of termites?", answer: "Yes. Termites attack the timber framing behind fibro sheeting. Because damage is concealed, regular inspections with thermal imaging are important for early detection." },
      { question: "Is pest control more needed near the Kingsford light rail?", answer: "Construction disruption from the light rail project did displace some rodent populations. While the construction is complete, ongoing monitoring helps manage residual pest activity." },
    ],
  },

  // ── North Sydney ────────────────────────────────────────────────────────────
  {
    slug: "north-sydney",
    councilSlug: "north-sydney-council",
    localIntro:
      "North Sydney (postcode 2060) is a major commercial centre just across the Harbour Bridge from the CBD, with a skyline of office towers, hotels, and residential apartments. The suburb blends corporate offices along Mount Street and Miller Street with heritage homes in the quieter streets below. The commercial precinct requires professional pest management for offices, food courts, and hotels, while residential properties face termite risks from the established gardens. Our North Sydney team provides discreet, professional services for corporate and residential clients.",
    commonPests: ["Cockroaches", "Rodents", "Termites", "Ants", "Spiders"],
    faqs: [
      { question: "Do you provide office pest control in North Sydney?", answer: "Yes. We service many offices and commercial buildings in the North Sydney CBD, treating for cockroaches, rodents, and ants with low-odour products and after-hours scheduling." },
      { question: "Are termites a risk for North Sydney heritage homes?", answer: "The quiet streets below the commercial precinct feature timber-framed heritage homes with established gardens. These properties require annual termite inspections." },
      { question: "Can you service North Sydney hotels?", answer: "We provide hotel pest management including bedbug monitoring, cockroach treatments, and rodent control, with treatments scheduled to avoid guest disruption." },
    ],
  },
  {
    slug: "crows-nest",
    councilSlug: "north-sydney-council",
    localIntro:
      "Crows Nest (postcode 2065) is a trendy Lower North Shore village known for its bustling restaurant strip along Willoughby Road and Alexander Street. The suburb features a mix of character homes, semi-detached properties, and apartment buildings surrounding the village centre. The concentration of restaurants, cafes, and bars creates elevated cockroach and rodent pressures, while residential properties contend with ants, spiders, and termites in the established housing stock. Our Crows Nest team services both the vibrant hospitality precinct and surrounding residential streets.",
    commonPests: ["Cockroaches", "Rodents", "Ants", "Spiders", "Termites"],
    faqs: [
      { question: "Do you service Crows Nest restaurants?", answer: "Yes. We provide ongoing pest management for many restaurants along Willoughby Road and Alexander Street, with treatments scheduled outside service hours." },
      { question: "Are rats a problem behind Crows Nest restaurants?", answer: "Rodent activity is common in lanes and service areas behind the restaurant strip. We install bait stations and work with businesses on waste management improvements." },
      { question: "Do Crows Nest houses need termite inspections?", answer: "Yes. The older character homes in Crows Nest often have timber subfloors and framing that termites target. Annual inspections help catch problems before significant damage occurs." },
    ],
  },
  {
    slug: "neutral-bay",
    councilSlug: "north-sydney-council",
    localIntro:
      "Neutral Bay (postcode 2089) is a harbourside Lower North Shore suburb known for Military Road's shops and dining, and the harbourfront walks around Kurraba Point. The suburb features Art Deco apartment blocks along Military Road, family homes on quieter back streets, and waterfront properties with harbour views. The apartment density means cockroach and ant treatments are in constant demand, while harbour-proximate homes face termite and silverfish issues from elevated moisture. Our Neutral Bay team provides prompt, professional pest control across this well-connected suburb.",
    commonPests: ["Cockroaches", "Ants", "Termites", "Silverfish", "Spiders"],
    faqs: [
      { question: "Are Art Deco apartments in Neutral Bay prone to pests?", answer: "The older construction of Art Deco buildings can harbour cockroaches and silverfish in wall cavities and sub-floors. Regular treatments help manage these persistent pests." },
      { question: "Do you provide strata pest control in Neutral Bay?", answer: "Yes. We work with strata managers across Neutral Bay to provide building-wide pest treatments, including common areas, bin rooms, and individual units." },
      { question: "Is silverfish a concern in Neutral Bay?", answer: "Harbour-side humidity makes silverfish common in Neutral Bay, particularly in older apartments and homes. Targeted treatments in bathrooms, wardrobes, and storage areas are effective." },
    ],
  },
  {
    slug: "kirribilli",
    councilSlug: "north-sydney-council",
    localIntro:
      "Kirribilli (postcode 2061) sits directly across the harbour from the Sydney Opera House, home to Admiralty House, Kirribilli House, and the much-loved Kirribilli Markets. This compact harbourside suburb features grand waterfront residences, Art Deco apartments, and townhouses. The heritage character and harbour position bring unique pest challenges: silverfish thrive in the humid conditions, cockroaches inhabit older building cavities, and the established gardens support ant and spider populations. Our Kirribilli technicians provide careful, heritage-appropriate pest management for this iconic suburb.",
    commonPests: ["Silverfish", "Cockroaches", "Ants", "Spiders", "Rodents"],
    faqs: [
      { question: "Are pests worse in harbourfront Kirribilli properties?", answer: "The elevated humidity near the harbour does increase silverfish and cockroach activity. Regular treatments and good ventilation help manage these moisture-loving pests." },
      { question: "Do you treat heritage buildings in Kirribilli?", answer: "Yes. We use heritage-appropriate treatment methods that are effective against pests without damaging original materials, fixtures, or paintwork." },
      { question: "Can you attend pest emergencies in Kirribilli quickly?", answer: "Kirribilli's proximity to our North Shore base means we can typically attend within two hours for urgent callouts during business hours." },
    ],
  },
  {
    slug: "mcmahons-point",
    councilSlug: "north-sydney-council",
    localIntro:
      "McMahons Point (postcode 2060) is an exclusive harbourside village with some of Sydney's most spectacular harbour views, the iconic Blues Point Tower, and the charming McMahons Point ferry wharf. The compact suburb features a mix of waterfront apartments, character homes, and heritage properties clustered along Blues Point Road. The harbour proximity and leafy gardens create conditions for termites, silverfish, and cockroaches. Limited road access makes pest management logistics unique. Our McMahons Point technicians provide premium, discreet service for this exclusive harbour enclave.",
    commonPests: ["Termites", "Silverfish", "Cockroaches", "Ants", "Spiders"],
    faqs: [
      { question: "Is termite risk elevated in McMahons Point?", answer: "Yes. The harbour moisture and mature fig trees throughout McMahons Point create ideal termite conditions. Annual inspections are essential for all properties in the area." },
      { question: "Do you service Blues Point Road apartments?", answer: "We service apartment buildings and individual units along Blues Point Road and the surrounding streets, providing treatments for cockroaches, ants, and silverfish." },
      { question: "Can you access difficult McMahons Point properties?", answer: "We understand the narrow lanes and limited access in McMahons Point. Our technicians carry portable equipment and coordinate appointments to work within access constraints." },
    ],
  },

  // ── Ryde ────────────────────────────────────────────────────────────────────
  {
    slug: "ryde",
    councilSlug: "ryde-council",
    localIntro:
      "Ryde (postcode 2112) is a large suburb in Sydney's north-west, centred around Top Ryde City shopping centre and the historic Ryde civic precinct. The suburb features a diverse mix of older brick homes, newer townhouses, and high-rise apartments near the shopping centre. The Parramatta River borders Ryde to the south, and Brush Farm Park and Field of Mars Reserve provide bushland corridors. This combination creates elevated termite risk and supports diverse pest populations. Our Ryde team provides comprehensive residential and commercial pest control across this large, varied suburb.",
    commonPests: ["Termites", "Cockroaches", "Ants", "Spiders", "Rodents"],
    faqs: [
      { question: "Is termite risk high in Ryde near the river?", answer: "Yes. Properties near the Parramatta River and surrounding parks face elevated termite risk due to moisture and mature tree populations. Annual inspections are strongly recommended." },
      { question: "Do you service Top Ryde City businesses?", answer: "We provide commercial pest management for food retailers and businesses in and around Top Ryde City, scheduled outside trading hours for minimal disruption." },
      { question: "What pest treatments work best for Ryde homes?", answer: "General pest treatments covering cockroaches, spiders, and ants are the most popular service for Ryde homes. Annual termite inspections are recommended as a separate service." },
    ],
  },
  {
    slug: "eastwood",
    councilSlug: "ryde-council",
    localIntro:
      "Eastwood (postcode 2122) is a vibrant multicultural suburb known for its busy shopping district, Asian grocery stores, and restaurants along Rowe Street. The suburb features established brick homes, new apartment developments near the station, and proximity to Brush Farm Park. The commercial dining precinct creates significant cockroach and rodent management needs, while residential properties face termite, ant, and spider challenges from the mature tree canopy. Our Eastwood team services the diverse needs of this thriving community.",
    commonPests: ["Cockroaches", "Rodents", "Termites", "Ants", "Spiders"],
    faqs: [
      { question: "Do you service Eastwood restaurants and food stores?", answer: "Yes. We provide commercial pest management for Eastwood's busy dining precinct, including cockroach gel baiting, rodent monitoring, and food safety compliance documentation." },
      { question: "Are termites common in Eastwood?", answer: "The mature trees in Brush Farm Park and surrounding residential gardens harbour termites. Properties within the suburb should maintain annual inspections." },
      { question: "Can you treat new apartments near Eastwood station?", answer: "Yes. New developments can experience ant and cockroach issues through plumbing and utility penetrations. Early treatment prevents establishment." },
    ],
  },
  {
    slug: "west-ryde",
    councilSlug: "ryde-council",
    localIntro:
      "West Ryde (postcode 2114) is a family-friendly suburb centred around the West Ryde Marketplace and station. The suburb features well-maintained brick and tile homes on generous blocks, newer apartment developments, and proximity to the Parramatta River corridor. The established garden character of West Ryde's residential streets supports ant, spider, and termite populations. The Marketplace and surrounding food outlets require regular commercial pest management. Our West Ryde team provides reliable, family-focused pest services across this suburban community.",
    commonPests: ["Ants", "Termites", "Spiders", "Cockroaches", "Rodents"],
    faqs: [
      { question: "What is the most common pest problem in West Ryde?", answer: "Ants are the most frequently reported pest in West Ryde, particularly during warmer months when colonies expand and forage further into homes." },
      { question: "Do you provide family-safe pest treatments in West Ryde?", answer: "Yes. We use low-toxicity products safe for children and pets. Our technicians advise on any precautions and re-entry times for each treatment." },
      { question: "Are termites active in West Ryde?", answer: "Moderate to high. The established trees and river proximity create favourable conditions. Annual inspections are recommended, especially for homes with timber subfloors." },
    ],
  },
  {
    slug: "north-ryde",
    councilSlug: "ryde-council",
    localIntro:
      "North Ryde (postcode 2113) is a major technology and business hub, home to Macquarie Park, Macquarie University, and Macquarie Centre. The suburb blends corporate campuses and high-rise apartments with established residential streets featuring brick and tile homes. Lane Cove National Park borders North Ryde to the north, creating a significant bushland interface. This brings funnel-web spiders, ticks, and possums alongside the standard urban pest challenges. Our North Ryde team services corporate offices, university buildings, apartments, and residential homes across this diverse suburb.",
    commonPests: ["Termites", "Spiders", "Cockroaches", "Ants", "Possums"],
    faqs: [
      { question: "Do you provide pest control for Macquarie Park offices?", answer: "Yes. We service corporate offices and commercial buildings throughout Macquarie Park, providing low-disruption treatments for cockroaches, rodents, and ants." },
      { question: "Are funnel-web spiders found in North Ryde?", answer: "Yes. The Lane Cove National Park border means funnel-webs are regularly found in North Ryde gardens. We provide targeted spider treatments for gardens and outdoor areas." },
      { question: "Is possum removal available in North Ryde?", answer: "We're licensed for possum removal across North Ryde. Properties near the national park are most commonly affected. We trap, relocate, and seal entry points." },
    ],
  },
  {
    slug: "meadowbank",
    councilSlug: "ryde-council",
    localIntro:
      "Meadowbank (postcode 2114) is a rapidly developing suburb on the Parramatta River, known for Meadowbank Park, the TAFE campus, and an expanding collection of high-rise apartment towers. The waterfront location creates elevated moisture levels that attract termites and drain flies, while the dense apartment precinct generates cockroach and ant management needs. The heritage area around the old Meadowbank Manufacturing Co. site adds character and varied pest habitats. Our Meadowbank team services the growing apartment community and surrounding established residential streets.",
    commonPests: ["Cockroaches", "Termites", "Ants", "Drain Flies", "Rodents"],
    faqs: [
      { question: "Do new Meadowbank apartments have pest problems?", answer: "New apartments can experience cockroach and ant issues through plumbing risers and building services penetrations. Building-wide treatment programs are most effective." },
      { question: "Does the Parramatta River increase pest risk in Meadowbank?", answer: "Yes. The river creates elevated humidity that attracts termites and drain flies. Properties near the waterfront benefit from regular perimeter treatments." },
      { question: "Can you service Meadowbank strata buildings?", answer: "We work with strata managers across Meadowbank's apartment precinct, providing common area treatments, bin room maintenance, and individual unit treatments." },
    ],
  },

  // ── Blacktown ───────────────────────────────────────────────────────────────
  {
    slug: "blacktown",
    councilSlug: "blacktown-council",
    localIntro:
      "Blacktown (postcode 2148) is the major centre of Western Sydney, with a bustling CBD, Westpoint shopping centre, and the Blacktown International Sportspark. The suburb features a mix of older fibro and brick homes, new apartment developments, and commercial premises. Blacktown's warm western Sydney climate intensifies pest activity, with cockroaches, ants, and termites all thriving. The Blacktown Creek corridor and parklands attract rodents and mosquitoes. Our Blacktown team provides affordable, effective pest solutions for this large, diverse community.",
    commonPests: ["Cockroaches", "Termites", "Ants", "Rodents", "Spiders"],
    faqs: [
      { question: "Are pests more active in Western Sydney heat?", answer: "Yes. The warmer summer temperatures in Blacktown accelerate pest breeding cycles for cockroaches, ants, and termites. Preventative treatments before summer are recommended." },
      { question: "Do you provide affordable pest control in Blacktown?", answer: "We offer competitive pricing for Blacktown residents. General pest treatments start from $189 and we provide free quotes for all services." },
      { question: "Is termite damage common in older Blacktown homes?", answer: "Older fibro and weatherboard homes in Blacktown are particularly vulnerable to termites. Many have timber subfloors that provide direct termite access. Annual inspections are essential." },
    ],
  },
  {
    slug: "seven-hills",
    councilSlug: "blacktown-council",
    localIntro:
      "Seven Hills (postcode 2147) is a well-established Western Sydney suburb centred around Seven Hills Plaza and the train station. The suburb features a mix of post-war fibro cottages, 1980s brick homes, and newer townhouse developments. The warm western Sydney climate and established gardens create active pest environments. Termites are particularly aggressive in Seven Hills' older housing stock, while cockroaches and ants are common across all property types. Our Seven Hills team provides reliable, affordable pest management for families and property investors.",
    commonPests: ["Termites", "Cockroaches", "Ants", "Spiders", "Rodents"],
    faqs: [
      { question: "Are Seven Hills fibro homes at high termite risk?", answer: "Yes. The timber framing behind fibro sheeting is a prime termite target, and damage often goes undetected until it's severe. Regular inspections with thermal imaging are essential." },
      { question: "How much does pest control cost in Seven Hills?", answer: "General pest treatments for a standard Seven Hills home start from $189. Termite inspections are quoted separately based on property size and access." },
      { question: "Do you treat investment properties in Seven Hills?", answer: "Yes. We provide pest management for landlords and property managers, including pre-tenant treatments, annual pest control plans, and termite inspections." },
    ],
  },
  {
    slug: "quakers-hill",
    councilSlug: "blacktown-council",
    localIntro:
      "Quakers Hill (postcode 2763) is a family-oriented suburb in Sydney's north-west, known for the Quakers Hill Reservoir bushland, good schools, and newer residential estates. The suburb features predominantly brick and tile homes from the 1990s onwards, with some newer estate developments. The bushland reserve and creek corridors bring spiders, ticks, and termites into residential areas, while the newer homes face ant and cockroach challenges. Our Quakers Hill team provides family-safe pest treatments suited to this growing suburban community.",
    commonPests: ["Termites", "Spiders", "Ants", "Cockroaches", "Ticks"],
    faqs: [
      { question: "Are newer Quakers Hill homes affected by pests?", answer: "Yes. Even homes built in the last 20 years can experience ant invasions, cockroach issues, and termite activity, particularly as gardens mature and mulch beds are established." },
      { question: "Do you treat for ticks in Quakers Hill?", answer: "We provide garden tick treatments for properties near bushland reserves. Treatments are most effective when applied before the warmer tick season." },
      { question: "Is the Quakers Hill bushland reserve a termite source?", answer: "The reservoir bushland does harbour termite colonies. Properties adjacent to the reserve should maintain monitoring stations and annual inspections." },
    ],
  },
  {
    slug: "kellyville",
    councilSlug: "blacktown-council",
    localIntro:
      "Kellyville (postcode 2155) is one of Sydney's fastest-growing suburbs in the Hills District, known for the Kellyville Metro station, new housing estates, and the nearby Rouse Hill Town Centre. While many homes are relatively new, the rapid development has disturbed native pest habitats, pushing termites, spiders, and rodents into residential areas. Construction sites and newly landscaped gardens attract ant colonies. The warm climate of the Hills area accelerates pest breeding. Our Kellyville team helps new homeowners protect their investment with preventative pest management.",
    commonPests: ["Termites", "Ants", "Spiders", "Cockroaches", "Rodents"],
    faqs: [
      { question: "Do new Kellyville homes need pest control?", answer: "Definitely. New landscaping, mulch beds, and construction debris attract termites and ants. Early treatment prevents pests from establishing in your new home." },
      { question: "Are termites a problem in newly developed Kellyville estates?", answer: "Development disturbs termite colonies in the soil, causing them to seek new food sources — which can be your new home. Monitoring stations installed early provide essential protection." },
      { question: "Is spider control important in Kellyville?", answer: "The semi-rural fringe of Kellyville means redback and funnel-web spiders are commonly found around new homes. Garden and perimeter treatments are recommended." },
    ],
  },
  {
    slug: "stanhope-gardens",
    councilSlug: "blacktown-council",
    localIntro:
      "Stanhope Gardens (postcode 2768) is a master-planned residential estate in Sydney's north-west, featuring modern homes, Stanhope Village shopping centre, and well-maintained parks and green spaces. The suburb's relatively young housing stock means structural pest issues are less common, but landscaping, garden beds, and the warm western Sydney climate create active ant, cockroach, and spider populations. The nearby Blacktown Creek corridor brings occasional rodent and termite activity. Our Stanhope Gardens team provides proactive pest management to protect these well-maintained modern homes.",
    commonPests: ["Ants", "Cockroaches", "Spiders", "Termites", "Rodents"],
    faqs: [
      { question: "Do modern Stanhope Gardens homes get pests?", answer: "Yes. Ants, cockroaches, and spiders are common regardless of home age. The warm climate and garden environments in Stanhope Gardens support active pest populations year-round." },
      { question: "What is the biggest pest threat in Stanhope Gardens?", answer: "Ants are the most common complaint, followed by cockroaches. As the suburb's landscaping matures, termite risk is gradually increasing and monitoring is recommended." },
      { question: "Do you provide pest plans for Stanhope Gardens homeowners?", answer: "Yes. Our annual pest management plans include scheduled treatments for general pests plus a termite inspection, providing year-round protection for your home." },
    ],
  },

  // ── Canterbury-Bankstown ────────────────────────────────────────────────────
  {
    slug: "bankstown",
    councilSlug: "canterbury-bankstown",
    localIntro:
      "Bankstown (postcode 2200) is the major centre of the Canterbury-Bankstown LGA, featuring Bankstown Central shopping centre, the Bankstown Arts Centre, and a diverse multicultural community. The suburb has a mix of post-war brick and fibro homes, newer apartment developments, and a bustling commercial precinct. The Salt Pan Creek Reserve and Cooks River corridor create moisture-rich environments that support termites and mosquitoes. The concentration of food businesses requires robust commercial pest management. Our Bankstown team provides affordable, comprehensive pest control for this large south-western Sydney community.",
    commonPests: ["Cockroaches", "Termites", "Rodents", "Ants", "Mosquitoes"],
    faqs: [
      { question: "Do you service Bankstown CBD businesses?", answer: "Yes. We provide commercial pest management for restaurants, supermarkets, and retail premises throughout Bankstown CBD, with treatments scheduled outside trading hours." },
      { question: "Are termites common in Bankstown?", answer: "Yes. The Salt Pan Creek and Cooks River corridors provide moisture that termites depend on. Older fibro homes in Bankstown are particularly susceptible and need annual inspections." },
      { question: "Do you offer affordable pest control for Bankstown families?", answer: "We provide competitive pricing for Bankstown residents. General pest control starts from $189 and we offer discounts for annual pest management plans." },
    ],
  },
  {
    slug: "canterbury",
    councilSlug: "canterbury-bankstown",
    localIntro:
      "Canterbury (postcode 2193) is a multicultural suburb centred around Canterbury Road, Canterbury Racecourse, and the banks of the Cooks River. The suburb features a mix of older weatherboard and fibro cottages, inter-war brick homes, and new apartment developments. The Cooks River corridor creates persistent moisture that attracts termites, drain flies, and mosquitoes. Canterbury Road's commercial strip of restaurants and food outlets needs regular pest management. Our Canterbury team provides effective, affordable pest solutions for this diverse inner south-western Sydney suburb.",
    commonPests: ["Termites", "Cockroaches", "Drain Flies", "Rodents", "Ants"],
    faqs: [
      { question: "Does the Cooks River increase pest risk in Canterbury?", answer: "Yes. The river corridor creates elevated moisture levels that attract termites, mosquitoes, and drain flies. Properties near the river benefit from more frequent treatments." },
      { question: "Do you treat Canterbury Road food businesses?", answer: "We service many food businesses along Canterbury Road with regular cockroach, rodent, and drain fly treatments, providing compliance documentation for council health inspections." },
      { question: "Are older Canterbury homes at high termite risk?", answer: "Very high. Weatherboard and fibro cottages with timber subfloors near the Cooks River are prime termite targets. Annual inspections are essential for these properties." },
    ],
  },
  {
    slug: "campsie",
    councilSlug: "canterbury-bankstown",
    localIntro:
      "Campsie (postcode 2194) is a bustling multicultural suburb known for its Asian grocery stores, restaurants along Beamish Street, and Campsie Centre. The suburb features a mix of older brick homes, fibro cottages, and newer apartment developments around the station. The Cooks River runs along the suburb's northern boundary, creating moisture conditions that support termites and drain flies. The dense commercial food precinct attracts cockroaches and rodents. Our Campsie team services both the busy restaurant strip and the surrounding residential areas with effective, affordable pest management.",
    commonPests: ["Cockroaches", "Rodents", "Termites", "Ants", "Drain Flies"],
    faqs: [
      { question: "Do you service Beamish Street restaurants in Campsie?", answer: "Yes. We provide regular pest management for restaurants and food stores along Beamish Street, including cockroach treatments, rodent monitoring, and hygiene compliance support." },
      { question: "Is termite damage common in Campsie?", answer: "The Cooks River proximity and older housing stock make Campsie a moderate-to-high termite risk area. Properties with timber subfloors should maintain annual inspections." },
      { question: "Can you treat new Campsie apartments?", answer: "Yes. New apartments near the station can experience cockroach and ant issues. We treat individual units and work with strata managers for building-wide programs." },
    ],
  },
  {
    slug: "lakemba",
    councilSlug: "canterbury-bankstown",
    localIntro:
      "Lakemba (postcode 2195) is a culturally diverse suburb famous for Haldon Street's Middle Eastern and South Asian restaurants, shops, and the annual Ramadan Nights food festival. The suburb features a mix of inter-war brick homes, post-war fibro cottages, and newer apartment buildings. The proximity to the Cooks River and Lakemba Park creates moisture conditions that support termites and drain flies. The busy commercial precinct requires rigorous cockroach and rodent management. Our Lakemba team provides culturally sensitive, effective pest control for this vibrant community.",
    commonPests: ["Cockroaches", "Rodents", "Termites", "Ants", "Drain Flies"],
    faqs: [
      { question: "Do you service Haldon Street food businesses in Lakemba?", answer: "Yes. We provide commercial pest management for Haldon Street restaurants and food stores, with treatments scheduled outside trading hours. Compliance certificates are provided." },
      { question: "Are cockroaches a major problem in Lakemba?", answer: "The density of food establishments and older building stock means cockroach activity is higher than average. Regular professional treatments are far more effective than DIY methods." },
      { question: "Is termite inspection needed for Lakemba homes?", answer: "Yes, especially for older fibro and timber-floored homes near the river and parks. Annual inspections help detect termite activity before significant damage occurs." },
    ],
  },
  {
    slug: "punchbowl",
    councilSlug: "canterbury-bankstown",
    localIntro:
      "Punchbowl (postcode 2196) is a residential suburb south of Canterbury Road, known for the historic Punchbowl Bus Depot, local parks, and a multicultural community. The suburb features predominantly post-war brick and fibro homes on standard suburban blocks, with some newer townhouse developments. The warm south-western Sydney climate intensifies pest activity during warmer months. Cockroaches and ants are the most common household pests, while the older housing stock faces ongoing termite risk. Our Punchbowl team provides reliable, affordable pest control for this established suburban community.",
    commonPests: ["Cockroaches", "Ants", "Termites", "Spiders", "Rodents"],
    faqs: [
      { question: "What is the most common pest in Punchbowl?", answer: "Cockroaches are the most frequently treated pest in Punchbowl, followed closely by ants. Both pests thrive in the warm climate and older building stock common in the area." },
      { question: "Do older Punchbowl homes need termite inspections?", answer: "Yes. Post-war fibro and brick homes often have timber subfloors and framing that are attractive to termites. Annual inspections are recommended, particularly for homes over 30 years old." },
      { question: "Is pest control expensive in Punchbowl?", answer: "We offer competitive pricing designed for Punchbowl families. General pest treatments start from $189, and annual plans provide the best value for ongoing protection." },
    ],
  },
];

// ── Helper Functions ──────────────────────────────────────────────────────────

export function getSuburbContent(slug: string): SuburbContent | undefined {
  return SUBURB_CONTENT.find((s) => s.slug === slug);
}

export function getSuburbsByCouncil(councilSlug: string): SuburbContent[] {
  return SUBURB_CONTENT.filter((s) => s.councilSlug === councilSlug);
}
