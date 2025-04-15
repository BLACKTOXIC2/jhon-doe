'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { useState } from 'react';
import { Code, Server, Wrench, Brain } from 'lucide-react';

// Skill categories with their respective skills and icons
const skillCategories = [
  {
    name: 'Frontend',
    icon: Code,
    skills: [
      { name: 'React', proficiency: 90, color: 'bg-blue-500' },
      { name: 'Next.js', proficiency: 85, color: 'bg-black' },
      { name: 'TypeScript', proficiency: 80, color: 'bg-blue-700' },
      { name: 'HTML/CSS', proficiency: 95, color: 'bg-orange-500' },
      { name: 'Tailwind CSS', proficiency: 85, color: 'bg-sky-500' },
    ],
  },
  {
    name: 'Backend',
    icon: Server,
    skills: [
      { name: 'Node.js', proficiency: 85, color: 'bg-green-600' },
      { name: 'Express', proficiency: 80, color: 'bg-gray-700' },
      { name: 'MongoDB', proficiency: 75, color: 'bg-green-700' },
      { name: 'PostgreSQL', proficiency: 70, color: 'bg-blue-600' },
      { name: 'GraphQL', proficiency: 65, color: 'bg-pink-600' },
    ],
  },
  {
    name: 'Tools & Others',
    icon: Wrench,
    skills: [
      { name: 'Git', proficiency: 90, color: 'bg-orange-600' },
      { name: 'Docker', proficiency: 70, color: 'bg-blue-500' },
      { name: 'AWS', proficiency: 65, color: 'bg-yellow-600' },
      { name: 'CI/CD', proficiency: 75, color: 'bg-green-500' },
      { name: 'Jest', proficiency: 80, color: 'bg-red-600' },
    ],
  },
];

// Function to get skill level label based on proficiency
const getSkillLevel = (proficiency: number) => {
  if (proficiency >= 90) return 'Expert';
  if (proficiency >= 80) return 'Advanced';
  if (proficiency >= 70) return 'Intermediate';
  if (proficiency >= 50) return 'Basic';
  return 'Beginner';
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('Frontend');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  // Get the icon component for the selected category
  const CategoryIcon = skillCategories.find(
    (cat) => cat.name === selectedCategory
  )?.icon || Brain;

  return (
    <div className="container max-w-4xl mx-auto py-16 px-4 min-h-screen">
      <motion.div
        className="flex flex-col items-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="bg-primary/10 p-4 rounded-full mb-6"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <CategoryIcon className="h-10 w-10 text-primary" />
        </motion.div>
        <motion.h1 className="text-4xl font-bold text-center mb-4">
          Skills & Expertise
        </motion.h1>
        <motion.p className="text-center text-muted-foreground max-w-xl">
          My professional skills across different domains of software development.
          Click on a category to explore more.
        </motion.p>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {skillCategories.map((category) => {
          const Icon = category.icon;
          const isActive = selectedCategory === category.name;
          
          return (
            <motion.div
              key={category.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Badge
                variant={isActive ? "default" : "outline"}
                className={`px-4 py-2 text-sm cursor-pointer transition-all flex items-center gap-2 ${
                  isActive ? 'shadow-md' : ''
                }`}
                onClick={() => setSelectedCategory(category.name)}
              >
                <Icon className="h-4 w-4" />
                {category.name}
              </Badge>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-8"
      >
        {skillCategories
          .find((category) => category.name === selectedCategory)
          ?.skills.map((skill) => (
            <motion.div 
              key={skill.name} 
              variants={item} 
              className="space-y-2 bg-card/50 p-4 rounded-lg border border-border/50 hover:border-primary/30 transition-all duration-300"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              whileHover={{ y: -5 }}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">{skill.name}</h3>
                <div className="flex items-center gap-2">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    hoveredSkill === skill.name ? 'bg-primary/20' : 'bg-secondary'
                  }`}>
                    {getSkillLevel(skill.proficiency)}
                  </span>
                  <span className="text-sm text-muted-foreground">{skill.proficiency}%</span>
                </div>
              </div>
              <div className="relative">
                <Progress value={skill.proficiency} className="h-2" />
                <div 
                  className={`absolute top-0 left-0 h-2 rounded-full transition-all duration-500 ${skill.color}`} 
                  style={{ 
                    width: `${skill.proficiency}%`, 
                    opacity: hoveredSkill === skill.name ? 1 : 0 
                  }}
                />
              </div>
            </motion.div>
          ))}
      </motion.div>
    </div>
  );
} 