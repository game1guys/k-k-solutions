export type PortfolioEntry = {
  slug: string;
  /** Public site URL when the project is live online */
  websiteUrl?: string;
  /** Short label for the link, e.g. oshu.in */
  displayDomain?: string;
  clientName: string;
  projectName: string;
  imageUrl: string;
  imageAlt: string;
  logoUrl: string;
  logoAlt: string;
  rating: 4 | 4.5 | 5;
  review: string;
  focus: string[];
};

export const portfolioProjects: PortfolioEntry[] = [
  {
    slug: "oshu-logistics",
    websiteUrl: "https://oshu.in",
    displayDomain: "oshu.in",
    clientName: "Amit Chauhan",
    projectName: "Oshu Logistics",
    imageUrl:
      "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=900&h=640&fit=crop&q=80",
    imageAlt: "Logistics trucks and warehouse operations",
    logoUrl: "https://www.google.com/s2/favicons?domain=oshu.in&sz=128",
    logoAlt: "Oshu Logistics logo",
    rating: 4.5,
    focus: ["Corporate web", "Logistics"],
    review:
      "We needed a site that could explain our logistics network without overwhelming visitors. K&K delivered a clean structure, fast pages, and messaging that our partners actually use in sales conversations. Delivery was professional, revisions were handled quickly, and the handover was clear. Strongly recommended for any operations-heavy brand.",
  },
  {
    slug: "arjun-paints",
    clientName: "Mulakalapalli Arjun",
    projectName: "Arjun Paints",
    imageUrl:
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=900&h=640&fit=crop&q=80",
    imageAlt: "Paint tools and colour samples for a brand website",
    logoUrl: "https://arjunpaints.com/images/arjun-paints-logo.png",
    logoAlt: "Arjun Paints logo",
    rating: 5,
    focus: ["Brand presence", "Web"],
    review:
      "From the first call to go-live, the team understood what a paint brand needs: trust, colour clarity, and a layout dealers can navigate on a phone. They listened, pushed back where it helped the brand, and shipped on time. Our enquiries became easier to manage because the site answers the basics before people even call. Five stars — we would work with them again without hesitation.",
  },
  {
    slug: "morvi-nandan",
    websiteUrl: "https://morvinandan.com",
    displayDomain: "morvinandan.com",
    clientName: "Amit Chauhan",
    projectName: "Morvi Nandan — Achar & Food Brand",
    imageUrl:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=900&h=640&fit=crop&q=80",
    imageAlt: "Indian spices and ingredients used in achar and food products",
    logoUrl: "https://morvinandan.co.in/_next/image?url=%2Fimages%2Fmorvi-logo-brand.png&w=128&q=75",
    logoAlt: "Morvi Nandan logo",
    rating: 4.5,
    focus: ["Food brand", "Achar products", "E-commerce ready story"],
    review:
      "Morvi Nandan needed a digital home that felt premium and matched our achar and food-product story. The new site balances product narrative with performance — it loads fast and reads well on every device we tested. SEO foundations and contact flows were thought through, not bolted on later. A very solid partnership; we are proud to point customers to morvinandan.com.",
  },
  {
    slug: "daily-khata",
    websiteUrl: "https://dailykhata.vercel.app/",
    displayDomain: "dailykhata.vercel.app",
    clientName: "Prasenjit Mishra",
    projectName: "Daily Khata",
    imageUrl:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&h=640&fit=crop&q=80",
    imageAlt: "Accounting dashboard, records, and daily business finance workflow",
    logoUrl: "/logos/daily-khata.png",
    logoAlt: "Daily Khata logo",
    rating: 4,
    focus: ["Product web app", "Vercel", "Accounts & workflows"],
    review:
      "We needed a dependable place to manage day-to-day khata-style records that the team could open on any device without friction. K&K delivered a fast, focused experience on Vercel, kept the UI honest and easy to scan, and folded in changes as we learned how people actually used it. Clear communication and a practical handover — four stars for a solid engagement.",
  },
  {
    slug: "anayraa",
    websiteUrl: "https://anayaraa.com/",
    displayDomain: "anayaraa.com",
    clientName: "Ashwin Yadav",
    projectName: "Anayraa",
    imageUrl:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=900&h=640&fit=crop&q=80",
    imageAlt: "Modern retail and lifestyle brand storefront",
    logoUrl: "https://www.google.com/s2/favicons?domain=anayaraa.com&sz=128",
    logoAlt: "Anayraa logo",
    rating: 4,
    focus: ["Brand presence", "Marketing site", "Responsive web"],
    review:
      "We wanted anayaraa.com to feel contemporary and credible the moment someone lands on it — without a noisy or over-built layout. The team shaped messaging and structure with us, shipped a responsive build that behaves well on phones, and stuck to timelines without surprises. Four stars; we are glad to send traffic to the new site.",
  },
  {
    slug: "kinara-cafe",
    websiteUrl: "https://www.kinaracafe.com/",
    displayDomain: "kinaracafe.com",
    clientName: "Prasenjit Mishra",
    projectName: "Kinara Cafe",
    imageUrl:
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=900&h=640&fit=crop&q=80",
    imageAlt: "Warm cafe interior with coffee and hospitality ambience",
    logoUrl: "https://www.google.com/s2/favicons?domain=kinaracafe.com&sz=128",
    logoAlt: "Kinara Cafe logo",
    rating: 4,
    focus: ["Hospitality", "Menu & ambience", "Local discovery"],
    review:
      "We needed our cafe’s online presence to reflect Kinara — warmth, the menu, and how to find us — without burying the essentials. K&K helped us balance story with speed: pages load quickly, the layout works for guests browsing on their phones, and enquiries are easier to direct. Straightforward collaboration and a result we’re proud to share; four stars.",
  },
];
