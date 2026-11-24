import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
}

export const AmbientBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let animationId = 0;
    let width = window.innerWidth;
    let height = Math.min(window.innerHeight * 1.15, 980);
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const pointer = { x: -9999, y: -9999 };

    const resize = () => {
      width = window.innerWidth;
      height = Math.min(window.innerHeight * 1.15, 980);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();

    const count = width < 768 ? 20 : 38;
    const particles: Particle[] = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      radius: Math.random() * 1.3 + 0.7,
      alpha: Math.random() * 0.22 + 0.1,
    }));

    const onPointerMove = (e: PointerEvent) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY + window.scrollY;
    };
    const onPointerLeave = () => {
      pointer.x = -9999;
      pointer.y = -9999;
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;
        }

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(37, 99, 235, ${(1 - dist / 130) * 0.08})`;
            ctx.lineWidth = 0.7;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }

        const md = Math.hypot(p.x - pointer.x, p.y - pointer.y);
        if (md < 170) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(17, 19, 24, ${(1 - md / 170) * 0.15})`;
          ctx.lineWidth = 0.8;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(pointer.x, pointer.y);
          ctx.stroke();
        }

        ctx.beginPath();
        ctx.fillStyle = `rgba(17, 19, 24, ${p.alpha})`;
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!prefersReducedMotion) {
        animationId = window.requestAnimationFrame(draw);
      }
    };

    draw();

    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerleave', onPointerLeave);

    return () => {
      window.cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerleave', onPointerLeave);
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Subtle architectural grid with top radial mask */}
      <div
        className="absolute inset-0 bg-grid-pattern opacity-[0.65]"
        style={{
          maskImage:
            'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.25) 55%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.25) 55%, transparent 100%)',
        }}
      />

      {/* Soft studio-white airy lighting gradients */}
      <div className="absolute -top-44 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-[#2563EB]/[0.06] blur-[130px]" />
      <div className="absolute -top-24 right-[-10%] h-[420px] w-[420px] rounded-full bg-[#7C3AED]/[0.05] blur-[120px]" />
      <div className="absolute top-[55%] left-[-12%] h-[380px] w-[380px] rounded-full bg-[#2563EB]/[0.035] blur-[130px]" />

      {/* Interactive micro-node mesh in hero area */}
      <canvas ref={canvasRef} className="absolute top-0 left-0 opacity-70" />
    </div>
  );
};
