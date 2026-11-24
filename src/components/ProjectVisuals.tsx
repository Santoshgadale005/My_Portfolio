import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, Cpu, Layers, Radar, Salad, Sparkles } from 'lucide-react';

/**
 * Interactive "Pro Display" dark obsidian tactical court monitor framed inside the light Apple-style card.
 * Lets visitors toggle Computer Vision layers: Full Stack, Pose Estimation, and Footwork Path.
 */
export const SmashIQVisual: React.FC = () => {
  const [layer, setLayer] = useState<'all' | 'pose' | 'footwork'>('all');

  const showPose = layer === 'all' || layer === 'pose';
  const showFootwork = layer === 'all' || layer === 'footwork';

  return (
    <div className="relative flex h-full min-h-[340px] flex-col justify-between overflow-hidden rounded-2xl border border-black/[0.12] bg-[#0B0D12] p-4 shadow-[0_20px_50px_-24px_rgba(17,19,24,0.35)] sm:p-5">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_60%_45%,rgba(100,140,255,0.16),transparent_62%)]"
      />

      {/* Top Telemetry Chrome */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.08] pb-3">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#648CFF]" />
          <span className="font-mono text-[11px] font-medium text-[#D6E1FF]">
            SMASHIQ // VISION PIPELINE
          </span>
        </div>
        <div className="flex items-center gap-1 rounded-lg border border-white/[0.08] bg-[#141720] p-0.5">
          {[
            { id: 'all', label: 'Full Stack' },
            { id: 'pose', label: 'Pose' },
            { id: 'footwork', label: 'Footwork' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setLayer(tab.id as 'all' | 'pose' | 'footwork')}
              className={`rounded-md px-2 py-1 font-mono text-[10px] transition-colors ${
                layer === tab.id
                  ? 'bg-[#648CFF]/25 text-white'
                  : 'text-[#9298A5] hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Court & CV Overlay SVG */}
      <div className="relative z-10 my-4 flex flex-1 items-center justify-center">
        <svg
          viewBox="0 0 460 240"
          className="h-auto w-full max-w-[460px] drop-shadow-[0_12px_30px_rgba(0,0,0,0.65)]"
          role="img"
          aria-label="SmashIQ badminton court tracking, pose estimation, and footwork visualization"
        >
          <defs>
            <linearGradient id="courtSurface" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#141926" />
              <stop offset="100%" stopColor="#0D1019" />
            </linearGradient>
            <linearGradient id="pathGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#648CFF" stopOpacity="0.25" />
              <stop offset="60%" stopColor="#648CFF" />
              <stop offset="100%" stopColor="#9475FF" />
            </linearGradient>
            <radialGradient id="heatZone" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#648CFF" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#648CFF" stopOpacity="0" />
            </radialGradient>
          </defs>

          <rect
            x="24"
            y="22"
            width="412"
            height="196"
            rx="6"
            fill="url(#courtSurface)"
            stroke="rgba(255,255,255,0.22)"
            strokeWidth="1.2"
          />
          <line x1="24" y1="38" x2="436" y2="38" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
          <line
            x1="24"
            y1="202"
            x2="436"
            y2="202"
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="1"
          />
          <line x1="52" y1="22" x2="52" y2="218" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
          <line
            x1="408"
            y1="22"
            x2="408"
            y2="218"
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="1"
          />
          <line
            x1="176"
            y1="22"
            x2="176"
            y2="218"
            stroke="rgba(255,255,255,0.14)"
            strokeWidth="1"
          />
          <line
            x1="284"
            y1="22"
            x2="284"
            y2="218"
            stroke="rgba(255,255,255,0.14)"
            strokeWidth="1"
          />
          <line
            x1="24"
            y1="120"
            x2="176"
            y2="120"
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="1"
          />
          <line
            x1="284"
            y1="120"
            x2="436"
            y2="120"
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="1"
          />
          <line
            x1="230"
            y1="16"
            x2="230"
            y2="224"
            stroke="rgba(100,140,255,0.65)"
            strokeWidth="1.6"
            strokeDasharray="4 3"
          />

          {showFootwork && (
            <g>
              <circle cx="118" cy="118" r="46" fill="url(#heatZone)" />
              <circle cx="342" cy="138" r="38" fill="url(#heatZone)" opacity="0.7" />
              <motion.path
                d="M 76 168 Q 108 134 118 118 T 156 82 Q 134 118 124 148"
                fill="none"
                stroke="url(#pathGrad)"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeDasharray="300"
                initial={{ strokeDashoffset: 300, opacity: 0.4 }}
                whileInView={{ strokeDashoffset: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, ease: 'easeInOut' }}
              />
              {[
                [76, 168],
                [118, 118],
                [156, 82],
                [124, 148],
              ].map(([cx, cy], idx) => (
                <circle
                  key={idx}
                  cx={cx}
                  cy={cy}
                  r="3.2"
                  fill="#0B0D12"
                  stroke="#648CFF"
                  strokeWidth="1.6"
                />
              ))}
            </g>
          )}

          {/* Player 1 Bounding Box + MediaPipe Skeleton */}
          <g transform="translate(88, 72)">
            <rect
              x="0"
              y="0"
              width="58"
              height="92"
              rx="4"
              fill="rgba(100,140,255,0.06)"
              stroke="#648CFF"
              strokeWidth="1.2"
              strokeDasharray="3 2"
            />
            <rect x="0" y="-16" width="66" height="15" rx="3" fill="#648CFF" />
            <text
              x="5"
              y="-5.5"
              fill="#08090C"
              fontSize="8.5"
              fontFamily="JetBrains Mono, monospace"
              fontWeight="700"
            >
              P1 · TRACK
            </text>

            {showPose && (
              <g stroke="#9475FF" strokeWidth="1.8" strokeLinecap="round">
                <circle cx="29" cy="17" r="4.5" fill="#13161D" stroke="#F5F5F7" strokeWidth="1.4" />
                <line x1="17" y1="30" x2="41" y2="30" />
                <line x1="29" y1="22" x2="29" y2="54" />
                <line x1="17" y1="30" x2="10" y2="44" />
                <line x1="41" y1="30" x2="48" y2="16" />
                <line x1="48" y1="16" x2="53" y2="8" stroke="#648CFF" />
                <line x1="29" y1="54" x2="18" y2="73" />
                <line x1="18" y1="73" x2="13" y2="86" />
                <line x1="29" y1="54" x2="39" y2="72" />
                <line x1="39" y1="72" x2="45" y2="86" />
                {[
                  [17, 30],
                  [41, 30],
                  [29, 54],
                  [48, 16],
                  [18, 73],
                  [39, 72],
                ].map(([jx, jy], i) => (
                  <circle key={i} cx={jx} cy={jy} r="2.3" fill="#F5F5F7" stroke="none" />
                ))}
              </g>
            )}
          </g>

          {/* Opponent Tracking Box */}
          <g transform="translate(316, 94)">
            <rect
              x="0"
              y="0"
              width="52"
              height="80"
              rx="4"
              fill="rgba(148,117,255,0.05)"
              stroke="#9475FF"
              strokeOpacity="0.7"
              strokeWidth="1.1"
              strokeDasharray="3 2"
            />
            <rect x="0" y="-15" width="60" height="14" rx="3" fill="#9475FF" fillOpacity="0.9" />
            <text
              x="5"
              y="-5"
              fill="#08090C"
              fontSize="8"
              fontFamily="JetBrains Mono, monospace"
              fontWeight="700"
            >
              P2 · ID#2
            </text>
            {showPose && (
              <g stroke="#648CFF" strokeOpacity="0.8" strokeWidth="1.5" strokeLinecap="round">
                <circle cx="26" cy="16" r="4" fill="#13161D" stroke="#F5F5F7" strokeWidth="1.2" />
                <line x1="16" y1="27" x2="36" y2="27" />
                <line x1="26" y1="20" x2="26" y2="48" />
                <line x1="16" y1="27" x2="10" y2="40" />
                <line x1="36" y1="27" x2="42" y2="41" />
                <line x1="26" y1="48" x2="18" y2="72" />
                <line x1="26" y1="48" x2="35" y2="72" />
              </g>
            )}
          </g>

          <path
            d="M 142 80 Q 230 28 322 108"
            fill="none"
            stroke="rgba(245,245,247,0.28)"
            strokeWidth="1.1"
            strokeDasharray="2 4"
          />
        </svg>
      </div>

      {/* Bottom Pipeline Modules */}
      <div className="relative z-10 grid grid-cols-3 gap-2 border-t border-white/[0.08] pt-3">
        {[
          { icon: Radar, label: 'Detection', value: 'YOLOv8 + ByteTrack' },
          { icon: Activity, label: 'Posture', value: 'MediaPipe Pose' },
          { icon: Layers, label: 'Backend', value: 'FastAPI + OpenCV' },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className="rounded-lg border border-white/[0.07] bg-[#141720]/90 px-2.5 py-2"
            >
              <div className="flex items-center gap-1 text-[10px] text-[#9298A5]">
                <Icon className="h-3 w-3 text-[#648CFF]" />
                <span>{item.label}</span>
              </div>
              <p className="mt-0.5 truncate font-mono text-[10px] font-medium text-[#E6EAF2]">
                {item.value}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

/**
 * Interactive sequential model compression visual for IEEE TENSYMP 2026 Research.
 * Crisp light-editorial architectural panel matching Apple's technical spec graphics.
 */
export const TransformerResearchVisual: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(3);

  const stages = [
    {
      name: 'Pre-trained BERT',
      short: 'Baseline',
      desc: 'Full pretrained transformer parameters used as the reference benchmark.',
      profile: { size: 96, latency: 92, accuracy: 96 },
    },
    {
      name: 'Pruning',
      short: 'Prune',
      desc: 'Removes redundant weights and attention heads to reduce parameter footprint.',
      profile: { size: 68, latency: 70, accuracy: 90 },
    },
    {
      name: 'Quantization',
      short: 'Quantize',
      desc: 'Lowers weight & activation numerical precision to accelerate inference.',
      profile: { size: 42, latency: 46, accuracy: 86 },
    },
    {
      name: 'Knowledge Distillation',
      short: 'Distill',
      desc: 'Transfers representations from teacher to compact student model sequentially.',
      profile: { size: 32, latency: 36, accuracy: 88 },
    },
  ];

  const current = stages[activeStage];

  return (
    <div className="relative flex h-full min-h-[320px] flex-col justify-between overflow-hidden rounded-2xl border border-black/[0.08] bg-[#F5F5F7] p-4 sm:p-5">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,rgba(124,58,237,0.08),transparent_60%)]"
      />

      {/* Top Bar */}
      <div className="relative z-10 flex items-center justify-between border-b border-black/[0.07] pb-3">
        <div className="flex items-center gap-2">
          <Cpu className="h-3.5 w-3.5 text-[#6D28D9]" />
          <span className="font-mono text-[11px] font-semibold text-[#111318]">
            SEQUENTIAL COMPRESSION STUDY
          </span>
        </div>
        <span className="rounded-full border border-[#6D28D9]/20 bg-[#6D28D9]/[0.08] px-2.5 py-0.5 font-mono text-[10px] font-medium text-[#5B21B6]">
          IEEE TENSYMP 2026
        </span>
      </div>

      {/* Interactive Pipeline Nodes */}
      <div className="relative z-10 my-5">
        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.14em] text-[#5C6370]">
          Select Compression Stage
        </p>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {stages.map((stage, idx) => {
            const isActive = idx === activeStage;
            return (
              <button
                key={stage.name}
                type="button"
                onClick={() => setActiveStage(idx)}
                className={`rounded-xl border px-2.5 py-2.5 text-left transition-all ${
                  isActive
                    ? 'border-[#111318] bg-[#111318] text-white shadow-sm'
                    : 'border-black/[0.08] bg-white text-[#5C6370] hover:border-black/[0.18] hover:text-[#111318]'
                }`}
              >
                <span className="block font-mono text-[9px] uppercase tracking-wider opacity-70">
                  Stage 0{idx + 1}
                </span>
                <span className="mt-0.5 block text-xs font-semibold">{stage.short}</span>
              </button>
            );
          })}
        </div>

        {/* Conceptual Trade-off Bars */}
        <div className="mt-5 rounded-xl border border-black/[0.07] bg-white p-4 shadow-[0_2px_10px_-4px_rgba(17,19,24,0.06)]">
          <div className="mb-2.5 flex items-center justify-between">
            <span className="text-xs font-semibold text-[#111318]">{current.name}</span>
            <span className="font-mono text-[10px] text-[#5C6370]">
              Conceptual Trade-off Profile
            </span>
          </div>
          <p className="mb-4 text-xs leading-relaxed text-[#5C6370]">{current.desc}</p>

          <div className="space-y-3">
            {[
              { label: 'Model Footprint', value: current.profile.size, tone: 'from-[#111318] to-[#374151]' },
              { label: 'Inference Latency', value: current.profile.latency, tone: 'from-[#2563EB] to-[#4F46E5]' },
              { label: 'Accuracy Retention', value: current.profile.accuracy, tone: 'from-[#6D28D9] to-[#8B5CF6]' },
            ].map((dim) => (
              <div key={dim.label}>
                <div className="mb-1 flex items-center justify-between text-[11px]">
                  <span className="font-medium text-[#1D1D1F]">{dim.label}</span>
                  <span className="font-mono text-[10px] text-[#5C6370]">Relative</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#ECEEF2]">
                  <motion.div
                    initial={false}
                    animate={{ width: `${dim.value}%` }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className={`h-full rounded-full bg-gradient-to-r ${dim.tone}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer note */}
      <div className="relative z-10 flex items-center justify-between border-t border-black/[0.07] pt-3 font-mono text-[10px] text-[#5C6370]">
        <span>PyTorch · Hugging Face · BERT</span>
        <span>Penang, Malaysia</span>
      </div>
    </div>
  );
};

