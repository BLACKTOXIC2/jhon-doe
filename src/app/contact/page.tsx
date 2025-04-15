'use client';

import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { useState } from 'react';
import { z } from 'zod';
import { toast } from 'sonner';
import { Loader2, Mail, Linkedin, Github, Twitter } from 'lucide-react';
import Link from 'next/link';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  role: z.string().min(1, 'Please select your role'),
  budget: z.string().min(1, 'Please select a budget range'),
  projectType: z.string().min(1, 'Please select a project type'),
  timeline: z.string().min(1, 'Please select a timeline'),
  message: z.string().min(10, 'Message must be at least 10 characters')
});

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    budget: '',
    projectType: '',
    timeline: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const roles = [
    'Business Owner',
    'Project Manager',
    'Developer',
    'Designer',
    'Marketing Manager',
    'Other'
  ];

  const budgetRanges = [
    'Less than $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000+'
  ];

  const projectTypes = [
    'MCQGen Integration',
    'Website Development',
    'Mobile App',
    'E-commerce Solution',
    'Custom Software',
    'UI/UX Design',
    'Other'
  ];

  const timelines = [
    'Less than 1 month',
    '1-3 months',
    '3-6 months',
    '6+ months',
    'Not sure yet'
  ];

  const validateForm = () => {
    try {
      formSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path) {
            newErrors[err.path[0]] = err.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast.success('Thank you! We\'ll get back to you soon.');
      setFormData({
        name: '',
        email: '',
        role: '',
        budget: '',
        projectType: '',
        timeline: '',
        message: ''
      });
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="font-heading text-3xl">Get in Touch</CardTitle>
              <CardDescription className="text-lg mt-2">
                Fill out the form below to discuss your project requirements.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className={`w-full p-2 rounded-md border ${errors.name ? 'border-red-500' : 'border-input'} bg-background`}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      disabled={isSubmitting}
                    />
                    {errors.name && (
                      <p className="text-sm text-red-500 mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className={`w-full p-2 rounded-md border ${errors.email ? 'border-red-500' : 'border-input'} bg-background`}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      disabled={isSubmitting}
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500 mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="role" className="block text-sm font-medium mb-2">
                      Your Role
                    </label>
                    <select
                      id="role"
                      className={`w-full p-2 rounded-md border ${errors.role ? 'border-red-500' : 'border-input'} bg-background`}
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      disabled={isSubmitting}
                    >
                      <option value="">Select your role</option>
                      {roles.map((role) => (
                        <option key={role} value={role}>
                          {role}
                        </option>
                      ))}
                    </select>
                    {errors.role && (
                      <p className="text-sm text-red-500 mt-1">{errors.role}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium mb-2">
                      Project Budget
                    </label>
                    <select
                      id="budget"
                      className={`w-full p-2 rounded-md border ${errors.budget ? 'border-red-500' : 'border-input'} bg-background`}
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      disabled={isSubmitting}
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((budget) => (
                        <option key={budget} value={budget}>
                          {budget}
                        </option>
                      ))}
                    </select>
                    {errors.budget && (
                      <p className="text-sm text-red-500 mt-1">{errors.budget}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium mb-2">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      className={`w-full p-2 rounded-md border ${errors.projectType ? 'border-red-500' : 'border-input'} bg-background`}
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      disabled={isSubmitting}
                    >
                      <option value="">Select project type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                    {errors.projectType && (
                      <p className="text-sm text-red-500 mt-1">{errors.projectType}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium mb-2">
                      Expected Timeline
                    </label>
                    <select
                      id="timeline"
                      className={`w-full p-2 rounded-md border ${errors.timeline ? 'border-red-500' : 'border-input'} bg-background`}
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      disabled={isSubmitting}
                    >
                      <option value="">Select timeline</option>
                      {timelines.map((timeline) => (
                        <option key={timeline} value={timeline}>
                          {timeline}
                        </option>
                      ))}
                    </select>
                    {errors.timeline && (
                      <p className="text-sm text-red-500 mt-1">{errors.timeline}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className={`w-full p-2 rounded-md border ${errors.message ? 'border-red-500' : 'border-input'} bg-background resize-none`}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    disabled={isSubmitting}
                    placeholder="Please describe your project requirements and any specific details you'd like to share..."
                  />
                  {errors.message && (
                    <p className="text-sm text-red-500 mt-1">{errors.message}</p>
                  )}
                </div>

                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-heading text-xl">Other Ways to Connect</CardTitle>
              <CardDescription>
                Reach out through your preferred channel
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Link 
                  href="mailto:contact@example.com" 
                  className="flex items-center space-x-2 text-sm hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>contact@example.com</span>
                </Link>
                <Link 
                  href="https://linkedin.com"
                  target="_blank"
                  className="flex items-center space-x-2 text-sm hover:text-primary transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                  <span>LinkedIn</span>
                </Link>
                <Link 
                  href="https://github.com"
                  target="_blank"
                  className="flex items-center space-x-2 text-sm hover:text-primary transition-colors"
                >
                  <Github className="h-4 w-4" />
                  <span>GitHub</span>
                </Link>
                <Link 
                  href="https://twitter.com"
                  target="_blank"
                  className="flex items-center space-x-2 text-sm hover:text-primary transition-colors"
                >
                  <Twitter className="h-4 w-4" />
                  <span>Twitter</span>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
