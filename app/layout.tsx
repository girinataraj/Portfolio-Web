import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/portfolio";
import { site } from "@/lib/portfolio";
import { ExperienceMotion } from "@/components/experience-motion";
import "./globals.css";
import "./styles/portfolio.css";
import "./styles/projects.css";
import "./styles/explorers.css";
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
          <style>{`.lumen-mode-controls,.lumen-wake,.motion-toggle,.study-controls,.gallery-controls,.study-bottom>div,.project-filters,.technology-switches,.career-track,.process-tabs,.lab-toolbar,.lab-ticket button,.retrieval-input,.retrieval-label,.retrieval-status,.retrieval-results,.query-examples{display:none!important}`}</style>
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
