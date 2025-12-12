import { Code, Video, Paintbrush, Briefcase } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    icon: <Code size={24} className="text-accent"/>,
    title: "Front-End Development",
    description: "Building fast, responsive, and beautiful websites with modern web technologies.",
    tags: ["Web", "Performance"]
  },
  {
    icon: <Video size={24} className="text-accent"/>,
    title: "Content Creation",
    description: "Producing engaging product photos and short-form videos optimized for social media platforms like Instagram and TikTok.",
     tags: ["Social Media", "Visuals"]
  },
  {
    icon: <Paintbrush size={24} className="text-accent"/>,
    title: "UI/UX & Branding",
    description: "Refreshing user interfaces and strengthening brand identity to create memorable and user-friendly digital experiences.",
     tags: ["Design", "Strategy"]
  },
];

const ServiceCard = ({ icon, title, description, tags }: { icon: React.ReactNode, title: string, description: string, tags: string[] }) => (
    <Card className="bg-card h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <CardHeader className="flex flex-row items-center gap-4">
            {icon}
            <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col flex-1">
            <p className="text-sm text-muted-foreground mb-4 flex-1">{description}</p>
            <div className="flex gap-2 flex-wrap">
                {tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
            </div>
        </CardContent>
    </Card>
);

export function ServicesSection() {
  return (
    <section id="services" className="py-24 sm:py-32">
        <div className="text-center mb-16">
            <div className="flex justify-center items-center gap-4">
                <Briefcase className="h-8 w-8 text-accent" />
                <h2 className="text-3xl md:text-4xl font-bold font-headline">What I Do</h2>
            </div>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                I offer a blend of creative and technical services to elevate your brand's digital presence.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(service => (
                <ServiceCard key={service.title} {...service} />
            ))}
        </div>
    </section>
  );
}
