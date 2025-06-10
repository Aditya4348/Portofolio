import HeroSection from "@/components/temp/HeroSection"
import ProjectSection from "@/components/temp/ProjectSection"
import { ContentProject } from "@/data/project"
import { footer } from "@/data/footer"
import { experience } from "@/data/experience"; 
import ExperienceSection from "@/components/temp/ExperienceSection"
import FooterSection from '@/components/temp/FooterSection'
import { MinimalNavbar } from "@/components/ui/minimal_Navbar";




export default function HomePage() {
  return (
    <div className="min-h-screen bg-dark-primary text-dark-primary">

      <MinimalNavbar />

      {/* Hero Section */}
      <HeroSection/>
      
      {/* Project Section */}
      <ProjectSection {...ContentProject}/>
      
      {/* Experience Section */}
      <ExperienceSection {...experience}/>

      {/* Footer */}
      <FooterSection {...footer}/>
    </div>
  )
}
