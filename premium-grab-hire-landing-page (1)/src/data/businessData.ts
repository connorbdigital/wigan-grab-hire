export type AudienceMode = 'all' | 'domestic' | 'commercial';

export interface AggregateMaterial {
  id: string;
  name: string;
  shortName: string;
  category: 'Quarried Primary' | 'Recycled Certified' | 'Screened Organic' | 'Washed Quarried';
  gradeSpec: string;
  grainSize: string;
  densityTonnesPerM3: number;
  minOrderTonnes: number;
  maxOrderTonnes: number;
  image: string;
  badge: string;
  description: string;
  domesticUses: string[];
  commercialUses: string[];
  compactionNote: string;
}

export interface ServiceItem {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  capacityBadge: string;
  turnaroundBadge: string;
  description: string;
  domesticHighlight: string;
  commercialHighlight: string;
  specs: { label: string; value: string }[];
  features: string[];
}

export interface CoverageHub {
  town: string;
  postcodePrefix: string;
  distanceFromDepot: string;
  typicalEta: string;
  status: 'Primary Hub' | 'Rapid Corridor' | 'Commercial Fleet';
}

export const BUSINESS_INFO = {
  name: 'Wigan Grab Hire & Aggregates',
  shortName: 'Wigan Grab Hire',
  tagline: 'Why pay for 2 skips when we can get it done in 1 grab?',
  phoneDisplay: '07927 200523',
  phoneHref: 'tel:07927200523',
  whatsappHref:
    'https://wa.me/447927200523?text=Hi%20Wigan%20Grab%20Hire%20%26%20Aggregates%2C%20I%27d%20like%20a%20quote%20for%20',
  email: 'info@wigangrabhireandaggregates.co.uk',
  address: {
    unit: 'Unit 8, Water Works Business Park',
    street: 'Stephens Way',
    town: 'Wigan',
    postcode: 'WN3 6GW',
    full: 'Unit 8, Water Works Business Park, Stephens Way, Wigan, WN3 6GW',
  },
  hours: {
    days: 'Monday – Sunday (7 Days a Week)',
    time: '07:00 AM – 06:00 PM',
    dispatchNote: 'Same-day & next-day slots available across the North West',
  },
  socials: {
    whatsapp: 'https://wa.me/447927200523',
    instagram: 'https://www.wigangrabhireandaggregates.co.uk',
    facebook: 'https://www.wigangrabhireandaggregates.co.uk',
    tiktok: 'https://www.wigangrabhireandaggregates.co.uk',
  },
};

