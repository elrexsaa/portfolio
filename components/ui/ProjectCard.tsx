'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { Project } from '@/types';

gsap.registerPlugin(ScrollTrigger);

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    gsap.fromTo(
      card,
      {
        y: 100,
        opacity: 0,
        rotateX: 10,
      },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top bottom-=100',
          end: 'bottom center',
          toggleActions: 'play none none reverse',
        },
        delay: index * 0.2,
      }
    );

    // Parallax effect on scroll
    gsap.to(card.querySelector('.parallax-image'), {
      y: -50,
      ease: 'none',
      scrollTrigger: {
        trigger: card,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  }, [index]);

  return (
    <motion.div
      ref={cardRef}
      className="group relative bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-gray-800 hover:border-purple-500/50 transition-all duration-500"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      {/* Project Image with Parallax */}
      <div className="relative h-64 overflow-hidden">
        <div className="parallax-image absolute inset-0">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-purple-600/90 backdrop-blur-sm text-white text-sm rounded-full">
            {project.category}
          </span>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-400 mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-white/5 text-gray-300 text-sm rounded-full border border-white/10 hover:border-purple-500/50 hover:text-purple-400 transition-all cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Button */}
        <motion.a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium group/btn"
          whileHover={{ x: 5 }}
        >
          View Project
          <svg
            className="w-4 h-4 transition-transform group-hover/btn:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </motion.a>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/0 to-blue-600/0 group-hover:from-purple-600/5 group-hover:via-purple-600/5 group-hover:to-blue-600/5 transition-all duration-500 pointer-events-none" />
    </motion.div>
  );
}
