import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Check,
  Copy,
  FileDown,
  Github,
  Globe,
  Linkedin,
  Mail,
} from 'lucide-react';
import { PROFILE } from '../data/portfolio';
import { MagneticButton } from './ui/MagneticButton';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.emailPlaceholder);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback ignored if clipboard permission unavailable
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative bg-[#F5F5F7]/70 pt-24 pb-16 sm:pt-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="surface-card relative overflow-hidden rounded-[2rem] p-8 sm:p-12 lg:p-16"
        >
          {/* Soft studio ambient glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-28 left-1/2 h-72 w-[560px] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#2563EB]/[0.08] to-[#7C3AED]/[0.08] blur-[100px]"
          />

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-[#F5F5F7] px-3.5 py-1.5 text-xs font-medium text-[#3A3F4B]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
              <span className="font-mono uppercase tracking-[0.14em] text-[11px]">
                Open to Internships &amp; Collaborations
              </span>
            </div>

            <h2
              id="contact-heading"
              className="text-3xl font-semibold leading-[1.08] tracking-display text-[#111318] sm:text-5xl"
            >
              Have an Interesting Idea?
              <span className="text-gradient-accent mt-1 block">Let&apos;s Build Something.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[#5C6370] sm:text-[17px]">
              Whether you&apos;re hiring for AI/ML engineering or software development internships,
              exploring research collaboration, or building an ambitious product—I&apos;d love to
              connect.
            </p>

            {/* Primary Email CTA + Copy */}
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <MagneticButton
                href={`mailto:${PROFILE.emailPlaceholder}`}
                className="inline-flex items-center gap-2 rounded-full bg-[#111318] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_28px_-10px_rgba(17,19,24,0.45)] transition-all hover:bg-[#272B35]"
              >
                <Mail className="h-4 w-4" />
                Email Me
                <ArrowUpRight className="h-4 w-4" />
              </MagneticButton>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 rounded-full border border-black/[0.12] bg-[#F5F5F7] px-5 py-3.5 font-mono text-xs font-medium text-[#111318] transition-all hover:border-black/[0.24] hover:bg-white"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-[#2563EB]" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5 text-[#5C6370]" />
                    {PROFILE.emailPlaceholder}
                  </>
                )}
              </button>

              <MagneticButton
                href={PROFILE.resumePath}
                download="Santosh_Gadale_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-black/[0.12] bg-white px-5 py-3.5 text-sm font-medium text-[#111318] transition-all hover:border-black/[0.24] hover:bg-[#F5F5F7]"
              >
                <FileDown className="h-4 w-4 text-[#2563EB]" />
                Download Resume
              </MagneticButton>
            </div>

            {/* Direct Profile Cards */}
            <div className="mt-10 grid gap-3 border-t border-black/[0.08] pt-8 sm:grid-cols-3">
              <a
                href={PROFILE.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-black/[0.08] bg-[#F5F5F7] px-4 py-3.5 text-left transition-all hover:border-[#2563EB]/30 hover:bg-white"
              >
                <div className="flex items-center gap-3">
                  <Linkedin className="h-4 w-4 text-[#2563EB]" />
                  <div>
                    <p className="text-xs font-semibold text-[#111318]">LinkedIn</p>
                    <p className="font-mono text-[11px] text-[#5C6370]">/in/santoshgadale</p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-[#5C6370] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#111318]" />
              </a>

              <a
                href={PROFILE.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-black/[0.08] bg-[#F5F5F7] px-4 py-3.5 text-left transition-all hover:border-black/[0.2] hover:bg-white"
              >
                <div className="flex items-center gap-3">
                  <Github className="h-4 w-4 text-[#111318]" />
                  <div>
                    <p className="text-xs font-semibold text-[#111318]">GitHub</p>
                    <p className="font-mono text-[11px] text-[#5C6370]">@Santoshgadale005</p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-[#5C6370] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#111318]" />
              </a>

              <a
                href={PROFILE.links.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-black/[0.08] bg-[#F5F5F7] px-4 py-3.5 text-left transition-all hover:border-[#6D28D9]/30 hover:bg-white"
              >
                <div className="flex items-center gap-3">
                  <Globe className="h-4 w-4 text-[#6D28D9]" />
                  <div>
                    <p className="text-xs font-semibold text-[#111318]">Portfolio</p>
                    <p className="font-mono text-[11px] text-[#5C6370]">github.io/portfolio</p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-[#5C6370] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#111318]" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Minimal Footer */}
        <footer className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-black/[0.08] pt-8 text-xs text-[#5C6370] sm:flex-row">
          <div className="flex items-center gap-2.5">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#111318] font-mono text-[10px] font-semibold text-white">
              {PROFILE.initials}
            </span>
            <span>
              <strong className="font-semibold text-[#111318]">{PROFILE.name}</strong> —{' '}
              <span>{PROFILE.identity}</span>
            </span>
          </div>
          <p className="font-mono text-[11px] text-[#5C6370]">
            Bengaluru, India · B.Tech CS (AI &amp; ML), RV University
          </p>
        </footer>
      </div>
    </section>
  );
};
