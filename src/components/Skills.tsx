import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Code2, Database, Layers, Wrench } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolio';
import { SectionHeader } from './ui/SectionHeader';
import { SpotlightCard } from './ui/SpotlightCard';

const CATEGORY_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  'ai-ml': Brain,
  programming: Code2,
  frameworks: Layers,
  databases: Database,
  tools: Wrench,
};

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const visibleCategories =
    selectedCategory === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((cat) => cat.id === selectedCategory);

  return (
    <section id="skills" aria-labelledby="skills-heading" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeader
            id="skills-heading"
            eyebrow="Technical Capabilities"
            title="Tools & Systems Architecture"
            description="A focused engineering toolkit spanning machine learning research, computer vision pipelines, full-stack web applications, and data analytics."
          />

          {/* Interactive Cluster Filter */}
          <div className="mb-12 flex flex-wrap gap-1.5 lg:mb-16">
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className={`rounded-full border px-3.5 py-1.5 font-mono text-xs transition-all ${
                selectedCategory === 'all'
                  ? 'border-[#111318] bg-[#111318] text-white'
                  : 'border-black/[0.09] bg-white text-[#5C6370] hover:border-black/[0.2] hover:text-[#111318]'
              }`}
            >
              All
            </button>
            {SKILL_CATEGORIES.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => setSelectedCategory(category.id)}
                className={`rounded-full border px-3.5 py-1.5 font-mono text-xs transition-all ${
                  selectedCategory === category.id
                    ? 'border-[#111318] bg-[#111318] text-white'
                    : 'border-black/[0.09] bg-white text-[#5C6370] hover:border-black/[0.2] hover:text-[#111318]'
                }`}
              >
                {category.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Categorized Skill Clusters */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visibleCategories.map((category, idx) => {
            const Icon = CATEGORY_ICONS[category.id] || Code2;

            return (
              <motion.div
                key={category.id}
                layout
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className={
                  selectedCategory === 'all' && category.id === 'frameworks'
                    ? 'md:col-span-2 lg:col-span-2'
                    : ''
                }
              >
                <SpotlightCard
                  className="flex h-full flex-col justify-between p-6"
                  spotlightColor={
                    category.id === 'ai-ml'
                      ? 'rgba(124, 58, 237, 0.07)'
                      : 'rgba(37, 99, 235, 0.06)'
                  }
                >
                  <div>
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/[0.07] bg-[#F5F5F7] text-[#111318]">
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="font-mono text-[11px] text-[#5C6370]">
                        {category.skills.length} items
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold tracking-tight text-[#111318]">
                      {category.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-[#5C6370]">
                      {category.subtitle}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center gap-1.5 rounded-full border border-black/[0.08] bg-[#F5F5F7] px-3.5 py-1.5 text-xs font-medium text-[#1D1D1F] transition-colors duration-200 hover:border-black/[0.2] hover:bg-white"
                        >
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${
                              category.id === 'ai-ml' ? 'bg-[#7C3AED]' : 'bg-[#2563EB]'
                            }`}
                          />
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
