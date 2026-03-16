"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { Briefcase, Calendar } from 'lucide-react';

export const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Journey</h2>
          <p className="text-gray-400">Professional career and educational milestones.</p>
        </div>

        <div className="relative border-l border-white/10 ml-4 md:ml-0 md:left-1/2">
          {portfolioData.workExperience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`relative mb-12 md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:left-1/2 md:text-left'
              }`}
            >
              {/* Dot on line */}
              <div className="absolute top-2 w-4 h-4 rounded-full bg-primary -left-2 md:left-auto md:right-[-9px] index % 2 !== 0 && md:right-auto md:left-[-9px] shadow-[0_0_10px_rgba(0,242,255,0.8)]" 
                style={index % 2 !== 0 ? { left: '-9px' } : { right: '-9px' }}
              />
              
              <div className="glass-card p-6 rounded-2xl relative z-10">
                <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'} mb-4`}>
                  <div className="flex items-center gap-2 text-primary text-sm font-semibold mb-2">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                  <h3 className="text-xl font-bold">{exp.role}</h3>
                  <div className="text-gray-400 font-medium">{exp.company}</div>
                </div>
                
                <ul className={`space-y-2 text-sm text-gray-500 list-none ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  {exp.points.map((point, pIdx) => (
                    <li key={pIdx} className="relative transition-colors hover:text-white">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Education Part */}
        <div className="mt-20">
          <div className="flex items-center gap-4 justify-center mb-10">
            <span className="w-12 h-[1px] bg-white/10"></span>
            <h3 className="text-2xl font-bold">Education</h3>
            <span className="w-12 h-[1px] bg-white/10"></span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolioData.education.map((edu, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="glass-card p-6 rounded-xl text-center"
              >
                <div className="w-12 h-12 rounded-full bg-secondary/10 text-secondary flex items-center justify-center mx-auto mb-4">
                  <Briefcase size={20} />
                </div>
                <h4 className="font-bold text-sm mb-2">{edu.degree}</h4>
                <p className="text-xs text-gray-400">{edu.institution}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
