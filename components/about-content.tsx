import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Globe, Zap } from "lucide-react"

export function AboutContent() {
  const expertise = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Frontend Development",
      description: "Creating responsive, interactive user interfaces with React, Next.js, and modern CSS frameworks.",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Backend Development",
      description: "Building robust server-side applications and APIs with Node.js, Express, and .NET Core.",
      skills: ["Node.js", "Express.js", ".NET Core", "RESTful APIs", "GraphQL", "Microservices"],
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Database Management",
      description: "Designing and optimizing databases for performance and scalability.",
      skills: ["MongoDB", "SQL Server", "PostgreSQL", "Redis", "Database Design", "Query Optimization"],
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "DevOps & Deployment",
      description: "Implementing CI/CD pipelines and deploying applications to cloud platforms.",
      skills: ["Git", "Docker", "AWS", "Vercel", "CI/CD", "Cloud Deployment"],
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My <span className="text-primary">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            I bring a comprehensive skill set to every project, ensuring end-to-end development excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {expertise.map((item, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">{item.icon}</div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </div>
                <p className="text-muted-foreground">{item.description}</p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Personal Philosophy */}
        <div className="mt-20 text-center">
          <Card className="bg-gradient-to-r from-card to-card/50 border-primary/20 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">My Development Philosophy</h3>
              <p className="text-lg text-muted-foreground text-pretty">
                "I believe that great software is not just about writing code—it's about understanding user needs,
                solving real problems, and creating solutions that are both elegant and efficient. Every line of code
                should serve a purpose, and every feature should enhance the user experience."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
