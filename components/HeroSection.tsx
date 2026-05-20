'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // Text reveal animation
    const ctx = gsap.context(() => {
      if (titleRef.current) {
        const words = titleRef.current.querySelectorAll('.word');
        
        gsap.fromTo(
          words,
          {
            y: 100,
            opacity: 0,
            rotateX: -80,
          },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 1,
            stagger: 0.12,
            ease: 'power4.out',
            delay: 0.5,
          }
        );
      }

      if (subtitleRef.current) {
        gsap.fromTo(
          subtitleRef.current,
          {
            y: 50,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            delay: 1.2,
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  const titleWords = "Creative Developer & Designer".split(' ');

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <span className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium border border-white/20">
            👋 Welcome to my portfolio
          </span>
        </motion.div>

        <h1 
          ref={titleRef}
          className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight"
        >
          {titleWords.map((word, index) => (
            <span key={index} className="word inline-block mr-4">
              {word}
            </span>
          ))}
        </h1>

        <p 
          ref={subtitleRef}
          className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-12"
        >
          Crafting digital experiences with cutting-edge technology and creative design
        </p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="flex gap-4 justify-center"
        >
          <button className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300">
            View Projects
          </button>
          <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
            Contact Me
          </button>
        </motion.div>
      </div>
    </section>
  );
}
