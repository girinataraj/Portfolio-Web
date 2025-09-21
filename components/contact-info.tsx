"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Phone, Github, Linkedin, ExternalLink } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function ContactInfo() {
  const contactDetails = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "girinataraj765@gmail.com",
      href: "mailto:girinataraj765@gmail.com",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Bangalore, India",
      href: null,
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Available",
      value: "Mon - Fri, 9 AM - 6 PM IST",
      href: null,
    },
  ]

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/girinataraj",
      description: "Check out my code repositories and open source contributions",
      gradient: "from-primary to-accent",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://www.linkedin.com/in/giri765",
      description: "Connect with me professionally and see my career journey",
      gradient: "from-accent to-neon-cyan",
    },
    {
      name: "Live Project",
      icon: <ExternalLink className="h-5 w-5" />,
      href: "https://turrfzone.com/",
      description: "View my live production project - TurfZone booking platform",
      gradient: "from-neon-cyan to-neon-purple",
    },
  ]

  return (
    <motion.div
      className="space-y-8"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div>
        <motion.h2
          className="text-3xl font-bold mb-6 text-gradient bg-gradient-to-r from-primary via-accent to-neon-purple bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          Let's Connect
        </motion.h2>
        <motion.p
          className="text-muted-foreground mb-8 text-pretty leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to hear from you.
          I typically respond within 24 hours.
        </motion.p>

        <div className="space-y-4">
          {contactDetails.map((detail, index) => (
            <motion.div
              key={index}
              className="flex items-center space-x-4 group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ x: 8 }}
            >
              <div className="p-3 glass rounded-lg text-primary group-hover:neon-glow transition-all duration-300">
                {detail.icon}
              </div>
              <div>
                <p className="font-semibold text-foreground">{detail.label}</p>
                {detail.href ? (
                  <Link
                    href={detail.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:underline"
                  >
                    {detail.value}
                  </Link>
                ) : (
                  <p className="text-muted-foreground">{detail.value}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <motion.h3
          className="text-2xl font-bold mb-6 text-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Find Me Online
        </motion.h3>
        <div className="space-y-4">
          {socialLinks.map((link, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              <Card className="glass glass-hover border-primary/20 hover:neon-glow transition-all duration-500 group">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div
                        className={`p-2 glass rounded-lg bg-gradient-to-r ${link.gradient} bg-opacity-20 group-hover:neon-glow-cyan transition-all duration-300`}
                      >
                        <div className="text-primary">{link.icon}</div>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{link.name}</p>
                        <p className="text-sm text-muted-foreground">{link.description}</p>
                      </div>
                    </div>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <Button asChild variant="ghost" size="sm" className="glass hover:neon-glow-purple">
                        <Link href={link.href} target="_blank" rel="noopener noreferrer">
                          Visit
                        </Link>
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        viewport={{ once: true }}
      >
        <Card className="glass border-2 border-primary/30 hover:border-primary/50 neon-glow transition-all duration-500">
          <CardHeader>
            <CardTitle className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Quick Response
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              For urgent inquiries or immediate project discussions, feel free to reach out directly via email or
              LinkedIn. I'm always open to discussing exciting opportunities!
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold neon-glow"
              >
                <Link href="mailto:girinataraj765@gmail.com">
                  <Mail className="h-4 w-4 mr-2" />
                  Send Email
                </Link>
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}
