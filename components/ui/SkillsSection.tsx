'use client';

import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React.js', level: 88, color: 'from-blue-400 to-cyan-400' },
      { name: 'Next.js', level: 88, color: 'from-gray-400 to-white' },
      { name: 'TypeScript', level: 88, color: 'from-blue-600 to-blue-400' },
      { name: 'Tailwind CSS', level: 95, color: 'from-teal-400 to-cyan-400' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', level: 85, color: 'from-green-500 to-emerald-500' },
      { name: 'Python', level: 88, color: 'from-yellow-400 to-yellow-600' },
      { name: 'MySQL', level: 82, color: 'from-blue-500 to-indigo-500' },
      { name: 'PHP', level: 90, color: 'from-pink-500 to-rose-500' },
    ],
  },
  {
    category: 'Tools & Others',
    items: [
      { name: 'Git', level: 90, color: 'from-orange-500 to-red-500' },
      { name: 'Figma', level: 88, color: 'from-blue-400 to-sky-500' },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">
              Skills & Expertise
            </h2>
            <p className="text-xl text-gray-400">
              Teknologi yang saya kuasai untuk membangun solusi digital
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <ScrollReveal key={skillGroup.category} delay={groupIndex * 0.2}>
              <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 hover:border-purple-500/30 transition-all">
                <h3 className="text-2xl font-bold text-white mb-8">
                  {skillGroup.category}
                </h3>
                
                <div className="space-y-6">
                  {skillGroup.items.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-purple-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
