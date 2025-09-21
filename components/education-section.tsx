import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, BookOpen } from "lucide-react"

export function EducationSection() {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "XYZ University",
      location: "Bangalore, India",
      period: "2018 - 2022",
      grade: "8.5 CGPA",
      description: "Focused on software engineering, data structures, algorithms, and web technologies.",
      highlights: [
        "Dean's List for 3 consecutive semesters",
        "Led the Web Development Club",
        "Published research paper on web optimization",
      ],
    },
  ]

  const certifications = [
    {
      name: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      year: "2023",
    },
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2023",
    },
    {
      name: "React Developer Certification",
      issuer: "Meta",
      year: "2022",
    },
    {
      name: "Node.js Application Development",
      issuer: "IBM",
      year: "2022",
    },
  ]

  const courses = [
    "Advanced React Patterns",
    "Microservices Architecture",
    "Database Design & Optimization",
    "Cloud Computing with AWS",
    "DevOps and CI/CD",
    "System Design",
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Education & <span className="text-primary">Learning</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Continuous learning and professional development in cutting-edge technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <GraduationCap className="h-6 w-6 text-primary mr-3" />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            {education.map((edu, index) => (
              <Card key={index} className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{edu.degree}</CardTitle>
                  <div className="space-y-1">
                    <p className="font-semibold">{edu.institution}</p>
                    <p className="text-muted-foreground">
                      {edu.location} • {edu.period}
                    </p>
                    <Badge variant="secondary" className="w-fit">
                      {edu.grade}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{edu.description}</p>
                  <div>
                    <h4 className="font-semibold mb-2">Highlights:</h4>
                    <ul className="space-y-1">
                      {edu.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span className="text-muted-foreground text-sm">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications & Courses */}
          <div className="space-y-8">
            {/* Certifications */}
            <div>
              <div className="flex items-center mb-6">
                <Award className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-2xl font-bold">Certifications</h3>
              </div>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <Card key={index} className="bg-card border-border">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-primary">{cert.name}</h4>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                      <Badge variant="outline" className="mt-2 text-xs">
                        {cert.year}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Continuous Learning */}
            <div>
              <div className="flex items-center mb-6">
                <BookOpen className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-2xl font-bold">Continuous Learning</h3>
              </div>
              <Card className="bg-card border-border">
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground mb-4">Recent courses and specializations:</p>
                  <div className="flex flex-wrap gap-2">
                    {courses.map((course) => (
                      <Badge key={course} variant="secondary" className="text-xs">
                        {course}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
