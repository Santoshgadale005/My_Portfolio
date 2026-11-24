import React from 'react';
import { motion } from 'framer-motion';
import { Award, Compass, Flag, Medal, Trophy } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolio';
import { SectionHeader } from './ui/SectionHeader';
import { SpotlightCard } from './ui/SpotlightCard';

const ACHIEVEMENT_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  'ieee-selection': Award,
  'state-badminton': Trophy,
  'yonex-sunrise': Medal,
  'tournament-org': Flag,
  offroading: Compass,
};

export const Achievements: React.FC = () => {
  return (
    <section
      id="achievements"
      aria-labelledby="achievements-heading"
      className="relative py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          id="achievements-heading"
          eyebrow="Achievements & Beyond Technology"
          title="Discipline on the Court. Leadership in the Field."
          description="Competitive athletics, international research recognition, and hands-on event operations that shape how I lead, collaborate, and build under pressure."
        />

        <div className="grid gap-5 md:grid-cols-6">
          {ACHIEVEMENTS.map((item, idx) => {
            const Icon = ACHIEVEMENT_ICONS[item.id] || Award;
            const colSpan = idx < 2 ? 'md:col-span-3' : 'md:col-span-2';
            const spotlight =
              item.accent === 'violet'
                ? 'rgba(124, 58, 237, 0.07)'
                : item.accent === 'blue'
                  ? 'rgba(37, 99, 235, 0.065)'
                  : 'rgba(17, 19, 24, 0.045)';

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className={colSpan}
              >
                <SpotlightCard
                  className="flex h-full flex-col justify-between p-6"
                  spotlightColor={spotlight}
                >
                  <div>
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-xl border bg-[#F5F5F7] ${
                          item.accent === 'violet'
                            ? 'border-[#6D28D9]/20 text-[#6D28D9]'
                            : item.accent === 'blue'
                              ? 'border-[#2563EB]/20 text-[#2563EB]'
                              : 'border-black/[0.08] text-[#111318]'
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="rounded-full border border-black/[0.08] bg-[#F5F5F7] px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-[#5C6370]">
                        {item.category}
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold tracking-tight text-[#111318]">
                      {item.title}
                    </h3>
                    <p className="mt-1 font-mono text-xs font-medium text-[#2563EB]">
                      {item.subtitle}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-[#5C6370]">
                      {item.description}
                    </p>
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
