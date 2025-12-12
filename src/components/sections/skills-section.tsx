import { Code, Paintbrush, Megaphone, Wrench } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const skillCategories = [
    {
        category: "Technical",
        icon: <Code className="h-6 w-6 text-accent" />,
        skills: ["HTML", "CSS", "JavaScript", "VS Code", "Git & GitHub"]
    },
    {
        category: "Creative",
        icon: <Paintbrush className="h-6 w-6 text-accent" />,
        skills: ["Content Creation", "Videography", "UI/UX Principles", "GIMP", "Canva", "Capcut", "Filmora"]
    },
    {
        category: "Marketing",
        icon: <Megaphone className="h-6 w-6 text-accent" />,
        skills: ["Social Media Strategy", "Consumer Psychology", "E-commerce", "SEO Basics", "Brand Identity"]
    },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 sm:py-32 px-4">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <div className="flex justify-center items-center gap-4">
                    <Wrench className="h-8 w-8 text-accent" />
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">My Skillset</h2>
                </div>
                <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                    A versatile toolbox for building and growing digital products.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {skillCategories.map(({ category, icon, skills }) => (
                  <Card key={category} className="bg-card h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                      <CardHeader className="text-center">
                          <div className="flex justify-center items-center gap-3 mb-2">
                            {icon}
                            <CardTitle className="text-xl font-semibold">{category}</CardTitle>
                          </div>
                      </CardHeader>
                      <CardContent className="flex flex-col flex-1">
                          <div className="flex flex-wrap gap-2 justify-center flex-1">
                              {skills.map(skill => <Badge key={skill} variant="outline">{skill}</Badge>)}
                          </div>
                      </CardContent>
                  </Card>
              ))}
            </div>
        </div>
    </section>
  );
}
