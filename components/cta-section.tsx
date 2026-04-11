"use client"

import React, { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Mail, MessageCircle } from "lucide-react"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

export function CTASection() {
  const containerRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    gsap.fromTo(
      ".cta-content",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      }
    )
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="py-24 md:py-40 px-5 lg:px-12 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <h2 className="cta-content text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight text-white mb-6 md:mb-8">
          Let's Build.
        </h2>

        <p className="cta-content text-base md:text-xl lg:text-2xl text-white/50 mb-10 md:mb-16 max-w-2xl mx-auto font-medium tracking-wide leading-relaxed">
          Whether you have a product to engineer or a team looking for a technical partner, let's architect the future together.
        </p>

        <div className="cta-content flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button
            asChild
            size="lg"
            className="bg-white text-black hover:bg-gray-200 hover:scale-105 transition-all duration-300 font-semibold px-7 md:px-10 py-5 md:py-8 text-base md:text-xl rounded-full shadow-2xl w-full sm:w-auto"
          >
            <Link href="/contact">
              <Mail className="mr-3 h-5 w-5" />
              Get In Touch
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="bg-transparent border border-white/20 text-white hover:bg-white/10 hover:text-white transition-all duration-300 px-7 md:px-10 py-5 md:py-8 text-base md:text-xl rounded-full w-full sm:w-auto"
          >
            <Link href="https://www.linkedin.com/in/giri765" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-3 h-5 w-5" />
              Connect on LinkedIn
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
