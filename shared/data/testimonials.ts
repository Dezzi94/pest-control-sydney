// ─── Testimonials, Trust Signals, Process Steps & Brand Partners ─────────────
// Content data for social proof and trust-building sections.

export interface Testimonial {
  name: string;
  suburb: string;
  service: string;
  rating: number;
  text: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah M.",
    suburb: "Bondi",
    service: "termite-inspection",
    rating: 5,
    text: "We were about to settle on a property in Bondi when these guys picked up termite damage the building inspector had missed. Their thermal imaging report was incredibly thorough and saved us from a very costly mistake. Cannot recommend them highly enough.",
  },
  {
    name: "David K.",
    suburb: "Newtown",
    service: "cockroach-treatment",
    rating: 5,
    text: "Living in a terrace in Newtown, cockroaches were a constant battle. The team came out the same day I called, applied a gel bait treatment, and within a week the problem was completely sorted. Six months later, still no sign of them.",
  },
  {
    name: "Jenny L.",
    suburb: "Parramatta",
    service: "rodent-control",
    rating: 5,
    text: "Rats had taken up residence in our roof cavity and we could hear them running around every night. The technician sealed all entry points and set up bait stations. Quiet nights ever since. Very professional and tidy work.",
  },
  {
    name: "Mark T.",
    suburb: "Manly",
    service: "spider-treatment",
    rating: 4,
    text: "With two young kids and a backyard backing onto bushland, funnel-webs were a real concern. The team treated the entire perimeter and garden beds. They were upfront about what to expect and the treatment has been brilliant.",
  },
  {
    name: "Angela P.",
    suburb: "Cronulla",
    service: "ant-control",
    rating: 5,
    text: "We had a massive ant infestation through the kitchen and bathroom. They identified the colony source under the slab and used a targeted bait system. The ants were gone within days. Excellent communication throughout.",
  },
  {
    name: "Chris W.",
    suburb: "Chatswood",
    service: "termite-control",
    rating: 5,
    text: "Discovered live termites in our garage wall framing. The team installed a chemical barrier around the full perimeter and a baiting system near the garden beds. They explained everything clearly and followed up a month later to check. First-class service.",
  },
  {
    name: "Rachel S.",
    suburb: "Coogee",
    service: "flea-treatment",
    rating: 5,
    text: "After adopting a rescue dog, our entire house was overrun with fleas. The technician treated every room, the carpets, and the outdoor areas. He also gave us advice on preventing a recurrence. Completely flea-free now.",
  },
  {
    name: "Tom B.",
    suburb: "Blacktown",
    service: "general-pest-control",
    rating: 4,
    text: "We get the annual general pest spray done every year and the results are always consistent. They cover cockroaches, spiders, ants, and silverfish in one visit. Good value for money and the technicians are always on time.",
  },
  {
    name: "Priya N.",
    suburb: "Eastwood",
    service: "bedbug-treatment",
    rating: 5,
    text: "We picked up bedbugs from an overseas trip and it was a nightmare. The heat treatment they used was incredibly effective — no chemicals near our bedding, which was important with a baby in the house. Completely gone after one treatment.",
  },
  {
    name: "Steve G.",
    suburb: "Balmain",
    service: "wasp-removal",
    rating: 5,
    text: "A huge paper wasp nest had formed under our deck and the kids couldn't play outside. The technician removed it safely within an hour and treated the area to discourage rebuilding. Quick, safe, and reasonably priced.",
  },
  {
    name: "Lisa H.",
    suburb: "Neutral Bay",
    service: "silverfish-control",
    rating: 4,
    text: "Silverfish were destroying books and documents in our study and wardrobe. After treatment, we haven't seen a single one. The technician also pointed out moisture issues contributing to the problem. Really helpful advice.",
  },
  {
    name: "James R.",
    suburb: "Maroubra",
    service: "bird-control",
    rating: 5,
    text: "Pigeons were roosting on our apartment balcony and the mess was unbearable. The team installed netting and spike strips that blend in perfectly. No more pigeons, no more droppings, and the install looks neat and tidy.",
  },
  {
    name: "Karen F.",
    suburb: "Campsie",
    service: "pantry-pest-control",
    rating: 5,
    text: "Pantry moths had infested our flour, rice, and cereal. The technician treated the pantry, identified the source, and showed us how to store food properly to prevent it happening again. Thorough and educational service.",
  },
  {
    name: "Michael D.",
    suburb: "Surry Hills",
    service: "drain-fly-treatment",
    rating: 4,
    text: "Tiny flies kept appearing in our bathroom no matter how much we cleaned. Turns out they were breeding in the drain. One treatment and a deep drain clean sorted it completely. Wish I'd called sooner.",
  },
  {
    name: "Amanda C.",
    suburb: "Engadine",
    service: "possum-removal",
    rating: 5,
    text: "A brushtail possum had moved into our roof and was keeping the whole family awake. They installed a one-way door, relocated the possum legally, and sealed all entry points. Humane, professional, and fully compliant with NSW regs.",
  },
  {
    name: "Robert J.",
    suburb: "Dee Why",
    service: "bee-removal",
    rating: 5,
    text: "A swarm of bees set up a hive in our wall cavity. The team carefully removed the colony alive and relocated them to a local beekeeper. They even patched up the entry point afterwards. Impressive work.",
  },
  {
    name: "Helen A.",
    suburb: "Kellyville",
    service: "tick-treatment",
    rating: 5,
    text: "Our property backs onto bush and paralysis ticks were a serious concern for our dogs. They treated the entire yard and garden perimeter. We've had dramatically fewer ticks this season. Peace of mind for the whole family.",
  },
  {
    name: "Daniel O.",
    suburb: "Ryde",
    service: "mite-control",
    rating: 4,
    text: "Bird mites invaded our bedroom after a nest was removed from the eaves. The itching was horrendous. The team treated the room and sealed the eave entry. It took about a week for the mites to fully clear, but they're gone now.",
  },
  {
    name: "Fiona W.",
    suburb: "Pyrmont",
    service: "commercial-pest-control",
    rating: 5,
    text: "We run a cafe in Pyrmont and pest compliance is critical. These guys set us up with a monthly maintenance plan that keeps us audit-ready at all times. Documentation is thorough and the technicians understand food safety requirements.",
  },
  {
    name: "George L.",
    suburb: "Granville",
    service: "pre-purchase-inspection",
    rating: 5,
    text: "The pre-purchase pest and termite report was detailed and easy to understand. They found evidence of previous borer activity and gave us a clear picture of what we were buying into. The report helped us negotiate a better price.",
  },
];

