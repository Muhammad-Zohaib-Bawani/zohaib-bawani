"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { ArrowRight, Download, ChevronDown } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] -z-10 animate-pulse" />
      
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase rounded-full border border-primary/30 text-primary bg-primary/10">
            Available for new projects
          </span>
          
          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight tracking-tighter">
            Building <span className="gradient-text">Scalable</span> <br />
            Production Applications
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-10 leading-relaxed">
            Hi, I&apos;m <span className="text-white font-semibold">{portfolioData.personalInfo.name}</span>. 
            A {portfolioData.personalInfo.title} dedicated to solving complex problems through elegant code.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary text-black font-bold rounded-lg flex items-center gap-2 hover:bg-white transition-colors"
            >
              View My Work <ArrowRight size={18} />
            </motion.a>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg font-bold flex items-center gap-2 transition-colors"
            >
              Download CV <Download size={18} />
            </motion.button>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-gray-500 text-sm">
            <span>Scroll to discover</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown size={20} />
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-grid -z-20 opacity-30" />
    </section>
  );
};