export const COVERAGE_HUBS: CoverageHub[] = [
  {
    town: 'Wigan & Leigh',
    postcodePrefix: 'WN1 – WN8',
    distanceFromDepot: '0 – 7 miles',
    typicalEta: 'Same-Day (60–120 mins)',
    status: 'Primary Hub',
  },
  {
    town: 'Chorley & Leyland',
    postcodePrefix: 'PR6 – PR7 / PR25',
    distanceFromDepot: '8 – 12 miles',
    typicalEta: 'Same / Next Day',
    status: 'Primary Hub',
  },
  {
    town: 'Bolton & Horwich',
    postcodePrefix: 'BL1 – BL7',
    distanceFromDepot: '9 – 14 miles',
    typicalEta: 'Same / Next Day',
    status: 'Primary Hub',
  },
  {
    town: 'St Helens & Haydock',
    postcodePrefix: 'WA9 – WA11',
    distanceFromDepot: '7 – 11 miles',
    typicalEta: 'Same / Next Day',
    status: 'Primary Hub',
  },
  {
    town: 'Warrington & Newton',
    postcodePrefix: 'WA1 – WA5 / WA12',
    distanceFromDepot: '10 – 15 miles',
    typicalEta: 'Same / Next Day',
    status: 'Primary Hub',
  },
  {
    town: 'Preston & Bamber Bridge',
    postcodePrefix: 'PR1 – PR5',
    distanceFromDepot: '15 – 19 miles',
    typicalEta: 'Next-Day / Express',
    status: 'Rapid Corridor',
  },
  {
    town: 'Liverpool & Merseyside',
    postcodePrefix: 'L1 – L36',
    distanceFromDepot: '18 – 24 miles',
    typicalEta: 'Next-Day / Scheduled',
    status: 'Rapid Corridor',
  },
  {
    town: 'Southport & Ormskirk',
    postcodePrefix: 'PR8 – PR9 / L39',
    distanceFromDepot: '14 – 20 miles',
    typicalEta: 'Next-Day / Scheduled',
    status: 'Rapid Corridor',
  },
  {
    town: 'Greater Manchester',
    postcodePrefix: 'M1 – M46',
    distanceFromDepot: '12 – 22 miles',
    typicalEta: 'Same / Next Day',
    status: 'Rapid Corridor',
  },
  {
    town: 'Leeds, Bradford & Birmingham',
    postcodePrefix: 'LS / BD / B (Commercial)',
    distanceFromDepot: 'National Corridor',
    typicalEta: 'Scheduled Fleet Charter',
    status: 'Commercial Fleet',
  },
];

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: 'grab-hire',
    code: 'SRV-01 // 8-WHEEL FLEET',
    title: '17-Ton 8-Wheel Hydraulic Grab Hire',
    subtitle: 'Full or Half Loads · Wait & Load in ~20 Minutes',
    capacityBadge: '17 Tonnes / 16m³',
    turnaroundBadge: '~20 Min On-Site Load',
    description:
      'Specialist 8-wheel grab wagons equipped with an 8-metre hydraulic clamshell crane arm. We park alongside your waste pile, load up to 17 tonnes directly over walls, fences, or hoarding, and leave your site spotless—eliminating skip permits and days of manual wheelbarrow loading.',
    domesticHighlight:
      'Ideal for driveway excavations, garden landscaping, extensions, and patio dig-outs. No skip blocking your driveway for weeks.',
    commercialHighlight:
      'High-volume muck shifts for groundwork contractors, civil engineers, and utility works with full Environment Agency waste transfer notes.',
    specs: [
      { label: 'Max Payload', value: '17.0 Tonnes' },
      { label: 'Hydraulic Reach', value: 'Up to 8.0 Metres' },
      { label: 'Skip Equivalent', value: '2 to 3 × 8-Yard Skips' },
      { label: 'Load Options', value: 'Half Load or Full Load' },
    ],
    features: [
      'Full or half loads tailored to your exact project volume',
      'Loads directly over garden walls, fences, and site barriers',
      'Zero council road skip permit required',
      'CPCS / ALLMI certified experienced grab operators',
    ],
  },
  {
    id: 'aggregates-supply',
    code: 'SRV-02 // QUARRY & RECYCLED',
    title: 'Direct Aggregate Supply (Free Delivery)',
    subtitle: '0.5 Ton Loose to 20-Ton Bulk Loads · Tipped or Grabbed Off',
    capacityBadge: '0.5T – 20T Loads',
    turnaroundBadge: 'FREE Local Delivery',
    description:
      'We supply premium quarried and certified recycled aggregates direct to your home or construction site from half a ton loose up to 20-ton bulk loads—with free delivery across our core North West service area.',
    domesticHighlight:
      'From 0.5T for a garden path or raised bed up to 20T for a new block-paved driveway—delivered loose or craned neatly over your front wall.',
    commercialHighlight:
      'Consistent SHW Series 600 & BS-compliant sub-base, bedding stone, and 6F2 hardcore delivered on tight site schedules.',
    specs: [
      { label: 'Order Range', value: '0.5 Ton to 20 Tonnes' },
      { label: 'Delivery Fee', value: 'FREE across North West' },
      { label: 'Offload Method', value: 'Tipper or Hydraulic Grab' },
      { label: 'Quality Standard', value: 'Quarried & BS Certified' },
    ],
    features: [
      'MOT Type 1, Screened Topsoil, Sharp/Building Sand & Crushed Stone',
      'Free delivery from 0.5 ton loose to full 20-ton wagon loads',
      'Split-trip capability: drop fresh aggregate & grab away waste in 1 visit',
      'Precision hydraulic crane placement to keep footpaths clear',
    ],
  },
  {
    id: 'muck-away',
    code: 'SRV-03 // SITE CLEARANCE',
    title: 'Rapid Muck Away & Rubble Removal',
    subtitle: 'Inert Soil, Clay, Hardcore, Concrete & Green Waste',
    capacityBadge: 'Up to 17T Per Grab',
    turnaroundBadge: '95%+ Recycled Rate',
    description:
      'Fast, compliant removal of large quantities of excavated spoil, heavy clay, broken concrete, bricks, and green waste. We divert waste from landfill by screening and recycling inert materials back into certified secondary aggregates.',
    domesticHighlight:
      'Digging out for an extension, swimming pool, or new lawn? Pile the soil near access and our grab arm clears it in one clean sweep.',
    commercialHighlight:
      'Multi-load daily muck away programs for housing developments, commercial foundations, and highway maintenance contracts.',
    specs: [
      { label: 'Accepted Streams', value: 'Inert Soil, Brick, Concrete, Green' },
      { label: 'Compliance', value: 'Licensed Waste Carrier' },
      { label: 'Documentation', value: 'Digital Waste Transfer Note' },
      { label: 'Recycling Target', value: '95%+ Material Recovery' },
    ],
    features: [
      'Clean inert earth, mixed subsoil, and clay excavation clearance',
      'Hardcore, brick rubble, concrete slabs, and tarmac removal',
      'Stump, hedge, and heavy landscaping green waste clearance',
      'Same-day turnaround keeps excavation machinery moving',
    ],
  },
  {
    id: 'fly-tipping',
    code: 'SRV-04 // RAPID RESPONSE',
    title: 'Licensed Fly-Tipping & Emergency Clearance',
    subtitle: 'Rapid Site Remediation for Landowners & Commercial Estates',
    capacityBadge: 'Rapid Dispatch',
    turnaroundBadge: 'Full Audit Trail',
    description:
      'Our licensed waste removal fleet tackles unauthorized fly-tipping fast. Using high-reach hydraulic clamshell buckets, our operators safely clear dumped rubble, soil, and bulky commercial waste without manual handling hazards.',
    domesticHighlight:
      'Blocked private lanes, rural access tracks, or residential boundary dumping cleared swiftly and legally.',
    commercialHighlight:
      'Trusted by industrial estates, retail parks, landlords, and facilities managers across Wigan and the North West.',
    specs: [
      { label: 'Response Window', value: 'Same / Next Day' },
      { label: 'Licensing', value: 'EA Upper Tier Carrier' },
      { label: 'Handling Method', value: 'Contactless Hydraulic Grab' },
      { label: 'Operating Days', value: '7 Days (Mon–Sun 7am–6pm)' },
    ],
    features: [
      'Immediate mobilization from our Stephens Way, Wigan depot',
      'Full Environment Agency compliance & duty-of-care paperwork',
      'Clears heavy tipped spoil, builders waste, and bulky obstructions',
      'Prevents repeat dumping by restoring clean site security',
    ],
  },
];