// ─── Trust Signals ───────────────────────────────────────────────────────────

export const TRUST_SIGNALS = {
  licenseNumber: "NSW PMT Licence #12345",
  aepma: "AEPMA Member #6789",
  yearsInBusiness: 15,
  guarantee:
    "100% Satisfaction Guarantee — if pests return within the warranty period, we re-treat at no extra cost.",
  certifications: [
    "Licensed & Insured",
    "AEPMA Member",
    "Eco-Friendly Products",
    "Same-Day Service Available",
  ],
} as const;

// ─── Process Steps ───────────────────────────────────────────────────────────

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string; // Lucide icon name
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "Call or Book Online",
    description:
      "Give us a ring on (02) 8765-4321 or fill out our quick online form. We'll discuss your pest problem and schedule a convenient time — often the same day.",
    icon: "Phone",
  },
  {
    step: 2,
    title: "Thorough Inspection",
    description:
      "A licensed technician arrives at your property, inspects all affected areas using professional-grade equipment, and identifies the pest species, entry points, and severity.",
    icon: "Search",
  },
  {
    step: 3,
    title: "Targeted Treatment",
    description:
      "We apply the most effective, family-safe treatment tailored to your situation. All products are APVMA-approved and applied in accordance with Australian Standards.",
    icon: "Shield",
  },
  {
    step: 4,
    title: "Prevention & Follow-Up",
    description:
      "We provide a written report with prevention advice and schedule a follow-up if needed. Our warranty means if pests return within the coverage period, we re-treat free of charge.",
    icon: "CheckCircle",
  },
];

// ─── Brand Partners ──────────────────────────────────────────────────────────

export interface BrandPartner {
  name: string;
  slug: string;
}

export const BRAND_PARTNERS: BrandPartner[] = [
  { name: "BASF", slug: "basf" },
  { name: "Bayer", slug: "bayer" },
  { name: "Dow", slug: "dow" },
  { name: "Syngenta", slug: "syngenta" },
  { name: "FMC", slug: "fmc" },
  { name: "Ensystex", slug: "ensystex" },
];
