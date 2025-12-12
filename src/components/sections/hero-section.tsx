import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section id="about" className="min-h-[calc(100vh-5rem)] flex flex-col justify-center items-center text-center py-20 sm:py-32">
        <div className="max-w-4xl mx-auto">
            <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold tracking-tighter mb-6 font-headline py-4">
              Nithyanantha
            </h1>
            <p className="max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground mb-10">
              Digital creative skilled in front-end development, content creation, and marketing psychology. I build clean visuals, smooth experiences, and modern digital work that helps brands stand out.
            </p>
            <div className="flex gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/80 transition-all duration-300">
                <a href="#services">What can I do?</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-accent/30 bg-accent/10 text-accent-foreground hover:bg-accent/20 transition-all duration-300">
                <a href="#skills">My Skill Set?</a>
              </Button>
            </div>
        </div>
    </section>
  );
}
