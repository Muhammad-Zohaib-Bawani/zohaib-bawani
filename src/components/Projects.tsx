"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { ExternalLink, Github, Layers } from 'lucide-react';

export const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured <span className="gradient-text">Work</span></h2>
            <p className="text-gray-400">A collection of systems and applications I&apos;ve built using cutting-edge technologies.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="px-4 py-2 glass rounded-full flex items-center gap-2 text-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span>Available for Freelance</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group glass-card rounded-2xl overflow-hidden flex flex-col h-full"
            >
              {/* Project Image Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-white/5 to-white/0 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Layers size={64} className="text-white/10 group-hover:scale-110 group-hover:text-primary transition-all duration-500" />
                </div>
                
                {/* Tech Stack Floating Tags */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2 transition-transform duration-500 group-hover:translate-x-1">
                  {project.techStack.slice(0, 3).map((tech, tIdx) => (
                    <span key={tIdx} className="px-3 py-1 glass rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-6 flex-1 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between border-t border-white/5 pt-6">
                  <div className="flex items-center gap-4">
                    <a href={project.link} className="p-2 glass hover:bg-white/10 text-gray-400 hover:text-white transition-all rounded-lg">
                      <ExternalLink size={18} />
                    </a>
                    <a href="#" className="p-2 glass hover:bg-white/10 text-gray-400 hover:text-white transition-all rounded-lg">
                      <Github size={18} />
                    </a>
                  </div>
                  <motion.button 
                    whileTap={{ scale: 0.95 }}
                    className="text-sm font-bold text-primary group-hover:underline flex items-center gap-1"
                  >
                    View Details
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <motion.a
            href={portfolioData.personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-8 py-3 glass hover:bg-white/10 rounded-full font-bold transition-all"
          >
            <Github size={20} />
            Explore More on GitHub
          </motion.a>
        </div>
      </div>
    </section>
  );
};