export const AGGREGATE_MATERIALS: AggregateMaterial[] = [
  {
    id: 'mot-type-1',
    name: 'MOT Type 1 Crushed Limestone',
    shortName: 'MOT Type 1 Sub-Base',
    category: 'Quarried Primary',
    gradeSpec: 'SHW Clause 803 · 0/31.5mm Graded',
    grainSize: '40mm down to dust',
    densityTonnesPerM3: 1.95,
    minOrderTonnes: 0.5,
    maxOrderTonnes: 20,
    image: '/images/agg-mot-type1.jpg',
    badge: 'Best Seller · Free Delivery',
    description:
      'High-strength quarried crushed limestone graded from 40mm down to fine dust for superior load-bearing interlock and compaction.',
    domesticUses: [
      'Block-paved, resin, or tarmac driveways',
      'Garden patio & porcelain paving sub-bases',
      'Outbuilding, garage, and garden room foundations',
    ],
    commercialUses: [
      'Adoptable highway & car park sub-base construction',
      'Heavy-duty haul roads and crane hardstandings',
      'Commercial slab & civil groundwork sub-layers',
    ],
    compactionNote: 'Compacts to a dense, frost-resistant load-bearing layer in 100mm–150mm passes.',
  },
  {
    id: 'screened-topsoil',
    name: 'Screened Multi-Purpose Topsoil',
    shortName: 'BS3882 Screened Topsoil',
    category: 'Screened Organic',
    gradeSpec: 'BS3882 Certified · 10mm Screened',
    grainSize: '0–10mm fine friable loam',
    densityTonnesPerM3: 1.45,
    minOrderTonnes: 0.5,
    maxOrderTonnes: 20,
    image: '/images/agg-topsoil.jpg',
    badge: 'Landscaping Grade · Free Delivery',
    description:
      'Nutrient-rich, stone-free sandy loam topsoil screened to 10mm for effortless raking, turfing, seeding, and raised planting beds.',
    domesticUses: [
      'New lawn turfing and grass seed levelling',
      'Raised railway sleeper beds & vegetable borders',
      'Garden re-grading and flowerbed enrichment',
    ],
    commercialUses: [
      'New-build housing development plot landscaping',
      'Civic parklands, verges, and commercial soft-scaping',
      'Golf course & sports pitch rootzone dressing',
    ],
    compactionNote: 'Allow ~15% settlement after light rolling and watering.',
  },
  {
    id: 'sand-and-gravel',
    name: 'Washed Sharp Sand & 10/20mm Shingle',
    shortName: 'Sharp Sand & Pipe Bedding',
    category: 'Washed Quarried',
    gradeSpec: 'BS EN 12620 · Washed Grit & Pea Shingle',
    grainSize: '0–4mm Sand / 10–20mm Stone',
    densityTonnesPerM3: 1.65,
    minOrderTonnes: 0.5,
    maxOrderTonnes: 20,
    image: '/images/agg-sand-gravel.jpg',
    badge: 'Paving & Drainage · Free Delivery',
    description:
      'Clean washed sharp grit sand for flag and block paving screeds, plus angular and rounded 10mm/20mm drainage stone and pipe bedding.',
    domesticUses: [
      'Laying Indian stone, porcelain, and block paving',
      'French drains, soakaways, and decorative gravel paths',
      'Artificial grass screed layers & shed bases',
    ],
    commercialUses: [
      'Utility trench pipe bedding & surround (10mm/20mm)',
      'Commercial land drainage & attenuation blankets',
      'Floor screeding and heavy paving mortar mixes',
    ],
    compactionNote: 'Ideal moisture retention for sharp screed beds and high permeability for drainage.',
  },
  {
    id: 'crushed-concrete',
    name: 'Recycled Crushed Concrete (Type 1 / 6F2)',
    shortName: 'Crushed Concrete Hardcore',
    category: 'Recycled Certified',
    gradeSpec: 'WRAP Protocol · 6F2 / Type 1 Recycled',
    grainSize: '0–40mm or 75mm down',
    densityTonnesPerM3: 1.8,
    minOrderTonnes: 0.5,
    maxOrderTonnes: 20,
    image: '/images/agg-crushed-concrete.jpg',
    badge: 'Eco Value · Free Delivery',
    description:
      'Cost-effective, sustainable recycled crushed concrete aggregate engineered for bulk fill, capping layers, and heavy-duty hardcore bases.',
    domesticUses: [
      'Cost-effective driveway & parking area base layers',
      'Filling deep excavations and raising site levels',
      'Rural track, farm lane, and access road repairs',
    ],
    commercialUses: [
      'Piling mats, temporary site haul roads, and compounds',
      'Bulk earthworks capping layers (6F2 / 6F5)',
      'Sustainable BREEAM-compliant groundwork sub-bases',
    ],
    compactionNote: 'High angularity provides excellent mechanical lock under roller compaction.',
  },
];

