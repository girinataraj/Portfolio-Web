import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/portfolio";
import { site } from "@/lib/portfolio";
import { ExperienceMotion } from "@/components/experience-motion";
import "./globals.css";
import "./obsidian.css";
import "./hero.css";
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Giri N S — Software Developer",
    template: "%s | Giri N S",
  },
  description: site.description,
  authors: [{ name: site.name }],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Giri N S — Software Developer",
    description: site.description,
    url: "/",
    siteName: "Giri N S · Portfolio",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Giri N S — Engineering with intent.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Giri N S — Software Developer",
    description: site.description,
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: false },
  icons: { icon: "/icon.svg" },
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#080a0d",
  colorScheme: "dark",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: site.url,
    description: site.description,
    email: site.email,
    sameAs: [site.github, site.linkedin],
    knowsAbout: [
      "Full-stack development",
      "TypeScript",
      "React",
      "Python",
      "Retrieval-augmented generation",
    ],
    affiliation: {
      "@type": "CollegeOrUniversity",
      name: "Nandha Engineering College",
    },
  };
  return (
    <html lang="en" id="top">
      <body className={`${GeistSans.variable} ${GeistMono.variable}`}>
        <noscript>
          <style>{`.layer-controls,.system-instruction,.menu-toggle,.motion-toggle,.study-controls,.gallery-controls,.study-bottom>div{display:none!important}@media(max-width:760px){.header-inner{flex-wrap:wrap;height:auto;min-height:72px;row-gap:0;padding-block:16px}.desktop-nav{display:flex;order:5;width:100%;margin-left:0;gap:24px;padding-top:13px}.desktop-nav a{font-size:11px}}`}</style>
        </noscript>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Navigation />
        <ExperienceMotion />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
