import { Button } from "@/components/ui/button"
import HeroSection from "@/components/temp/HeroSection"
import ProjectSection from "@/components/temp/ProjectSection"
import { Github, Linkedin, Mail } from "lucide-react"
import { hero } from "@/data/hero"
import { ContentProject } from "@/data/project"
import { experience } from "@/data/experience"; 
import ExperienceSection from "@/components/temp/ExperienceSection"


export default function HomePage() {
  return (
    <div className="min-h-screen bg-dark-primary text-dark-primary">

      {/* Hero Section */}
      <HeroSection {...hero} />
      <ProjectSection {...ContentProject}/>
      

      {/* Experience Section */}
      <ExperienceSection {...experience}/>

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
