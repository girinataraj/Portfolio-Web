import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact - Giri N S | MERN Stack Developer",
  description:
    "Get in touch with Giri N S for web development projects, collaborations, or opportunities. Let's build something amazing together.",
  keywords: ["Contact", "Web Developer", "MERN Stack", "Hire Developer", "Collaboration", "Projects"],
}

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-16 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-gradient-to-r from-neon-purple/10 to-neon-cyan/10 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              Get In{" "}
              <span className="text-gradient bg-gradient-to-r from-primary via-accent to-neon-purple bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              I'm always excited to work on new projects and collaborate with innovative teams. Let's discuss how we can
              create something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}
