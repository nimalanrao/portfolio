import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TerminalSquare, Code, Wind, GitBranch, Github, Server, PenTool, Bot, Cloud, Layers, Brush } from "lucide-react";

const tools = [
  { 
    name: "Next.js", 
    description: "Full-stack web framework for React.",
    icon: <Layers className="h-8 w-8 text-accent mb-4" />
  },
  { 
    name: "React", 
    description: "JavaScript library for building user interfaces.",
    icon: <Code className="h-8 w-8 text-accent mb-4" />
  },
  { 
    name: "Tailwind CSS", 
    description: "A utility-first CSS framework for rapid UI development.",
    icon: <Wind className="h-8 w-8 text-accent mb-4" />
  },
  { 
    name: "Node.js", 
    description: "JavaScript runtime for server-side development.",
    icon: <Server className="h-8 w-8 text-accent mb-4" />
  },
  { 
    name: "Git", 
    description: "Version control system for tracking code changes.",
    icon: <GitBranch className="h-8 w-8 text-accent mb-4" />
  },
  { 
    name: "GitHub", 
    description: "Platform for hosting and collaborating on Git repositories.",
    icon: <Github className="h-8 w-8 text-accent mb-4" />
  },
  { 
    name: "Firebase", 
    description: "Platform for building web and mobile applications.",
    icon: <Cloud className="h-8 w-8 text-accent mb-4" />
  },
  { 
    name: "Vercel", 
    description: "Cloud platform for static sites and Serverless Functions.",
    icon: <Bot className="h-8 w-8 text-accent mb-4" />
  },
  { 
    name: "Canva", 
    description: "Online design and publishing tool.",
    icon: <Brush className="h-8 w-8 text-accent mb-4" />
  },
  { 
    name: "Figma", 
    description: "Collaborative interface design tool.",
    icon: <PenTool className="h-8 w-8 text-accent mb-4" />
  },
];

export function ToolsSection() {
    return (
        <section id="tools" className="py-24 sm:py-32">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <div className="flex justify-center items-center gap-4">
                        <TerminalSquare className="h-8 w-8 text-accent" />
                        <h2 className="text-3xl md:text-4xl font-bold font-headline">Tools & Technologies</h2>
                    </div>
                     <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                        The tools and technologies I use to bring ideas to life.
                    </p>
                </div>
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent>
                        {tools.map((tool, index) => (
                            <CarouselItem key={index} className="basis-3/4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                                <div className="p-1 h-full">
                                    <Card className="h-full text-center flex flex-col justify-center items-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-card/50 dark:bg-card/80">
                                        <CardHeader className="items-center">
                                            {tool.icon}
                                            <CardTitle>{tool.name}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <CardDescription>{tool.description}</CardDescription>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="flex" />
                    <CarouselNext className="flex" />
                </Carousel>
            </div>
        </section>
    );
}
