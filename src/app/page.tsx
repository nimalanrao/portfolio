import { Header } from '@/components/header';
import { HeroSection } from '@/components/sections/hero-section';
import { SkillsSection } from '@/components/sections/skills-section';
import { ServicesSection } from '@/components/sections/services-section';
import { ToolsSection } from '@/components/sections/tools-section';
import { Footer } from '@/components/footer';
import { Particles } from '@/components/particles';

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-dvh bg-background overflow-x-hidden">
      <div className="absolute inset-0 z-0 h-[100vh]">
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-background"></div>
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(var(--accent)/0.3),transparent)]"></div>
        <Particles className="absolute inset-0 z-0" quantity={25} />
      </div>

      <div className="relative z-10">
        <Header />
        <main className="flex-1 container mx-auto px-4">
          <HeroSection />
          <ServicesSection />
          <SkillsSection />
          <ToolsSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
