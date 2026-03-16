"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Star, GitFork, UserPlus } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

const stats = [
  { label: 'Public Repos', value: '40+', icon: <Github size={20} /> },
  { label: 'Total Stars', value: '150+', icon: <Star size={20} /> },
  { label: 'Forks', value: '30+', icon: <GitFork size={20} /> },
  { label: 'Followers', value: '100+', icon: <UserPlus size={20} /> },
];

export const GithubSection = () => {
  return (
    <section className="py-24 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass-card p-12 rounded-[3rem] relative overflow-hidden">
          {/* Decorative background github logo */}
          <Github className="absolute -bottom-10 -right-10 w-64 h-64 text-white/[0.02] -rotate-12" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 text-primary mb-6">
                <Github size={32} />
                <span className="text-xl font-bold font-mono">github.com/Muhammad-Zohaib-Bawani</span>
              </div>
              <h2 className="text-4xl font-bold mb-6">Open Source <span className="text-gray-500 text-3xl font-normal">Contributions</span></h2>
              <p className="text-gray-400 max-w-md mb-8">
                I love contributing to the community and building tools that developers find useful. 
                My GitHub reflects my journey through various technologies and problem domains.
              </p>
              <motion.a
                href={portfolioData.personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-black font-bold rounded-2xl inline-flex items-center gap-2"
              >
                Follow on GitHub <UserPlus size={18} />
              </motion.a>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5, borderColor: 'var(--primary)' }}
                  className="p-6 glass rounded-2xl border border-white/5 transition-all"
                >
                  <div className="text-primary mb-4">{stat.icon}</div>
                  <div className="text-3xl font-black mb-1">{stat.value}</div>
                  <div className="text-gray-500 text-sm font-medium uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Activity Placeholder Wall */}
          <div className="mt-12 pt-12 border-t border-white/5">
            <div className="flex items-center justify-between mb-6">
              <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">Recent Activity</span>
              <span className="text-xs text-gray-600">Generated from GitHub API (Simulated)</span>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {Array.from({ length: 50 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.01 }}
                  className={`w-3 h-3 rounded-sm ${
                    Math.random() > 0.7 ? 'bg-primary' : Math.random() > 0.4 ? 'bg-primary/40' : 'bg-white/5'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
