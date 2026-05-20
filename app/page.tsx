'use client';

import { useEffect } from 'react';
import Navigation from '@/components/ui/Navigation';
import HeroSection from '@/components/HeroSection';
import ProjectCard from '@/components/ui/ProjectCard';
import SkillsSection from '@/components/ui/SkillsSection';
import ContactForm from '@/components/ContactForm';
import AIChat from '@/components/AIChat';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Project } from '@/types';

const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Full-stack marketplace with advanced features including real-time inventory management, payment processing, and analytics dashboard.',
    image: '/projects/ecommerce.jpg',
    tags: ['Next.js', 'Stripe', 'PostgreSQL', 'Redis'],
    link: 'https://project1.com',
    category: 'Full Stack',
  },
  {
    id: '2',
    title: 'SaaS Analytics Dashboard',
    description: 'Real-time analytics platform with interactive charts, user behavior tracking, and automated reporting system.',
    image: '/projects/dashboard.jpg',
    tags: ['React', 'D3.js', 'WebSocket', 'AWS'],
    link: 'https://project2.com',
    category: 'Frontend',
  },
  {
    id: '3',
    title: 'Mobile Fitness App',
    description: 'Cross-platform fitness application with AI-powered workout recommendations and progress tracking.',
    image: '/projects/fitness.jpg',
    tags: ['React Native', 'TensorFlow', 'Firebase'],
    link: 'https://project3.com',
    category: 'Mobile',
  },
  {
    id: '4',
    title: 'AI Content Generator',
    description: 'Advanced content generation platform using GPT models with custom training and fine-tuning capabilities.',
    image: '/projects/ai.jpg',
    tags: ['Python', 'FastAPI', 'OpenAI', 'Docker'],
    link: 'https://project4.com',
    category: 'AI/ML',
  },
];

export default function Home() {
  return (
    <main className="bg-black">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home">
        <HeroSection />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-4">
                Featured Projects
              </h2>
              <p className="text-xl text-gray-400">
                Beberapa project terbaik yang telah saya kerjakan
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <SkillsSection />
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-4">
                Work Experience
              </h2>
              <p className="text-xl text-gray-400">
                Perjalanan karir profesional saya
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-12">
            {[
              {
                company: 'Tech Corp',
                role: 'Senior Frontend Developer',
                period: '2022 - Present',
                description: 'Memimpin tim frontend untuk produk SaaS dengan 100K+ users. Mengoptimalkan performa dan implementasi fitur baru.',
              },
              {
                company: 'Digital Agency',
                role: 'Full Stack Developer',
                period: '2020 - 2022',
                description: 'Membangun 50+ website dan aplikasi web untuk berbagai klien. Spesialisasi dalam e-commerce dan dashboard analytics.',
              },
              {
                company: 'Creative Studio',
                role: 'UI/UX Designer',
                period: '2019 - 2020',
                description: 'Mendesain mobile apps dengan rating tinggi. Menciptakan design system yang scalable.',
              },
            ].map((exp, index) => (
              <ScrollReveal key={index} delay={index * 0.2}>
                <div className="relative pl-8 border-l-2 border-purple-500">
                  <div className="absolute -left-3 top-0 w-6 h-6 bg-purple-500 rounded-full" />
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                        <p className="text-purple-400">{exp.company}</p>
                      </div>
                      <span className="text-gray-400 text-sm">{exp.period}</span>
                    </div>
                    <p className="text-gray-400">{exp.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <ContactForm />
      </section>

      {/* AI Chat Component */}
      <AIChat />
    </main>
  );
}
