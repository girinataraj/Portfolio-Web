import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function AboutHero() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-balance">
              About <span className="text-primary">Me</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">
              I'm a passionate full-stack developer who loves creating innovative web solutions that make a real impact.
            </p>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                With expertise in the MERN stack and .NET technologies, I specialize in building scalable web
                applications that deliver exceptional user experiences. My journey in web development has been driven by
                a constant desire to learn, innovate, and solve complex problems through code.
              </p>
              <p>
                I believe in writing clean, maintainable code and following best practices to ensure that every project
                I work on is not just functional, but also sustainable and scalable for the future.
              </p>
            </div>
            <Button asChild size="lg" className="bg-primary hover:bg-accent">
              <Link href="/resume/Giri-Resume.pdf" target="_blank">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Link>
            </Button>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-2xl">
                <Image
                  src="./assets/Giri2.jpg"
                  alt="Giri N S working on development projects"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
