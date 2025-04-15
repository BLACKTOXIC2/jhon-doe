import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code, 
  Users, 
  Coffee,
  ChevronRight,
  Star,
  Calendar,
  Building,
} from "lucide-react";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = {
  title: 'John Doe - Full Stack Web Developer',
  description: 'Full Stack Web Developer specializing in modern web technologies. View my portfolio, projects, and get in touch for collaboration.',
  keywords: ['web development', 'full stack', 'react', 'next.js', 'typescript'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://johndoe.dev',
    title: 'John Doe - Full Stack Web Developer',
    description: 'Full Stack Web Developer specializing in modern web technologies.',
    siteName: 'John Doe Portfolio'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'John Doe - Full Stack Web Developer',
    description: 'Full Stack Web Developer specializing in modern web technologies.',
    creator: '@johndoe'
  }
};

// Using TypeScript interfaces for better type safety
interface Testimonial {
  name: string;
  role: string;
  content: string;
  image: string;
}

interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  achievements?: string[];
}

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'devops' | 'other';
}

// Data with improved structure and more details
const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    content: "John's work on our platform exceeded our expectations. His attention to detail and technical expertise made our vision come to life.",
    image: "https://i.pravatar.cc/150?img=1"
  },
  {
    name: "Michael Chen",
    role: "CTO, InnovateCo",
    content: "Working with John was a pleasure. His deep understanding of modern web technologies helped us create a seamless user experience.",
    image: "https://i.pravatar.cc/150?img=2"
  },
  {
    name: "Emma Wilson",
    role: "Product Manager, DesignHub",
    content: "John brings both technical skills and creative insights to every project. He's a valuable asset to any development team.",
    image: "https://i.pravatar.cc/150?img=3"
  }
];

const experience: Experience[] = [
  {
    role: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    period: "2022 - Present",
    description: "Led frontend development for enterprise applications, implementing modern web technologies and best practices."
  },
  {
    role: "Full Stack Developer",
    company: "InnovateSolutions",
    period: "2020 - 2022",
    description: "Developed and maintained full-stack applications using React, Node.js, and PostgreSQL."
  }
];

