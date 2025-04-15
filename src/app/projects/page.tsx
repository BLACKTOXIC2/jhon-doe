"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import projects from "@/data/projects";
import { cn } from "@/lib/utils";
import { ExternalLink, Github, Tags } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type Filter = "all" | "web" | "mobile" | "ai" | "design";

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Development" },
  { id: "mobile", label: "Mobile Apps" },
  { id: "ai", label: "AI & ML" },
  { id: "design", label: "Design" }
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");

  const filteredProjects = projects.filter(project => {
    if (activeFilter === "all") return true;
    if (activeFilter === "web") return project.tech.some(t => ["React", "Next.js", "Vue.js", "Node.js"].includes(t));
    if (activeFilter === "mobile") return project.tech.includes("React Native");
    if (activeFilter === "ai") return project.tech.includes("AI");
    if (activeFilter === "design") return project.tech.includes("UI/UX");
    return true;
  });

  return (
    <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-16">
      <div className="text-center mb-12 sm:mb-16">
        <div className="relative inline-block">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-lg opacity-25 blur group-hover:opacity-100 transition-all duration-500" />
          <Tags className="w-12 h-12 text-primary mx-auto mb-6 animate-fade-up" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-4 sm:mb-6 bg-gradient-to-b from-foreground to-muted-foreground bg-clip-text text-transparent animate-fade-up">
          My Projects
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "200ms" }}>
          A showcase of my recent work, side projects, and experiments
        </p>
      </div>

      <div className="flex justify-center gap-2 sm:gap-4 mb-12 flex-wrap animate-fade-up" style={{ animationDelay: "400ms" }}>
        {filters.map((filter) => (
          <Button
            key={filter.id}
            variant={activeFilter === filter.id ? "default" : "outline"}
            className={cn(
              "transition-all duration-300",
              activeFilter === filter.id && "shadow-md"
            )}
            onClick={() => setActiveFilter(filter.id)}
          >
            {filter.label}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredProjects.map((project, index) => (
          <Card 
            key={project.title} 
            className="group hover:shadow-xl transition-all duration-500 border-border/50 hover:border-primary/20 bg-background/50 backdrop-blur-sm animate-fade-up"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <CardHeader className="space-y-3 sm:space-y-4">
              <div className="relative mb-2 sm:mb-4 p-6 bg-gradient-to-b from-primary/5 to-transparent rounded-lg flex items-center justify-center group-hover:from-primary/10 transition-all duration-500">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary-rgb),0.1),transparent_100%)]" />
                <Image
                  src={project.image}
                  alt={project.title}
                  width={48}
                  height={48}
                  className="w-10 h-10 sm:w-14 sm:h-14 opacity-75 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                />
              </div>
              <CardTitle className="flex items-center justify-between group">
                <span className="text-lg sm:text-xl font-heading group-hover:text-primary transition-colors">
                  {project.title}
                </span>
              </CardTitle>
              <CardDescription className="text-sm sm:text-base line-clamp-2 text-muted-foreground/80 group-hover:text-muted-foreground transition-colors">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-muted/50 px-2.5 py-1 rounded-md text-xs font-medium text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="flex-1 sm:flex-initial" variant="default">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Preview Project
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-2xl lg:max-w-4xl xl:max-w-6xl bg-background/95 backdrop-blur-md">
                    <DialogHeader>
                      <DialogTitle className="text-2xl sm:text-3xl font-heading">{project.title}</DialogTitle>
                      <DialogDescription className="text-base sm:text-lg mt-2 text-muted-foreground/90">
                        {project.longDescription}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="mt-6 space-y-6">
                      <div className="relative aspect-video rounded-lg overflow-hidden border shadow-lg">
                        <Image
                          src={project.preview}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <div className="flex flex-wrap gap-3 mb-6">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="bg-muted/50 px-3 py-1.5 rounded-md text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors cursor-default"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" className="flex-1 sm:flex-initial group" asChild>
                          <a href={project.previewUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-5 w-5 transition-transform group-hover:rotate-12" />
                            View Live Demo
                          </a>
                        </Button>
                        <Button size="lg" variant="outline" className="flex-1 sm:flex-initial group" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                            View Source Code
                          </a>
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
                <Button variant="outline" className="flex-1 sm:flex-initial" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    Source Code
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-muted-foreground text-sm sm:text-base mb-6 animate-fade-up" style={{ animationDelay: "800ms" }}>
          Want to see more? Check out my GitHub profile for additional projects and contributions.
        </p>
        <Button size="lg" variant="outline" className="group animate-fade-up" style={{ animationDelay: "1000ms" }} asChild>
          <a href="https://github.com/username" target="_blank" rel="noopener noreferrer">
            <Github className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
            View GitHub Profile
          </a>
        </Button>
      </div>
    </div>
  );
}
