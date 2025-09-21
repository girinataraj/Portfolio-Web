import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Suspense } from "react"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://girinataraj.dev"),
  title: {
    default: "Giri N S - MERN Stack Developer",
    template: "%s | Giri N S - MERN Stack Developer",
  },
  description:
    "Full-stack developer specializing in MERN stack and .NET applications. Building innovative web solutions and real-time projects with modern technologies.",
  keywords: [
    "MERN Stack",
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "MongoDB",
    ".NET Developer",
    "Web Development",
    "JavaScript",
    "TypeScript",
    "Next.js",
    "Bangalore Developer",
    "India Developer",
    "Portfolio",
    "Freelancer",
  ],
  authors: [{ name: "Giri N S", url: "https://girinataraj.dev" }],
  creator: "Giri N S",
  publisher: "Giri N S",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Giri N S - MERN Stack Developer",
    description:
      "Full-stack developer specializing in MERN stack and .NET applications. Building innovative web solutions.",
    url: "https://girinataraj.dev",
    siteName: "Giri N S Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Giri N S - MERN Stack Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Giri N S - MERN Stack Developer",
    description: "Full-stack developer specializing in MERN stack and .NET applications.",
    images: ["/og-image.jpg"],
    creator: "@girinataraj",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://girinataraj.dev",
  },
  category: "technology",
  classification: "Portfolio Website",
  generator: "Next.js",
  applicationName: "Giri N S Portfolio",
  referrer: "origin-when-cross-origin",
  colorScheme: "dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Giri N S",
              jobTitle: "MERN Stack Developer",
              description: "Full-stack developer specializing in MERN stack and .NET applications",
              url: "https://girinataraj.dev",
              sameAs: ["https://github.com/girinataraj", "https://www.linkedin.com/in/giri765"],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bangalore",
                addressCountry: "India",
              },
              email: "girinataraj765@gmail.com",
              knowsAbout: [
                "React",
                "Node.js",
                "MongoDB",
                "Express.js",
                ".NET Core",
                "TypeScript",
                "JavaScript",
                "Next.js",
                "Full Stack Development",
                "Web Development",
              ],
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "Engineering College",
              },
            }),
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`font-sans ${inter.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>
          <Navigation />
          <main>{children}</main>
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
