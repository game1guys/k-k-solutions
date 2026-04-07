/** Unsplash image IDs — use URLs that return 200 (some legacy photo IDs were removed from CDN). */
const q = "auto=format&fit=crop&w=800&q=80";

export const domainExperience = [
  {
    title: "Crypto exchanges",
    desc: "Exchange products, trading UIs, wallets, KYC/onboarding, and admin & risk dashboards — deep experience shipping in regulated, high-throughput environments.",
    img: `https://images.unsplash.com/photo-1639762681485-074b7f938ba0?${q}`,
    tag: "Fintech · Web3",
    slug: "crypto-exchanges",
  },
  {
    title: "Health tech",
    desc: "Patient journeys, telehealth, scheduling, and integrations — products that clinicians and users trust every day.",
    img: `https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?${q}`,
    tag: "Healthcare · Wellness",
    slug: "health-tech",
  },
  {
    title: "EdTech",
    desc: "Learning platforms, content delivery, assessments, and engagement — built for scale across web and mobile.",
    img: `https://images.unsplash.com/photo-1503676260728-1c00da094a0b?${q}`,
    tag: "LMS · Learning apps",
    slug: "edtech",
  },
  {
    title: "AI & intelligent products",
    desc: "LLM integrations, automation, recommendation, and internal copilots — practical AI embedded into real workflows.",
    img: `https://images.unsplash.com/photo-1677442136019-21780ecad995?${q}`,
    tag: "ML · Automation",
    slug: "ai",
  },
  {
    title: "Real estate",
    desc: "Listings, CRM, bookings, maps & discovery — tools that help buyers, agents, and developers move faster.",
    img: `https://images.unsplash.com/photo-1560518883-ce09059eeffa?${q}`,
    tag: "PropTech · CRM",
    slug: "real-estate",
  },
  {
    title: "Urban & home servicing",
    desc: "On-demand marketplaces and ops for urban services — sofa cleaning, AC servicing, scheduling, technician apps, and payouts.",
    img: `https://images.unsplash.com/photo-1581578731548-c64695cc6952?${q}`,
    tag: "Sofa · AC · Field ops",
    slug: "urban-servicing",
  },
];
