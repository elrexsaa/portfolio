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
    title: 'Website Puisiku',
    description: 'Website puisi interaktif dengan desain modern dan elegan untuk menampilkan karya sastra digital secara responsif dan menarik.',
    image: '/projects/puisiku.jpg',
    tags: ['Vue.js', 'Tailwind', 'Supabase'],
    link: 'https://quoterex.dpdns.org/',
    category: 'Full Stack',
  },
  {
    id: '2',
    title: 'Website Undangan Ulang Tahun',
    description: 'Website ulang tahun interaktif dengan desain modern, animasi menarik, dan tampilan responsif untuk memberikan pengalaman perayaan yang lebih personal dan berkesan.',
    image: '/projects/ultah.jpg',
    tags: ['HTML', 'Tailwind'],
    link: 'https://eundangansenzyavaleksta.vercel.app/',
    category: 'Frontend',
  },
];

export default function Home() {
  return (
    <main className="bg-black">
      <Navigation />
      
      <section id="home">
        <HeroSection />
      </section>

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

      <section id="skills">
        <SkillsSection />
      </section>

      <section id="experience" className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-4">
                Learning Experience
              </h2>
              <p className="text-xl text-gray-400">
                Perjalanan belajar saya hingga sekarang
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-12">
            {[
              {
                company: 'Python, NodeJS',
                role: 'Backend',
                period: '2018-Sekarang',
                description: 'Pertama kali saya belajar bahasa pemrograman python mulai tahun 2018.',
              },
              {
                company: 'HTML, CSS, JavaScript, PHP',
                role: 'Frontend',
                period: '2020-Sekarang',
                description: 'Saya mulai belajar bahasa pemrograman HTML, CSS, JavaScript, dan PHP mulai dari tahun 2020.',
              },
              {
                company: 'React, MySQL, TypeScript, DLL',
                role: 'Frontend & Backend',
                period: '2024-Sekarang',
                description: 'Setelah Berkembangnya AI, saya mulai mencoba tantangan baru dengan mulai belajar memahami bahasa pemrograman seperti React, MySQL, TypeScript, Dan masih banyak lagi.',
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

      <section id="contact">
        <ContactForm />
      </section>

      <AIChat />
    </main>
  );
}
