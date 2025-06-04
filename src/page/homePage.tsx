import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import HeroSection from "@/components/temp/HeroSection"
import ProjectSection from "@/components/temp/ProjectSection"
import { Github, Linkedin, Mail } from "lucide-react"
import { hero } from "@/data/hero"
import { DataProject } from "@/data/project"


export default function HomePage() {
  return (
    <div className="min-h-screen bg-dark-primary text-dark-primary">

      {/* Hero Section */}
      <HeroSection {...hero} />
      <ProjectSection {...DataProject}/>
      

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
            <p className="text-dark-muted text-lg max-w-2xl mx-auto">
              My professional journey and the skills I've developed along the way
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">Work Experience</h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Senior Frontend Developer",
                    company: "Tech Solutions Inc.",
                    period: "2022 - Present",
                    description: "Led frontend development for multiple client projects using React and Next.js",
                  },
                  {
                    title: "Full Stack Developer",
                    company: "Digital Agency Co.",
                    period: "2020 - 2022",
                    description: "Developed and maintained web applications using MERN stack",
                  },
                  {
                    title: "Junior Developer",
                    company: "StartUp Hub",
                    period: "2019 - 2020",
                    description: "Built responsive websites and learned modern development practices",
                  },
                ].map((job, index) => (
                  <Card key={index} className="bg-dark-secondary border-slate-600">
                    <CardHeader>
                      <CardTitle className="text-dark-primary">{job.title}</CardTitle>
                      <CardDescription className="text-blue-400">{job.company}</CardDescription>
                      <Badge variant="outline" className="w-fit border-slate-500 text-slate-400">
                        {job.period}
                      </Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-dark-muted">{job.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">Skills & Technologies</h3>
              <div className="space-y-6">
                {[
                  {
                    category: "Frontend",
                    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
                  },
                  {
                    category: "Backend",
                    skills: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB"],
                  },
                  {
                    category: "Tools & Others",
                    skills: ["Git", "Docker", "AWS", "Figma", "Vercel"],
                  },
                ].map((skillGroup, index) => (
                  <Card key={index} className="bg-dark-secondary border-slate-600">
                    <CardHeader>
                      <CardTitle className="text-dark-primary">{skillGroup.category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} className="bg-blue-600 hover:bg-blue-700">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-12 px-4 bg-dark-secondary border-t border-slate-700">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-dark-muted mb-6">I'm always interested in new opportunities and exciting projects</p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </Button>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-700">
            <div className="text-dark-muted mb-4 md:mb-0">© 2024 John Doe. All rights reserved.</div>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="hover:text-blue-400">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-blue-400">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-blue-400">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
