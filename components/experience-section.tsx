import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Freelance",
      location: "Remote",
      period: "2022 - Present",
      description:
        "Developing custom web applications for various clients using MERN stack and .NET technologies. Successfully delivered projects including TurfZone booking platform, gym management systems, and inventory dashboards.",
      achievements: [
        "Built and deployed TurfZone.com - a live production booking platform",
        "Developed 10+ full-stack applications with 99% client satisfaction",
        "Implemented real-time features using Socket.io and SignalR",
        "Integrated payment gateways (Stripe, Razorpay) for e-commerce solutions",
      ],
      technologies: ["React", "Node.js", "MongoDB", ".NET Core", "TypeScript", "AWS"],
    },
    {
      title: "Web Developer",
      company: "Tech Solutions Inc.",
      location: "Bangalore, India",
      period: "2021 - 2022",
      description:
        "Worked on enterprise-level web applications and contributed to the development of scalable solutions for various business domains including healthcare and finance.",
      achievements: [
        "Collaborated with cross-functional teams to deliver high-quality software",
        "Optimized application performance resulting in 40% faster load times",
        "Mentored junior developers and conducted code reviews",
        "Implemented automated testing strategies improving code quality",
      ],
      technologies: ["React", "Express.js", "SQL Server", "Azure", "Jest", "Docker"],
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Professional <span className="text-primary">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            My journey in web development and the impact I've made along the way
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-card border-border">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl text-primary">{exp.title}</CardTitle>
                    <p className="text-lg font-semibold">{exp.company}</p>
                  </div>
                  <div className="flex flex-col sm:items-end gap-2">
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      {exp.period}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">{exp.description}</p>

                <div>
                  <h4 className="font-semibold mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
