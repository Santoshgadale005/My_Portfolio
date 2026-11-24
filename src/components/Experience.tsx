import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, BookOpen, CheckCircle2, MapPin } from 'lucide-react';
import { EXPERIENCE_ITEMS } from '../data/portfolio';
import { SectionHeader } from './ui/SectionHeader';
import { SpotlightCard } from './ui/SpotlightCard';

export const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative bg-[#F5F5F7]/70 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          id="experience-heading"
          eyebrow="Experience & Research"
          title="Research Rigor & Applied Industry Analytics"
          description="Combining empirical deep learning research with hands-on data analytics work on real-world business problems."
        />

        <div className="relative pl-6 sm:pl-10">
          {/* Vertical Timeline Rail */}
          <div
            aria-hidden="true"
            className="absolute top-2 bottom-2 left-2 w-px bg-gradient-to-b from-[#6D28D9]/60 via-[#2563EB]/45 to-black/[0.08] sm:left-3"
          />

          <div className="space-y-8">
            {EXPERIENCE_ITEMS.map((item, idx) => {
              const isResearch = item.type === 'Research';
              const Icon = isResearch ? BookOpen : BarChart3;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="relative"
                >
                  {/* Timeline Node */}
                  <span
                    aria-hidden="true"
                    className={`absolute -left-[22px] top-7 flex h-4 w-4 items-center justify-center rounded-full border bg-white sm:-left-[34px] ${
                      isResearch ? 'border-[#6D28D9]' : 'border-[#2563EB]'
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        isResearch ? 'bg-[#6D28D9]' : 'bg-[#2563EB]'
                      }`}
                    />
                  </span>

                  <SpotlightCard
                    as="article"
                    className="p-6 sm:p-8"
                    spotlightColor={
                      isResearch ? 'rgba(124, 58, 237, 0.07)' : 'rgba(37, 99, 235, 0.06)'
                    }
                  >
                    <div className="flex flex-col justify-between gap-4 border-b border-black/[0.07] pb-5 sm:flex-row sm:items-start">
                      <div className="flex items-start gap-3.5">
                        <div
                          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border bg-[#F5F5F7] ${
                            isResearch
                              ? 'border-[#6D28D9]/20 text-[#6D28D9]'
                              : 'border-[#2563EB]/20 text-[#2563EB]'
                          }`}
                        >
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <span
                            className={`inline-block rounded-full border px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] ${
                              isResearch
                                ? 'border-[#6D28D9]/20 bg-[#6D28D9]/[0.07] text-[#5B21B6]'
                                : 'border-[#2563EB]/20 bg-[#2563EB]/[0.07] text-[#1D4ED8]'
                            }`}
                          >
                            {item.type} Experience
                          </span>
                          <h3 className="mt-2 text-xl font-semibold tracking-tight text-[#111318] sm:text-2xl">
                            {item.organization}
                          </h3>
                          <p className="mt-0.5 text-sm font-medium text-[#5C6370]">
                            {item.roleOrVenue}
                          </p>
                        </div>
                      </div>

                      <div className="inline-flex items-center gap-1.5 self-start rounded-full border border-black/[0.08] bg-[#F5F5F7] px-3 py-1.5 font-mono text-xs text-[#4A5160]">
                        <MapPin className="h-3.5 w-3.5 text-[#111318]" />
                        {item.locationOrContext}
                      </div>
                    </div>

                    <p className="mt-5 text-sm leading-relaxed text-[#4A5160] sm:text-[15px]">
                      {item.summary}
                    </p>

                    <ul className="mt-5 space-y-2.5">
                      {item.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-2.5 text-sm leading-relaxed text-[#1D1D1F]"
                        >
                          <CheckCircle2
                            className={`mt-1 h-4 w-4 shrink-0 ${
                              isResearch ? 'text-[#6D28D9]' : 'text-[#2563EB]'
                            }`}
                          />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-black/[0.08] bg-[#F5F5F7] px-2.5 py-1 font-mono text-[11px] text-[#3A3F4B]"
                        >
                          {tag}
                        </span>
                      ))}
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