/**
 * Product preview card for FitMotion AI (clean Apple-style light UI)
 */
export const FitMotionVisual: React.FC = () => {
  return (
    <div className="relative overflow-hidden rounded-xl border border-black/[0.07] bg-[#F5F5F7] p-4">
      <div className="relative z-10 flex items-center justify-between border-b border-black/[0.06] pb-2.5">
        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] font-semibold text-[#111318]">
          <Sparkles className="h-3 w-3 text-[#2563EB]" />
          FITMOTION // RECOMMENDATION ENGINE
        </span>
        <span className="font-mono text-[10px] text-[#5C6370]">~90 Exercises</span>
      </div>

      <div className="relative z-10 mt-3.5 grid grid-cols-7 gap-1.5">
        {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
          <div
            key={i}
            className={`flex flex-col items-center rounded-lg border py-2 font-mono text-[10px] ${
              i === 0 || i === 2 || i === 4
                ? 'border-[#111318] bg-[#111318] text-white'
                : 'border-black/[0.07] bg-white text-[#5C6370]'
            }`}
          >
            <span>{day}</span>
            <span
              className={`mt-1.5 h-1 w-3 rounded-full ${
                i === 0 || i === 2 || i === 4 ? 'bg-[#60A5FA]' : 'bg-black/10'
              }`}
            />
          </div>
        ))}
      </div>

      <div className="relative z-10 mt-3 grid grid-cols-2 gap-2">
        <div className="rounded-lg border border-black/[0.06] bg-white px-3 py-2">
          <span className="block text-[10px] text-[#5C6370]">Matcher</span>
          <span className="font-mono text-[11px] font-semibold text-[#111318]">Scikit-learn</span>
        </div>
        <div className="rounded-lg border border-black/[0.06] bg-white px-3 py-2">
          <span className="block text-[10px] text-[#5C6370]">Analytics</span>
          <span className="font-mono text-[11px] font-semibold text-[#111318]">Plotly · SQLite</span>
        </div>
      </div>
    </div>
  );
};

