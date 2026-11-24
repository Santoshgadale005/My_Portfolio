import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowDownRight,
  Cpu,
  FileDown,
  Github,
  GraduationCap,
  Linkedin,
  MapPin,
  Sparkles,
} from 'lucide-react';
import { PROFILE } from '../data/portfolio';
import { MagneticButton } from './ui/MagneticButton';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const Hero: React.FC = () => {
  const hasProfileImage = Boolean(PROFILE.profileImagePath);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative flex min-h-[92vh] items-center pt-28 pb-20 sm:pt-32 sm:pb-28"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Core Narrative */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7"
          >
            {/* Availability & Location Badges */}
            <motion.div variants={itemVariants} className="mb-6 flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#2563EB]/20 bg-[#2563EB]/[0.06] px-3.5 py-1.5 text-xs font-medium text-[#1D4ED8]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2563EB] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#2563EB]" />
                </span>
                {PROFILE.availability}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-black/[0.08] bg-white px-3 py-1.5 text-xs font-medium text-[#5C6370] shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
                <MapPin className="h-3.5 w-3.5 text-[#111318]" />
                {PROFILE.location}
              </span>
            </motion.div>

            {/* Brand Identity Line */}
            <motion.p
              variants={itemVariants}
              className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-[#5C6370]"
            >
              {PROFILE.name} <span className="mx-2 text-black/20">—</span>{' '}
              <span className="font-semibold text-[#111318]">{PROFILE.identity}</span>
            </motion.p>

            {/* Primary Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl font-semibold leading-[1.05] tracking-display text-[#111318] sm:text-5xl lg:text-[3.85rem]"
            >
              <span className="text-gradient-hero block">{PROFILE.heroHeadingLine1}</span>
              <span className="mt-1 block text-[#111318]">
                Creating <span className="text-gradient-accent">Real-World</span> Impact.
              </span>
            </motion.h1>

            {/* Professional Positioning */}
            <motion.div
              variants={itemVariants}
              className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-sm font-medium text-[#3A3F4B] sm:text-[15px]"
            >
              <span>AI/ML Engineer</span>
              <span className="text-black/20">/</span>
              <span>Software Developer</span>
              <span className="text-black/20">/</span>
              <span>Data Analytics Enthusiast</span>
            </motion.div>

            {/* Concise Introduction */}
            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-xl text-base leading-relaxed text-[#5C6370] sm:text-[17px] sm:leading-[1.7]"
            >
              {PROFILE.heroIntro}
            </motion.p>

            {/* Education Metadata */}
            <motion.div
              variants={itemVariants}
              className="mt-6 inline-flex items-center gap-2.5 rounded-xl border border-black/[0.08] bg-white px-4 py-2.5 text-xs font-medium text-[#3A3F4B] shadow-[0_1px_2px_rgba(0,0,0,0.03)] sm:text-[13px]"
            >
              <GraduationCap className="h-4 w-4 shrink-0 text-[#2563EB]" />
              <span>{PROFILE.education}</span>
            </motion.div>

            {/* CTA Buttons & Social Links (Apple/Nike crisp pill buttons) */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap items-center gap-3.5"
            >
              <MagneticButton
                href="#projects"
                onClick={() => {
                  const el = document.getElementById('projects');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group inline-flex items-center gap-2 rounded-full bg-[#111318] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_28px_-10px_rgba(17,19,24,0.45)] transition-all duration-200 hover:bg-[#272B35]"
              >
                Explore My Work
                <ArrowDownRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </MagneticButton>

              <MagneticButton
                href={PROFILE.resumePath}
                download="Santosh_Gadale_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-black/[0.12] bg-white px-6 py-3.5 text-sm font-medium text-[#111318] shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-200 hover:border-black/[0.25] hover:bg-[#F5F5F7]"
              >
                <FileDown className="h-4 w-4 text-[#2563EB]" />
                Download Resume
              </MagneticButton>

              <div className="flex items-center gap-2 pl-1">
                <a
                  href={PROFILE.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/[0.1] bg-white text-[#5C6370] shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition-all duration-200 hover:border-black/[0.25] hover:bg-[#F5F5F7] hover:text-[#111318]"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href={PROFILE.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/[0.1] bg-white text-[#5C6370] shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition-all duration-200 hover:border-[#2563EB]/40 hover:bg-[#2563EB]/[0.06] hover:text-[#2563EB]"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Apple/Nike Editorial Portrait Card */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto max-w-md lg:ml-auto lg:mr-0">
              {/* Soft studio shadow halo */}
              <div
                aria-hidden="true"
                className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-[#2563EB]/[0.08] via-transparent to-[#7C3AED]/[0.08] blur-2xl"
              />

              <div className="surface-card relative overflow-hidden rounded-[1.75rem] p-3.5 sm:p-4">
                {/* Top Minimal Bar */}
                <div className="mb-3 flex items-center justify-between px-1.5">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#111318]" />
                    <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#5C6370]">
                      Profile · AI / ML
                    </span>
                  </div>
                  <span className="font-mono text-[11px] text-[#5C6370]">RVU · 2023–2027</span>
                </div>

                {/* Editorial Portrait Frame */}
                <div className="group relative aspect-[4/4.6] w-full overflow-hidden rounded-[1.25rem] border border-black/[0.06] bg-[#F5F5F7]">
                  {hasProfileImage && !imageError && (
                    <>
                      <img
                        src={PROFILE.profileImagePath}
                        alt="Santosh Gadale"
                        onLoad={() => setImageLoaded(true)}
                        onError={() => setImageError(true)}
                        className={`h-full w-full object-cover object-[28%_84%] transition-all duration-700 group-hover:scale-[1.03] ${
                          imageLoaded ? 'opacity-100' : 'opacity-0'
                        }`}
                      />
                      {/* Subtle editorial bottom vignette for crisp legibility */}
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/75 via-black/30 to-transparent"
                      />
                      <div className="absolute inset-x-4 bottom-4 flex items-end justify-between text-white">
                        <div>
                          <p className="text-sm font-semibold tracking-tight">{PROFILE.name}</p>
                          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/80">
                            Bengaluru · AI &amp; ML
                          </p>
                        </div>
                        <span className="rounded-full border border-white/25 bg-white/15 px-2.5 py-1 font-mono text-[10px] backdrop-blur-md">
                          Builder
                        </span>
                      </div>
                    </>
                  )}

                  {(!hasProfileImage || !imageLoaded || imageError) && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#111318] text-2xl font-semibold text-white">
                        {PROFILE.initials}
                      </div>
                      <p className="mt-4 text-sm font-semibold text-[#111318]">{PROFILE.name}</p>
                    </div>
                  )}
                </div>

                {/* Bottom Capability Strip */}
                <div className="mt-3.5 grid grid-cols-2 gap-2.5">
                  <div className="rounded-xl border border-black/[0.06] bg-[#F5F5F7] p-3">
                    <div className="flex items-center gap-1.5 text-[11px] font-medium text-[#5C6370]">
                      <Cpu className="h-3.5 w-3.5 text-[#2563EB]" />
                      Flagship Build
                    </div>
                    <p className="mt-1 text-xs font-semibold text-[#111318]">
                      SmashIQ · Vision AI
                    </p>
                  </div>
                  <div className="rounded-xl border border-black/[0.06] bg-[#F5F5F7] p-3">
                    <div className="flex items-center gap-1.5 text-[11px] font-medium text-[#5C6370]">
                      <Sparkles className="h-3.5 w-3.5 text-[#7C3AED]" />
                      Research Venue
                    </div>
                    <p className="mt-1 text-xs font-semibold text-[#111318]">
                      IEEE TENSYMP 2026
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
