import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../sections/HeroSection';
import { AboutSection } from '../sections/AboutSection';
import { SkillsSection } from '../sections/SkillsSection';
import { ProjectsSection } from '../sections/ProjectsSection';
import { ExperienceSection } from '../sections/ExperienceSection';
import { ResearchSection } from '../sections/ResearchSection';
import { CertificationsSection } from '../sections/CertificationsSection';
import { GithubSection } from '../sections/GithubSection';
import { ArticlesSection } from '../sections/ArticlesSection';
import { PersonalInterestsSection } from '../sections/PersonalInterestsSection';
import { ContactSection } from '../sections/ContactSection';
import { Footer } from '../components/Footer';
import { CustomCursor } from '../components/CustomCursor';
import { LoadingScreen } from '../components/LoadingScreen';

export const HomePage = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative min-h-screen bg-[#0D0D0D] text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-black">
      {/* Subtle Glowing Desktop Cursor */}
      <CustomCursor />

      {/* Rapid Non-blocking Neural Loading Screen */}
      {loading && <LoadingScreen onFinish={() => setLoading(false)} />}

      <Navbar />

      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ResearchSection />
        <CertificationsSection />
        <GithubSection />
        <ArticlesSection />
        <PersonalInterestsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};
