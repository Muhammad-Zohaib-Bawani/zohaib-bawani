"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { User, Code2, Rocket, Heart } from 'lucide-react';

const stats = [
  { icon: <Code2 className="text-primary" />, label: '3+ Years', sub: 'Experience' },
  { icon: <Rocket className="text-secondary" />, label: '20+', sub: 'Projects Done' },
  { icon: <Heart className="text-accent" />, label: '100%', sub: 'Dedication' },
];

export const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 text-primary font-mono mb-4">
              <span className="w-12 h-[1px] bg-primary"></span>
              <span>About Me</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
              A Passionate Developer <br />
              <span className="text-gray-500">Based in Pakistan.</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              {portfolioData.personalInfo.summary}
            </p>
            
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors">
                  <div className="mb-2">{stat.icon}</div>
                  <div className="text-xl font-bold">{stat.label}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest">{stat.sub}</div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden glass border border-white/10 p-2">
              <div className="w-full h-full rounded-2xl overflow-hidden relative group">
                <img 
                  src="/avatar.png" 
                  alt={portfolioData.personalInfo.name} 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 grayscale-[0.5] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                
                {/* Floating Elements */}
                <div className="absolute top-10 left-10 p-4 glass rounded-2xl animate-float">
                  <span className="text-primary font-bold">Full Stack</span>
                </div>
                <div className="absolute bottom-20 right-10 p-4 glass rounded-2xl animate-float-delayed">
                  <span className="text-secondary font-bold">.NET/Node</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 3s ease-in-out 1.5s infinite;
        }
      `}</style>
    </section>
  );
};