/**
 * Product preview card for FitBite (clean Apple-style light UI)
 */
export const FitBiteVisual: React.FC = () => {
  return (
    <div className="relative overflow-hidden rounded-xl border border-black/[0.07] bg-[#F5F5F7] p-4">
      <div className="relative z-10 flex items-center justify-between border-b border-black/[0.06] pb-2.5">
        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] font-semibold text-[#111318]">
          <Salad className="h-3 w-3 text-[#6D28D9]" />
          FITBITE // NUTRITION &amp; FITNESS
        </span>
        <span className="font-mono text-[10px] text-[#5C6370]">Live App</span>
      </div>

      <div className="relative z-10 mt-3.5 space-y-2">
        {[
          { label: 'Nutrition Planning', tag: 'Daily Intake' },
          { label: 'Fitness Activity', tag: 'Routine Sync' },
          { label: 'Health & Wellness Hub', tag: 'Unified Flow' },
        ].map((row) => (
          <div
            key={row.label}
            className="flex items-center justify-between rounded-lg border border-black/[0.06] bg-white px-3 py-2"
          >
            <span className="text-xs font-medium text-[#111318]">{row.label}</span>
            <span className="rounded-md bg-[#F5F5F7] px-2 py-0.5 font-mono text-[10px] text-[#5C6370]">
              {row.tag}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