const skills: Skill[] = [
  { name: "React", level: 95, category: 'frontend' },
  { name: "TypeScript", level: 90, category: 'frontend' },
  { name: "Node.js", level: 85, category: 'backend' },
  { name: "Next.js", level: 90, category: 'frontend' },
  { name: "UI/UX Design", level: 80, category: 'other' },
  { name: "Database Design", level: 85, category: 'other' },
  { name: "AWS", level: 75, category: 'devops' },
  { name: "DevOps", level: 70, category: 'devops' }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section id="home" className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/5 to-background" />
          <div className="absolute inset-0 hex-pattern opacity-5" />
          <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>
        <div className="responsive-container">
          <div className="flex flex-col items-center text-center space-y-6 sm:space-y-10">
            <div className="animate-float relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-full opacity-30 group-hover:opacity-100 transition-opacity blur"></div>
              <Avatar className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 border-4 border-background shadow-2xl relative hover:scale-105 transition-transform duration-300">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
            <div className="space-y-4">
              <div className="flex justify-center gap-2 mb-4">
                <Badge variant="outline" className="animate-slide-in-right" style={{ animationDelay: "400ms" }}>
                  Available for hire
                </Badge>
                <Badge variant="secondary" className="animate-slide-in-left" style={{ animationDelay: "600ms" }}>
                  Remote friendly
                </Badge>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-display-large font-heading tracking-tight relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-lg opacity-20 group-hover:opacity-30 blur transition-opacity"></div>
                <span className="relative animate-text-gradient bg-gradient-to-r from-primary via-foreground to-secondary bg-300% bg-clip-text text-transparent font-bold hover:scale-105 transition-transform inline-block">John Doe</span>
              </h1>
              <div className="text-xl sm:text-2xl md:text-h3 text-muted-foreground font-heading mx-auto animate-fade-in" style={{ animationDelay: "300ms" }}>
                Full Stack Web Developer
              </div>
              <p className="text-base sm:text-lg md:text-body-large text-muted-foreground max-w-xl mx-auto">
                Building beautiful, responsive, and user-friendly web applications with modern technologies.
                Passionate about creating impactful digital experiences.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <Button className="hover-scale group">
                <ExternalLink className="mr-2 h-4 w-4 group-hover:rotate-45 transition-transform" />
                View Projects
              </Button>
              <Link href="/contact">
                <Button variant="outline" className="hover-scale group">
                  <Mail className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  Contact Me
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline Section */}
      <section className="section-padding bg-muted/30">
        <div className="responsive-container">
          <h2 className="heading-responsive text-center mb-8 sm:mb-12 bg-gradient-to-b from-foreground to-muted-foreground bg-clip-text text-transparent">
            Professional Journey
          </h2>
          <div className="grid md:grid-cols-[1fr_2px_1fr] gap-6 md:gap-8 relative">
            <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-gradient-to-b from-primary/50 via-primary/20 to-transparent -translate-x-px" />
            {experience.map((exp, index) => (
              <div 
                key={exp.company} 
                className={`md:col-span-1 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:col-start-3 md:pl-8'} opacity-100`}
                style={{ 
                  animationDelay: `${index * 200}ms`,
                  animationFillMode: 'forwards' 
                }}
              >
                <Card className="group hover:shadow-xl transition-all duration-300 relative border-primary/10 hover:border-primary/30 bg-background/50 backdrop-blur-sm">
                  <div className={`absolute top-1/2 -translate-y-1/2 hidden md:block
                    ${index % 2 === 0 ? '-right-10' : '-left-10'}`}>
                    <div className="w-4 h-4 rounded-full bg-primary/20 group-hover:bg-primary transition-colors duration-300 relative">
                      <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <Building className="w-5 h-5 text-primary" />
                      <h3 className="font-heading text-h5 group-hover:text-primary transition-colors">{exp.role}</h3>
                    </div>
                    <div className={`flex items-center gap-2 text-muted-foreground mb-3 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <span className="font-medium">{exp.company}</span>
                      <span className="text-primary/50">•</span>
                      <span className="font-mono text-sm">{exp.period}</span>
                    </div>
                    <p className="text-body-small text-muted-foreground group-hover:text-foreground transition-colors">
                      {exp.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding relative overflow-visible">
        <div className="absolute inset-0 bg-muted/50" />
        <div className="responsive-container relative">
          <div className="mb-8 sm:mb-16 text-center">
            <h2 className="heading-responsive mb-4 animate-fade-up bg-gradient-to-b from-foreground to-muted-foreground bg-clip-text text-transparent">
              Technical Expertise
            </h2>
            <p className="text-responsive text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and proficiency levels
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
            {skills.map((skill, index) => (
              <div 
                key={skill.name}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-muted/30">
        <div className="responsive-container">
          <h2 className="heading-responsive text-center mb-8 sm:mb-12 bg-gradient-to-b from-foreground to-muted-foreground bg-clip-text text-transparent">
            Client Testimonials
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.name}
                className="group animate-fade-up bg-background/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-6 relative">
                  <div className="absolute top-6 right-6">
                    <Star className="w-6 h-6 text-primary/20" />
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar>
                      <AvatarImage src={testimonial.image} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-body-small text-muted-foreground italic">&ldquo;{testimonial.content}&rdquo;</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding relative">
        <div className="responsive-container">
          <div className="mb-8 sm:mb-16 text-center">
            <h2 className="heading-responsive mb-4 animate-fade-up bg-gradient-to-b from-foreground to-muted-foreground bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-responsive text-muted-foreground max-w-2xl mx-auto">
              A selection of my recent work and side projects
            </p>
          </div>
          <div className="grid-responsive">
            {[
              {
                title: "E-Commerce Platform",
                description: "A full-stack e-commerce solution with React and Node.js",
                tech: ["React", "Node.js", "MongoDB"],
                image: "/window.svg",
                demo: "https://ecommerce-demo.example.com",
                github: "https://github.com/johndoe/ecommerce",
                featured: true,
                completionDate: "2023-01-15"
              },
              {
                title: "Task Management App",
                description: "Real-time task management application with collaborative features",
                tech: ["Next.js", "TypeScript", "Prisma"],
                image: "/file.svg",
                demo: "https://tasks-demo.example.com",
                github: "https://github.com/johndoe/tasks",
                featured: true,
                completionDate: "2023-03-10"
              },
              {
                title: "Portfolio Website",
                description: "Modern and responsive portfolio website with dark mode support",
                tech: ["Next.js", "Tailwind CSS", "shadcn/ui"],
                image: "/globe.svg",
                demo: "https://portfolio.example.com",
                github: "https://github.com/johndoe/portfolio",
                featured: true,
                completionDate: "2023-02-20"
              },
            ].map((project, index) => (
              <Card 
                key={project.title} 
                className="group animate-fade-up overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader className="relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="mb-4 p-6 bg-muted/50 rounded-lg flex items-center justify-center">
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      width={48} 
                      height={48}
                      className="opacity-75 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <CardTitle className="flex items-center justify-between group">
                    <span className="group-hover:text-primary transition-colors">{project.title}</span>
                    <div className="flex gap-2">
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 hover:bg-primary/10 rounded-full transition-colors"
                      >
                        <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </a>
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 hover:bg-primary/10 rounded-full transition-colors"
                      >
                        <Github className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </a>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary" 
                        className="bg-muted/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding relative">
        <div className="absolute inset-0 dotted-pattern opacity-5" />
        <div className="responsive-container relative">
          <div className="text-center mb-8 sm:mb-12">
            <Badge variant="outline" className="mb-4 animate-fade-up">Let&apos;s Connect</Badge>
            <h2 className="heading-responsive mb-4 animate-fade-up bg-gradient-to-b from-foreground to-muted-foreground bg-clip-text text-transparent">
              Ready to Transform Your Ideas into Reality?
            </h2>
            <p className="text-responsive text-muted-foreground max-w-xl mx-auto">
              Whether you need a stunning website, a robust web application, or strategic technical consulting,
              I&apos;m here to help bring your vision to life.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-6 sm:space-y-8">
              <div className="grid sm:grid-cols-2 gap-4">
                <Card className="p-6 bg-background/50 backdrop-blur-sm animate-fade-up hover:shadow-lg transition-all duration-300" style={{ animationDelay: "200ms" }}>
                  <div className="flex flex-col items-center text-center space-y-2">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                      <Code className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-medium">Development</h4>
                    <p className="text-sm text-muted-foreground">Custom web applications built with modern tech stack</p>
                  </div>
                </Card>
                <Card className="p-6 bg-background/50 backdrop-blur-sm animate-fade-up hover:shadow-lg transition-all duration-300" style={{ animationDelay: "300ms" }}>
                  <div className="flex flex-col items-center text-center space-y-2">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-medium">Consultation</h4>
                    <p className="text-sm text-muted-foreground">Technical guidance and architecture planning</p>
                  </div>
                </Card>
              </div>

              <Card className="p-6 bg-background/50 backdrop-blur-sm animate-fade-up" style={{ animationDelay: "400ms" }}>
                <h3 className="font-heading text-h4 mb-4">Quick Connect</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:john.doe@example.com" className="text-muted-foreground hover:text-primary transition-colors">
                        john.doe@example.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Availability</p>
                      <p className="text-muted-foreground">Monday - Friday, 9AM - 6PM EST</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Coffee className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Free Consultation</p>
                      <Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-primary transition-colors" asChild>
                        <a href="https://calendly.com/johndoe" target="_blank" rel="noopener noreferrer">
                          Schedule a 30-min call <ChevronRight className="w-4 h-4 ml-1" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>

              <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-up" style={{ animationDelay: "500ms" }}>
                <Card className="w-full p-4 border-primary/20">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <Star className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">98% Client Satisfaction</h4>
                      <p className="text-sm text-muted-foreground">Based on 50+ projects</p>
                    </div>
                  </div>
                </Card>
                <div className="flex gap-4">
                  <HoverCard openDelay={200}>
                    <HoverCardTrigger asChild>
                      <Button variant="outline" size="icon" className="hover-scale">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                          <Github className="h-5 w-5" />
                        </a>
                      </Button>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <div className="space-y-1">
                        <h4 className="text-sm font-semibold">GitHub</h4>
                        <p className="text-sm text-muted-foreground">Check out my open source projects and contributions</p>
                        <div className="flex items-center pt-2">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          <span className="text-xs text-muted-foreground">github.com</span>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>

                  <HoverCard openDelay={200}>
                    <HoverCardTrigger asChild>
                      <Button variant="outline" size="icon" className="hover-scale">
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                          <Linkedin className="h-5 w-5" />
                        </a>
                      </Button>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <div className="space-y-1">
                        <h4 className="text-sm font-semibold">LinkedIn</h4>
                        <p className="text-sm text-muted-foreground">Connect with me professionally</p>
                        <div className="flex items-center pt-2">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          <span className="text-xs text-muted-foreground">linkedin.com</span>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-lg opacity-20 blur-lg" />
              <Card className="relative">
                <CardContent className="p-6">
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
