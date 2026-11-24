import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  id,
  eyebrow,
  title,
  description,
  align = 'left',
}) => {
  const isCentered = align === 'center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-12 md:mb-16 ${isCentered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}`}
    >
      <div
        className={`mb-4 inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white px-3.5 py-1 text-xs font-medium tracking-wide text-[#5C6370] shadow-[0_1px_2px_rgba(0,0,0,0.03)] ${
          isCentered ? 'justify-center' : ''
        }`}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED]" />
        <span className="font-mono uppercase tracking-[0.14em] text-[11px]">{eyebrow}</span>
      </div>
      <h2
        id={id}
        className="text-3xl font-semibold tracking-heading text-[#111318] sm:text-4xl lg:text-[2.65rem] lg:leading-[1.12]"
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-[#5C6370] sm:text-lg">{description}</p>
      )}
    </motion.div>
  );
};
