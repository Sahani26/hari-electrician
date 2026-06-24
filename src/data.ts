import { Service, ServiceArea, Testimonial, FAQItem, BlogPost } from './types';

export const BUSINESS_INFO = {
  name: "Hari Electrician",
  phone: "+91 7897954795",
  phoneDisplay: "+91 7897954795",
  email: "harielectrcian@gmail.com",
  address: "Udhana - Magdalla Rd, Opp. JH05 Ambani School, Vesu, Surat, Gujarat 395007",
  whatsappUrl: "https://wa.me/917897954795?text=Hi%20Hari%20Electrician%2C%20I%20need%20electrical%20services%20support.",
  workingHours: "24 Hours (Emergency Support) / 8:00 AM - 10:00 PM (Regular Services)",
  experience: "10+ Years of Experience",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.2059345758245!2d72.7812!3d21.1444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04df867f0f625%3A0x6b8a8b1a8d0a8b9f!2sVesu%2C%20Surat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
};

export const SERVICES: Service[] = [
  {
    id: 'emergency',
    title: "Emergency Electrician Services",
    shortDesc: "24/7 rapid response electrical repair and troubleshooting for sudden power outages, sparking, or hazardous wiring failures.",
    fullDesc: "Electrical emergencies don't wait, and neither do we. Hari Electrician provides lightning-fast 24/7 emergency electrical services in Vesu, Piplod, and surrounding areas of Surat. Whether you're experiencing a complete blackout, hazardous sparks from your distribution board, a burnt smell near appliances, or sudden short circuits, our fully equipped electrician arrives promptly with safety gear and genuine parts to resolve the crisis.",
    iconName: 'Zap',
    features: [
      "24/7 Prompt Dispatch within 30-45 Minutes",
      "Power Outage & Short-Circuit Troubleshooting",
      "Hazardous Sparking & Burn Smell Investigation",
      "Emergency MCB/RCCB Bypass & Replacements",
      "Safe Isolation of Damaged Circuits"
    ],
    pricing: "Starts from ₹249 (Emergency charges apply post-10 PM)",
    timeframe: "Within 45 minutes of booking"
  },
  {
    id: 'residential',
    title: "Residential Electrical Services",
    shortDesc: "Complete home electrical solutions including point installations, repairs, wiring audits, and safety upgrades.",
    fullDesc: "Keep your home safe and running smoothly with professional residential electrical maintenance and setup. We handle everything from installing decorative lighting, setting up designer modular switches, repairing broken plug sockets, locating hidden wiring faults, to executing full apartment electrical overhauls. Our work adheres to Indian Electricity Standards to guarantee absolute safety for your family.",
    iconName: 'Home',
    features: [
      "Modular Switch & Smart Plug Installation",
      "Appliance Point Installation (AC, Geyser, Microwave)",
      "Decorative Light, Chandelier & Strip LED Setup",
      "Home Electrical Safety Inspections & Earthing Check",
      "Kitchen Chimney & Exhaust Fan Connection"
    ],
    pricing: "Custom quote based on scope (Standard inspection ₹149)",
    timeframe: "Same Day Service (1 - 3 hours)"
  },
  {
    id: 'commercial',
    title: "Commercial Electrical Services",
    shortDesc: "Reliable electrical work for shops, offices, showrooms, and local commercial establishments in Surat.",
    fullDesc: "Minimize business downtime with professional commercial electrical services. Hari Electrician handles office wiring, retail store accent lighting, server rack power provisioning, regular preventative maintenance, and high-load commercial distribution panel management. We work flexible hours (including late evenings) to ensure your business operations remain uninterrupted.",
    iconName: 'Briefcase',
    features: [
      "Office & Showroom Wiring & Lighting Layouts",
      "Server Room Power Cabling & Dedicated UPS Wiring",
      "Phase Balancer & Three-Phase Line Troubleshooting",
      "Commercial Signage Power Supply Installation",
      "Preventative Electrical Maintenance Contracts"
    ],
    pricing: "Based on commercial assessment (Free site survey)",
    timeframe: "Scheduled as per business convenience"
  },
  {
    id: 'wiring',
    title: "Wiring & Rewiring Services",
    shortDesc: "Complete house wiring, partial rewiring, and cable management using top-tier fire-resistant (FR) copper wires.",
    fullDesc: "Outdated, crumbling wiring is the #1 cause of residential electrical fires. If your home is more than 15 years old, or if you notice frequent flickering lights, warm walls, or tripping breakers, a rewiring is crucial. We use premium, certified Fire-Retardant (FR) copper wires from reputable brands like Finolex or Polycab to wire or rewire your house, ensuring durable and hazard-free power transmission.",
    iconName: 'Cable',
    features: [
      "Complete Single/Multi-Storey House Wiring",
      "Concealed PVC Conduit Wall Piping & Grooving",
      "Open Conduit Casing-Capping Installation",
      "Faulty Aluminum-to-Copper Cable Upgrades",
      "Structured Coaxial TV & LAN Internet Cabling"
    ],
    pricing: "Wiring starts at ₹9 per sq. ft. (Excludes materials)",
    timeframe: "2 - 5 days depending on property size"
  },
  {
    id: 'fan',
    title: "Ceiling & Exhaust Fan Installation",
    shortDesc: "Swift installation, regulator replacement, and repair of ceiling, exhaust, wall-mounted, and fancy designer fans.",
    fullDesc: "Ensure perfect air circulation with our specialized fan installation and repair services. From heavy ceiling fans with complex down-rods, designer aesthetic fans, wall-bracket cabin fans, to high-RPM kitchen/bathroom exhaust fans, we secure your fixtures correctly. We balance the blades to prevent wobbling noise and install smooth, heat-proof electronic regulators.",
    iconName: 'Wind',
    features: [
      "Standard and Luxury Ceiling Fan Hooking & Assembly",
      "Kitchen/Bathroom Exhaust Fan Venting & Sizing",
      "Modular Electronic Step-Regulator Replacements",
      "Wobbly Blade Balancing & Bearing Greasing",
      "Wall-Mounted & Pedestal Fan Maintenance"
    ],
    pricing: "Installation starts at ₹149 per fan (Bulk discount available)",
    timeframe: "30 - 60 minutes"
  },
  {
    id: 'mcb',
    title: "MCB & Distribution Board Installation",
    shortDesc: "Protect your expensive appliances with robust Miniature Circuit Breakers (MCB) and RCCB shock protection units.",
    fullDesc: "Safety is paramount. Standard glass fuses are outdated and slow to respond. Protect your valuable appliances (smart TVs, refrigerators, air conditioners) and shield your family from fatal electric shocks by installing modern Miniature Circuit Breakers (MCB) and Residual Current Circuit Breakers (RCCB). We calculate appropriate load limits to prevent persistent tripping and maintain balanced distribution boards.",
    iconName: 'ShieldAlert',
    features: [
      "Double Pole/Triple Pole MCB Sizing & Mounting",
      "RCCB / ELCB (Shock Protection) Sensitivity Testing",
      "Main Distribution Box Wiring & Organization",
      "Three-Phase Changeover Switch Installation",
      "Isolator & Main Switch Replacements"
    ],
    pricing: "MCB replacement starts at ₹199 (DB Setup depends on lines)",
    timeframe: "1 - 3 hours"
  },
  {
    id: 'inverter',
    title: "Inverter & Battery Setup & Maintenance",
    shortDesc: "Uninterrupted power during outages. Professional inverter sizing, wiring bypass, and battery acid top-up services.",
    fullDesc: "Surat summers can have sudden power cuts. Stay comfortable with a perfectly configured backup power supply. We help you size the appropriate inverter capacity (VA rating) and battery storage (AH rating) based on your home's backup requirement (fans, lights, routers, laptops). We configure the backup bypass wiring securely so that only essential circuits run on battery, preventing overload.",
    iconName: 'BatteryCharging',
    features: [
      "Inverter Commissioning (Luminous, Microtek, Exide, etc.)",
      "Dedicated Inverter Line Bypass & Panel Isolation",
      "Tubular/Flat-Plate Battery Acid Top-ups & Cleaning",
      "Inverter Charging Failure & No-Backup Diagnostics",
      "Safe Placement, Trolley Assembly & Terminal Greasing"
    ],
    pricing: "New setup installation at ₹399 (Battery check ₹149)",
    timeframe: "1 - 2 hours"
  }
];

