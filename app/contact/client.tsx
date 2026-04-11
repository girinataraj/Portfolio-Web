"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import {
  Mail, MapPin, Github, Linkedin,
  Send, CheckCircle, AlertCircle, ArrowUpRight,
} from "lucide-react"
import Link from "next/link"

// ── Contact meta items ────────────────────────────────────────────────────────
const CONTACT_ITEMS = [
  { icon: Mail,    label: "Email",    value: "girinataraj765@gmail.com", href: "mailto:girinataraj765@gmail.com" },
  { icon: MapPin,  label: "Location", value: "Erode, India",             href: null },
]

const SOCIAL_LINKS = [
  {
    icon: Github,
    label: "GitHub",
    sub: "Code & open source",
    href: "https://github.com/girinataraj",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    sub: "Professional network",
    href: "https://www.linkedin.com/in/giri765",
  },
]

// ── Field ─────────────────────────────────────────────────────────────────────
function Field({
  id, label, type = "text", placeholder, value, onChange, required, rows,
}: {
  id: string
  label: string
  type?: string
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  required?: boolean
  rows?: number
}) {
  const shared =
    "w-full bg-white/[0.04] border border-white/[0.09] rounded-xl px-4 py-3 text-white placeholder:text-white/25 text-sm font-medium focus:outline-none focus:border-white/30 focus:bg-white/[0.06] transition-all duration-200 resize-none"

  return (
    <div>
      <label htmlFor={id} className="block text-[11px] font-semibold tracking-[0.15em] text-white/35 uppercase mb-2">
        {label}
      </label>
      {rows ? (
        <textarea id={id} name={id} placeholder={placeholder} value={value}
          onChange={onChange} required={required} rows={rows} className={shared} />
      ) : (
        <input id={id} name={id} type={type} placeholder={placeholder} value={value}
          onChange={onChange} required={required} className={shared} />
      )}
    </div>
  )
}

// ── Contact Form ───────────────────────────────────────────────────────────────
function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ access_key: "dbd1ec74-3917-457e-b77b-5b92a5d8e7b8", ...form }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus("success")
        setForm({ name: "", email: "", message: "" })
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field id="name"  label="Name"  placeholder="Your name"         value={form.name}    onChange={handleChange} required />
        <Field id="email" label="Email" type="email" placeholder="your@email.com" value={form.email}   onChange={handleChange} required />
      </div>
      <Field id="message" label="Message" placeholder="Tell me about your project or idea…"
        value={form.message} onChange={handleChange} required rows={6} />

      {/* Status banners */}
      {status === "success" && (
        <div className="flex items-center gap-3 text-sm text-white/80 bg-white/[0.05] border border-white/[0.08] rounded-xl px-4 py-3">
          <CheckCircle className="h-4 w-4 text-green-400 shrink-0" />
          Message sent! I'll reply within 24 hours.
        </div>
      )}
      {status === "error" && (
        <div className="flex items-center gap-3 text-sm text-white/80 bg-white/[0.05] border border-white/[0.08] rounded-xl px-4 py-3">
          <AlertCircle className="h-4 w-4 text-red-400 shrink-0" />
          Failed to send. Email me directly at girinataraj765@gmail.com
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full flex items-center justify-center gap-2 bg-white text-black font-semibold text-sm py-3.5 rounded-xl hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
      >
        {status === "sending" ? (
          <>
            <div className="h-4 w-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
            Sending…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Send Message
          </>
        )}
      </button>
    </form>
  )
}

// ── Main export ───────────────────────────────────────────────────────────────
export function ContactPageClient() {
  const heroRef    = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  // Entrance animations
  useEffect(() => {
    const hero = heroRef.current
    if (hero) {
      hero.style.opacity = "0"
      hero.style.transform = "translateY(30px)"
      setTimeout(() => {
        hero.style.transition = "opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1)"
        hero.style.opacity = "1"
        hero.style.transform = "translateY(0)"
      }, 80)
    }

    const items = contentRef.current?.querySelectorAll<HTMLElement>(".contact-item")
    items?.forEach((el, i) => {
      el.style.opacity = "0"
      el.style.transform = "translateY(20px)"
      setTimeout(() => {
        el.style.transition = "opacity 0.6s ease, transform 0.6s cubic-bezier(0.22,1,0.36,1)"
        el.style.opacity = "1"
        el.style.transform = "translateY(0)"
      }, 300 + i * 80)
    })
  }, [])

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-16 px-6 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <div ref={heroRef}>
            <p className="text-[11px] font-semibold tracking-[0.25em] text-white/30 uppercase mb-6">
              Contact
            </p>
            <h1 className="text-[clamp(3rem,8vw,7rem)] font-bold leading-none tracking-tight text-white mb-8">
              Let's work<br />
              <span className="text-white/30">together.</span>
            </h1>
            <p className="text-xl text-white/50 leading-relaxed max-w-lg font-medium">
              Open to freelance projects, full-time roles, and interesting collaborations.
              I respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* ── Content ───────────────────────────────────────────────────────── */}
      <section ref={contentRef} className="pb-36 px-6 lg:px-16 border-t border-white/[0.06]">
        <div className="max-w-5xl mx-auto pt-16">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

            {/* Left — Contact details + social links */}
            <div className="space-y-12">

              {/* Direct contact */}
              <div className="contact-item space-y-5">
                <p className="text-[11px] font-semibold tracking-[0.2em] text-white/25 uppercase mb-6">
                  Direct
                </p>
                {CONTACT_ITEMS.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.03] shrink-0">
                      <Icon className="h-3.5 w-3.5 text-white/40" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-[11px] text-white/30 font-medium mb-0.5 tracking-wide">{label}</p>
                      {href ? (
                        <Link href={href} className="text-sm text-white/75 hover:text-white transition-colors font-medium">
                          {value}
                        </Link>
                      ) : (
                        <p className="text-sm text-white/75 font-medium">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Availability
              <div className="contact-item flex items-center gap-3 py-4 px-5 rounded-xl border border-white/[0.07] bg-white/[0.02] w-fit">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                </span>
                <span className="text-sm text-white/60 font-medium">Available for new projects</span>
              </div> */}

              {/* Social links */}
              <div className="contact-item">
                <p className="text-[11px] font-semibold tracking-[0.2em] text-white/25 uppercase mb-5">
                  Find me online
                </p>
                <div className="space-y-px">
                  {SOCIAL_LINKS.map(({ icon: Icon, label, sub, href }) => (
                    <Link
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between py-4 border-b border-white/[0.05] hover:border-white/[0.12] transition-colors duration-200"
                    >
                      <div className="flex items-center gap-4">
                        <Icon className="h-4 w-4 text-white/30 group-hover:text-white/60 transition-colors" strokeWidth={1.5} />
                        <div>
                          <p className="text-sm font-semibold text-white/70 group-hover:text-white transition-colors">{label}</p>
                          <p className="text-xs text-white/30">{sub}</p>
                        </div>
                      </div>
                      <ArrowUpRight className="h-3.5 w-3.5 text-white/20 group-hover:text-white/50 transition-colors -translate-x-1 group-hover:translate-x-0 duration-200" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — Form */}
            <div className="contact-item">
              <p className="text-[11px] font-semibold tracking-[0.2em] text-white/25 uppercase mb-8">
                Send a message
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
