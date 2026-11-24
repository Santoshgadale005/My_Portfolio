import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Award, CheckCircle2, Github, Sparkles } from 'lucide-react';
import { PROJECTS, ProjectItem } from '../data/portfolio';
import {
  FitBiteVisual,
  FitMotionVisual,
  SmashIQVisual,
  TransformerResearchVisual,
} from './ProjectVisuals';
import { SectionHeader } from './ui/SectionHeader';
import { SpotlightCard } from './ui/SpotlightCard';

const ProjectLinks: React.FC<{ project: ProjectItem }> = ({ project }) => {
  if (!project.liveDemoUrl && !project.githubUrl) return null;

  return (
    <div className="mt-7 flex flex-wrap items-center gap-3">
      {project.liveDemoUrl && (
        <a
          href={project.liveDemoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1.5 rounded-full bg-[#111318] px-5 py-2.5 text-xs font-semibold text-white transition-all hover:bg-[#272B35] sm:text-[13px]"
        >
          Live Demo
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      )}
      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full border border-black/[0.12] bg-white px-5 py-2.5 text-xs font-medium text-[#111318] transition-all hover:border-black/[0.25] hover:bg-[#F5F5F7] sm:text-[13px]"
        >
          <Github className="h-3.5 w-3.5" />
          Source Code
        </a>
      )}
    </div>
  );
};

export const Projects: React.FC = () => {
  const smashIQ = PROJECTS.find((p) => p.id === 'smashiq')!;
  const transformerResearch = PROJECTS.find((p) => p.id === 'transformer-compression')!;
  const secondaryProjects = PROJECTS.filter(
    (p) => p.id !== 'smashiq' && p.id !== 'transformer-compression'
  );

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative bg-[#F5F5F7]/70 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          id="projects-heading"
          eyebrow="Featured Work"
          title="Selected Systems & Research"
          description="Production-minded AI applications, computer vision pipelines, and empirical deep learning research built from concept to deployment."
        />

        <div className="space-y-8">
          {/* FLAGSHIP PROJECT 01: SmashIQ */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <SpotlightCard
              as="article"
              className="p-6 sm:p-8 lg:p-10"
              spotlightColor="rgba(37, 99, 235, 0.065)"
            >
              <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10">
                <div className="lg:col-span-6">
                  <div className="mb-4 flex flex-wrap items-center gap-2.5">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#111318] px-3 py-1 font-mono text-[11px] font-medium text-white">
                      <Sparkles className="h-3 w-3 text-[#60A5FA]" />
                      {smashIQ.badge}
                    </span>
                    <span className="font-mono text-xs text-[#5C6370]">
                      PROJECT {smashIQ.number} · {smashIQ.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-semibold tracking-heading text-[#111318] sm:text-3xl">
                    {smashIQ.name}
                  </h3>
                  <p className="mt-1.5 text-sm font-medium text-[#2563EB] sm:text-base">
                    {smashIQ.tagline}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-[#4A5160] sm:text-[15px]">
                    {smashIQ.description}
                  </p>

                  {smashIQ.storyNote && (
                    <div className="mt-4 rounded-xl border border-[#2563EB]/15 bg-[#2563EB]/[0.05] px-4 py-3 text-xs leading-relaxed text-[#1E3A8A]">
                      {smashIQ.storyNote}
                    </div>
                  )}

                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {smashIQ.capabilities.map((cap) => (
                      <li
                        key={cap}
                        className="flex items-start gap-2 text-xs leading-relaxed text-[#3A3F4B]"
                      >
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#2563EB]" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {smashIQ.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-black/[0.08] bg-[#F5F5F7] px-2.5 py-1 font-mono text-[11px] text-[#3A3F4B]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ProjectLinks project={smashIQ} />
                </div>

                <div className="lg:col-span-6">
                  <SmashIQVisual />
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* PROMINENT RESEARCH PROJECT 04: Transformer Model Compression */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <SpotlightCard
              as="article"
              className="p-6 sm:p-8 lg:p-10"
              spotlightColor="rgba(124, 58, 237, 0.065)"
            >
              <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10">
                <div className="order-2 lg:order-1 lg:col-span-6">
                  <TransformerResearchVisual />
                </div>

                <div className="order-1 lg:order-2 lg:col-span-6">
                  <div className="mb-4 flex flex-wrap items-center gap-2.5">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#6D28D9]/20 bg-[#6D28D9]/[0.08] px-3 py-1 font-mono text-[11px] font-semibold text-[#5B21B6]">
                      <Award className="h-3 w-3 text-[#6D28D9]" />
                      {transformerResearch.badge}
                    </span>
                    <span className="font-mono text-xs text-[#5C6370]">
                      PROJECT {transformerResearch.number} · {transformerResearch.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-semibold tracking-heading text-[#111318] sm:text-3xl">
                    {transformerResearch.name}
                  </h3>
                  <p className="mt-2 text-sm font-medium leading-snug text-[#5B21B6] sm:text-[15px]">
                    {transformerResearch.tagline}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-[#4A5160] sm:text-[15px]">
                    {transformerResearch.description}
                  </p>

                  {transformerResearch.achievement && (
                    <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-[#6D28D9]/20 bg-[#6D28D9]/[0.05] px-4 py-3 text-xs leading-relaxed text-[#4C1D95]">
                      <Award className="mt-0.5 h-4 w-4 shrink-0 text-[#6D28D9]" />
                      <span>{transformerResearch.achievement}</span>
                    </div>
                  )}

                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {transformerResearch.capabilities.map((cap) => (
                      <li
                        key={cap}
                        className="flex items-start gap-2 text-xs leading-relaxed text-[#3A3F4B]"
                      >
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#6D28D9]" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {transformerResearch.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-black/[0.08] bg-[#F5F5F7] px-2.5 py-1 font-mono text-[11px] text-[#3A3F4B]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* SECONDARY PROJECTS GRID: FitMotion AI & FitBite */}
          <div className="grid gap-6 md:grid-cols-2">
            {secondaryProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <SpotlightCard
                  as="article"
                  className="flex h-full flex-col justify-between p-6 sm:p-7"
                >
                  <div>
                    <div className="mb-4 flex items-center justify-between">
                      <span className="font-mono text-xs text-[#5C6370]">
                        PROJECT {project.number}
                      </span>
                      <span className="rounded-full border border-black/[0.08] bg-[#F5F5F7] px-2.5 py-0.5 font-mono text-[10px] text-[#4A5160]">
                        {project.category}
                      </span>
                    </div>

                    <div className="mb-6">
                      {project.id === 'fitmotion-ai' ? <FitMotionVisual /> : <FitBiteVisual />}
                    </div>

                    <h3 className="text-xl font-semibold tracking-heading text-[#111318] sm:text-2xl">
                      {project.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-[#2563EB]">{project.tagline}</p>

                    <p className="mt-3 text-sm leading-relaxed text-[#5C6370]">
                      {project.description}
                    </p>

                    <ul className="mt-4 space-y-1.5">
                      {project.capabilities.map((cap) => (
                        <li key={cap} className="flex items-start gap-2 text-xs text-[#3A3F4B]">
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#2563EB]" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 border-t border-black/[0.07] pt-5">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-black/[0.08] bg-[#F5F5F7] px-2.5 py-1 font-mono text-[11px] text-[#3A3F4B]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <ProjectLinks project={project} />
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