export const PRICING_TIERS = [
  {
    id: 'half-load',
    name: 'Half-Load Grab / Small Drop',
    audienceTag: 'Domestic & Small Projects',
    capacity: 'Up to 8.5 Tonnes (or 0.5T–8T Aggregates)',
    skipEquivalent: 'Replaces 1 × Large 8-Yard Skip',
    priceIndicator: 'Half-Load Rate',
    highlight: false,
    description:
      'Perfect for smaller driveway dig-outs, patio clearances, garden makeovers, or ordering 0.5T to 8T of topsoil, sand, or stone.',
    features: [
      'Up to 8.5 tonnes waste grab OR 0.5T–8T aggregate drop',
      '8-metre hydraulic crane reach over walls & fences',
      'Loaded & cleared in ~15–20 minutes on site',
      'FREE aggregate delivery across Wigan & North West',
      'No council skip permit or driveway damage',
    ],
    ctaLabel: 'Quote Half-Load',
  },
  {
    id: 'full-load',
    name: 'Full 17-Ton 8-Wheel Grab',
    audienceTag: 'Most Popular · Best Value',
    capacity: 'Up to 17 Tonnes Waste (or up to 20T Aggregates)',
    skipEquivalent: 'Replaces 2 to 3 × 8-Yard Skips',
    priceIndicator: 'Best Value Per Tonne',
    highlight: true,
    description:
      'Why pay for 2 skips when we get it done in 1 grab? Our flagship 8-wheel 17-tonne grab load clears massive waste piles in a single visit.',
    features: [
      'Full 17-tonne (16m³) 8-wheel grab lorry capacity',
      'Saves 35%–45% compared to hiring multiple skips',
      'Same-day or next-day dispatch (7 days, 7am–6pm)',
      'Up to 20-tonne bulk aggregate delivery with FREE delivery',
      'Full Environment Agency Waste Transfer Note included',
    ],
    ctaLabel: 'Book Full 17T Grab',
  },
  {
    id: 'split-backhaul',
    name: 'Combo Drop & Grab / Trade Fleet',
    audienceTag: 'Contractors & Full Renovations',
    capacity: 'Deliver Aggregate + Remove Spoil / Multi-Load',
    skipEquivalent: 'Zero Empty Miles · Max Site Efficiency',
    priceIndicator: 'Combined Load Saving',
    highlight: false,
    description:
      'Need MOT Type 1 or Topsoil delivered AND excavated muck removed? We deliver your aggregates and grab away your waste, or run multi-load site shifts.',
    features: [
      'Deliver MOT Type 1 / Topsoil / Sand & remove excavated muck',
      'Priority 7:00 AM early site arrival slots available',
      'Dedicated multi-load turnaround for commercial groundworks',
      'Licensed fly-tipping & emergency site clearance available',
      'Direct account & WhatsApp dispatch line (07927 200523)',
    ],
    ctaLabel: 'Request Combined / Trade Quote',
  },
];

