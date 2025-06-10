import HeroSection from "@/components/temp/HeroSection"
import ProjectSection from "@/components/temp/ProjectSection"
import { ContentProject } from "@/data/project"
import { footer } from "@/data/footer"
import { experience } from "@/data/experience" 
import ExperienceSection from "@/components/temp/ExperienceSection"
import FooterSection from '@/components/temp/FooterSection'
import { motion } from 'framer-motion'




export default function HomePage() {
  return (
    <motion.div className="min-h-screen bg-dark-primary text-dark-primary" 
     initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >

      {/* Hero Section */}
      <HeroSection/>
      
      {/* Project Section */}
      <ProjectSection {...ContentProject}/>
      
      {/* Experience Section */}
      <ExperienceSection {...experience}/>

      {/* Footer */}
      <FooterSection {...footer}/>
    </motion.div>
  )
}
