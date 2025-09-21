"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"],
      gradient: "from-primary to-accent",
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", ".NET Core", "RESTful APIs", "GraphQL", "Socket.io"],
      gradient: "from-accent to-neon-cyan",
    },
    {
      title: "Database",
      skills: ["MongoDB", "SQL Server", "PostgreSQL", "Redis", "Mongoose", "Entity Framework"],
      gradient: "from-neon-cyan to-neon-purple",
    },
    {
      title: "Tools & Others",
      skills: ["Git", "Docker", "AWS", "Vercel", "Postman", "JWT", "Stripe", "Razorpay"],
      gradient: "from-neon-purple to-primary",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/5 to-transparent" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Technical{" "}
            <span className="text-gradient bg-gradient-to-r from-primary via-accent to-neon-purple bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Proficient in modern web technologies and frameworks for building scalable applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Card className="glass glass-hover h-full group-hover:neon-glow transition-all duration-500">
                <CardContent className="p-6">
                  <motion.h3
                    className={`text-xl font-bold mb-6 bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {category.title}
                  </motion.h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        viewport={{ once: true }}
                      >
                        <Badge
                          variant="secondary"
                          className="glass text-xs font-medium px-3 py-1 hover:neon-glow-purple transition-all duration-300 cursor-default"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
