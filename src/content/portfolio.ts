export type PortfolioEntry = {
  slug: string;
  /** Public site URL when the project is live online */
  websiteUrl?: string;
  /** Short label for the link, e.g. oshu.in */
  displayDomain?: string;
  clientName: string;
  projectName: string;
  rating: 4.5 | 5;
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
    rating: 4.5,
    focus: ["Corporate web", "Logistics"],
    review:
      "We needed a site that could explain our logistics network without overwhelming visitors. K&K delivered a clean structure, fast pages, and messaging that our partners actually use in sales conversations. Delivery was professional, revisions were handled quickly, and the handover was clear. Strongly recommended for any operations-heavy brand.",
  },
  {
    slug: "arjun-paints",
    clientName: "Mulakalapalli Arjun",
    projectName: "Arjun Paints",
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
    projectName: "Morvi Nandan — a choice brand",
    rating: 4.5,
    focus: ["Brand site", "E-commerce ready story"],
    review:
      "Morvi Nandan needed a digital home that felt premium and matched our retail story. The new site balances product narrative with performance — it loads fast and reads well on every device we tested. SEO foundations and contact flows were thought through, not bolted on later. A very solid partnership; we are proud to point customers to morvinandan.com.",
  },
];
