export const site = {
  name: "K&K Digital Solutions",
  shortName: "K&K Digital",
  tagline: "Web, Apps & Growth — Built for Scale",
  description:
    "K&K Digital Solutions delivers web development, mobile apps, and digital marketing from Lucknow (near Amausi airport). Strong experience across crypto exchanges, health tech, EdTech, AI products, real estate, and urban home servicing. 5+ years of hands-on delivery.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://kkindigitalsolutions.com",
  /** Official business email (no personal addresses on site) */
  email: "kkdigitalsolution@gmail.com",
  phone: "+91 79859 35177",
  locale: "en_US",
  twitterHandle: "@KKDigitalSol",
  /** Core team — public-facing roles */
  team: {
    projectHead: {
      name: "Prasenjit Mishra",
      title: "Project Head",
    },
    softwareEngineer: {
      name: "Divyanshu Mishra",
      title: "Software Engineer",
    },
  },
  /** Service area & studio location */
  location: {
    /** Human-readable one-liner for headers and SEO */
    headline: "Lucknow, Uttar Pradesh — near Amausi (CCS International Airport)",
    /** Structured for schema.org */
    streetAddress: "Near Chaudhary Charan Singh International Airport (Amausi)",
    addressLocality: "Lucknow",
    addressRegion: "Uttar Pradesh",
    postalCode: "226009",
    addressCountry: "IN",
  },
} as const;

export function locationLines() {
  const { location: l } = site;
  return [
    l.streetAddress,
    `${l.addressLocality}, ${l.addressRegion} ${l.postalCode}`,
    l.addressCountry === "IN" ? "India" : l.addressCountry,
  ];
}