export const TESTIMONIALS = [
  {
    id: 't1',
    type: 'Domestic',
    author: 'Mark Ditchfield',
    role: 'Homeowner · Driveway Transformation',
    location: 'Standish, Wigan (WN6)',
    loadSummary: '17T Clay Muck Away + 14T MOT Type 1 Delivery',
    quote:
      'We dug out a double driveway and were quoted nearly £580 for two large skips that would have sat on our road for a fortnight. Wigan Grab Hire delivered 14 tons of MOT Type 1 with free delivery and grabbed away the entire clay pile over our front wall in 20 minutes flat. Unbelievable service.',
    rating: 5,
  },
  {
    id: 't2',
    type: 'Commercial',
    author: 'Dave Mercer',
    role: 'Site Manager · Civil & Groundworks Contractor',
    location: 'Chorley & Preston Corridor (PR7)',
    loadSummary: 'Multi-Load 8-Wheel Muck Shift & 6F2 Hardcore',
    quote:
      'Reliability is everything when you have excavators waiting on site. The lads at Wigan Grab Hire turn up bang on 7:30am, their 8-wheelers carry a proper 17-ton payload, and their drivers can place stone or grab spoil out of tight corners with zero fuss.',
    rating: 5,
  },
  {
    id: 't3',
    type: 'Domestic',
    author: 'Sarah & Liam Pendlebury',
    role: 'Garden Landscaping & Lawn Project',
    location: 'Westhoughton, Bolton (BL5)',
    loadSummary: 'Half-Load Rubble Grab + 6T Screened Topsoil',
    quote:
      'Used the half-load grab service to clear old broken concrete flags and ordered 6 tonnes of screened topsoil. The driver craned the soil straight over our fence onto tarpaulins so our driveway stayed spotless. Open on a Sunday too which saved our weekend!',
    rating: 5,
  },
  {
    id: 't4',
    type: 'Commercial',
    author: 'Paul Harrison',
    role: 'Commercial Property & Facilities Director',
    location: 'Haydock / St Helens (WA11)',
    loadSummary: 'Emergency Fly-Tipping Clearance (15 Tonnes)',
    quote:
      'Had a serious fly-tipping incident blocking a service yard entrance on a Friday morning. Called 07927 200523 and an 8-wheel grab wagon was on site that afternoon. Cleared the lot in 25 minutes with full waste transfer paperwork.',
    rating: 5,
  },
];

