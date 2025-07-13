import HeroSection from "@/components/temp/HeroSection";
import { ContentProject } from "@/data/project";
import { experience } from "@/data/experience";
// import { LazyLoadSection } from "@/lib/LazyLoading";
import React, { Suspense } from "react";

// Lazy load untuk section yang tidak langsung terlihat
const ProjectSection = React.lazy(() => import("@/components/temp/ProjectSection"));
const ExperienceSection = React.lazy(() => import("@/components/temp/ExperienceSection"));

export default function HomePage() {
  return (
    <div className="min-h-screen bg-dark-primary text-dark-primary">
      {/* Hero Section */}
      <HeroSection />

      {/* Project Section */}
      <Suspense fallback={<div>Loading project...</div>}>
        <ProjectSection {...ContentProject} />
      </Suspense>

      {/* Experience Section */}
      <Suspense fallback={<div>Loading experience...</div>}>
        <ExperienceSection {...experience} />
      </Suspense>

      
    </div>
  );
}
