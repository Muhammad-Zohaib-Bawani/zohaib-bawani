"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { 
  Code2, Layout, Database, Cloud, Settings, CreditCard,
  FileJson, Cpu, Globe, Server
} from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export const Skills = () => {
  const [hoveredIdx, setHoveredIdx] = React.useState<number | null>(null);
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });

  const skillCategories = [
    { title: 'Frontend', icon: <Layout />, skills: portfolioData.techStack.frontend },
    { title: 'Backend', icon: <Server />, skills: portfolioData.techStack.backend },
    { title: 'Languages', icon: <Code2 />, skills: portfolioData.techStack.languages },
    { title: 'Databases', icon: <Database />, skills: portfolioData.techStack.databases },
    { title: 'DevOps & Cloud', icon: <Cloud />, skills: portfolioData.techStack.cloudDevOps },
    { title: 'CMS & Other', icon: <Globe />, skills: portfolioData.techStack.cmsIntegrations },
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, idx: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setHoveredIdx(idx);
  };

  return (
    <section id="skills" className="py-24 bg-foreground/[0.02] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Technical <span className="gradient-text">Excellence</span>
          </motion.h2>
          <p className="text-foreground/60">Mastering the modern technology stack to build the future.</p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              variants={item}
              onMouseMove={(e) => handleMouseMove(e, idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="glass-card p-6 rounded-2xl relative group overflow-hidden cursor-default"
            >
              {/* Magical Glow Effect */}
              {hoveredIdx === idx && (
                <div 
                  className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(var(--primary-rgb), 0.1), transparent 40%)`
                  }}
                />
              )}
              
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="p-3 rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-black group-hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.5)]">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2 relative z-10">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx}
                    className="px-3 py-1 rounded-full bg-white/5 border border-border-custom text-xs text-foreground/70 hover:border-primary/50 hover:text-primary transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
