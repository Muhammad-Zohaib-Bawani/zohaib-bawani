"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In <span className="gradient-text">Touch</span></h2>
          <p className="text-gray-400">Let&apos;s discuss your next project or just say hi!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <a href={`mailto:${portfolioData.personalInfo.email}`} className="flex items-center gap-4 group">
                  <div className="p-4 glass rounded-2xl text-primary group-hover:bg-primary group-hover:text-black transition-all">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">Email</p>
                    <p className="text-lg group-hover:text-primary transition-colors">{portfolioData.personalInfo.email}</p>
                  </div>
                </a>
                
                <a href={`tel:${portfolioData.personalInfo.phone}`} className="flex items-center gap-4 group">
                  <div className="p-4 glass rounded-2xl text-secondary group-hover:bg-secondary group-hover:text-black transition-all">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">Phone</p>
                    <p className="text-lg group-hover:text-secondary transition-colors">{portfolioData.personalInfo.phone}</p>
                  </div>
                </a>
                
                <div className="flex items-center gap-4 group">
                  <div className="p-4 glass rounded-2xl text-accent group-hover:bg-accent group-hover:text-black transition-all">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">Location</p>
                    <p className="text-lg">Karachi, Pakistan</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 mt-12 pt-12 border-t border-white/5">
                <a href={portfolioData.personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-4 glass rounded-2xl hover:text-primary transition-all">
                  <Github size={24} />
                </a>
                <a href={portfolioData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-4 glass rounded-2xl hover:text-primary transition-all">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form className="glass-card p-8 rounded-3xl space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400 ml-1">Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-6 py-4 glass rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all border-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400 ml-1">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 glass rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all border-none"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 ml-1">Subject</label>
                <input 
                  type="text" 
                  placeholder="Project Inquiry"
                  className="w-full px-6 py-4 glass rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all border-none"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 ml-1">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full px-6 py-4 glass rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all border-none resize-none"
                ></textarea>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-primary text-black font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-white transition-colors"
              >
                Send Message <Send size={18} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
