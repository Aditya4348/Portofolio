import HeroSection from "@/components/temp/HeroSection";
import FooterSection from "@/components/temp/FooterSection";
import { ContentProject } from "@/data/project";
import { footer } from "@/data/footer";
import { experience } from "@/data/experience";
import { motion } from "framer-motion";
import { LazyLoadSection } from "@/lib/LazyLoading";
import React, { Suspense } from "react";

// Lazy load untuk section yang tidak langsung terlihat
const LazyProjectSection = React.lazy(() => import("@/components/temp/ProjectSection"));
const LazyExperienceSection = React.lazy(() => import("@/components/temp/ExperienceSection"));

export default function HomePage() {
  return (
    <motion.div
      className="min-h-screen bg-dark-primary text-dark-primary"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      {/* Hero Section */}
      <HeroSection />

      {/* Project Section */}
      <LazyLoadSection>
        <Suspense fallback={<div>Loading project...</div>}>
          <LazyProjectSection {...ContentProject} />
        </Suspense>
      </LazyLoadSection>

      {/* Experience Section */}
      <LazyLoadSection>
        <Suspense fallback={<div>Loading experience...</div>}>
          <LazyExperienceSection {...experience} />
        </Suspense>
      </LazyLoadSection>

      {/* Footer */}
      <FooterSection {...footer} />
    </motion.div>
  );
}
