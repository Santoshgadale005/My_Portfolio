import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { ArrowUpRight, FileDown, Menu, X } from 'lucide-react';
import { NAV_ITEMS, PROFILE } from '../data/portfolio';

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.id);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: '-28% 0px -55% 0px',
        threshold: [0.05, 0.25, 0.5],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id: string) => {
    setMobileOpen(false);
    setActiveSection(id);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Scroll progress hairline */}
      <motion.div
        aria-hidden="true"
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 z-50 h-[2px] origin-left bg-gradient-to-r from-[#111318] via-[#2563EB] to-[#7C3AED]"
      />

      <header className="fixed top-0 left-0 right-0 z-40 px-4 pt-4 sm:px-6">
        <div
          className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 ${
            scrolled
              ? 'glass-nav'
              : 'border border-black/[0.06] bg-white/75 backdrop-blur-md'
          }`}
        >
          {/* Brand Monogram */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
            className="group flex items-center gap-2.5 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#111318]"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#111318] font-mono text-xs font-semibold text-white transition-transform duration-200 group-hover:scale-105">
              {PROFILE.initials}
            </span>
            <span className="hidden text-sm font-semibold tracking-tight text-[#111318] sm:inline">
              {PROFILE.name}
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav aria-label="Primary navigation" className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                  className={`relative rounded-lg px-3 py-1.5 text-[13px] font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#111318] ${
                    isActive ? 'text-[#111318]' : 'text-[#5C6370] hover:text-[#111318]'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavPill"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      className="absolute inset-0 -z-10 rounded-lg border border-black/[0.07] bg-[#F5F5F7]"
                    />
                  )}
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="hidden items-center gap-2 lg:flex">
            <a
              href={PROFILE.resumePath}
              download="Santosh_Gadale_Resume.pdf"
              className="inline-flex items-center gap-1.5 rounded-full border border-black/[0.1] bg-white px-3.5 py-1.5 text-xs font-medium text-[#111318] transition-all hover:border-black/[0.22] hover:bg-[#F5F5F7]"
            >
              <FileDown className="h-3.5 w-3.5 text-[#2563EB]" />
              Resume
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('contact');
              }}
              className="inline-flex items-center gap-1 rounded-full bg-[#111318] px-4 py-1.5 text-xs font-semibold text-white transition-all hover:bg-[#272B35]"
            >
              Connect
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-black/[0.08] bg-white text-[#111318] transition-colors hover:bg-[#F5F5F7] lg:hidden"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="glass-nav mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl p-3 lg:hidden"
            >
              <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
                {NAV_ITEMS.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.id);
                      }}
                      className={`flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-[#F5F5F7] text-[#111318]'
                          : 'text-[#5C6370] hover:bg-[#F5F5F7]/70 hover:text-[#111318]'
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && <span className="h-1.5 w-1.5 rounded-full bg-[#111318]" />}
                    </a>
                  );
                })}
                <div className="mt-2 grid grid-cols-2 gap-2 border-t border-black/[0.08] pt-3">
                  <a
                    href={PROFILE.resumePath}
                    download="Santosh_Gadale_Resume.pdf"
                    onClick={() => setMobileOpen(false)}
                    className="inline-flex items-center justify-center gap-1.5 rounded-full border border-black/[0.1] bg-white px-3 py-2.5 text-xs font-medium text-[#111318]"
                  >
                    <FileDown className="h-3.5 w-3.5 text-[#2563EB]" />
                    Resume
                  </a>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('contact');
                    }}
                    className="inline-flex items-center justify-center gap-1 rounded-full bg-[#111318] px-3 py-2.5 text-xs font-semibold text-white"
                  >
                    Get in Touch
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
