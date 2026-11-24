import React from 'react';
import { motion } from 'framer-motion';
import { Award, Cpu, GraduationCap, Trophy } from 'lucide-react';
import { ABOUT_CONTENT } from '../data/portfolio';
import { SectionHeader } from './ui/SectionHeader';
import { SpotlightCard } from './ui/SpotlightCard';

const ICONS = [GraduationCap, Award, Cpu, Trophy];

export const About: React.FC = () => {
  return (
    <section id="about" aria-labelledby="about-heading" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          id="about-heading"
          eyebrow="About"
          title="Engineering at the intersection of intelligence, systems, and real-world execution."
        />

        <div className="grid gap-6 lg:grid-cols-12">
          {/* Narrative Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <SpotlightCard className="h-full p-7 sm:p-9">
              <div className="mb-6 flex items-center justify-between border-b border-black/[0.07] pb-4">
                <span className="font-mono text-xs uppercase tracking-[0.14em] text-[#5C6370]">
                  Overview
                </span>
                <span className="font-mono text-xs font-medium text-[#2563EB]">
                  AI/ML · Systems · Analytics
                </span>
              </div>

              <div className="space-y-5 text-[15px] leading-[1.8] text-[#4A5160] sm:text-base">
                {ABOUT_CONTENT.paragraphs.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className={idx === 0 ? 'text-lg font-semibold text-[#111318]' : ''}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Focus Domains Footer */}
              <div className="mt-8 border-t border-black/[0.07] pt-6">
                <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.14em] text-[#5C6370]">
                  Core Focus Areas
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Computer Vision Systems',
                    'Transformer Optimization',
                    'Full-Stack AI Applications',
                    'Data & Predictive Analytics',
                    'Sports Tech & Leadership',
                  ].map((area) => (
                    <span
                      key={area}
                      className="rounded-full border border-black/[0.08] bg-[#F5F5F7] px-3.5 py-1.5 text-xs font-medium text-[#1D1D1F]"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Structured Credential Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            {ABOUT_CONTENT.highlights.map((item, idx) => {
              const Icon = ICONS[idx % ICONS.length];
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.07,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <SpotlightCard
                    className="p-5"
                    spotlightColor={
                      idx === 1 ? 'rgba(124, 58, 237, 0.075)' : 'rgba(37, 99, 235, 0.065)'
                    }
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-black/[0.07] bg-[#F5F5F7] text-[#111318]">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#5C6370]">
                          {item.label}
                        </span>
                        <h3 className="mt-0.5 text-[15px] font-semibold text-[#111318]">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-xs leading-relaxed text-[#5C6370]">{item.detail}</p>
                      </div>
                    </div>
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