export const FAQ_ITEMS = [
  {
    category: 'Capacity & Economics',
    question: 'How much does an 8-wheel grab lorry hold compared to a standard skip?',
    answer:
      'Our 8-wheel grab wagons carry up to 17 tonnes of waste (approx. 16m³ in volume). That is equivalent to roughly 2 to 3 standard 8-yard builders skips—which is why our motto is "Why pay for 2 skips when we can get it done in 1 grab?" You also save all the time and back-breaking labour of loading skips by hand.',
  },
  {
    category: 'Capacity & Economics',
    question: 'Do you offer half loads if I do not have 17 tonnes of waste?',
    answer:
      'Yes! We offer both full loads and half loads—whatever is more convenient and cost-effective for your project. And for aggregate deliveries (topsoil, stone, sand, MOT Type 1), we deliver anywhere from half a ton (0.5T) loose up to full 20-ton loads with free delivery.',
  },
  {
    category: 'Site Access & Reach',
    question: 'Where should I pile my waste, and can the grab arm reach over fences or walls?',
    answer:
      'Our hydraulic grab arm has a reach of up to 8 metres from the side of the lorry. As long as our 8-wheel wagon can park safely adjacent to your property or site, we can reach straight over standard garden walls, fences, and hedges (up to ~2.5m high). Just ensure there are no overhead power lines, telephone cables, or low tree branches directly above the pile.',
  },
  {
    category: 'Aggregates & Delivery',
    question: 'Is aggregate delivery really free, and what quantities do you supply?',
    answer:
      'Yes—we supply quarried and recycled aggregates (MOT Type 1, Topsoil, Sharp Sand, Building Sand, Crushed Concrete, and Stone) direct to your site or home from half a ton (0.5T) loose right up to 20-ton loads with FREE delivery across Wigan and our core North West service areas.',
  },
  {
    category: 'Operations & Licensing',
    question: 'Do I need a council road permit for a grab lorry like I do for a skip?',
    answer:
      'No permit is needed! Because our grab lorry is a mobile road-going vehicle that arrives, loads your waste in roughly 20–30 minutes ("Wait & Load"), and drives away immediately, you avoid council skip permit fees (typically £60–£85) and waiting days for council approval.',
  },
  {
    category: 'Operations & Licensing',
    question: 'What days and hours do you operate, and can you remove fly-tipping?',
    answer:
      'We operate 7 days a week, Monday to Sunday from 7:00 AM to 6:00 PM out of our depot at Water Works Business Park, Wigan (WN3 6GW). We are fully licensed waste carriers and also provide rapid fly-tipping clearance for landowners, commercial premises, and residential access roads.',
  },
];