export const SERVICE_AREAS: ServiceArea[] = [
  {
    id: 'area-piplod',
    name: "Piplod",
    pincode: "395009",
    tagline: "Top-Rated Electrical Repairs & Installs in Piplod 395009",
    introText: "Looking for an expert local electrician in Piplod 395009? Hari Electrician has served Piplod's luxury high-rises, commercial shops, and residential complexes for over a decade. From Piplod Lake area to Dumas Road apartments, our response time is the absolute fastest. We offer everything from quick ceiling fan installations to complete premium fire-retardant rewiring.",
    popularServices: ["Emergency Spark Repairs", "Decorative Lighting & LED strips", "Inverter Installation", "RCCB Installation"],
    localHighlight: "We are heavily active around Piplod Canal Road, Lakeview Garden surroundings, and standard high-rise societies, providing fast 30-minute responses."
  },
  {
    id: 'area-vesu',
    name: "Vesu",
    tagline: "Your Trusted Neighborhood Electrician in Vesu, Surat",
    introText: "Vesu is Surat's booming residential and commercial hub, and Hari Electrician is proud to be its go-to service provider. Located right on Udhana - Magdalla Road near Vesu, we handle modern electrical requests such as smart switchboards, high-load AC wiring, inverter battery systems, and automated lighting panels with ultimate technical accuracy.",
    popularServices: ["Smart Home Switch Installation", "AC & Geyser Point Wiring", "MCB Distribution Board Setup", "Maintenance Audits"],
    localHighlight: "Our main base is on Udhana - Magdalla Road near JH05 Ambani School. We cover VIP Road, Canal Road, and all premium residential enclaves in Vesu within 15-20 minutes."
  },
  {
    id: 'area-citylight',
    name: "City Light",
    tagline: "Professional Residential Electricians in City Light",
    introText: "City Light is known for its elegant high-rise societies and premium shopping districts. Hari Electrician offers bespoke, high-quality residential services tailored to City Light's homes. We treat your property with absolute respect, utilizing clean dust-sheets, modern non-destructive wire tracking, and premium polished switch fittings.",
    popularServices: ["Chandelier & Accent Lighting Setup", "Inverter Battery Maintenance", "Modular Switchboard Repairs", "Leakage Current Inspection"],
    localHighlight: "Serving City Light Town Hall area, Science Centre Road, and all premium complexes with clean, certified electrical technicians."
  },
  {
    id: 'area-pal',
    name: "Pal",
    tagline: "Affordable & Prompt Electrical Contractor Services in Pal",
    introText: "From Pal Gaurav Path to newly constructed residential blocks, Pal is growing rapidly. Hari Electrician offers comprehensive, budget-friendly, same-day electrical solutions in Pal. We help new homeowners with complete PVC casing casing, fan hooking, kitchen chimney socket placements, and high-quality earthing installations.",
    popularServices: ["New House Complete Wiring", "Exhaust & Ceiling Fan Hooks", "Main Supply Line Balancing", "Socket & Switch Repairs"],
    localHighlight: "Serving all locations in Pal, including Pal RTO, Star Bazaar road, and adjoining riverfront avenues."
  },
  {
    id: 'area-althan',
    name: "Althan",
    tagline: "24/7 Emergency & General Electricians in Althan",
    introText: "Electrical faults can strike Althan homes at any hour. No need to panic—Hari Electrician has highly skilled electrical mechanics standing by in Althan for rapid emergency dispatches. We can immediately trace short circuits, repair sparking circuit breakers, and restore power safely and affordably.",
    popularServices: ["Short-Circuit Troubleshooting", "MCB & Fuse replacements", "Inverter Charging Issues", "Appliance Power Sockets"],
    localHighlight: "We cover Althan-Bhimrad Canal Road, Soham Circle, and all local sectors with swift, affordable service."
  },
  {
    id: 'area-adajan',
    name: "Adajan",
    tagline: "Residential & Showroom Electrical Experts in Adajan",
    introText: "Adajan is a bustling mix of traditional homes and bustling trade hubs. Hari Electrician provides high-quality maintenance, LED ceiling illumination, inverter setups, and swift switchboard upgrades across Adajan. Our transparent pricing and 100% satisfaction guarantee make us the preferred local choice.",
    popularServices: ["Commercial Showroom Lighting", "House Wiring Renovations", "Fan & Exhaust Fixes", "RCCB Protection Testing"],
    localHighlight: "Serving Honey Park Road, L.P. Savani Road, Anand Mahal Road, and neighboring corners."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Patel",
    location: "Vesu, Surat",
    rating: 5,
    comment: "My entire family is extremely happy with Hari's service. The inverter battery died on a hot Sunday night and he arrived in just 20 minutes to restore the bypass and fix the charging line. Very honest person and charged very reasonably!",
    date: "June 12, 2026",
    serviceUsed: "Emergency Electrician"
  },
  {
    id: 2,
    name: "Sneha Shah",
    location: "Piplod 395009, Surat",
    rating: 5,
    comment: "We hired Hari Electrician to do the complete rewiring and modular switchboard installation of our 3 BHK flat in Piplod. He used genuine Polycab wires, did a clean concealed routing, and finished 1 day ahead of schedule. Highly recommended!",
    date: "May 28, 2026",
    serviceUsed: "Wiring & Rewiring"
  },
  {
    id: 3,
    name: "Amit Gajiwala",
    location: "City Light, Surat",
    rating: 5,
    comment: "Excellent work! I needed four decorative chandeliers and custom LED strips installed in my living room. Hari took great care with the fragile glass pieces, balanced them perfectly, and set up a neat dimming regulator system.",
    date: "June 05, 2026",
    serviceUsed: "Lighting Installation"
  },
  {
    id: 4,
    name: "Vikram Rathod",
    location: "Adajan, Surat",
    rating: 5,
    comment: "Professional and reliable. My shop's air conditioner socket burnt out. Hari diagnosed a loose contact in the distribution board, replaced the main MCB with an upgraded heavy-load unit, and verified the wiring. Outstanding technical skill.",
    date: "April 19, 2026",
    serviceUsed: "MCB & DB Installation"
  },
  {
    id: 5,
    name: "Priyanka Mishra",
    location: "Pal, Surat",
    rating: 4,
    comment: "I had a persistent issue where my bathroom geyser would trip the house power. Hari identified that the earthing wire was broken and replaced it safely. Very professional behavior and reasonable pricing.",
    date: "May 02, 2026",
    serviceUsed: "Residential Services"
  },
  {
    id: 6,
    name: "Hardik Vashi",
    location: "Althan, Surat",
    rating: 5,
    comment: "Super quick fan installation. He put 5 ceiling fans in our new office. Smooth noiseless running, great alignment, and he cleaned up the plastic scraps before leaving. Extremely tidy work!",
    date: "June 20, 2026",
    serviceUsed: "Fan Installation"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "How much does an electrician charge in Piplod?",
    answer: "Our standard visitation and diagnostic charge is just ₹149. Minor tasks like switch replacements, fan regulator fixes, or small socket repairs cost between ₹99 and ₹199. For larger projects like full house wiring or commercial lighting installations, we provide a free detailed quotation with no hidden costs."
  },
  {
    question: "Do you provide emergency electrician services?",
    answer: "Yes, absolutely! Hari Electrician provides 24/7 round-the-clock emergency electrical repair services across Surat, including Piplod, Vesu, Althan, Adajan, and City Light. If you have sparking panels, burnt smells, or total blackout emergencies, call +91 7897954795 for immediate assistance."
  },
  {
    question: "Can you install ceiling fans?",
    answer: "Yes, we install and repair all types of fans, including standard ceiling fans, premium heavy designer fans, kitchen/bathroom exhaust fans, and wall-mounted fans. We ensure proper mounting on structural ceiling hooks to prevent dangerous wobbling or mechanical noises."
  },
  {
    question: "Do you provide complete house wiring?",
    answer: "Yes, house wiring and rewiring are our core specialties. We design complete electrical layouts for new builds or execute full rewiring projects for older homes. We strictly use premium ISI-certified fire-retardant (FR) copper wires (like Polycab or Finolex) and modern PVC conduits to guarantee maximum longevity and safety."
  },
  {
    question: "Which areas do you cover in Surat?",
    answer: "We primarily cover Vesu, Piplod 395009, City Light, Althan, Pal, Adajan, VIP Road, Bhimrad, Udhna, and neighboring regions of Surat. Being centrally located near Vesu, we can reach most of these locations in under 30-40 minutes."
  },
  {
    question: "How quickly can you reach Piplod?",
    answer: "For emergency bookings, we dispatch an electrician instantly and typically arrive at Piplod locations within 30 to 45 minutes depending on traffic. For non-emergencies, you can book a specific time slot that suits your convenience."
  },
  {
    question: "What safety measures do you take during repairs?",
    answer: "Safety is our absolute priority. Our technicians wear insulated safety shoes, use certified insulated hand tools (rated up to 1000V), test every line with digital testers prior to handling, and perform physical lock-out tag-out (LOTO) procedures on mains breakers to ensure the circuit is fully dead while working."
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "prevent-electrical-fires",
    title: "5 Vital Tips to Prevent Residential Electrical Fires at Home",
    excerpt: "Electrical malfunctions are major causes of home fires. Learn the simple habits and safety installations that keep your home and family secure.",
    content: `Electrical fires can start in an instant, often hiding behind walls or inside seemingly harmless appliances. At **Hari Electrician**, we believe prevention is always better than cure. Here are five simple yet highly critical steps you can take to safeguard your home in Surat:

### 1. Upgrade to fire-resistant wires (FR Copper)
Older buildings often utilize low-grade aluminum cables or rubber insulation that crumbles over time under high loads. Upgrading your complete home to fire-retardant (FR) multi-strand copper cables (like Polycab or Finolex) dramatically reduces fire propagation in case of a short circuit.

### 2. Never Overload Switchboards
Plugging multiple high-amp devices (such as a microwave, geyser, and air conditioner) into a single extension multi-plug is a major hazard. Each high-amp appliance must have its own dedicated heavy-duty 16-Amp socket wired with a direct 2.5mm or 4.0mm circuit back to the distribution board.

### 3. Install RCCBs (Residual Current Circuit Breakers)
While standard Miniature Circuit Breakers (MCBs) protect against overloading and dead-short circuits, they do not prevent electrical leakage or fatal human shocks. Installing a high-sensitivity Residual Current Device (RCCB) or Earth Leakage Circuit Breaker (ELCB) will immediately cut the main power if even a tiny leakage current (such as a human finger touching a live wire) is detected.

### 4. Check for Warm Outlets
Place your hand on your wall switches and sockets periodically. If they feel noticeably warm to the touch, or if you hear a faint buzzing or crackling noise, it indicates loose wiring connections or worn-out brass contacts inside. Contact us immediately to tighten or replace them.

### 5. Ditch Outdated Ceramic Fuses
Traditional rewireable ceramic fuses are slow to react and can be easily bypassed by inserting thick copper wires. Modern Miniature Circuit Breakers (MCB) are fast-acting, magnetic-thermal switches that trip instantly the millisecond an overload occurs, safeguarding your expensive devices.

Need an electrical safety audit of your home in Vesu, Piplod, or Adajan? Call **Hari Electrician** at **+91 7897954795** today.`,
    date: "June 18, 2026",
    readTime: "5 min read",
    category: "Safety Guide",
    image: "https://images.unsplash.com/photo-1558211583-d26f610c1eb1?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "choosing-inverter-battery",
    title: "How to Choose the Right Inverter and Battery Size for Your Home",
    excerpt: "Confused by VA ratings and AH battery capacities? Here is a simple, practical guide to calculating your home power backup requirements.",
    content: `Frequent power cuts during Surat's humid summer months can be highly disruptive. Investing in an inverter power backup system is the perfect solution, but choosing the right size can feel overwhelming. Let **Hari Electrician** break down the math into simple, actionable steps.

### Step 1: Calculate Your Load Requirement
First, determine exactly what appliances you want to run simultaneously during a power outage. A standard home backup plan typically includes:
* 3 Ceiling Fans (75 Watts each = 225 Watts)
* 4 LED Bulbs (9 Watts each = 36 Watts)
* 1 Wi-Fi Router (15 Watts)
* 1 Laptop Charger (65 Watts)
* **Total Power Load = 342 Watts**

### Step 2: Determine the Inverter VA Rating (Capacity)
Inverters are rated in Volt-Amperes (VA). Due to the Power Factor (typically around 0.8 for home appliances), the required VA is calculated as:
* **Required VA = Total Watts / Power Factor (0.8)**
* Required VA = 342 / 0.8 = **427.5 VA**

To ensure the inverter operates safely without running at 100% load continually, add a 25% safety margin:
* Ideal Inverter Size = 427.5 VA * 1.25 = **534 VA**
* *Recommendation*: You should select a standard **600 VA or 700 VA inverter model**.

### Step 3: Calculate the Battery Capacity (AH Rating)
While the inverter converts electrical current, the battery actually stores the power. Battery storage is measured in Ampere-Hours (AH).
* **Battery Capacity (AH) = (Total Watts * Required Backup Hours) / Battery Voltage (typically 12V)**

If you require **4 hours** of continuous backup for the 342-Watt load:
* Required Storage = (342 Watts * 4 Hours) / 12 Volts = **114 AH**

Adding an efficiency buffer of 20%:
* Ideal Battery Size = 114 * 1.20 = **136.8 AH**
* *Recommendation*: A standard **150 AH tubular battery** is the perfect and most durable choice for this load profile.

### Step 4: Maintenance Matters!
To make your backup system last up to 5-7 years, remember to:
1. Always top up the battery cells with **pure distilled water** when the float indicators drop. Never use tap water or acid.
2. Clean the battery lead terminals with warm water to remove white sulfate corrosion, then coat them with petroleum jelly or grease.
3. Keep the inverter in a well-ventilated, dust-free corner.

For expert inverter bypass wiring, battery diagnostic checks, or new system commission in Surat, call **Hari Electrician** at **+91 7897954795**!`,
    date: "May 22, 2026",
    readTime: "6 min read",
    category: "Appliances",
    image: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "surat-monsoon-electrical-safety",
    title: "Surat Monsoon Season: Safety Protocols for Household Electricals",
    excerpt: "Rainy seasons in Surat bring high humidity, water seepage, and elevated risk of electrical leakage shocks. Read our essential safety protocols.",
    content: `With heavy monsoon showers pouring over Surat, humidity levels spike and water seepage through walls or ceilings becomes a common problem. Water is a highly effective electrical conductor, making the monsoon season the most high-risk time for shocks, appliance burnouts, and short circuits.

Here are the safety protocols compiled by **Hari Electrician** that every resident in Vesu, Piplod, and City Light should follow:

### 1. Address Water Seepage Near Switchboards Instantly
If you notice rain water dripping down your walls, or wet damp patches appearing near switches, power plugs, or distribution boxes, **do not touch them**. Turn off the main circuit breaker immediately and call a certified electrician to isolate the affected line. Damp walls can carry current and cause severe shocks to anyone touching the wall.

### 2. Check Exterior & Balcony Lights
Balcony light fixtures, garden lamps, and gate lights are directly exposed to driving rain. Ensure these fixtures are waterproof and possess proper rubber seals (IP65 rating or higher). Any water accumulation inside the fixture will cause instant tripping of the main MCB or, worse, make metal railings nearby live.

### 3. Ensure Earth Pit Integrity
The grounding wire (green earthing line) runs current safely into the ground during an electrical fault. However, if the earthing pit in your building has dried out or corroded, it cannot absorb the excess voltage. Having your earthing system tested and adding salt/charcoal or modern chemical grounding compound ensures a safe path for leakage currents.

### 4. Unplug Sensitive Equipment During Heavy Thunderstorms
Lightning strikes can travel through utility lines, creating catastrophic voltage surges that instantly burn out delicate chips in Smart TVs, gaming consoles, laptops, and refrigerators. Unplugging the power cords entirely from the wall during severe lightning storms is the only foolproof safeguard.

### 5. Always Wear Footwear
Never handle any electrical appliance—including refrigerators, washing machines, iron boxes, or water pumps—with bare wet feet or while standing on a damp floor. Always wear rubber-soled slippers or shoes to isolate yourself from the ground.

Stay safe this rainy season. If you experience tripping switches, sparking sockets, or need an urgent monsoon electrical check in Surat, contact **Hari Electrician** at **+91 7897954795** immediately!`,
    date: "June 02, 2026",
    readTime: "4 min read",
    category: "Seasonal Advice",
    image: "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?q=80&w=600&auto=format&fit=crop"
  }
];
