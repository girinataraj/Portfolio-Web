import { ContactPageClient } from "./client"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact - Giri N S | MERN Stack Developer",
  description:
    "Get in touch with Giri N S for web development projects, collaborations, or opportunities. Let's build something amazing together.",
  keywords: ["Contact", "Web Developer", "MERN Stack", "Hire Developer", "Collaboration", "Erode"],
}

export default function ContactPage() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "linear-gradient(to bottom, #202328 0%, #111315 60%, #0A0A0A 100%)" }}
    >
      <ContactPageClient />
    </div>
  )
}
