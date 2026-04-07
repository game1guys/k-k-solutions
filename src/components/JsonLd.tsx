import { site } from "@/lib/site";

const tel = site.phone.replace(/\s/g, "");

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: site.location.streetAddress,
  addressLocality: site.location.addressLocality,
  addressRegion: site.location.addressRegion,
  postalCode: site.location.postalCode,
  addressCountry: site.location.addressCountry,
};

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${site.url}/#organization`,
        name: site.name,
        url: site.url,
        logo: {
          "@type": "ImageObject",
          url: `${site.url}/favicon.ico`,
        },
        email: site.email,
        telephone: tel,
        address: postalAddress,
        sameAs: [],
        description: site.description,
        employee: [
          {
            "@type": "Person",
            name: site.team.projectHead.name,
            jobTitle: site.team.projectHead.title,
          },
          {
            "@type": "Person",
            name: site.team.softwareEngineer.name,
            jobTitle: site.team.softwareEngineer.title,
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        description: site.description,
        publisher: { "@id": `${site.url}/#organization` },
        inLanguage: "en",
      },
      {
        "@type": "ProfessionalService",
        "@id": `${site.url}/#service`,
        name: site.name,
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=630&fit=crop",
        url: site.url,
        telephone: tel,
        email: site.email,
        address: postalAddress,
        priceRange: "$$",
        areaServed: [
          { "@type": "City", name: "Lucknow" },
          { "@type": "Country", name: "India" },
        ],
        serviceType: [
          "Web Development",
          "Mobile App Development",
          "Digital Marketing",
          "Crypto Exchange Products",
          "Health Technology",
          "Educational Technology",
          "Artificial Intelligence Projects",
          "Real Estate Technology",
          "Urban Home Servicing Platforms",
        ],
        provider: { "@id": `${site.url}/#organization` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
