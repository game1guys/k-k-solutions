import type { Metadata, Viewport } from "next";
import { DM_Sans, Syne } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const ogImage =
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=630&fit=crop&q=80";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Web, App & Digital Marketing Agency`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  keywords: [
    "K&K Digital Solutions",
    "web development India",
    "mobile app development",
    "digital marketing agency",
    "crypto exchange development",
    "health tech apps",
    "EdTech development",
    "AI product development",
    "real estate software",
    "urban servicing app",
    "home services booking app",
    "SEO services",
    "Lucknow web development",
    "Amausi airport",
    "LLM integration",
    "vector database",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: site.locale.replace("_", "-"),
    url: site.url,
    siteName: site.name,
    title: `${site.name} | Web, App & Digital Marketing`,
    description: site.description,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: `${site.name} — digital agency hero`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Web, App & Digital Marketing`,
    description: site.description,
    images: [ogImage],
    creator: site.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#030712" },
    { media: "(prefers-color-scheme: light)", color: "#030712" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${syne.variable}`}>
      <body className="min-h-screen bg-[#030712] font-sans text-slate-100 antialiased">
        {/* Critical fallback if Tailwind CSS bundle fails to load (stale cache, wrong project root) */}
        <style
          dangerouslySetInnerHTML={{
            __html: `:root{color-scheme:dark}html,body{min-height:100%;background-color:#030712;color:#f1f5f9;margin:0}`,
          }}
        />
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
