import React from "react";

const cards = [
  {
    title: "Research & Ideation",
    desc: "Uplane scans your market, competitors and trends 24/7. Transforms insights into ad concepts.",
    className: "left-[5%] top-[8%]",
  },
  {
    title: "Ad & Landing Page Generation",
    desc: "From ideas to live campaigns in seconds.",
    className: "left-[5%] bottom-[28%]",
  },
  {
    title: "Optimisation Loop",
    desc: "Feeds results back to generate new ads and landing pages.",
    className: "right-[5%] top-[8%]",
  },
  {
    title: "Integrate for Profit",
    desc: "Sync with CRM/ERP data to optimize margin, LTV and profit.",
    className: "right-[5%] bottom-[28%]",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#f4f6fb] py-24 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6">
       <span
className="
text-blue-600
uppercase
tracking-[0.25em]
font-semibold
text-sm
"
>PROCESS</span>

        <h2
          className="
text-7xl
font-[750]
tracking-[-0.06em]
text-slate-950
"
        >
          How it Works
        </h2>

        {/* MOBILE */}
        <div className="lg:hidden space-y-5">
          {cards.map((card) => (
            <MobileCard key={card.title} {...card} />
          ))}

          <MobileCard
            title="Cross-channel Budget Allocation"
            desc="Shifts spend where ROAS is highest."
          />
        </div>

        {/* DESKTOP */}
        <div className="hidden lg:block relative h-[820px]">
          {/* SVG NETWORK */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1600 820"
          >
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="5" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Base Paths */}

            <path
              d="M470 170 C620 170 650 250 730 350"
              stroke="#d8e1f0"
              strokeWidth="5"
              fill="none"
            />

            <path
              d="M470 520 C620 430 650 400 730 350"
              stroke="#d8e1f0"
              strokeWidth="5"
              fill="none"
            />

            <path
              d="M1130 170 C980 170 950 250 870 350"
              stroke="#d8e1f0"
              strokeWidth="5"
              fill="none"
            />

            <path
              d="M1130 520 C980 430 950 400 870 350"
              stroke="#d8e1f0"
              strokeWidth="5"
              fill="none"
            />

            <path
              d="M800 620 L800 410"
              stroke="#d8e1f0"
              strokeWidth="5"
              fill="none"
            />

            {/* ENERGY FLOW */}

            <path
              d="M470 170 C620 170 650 250 730 350"
              className="energy-path"
            />

            <path
              d="M470 520 C620 430 650 400 730 350"
              className="energy-path"
            />

            <path
              d="M1130 170 C980 170 950 250 870 350"
              className="energy-path"
            />

            <path
              d="M1130 520 C980 430 950 400 870 350"
              className="energy-path"
            />

            <path d="M800 620 L800 410" className="energy-path" />
          </svg>

          {/* STEP TAGS */}

          <Step label="Step 01" className="left-[35%] top-[28.5%]" />
          <Step label="Step 02" className="left-[35%] top-[49%]" />
          <Step label="Step 03" className="left-[46%] top-[60%]" />
          <Step label="Step 04" className="right-[35%] top-[49%]" />
          <Step label="Step 05" className="right-[35%] top-[28.5%]" />

          {/* CENTER */}

          <div className="absolute left-1/2 top-[43%] -translate-x-1/2 -translate-y-1/2">
            <div className="absolute inset-0 scale-[3] rounded-full bg-blue-500/10 blur-[80px]" />

            <div className="absolute inset-0 scale-[2] rounded-full bg-blue-500/15 blur-[50px]" />

            <div className="relative h-28 w-28 rounded-full bg-blue-600 border-[8px] border-blue-300 shadow-[0_0_80px_rgba(59,130,246,0.7)] flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                <path d="M3 17.25V21h3.75L17.8 9.94l-3.75-3.75L3 17.25zm14.71-9.04c.39-.39.39-1.02 0-1.41L15.2 4.29a1 1 0 00-1.41 0l-1.96 1.96 3.75 3.75 2.13-2.13z" />
              </svg>
            </div>
          </div>

          {/* CARDS */}

          {cards.map((card) => (
            <Card key={card.title} {...card} />
          ))}

          {/* BOTTOM CARD */}

          <div className="absolute left-[50.5%]  bottom-7 -translate-x-1/2">
            <div
  className="
  group
  relative
  w-[380px]
  rounded-[32px]
  border border-slate-200/70
  bg-white/90
  backdrop-blur-xl
  p-7
  overflow-hidden
  transition-all
  duration-500
  hover:-translate-y-2
  hover:border-blue-200
  hover:shadow-[0_25px_60px_rgba(59,130,246,0.12)]
"
>
  {/* Glow */}
  <div
    className="
    absolute
    -top-10
    -right-10
    h-32
    w-32
    rounded-full
    bg-blue-500/10
    blur-3xl
    opacity-0
    group-hover:opacity-100
    transition-all
    duration-500
  "
  />

  <div className="relative z-10 flex gap-5">
    {/* Icon */}
    <div
      className="
      flex
      h-12
      w-12
      shrink-0
      items-center
      justify-center
      rounded-2xl
      bg-gradient-to-br
      from-blue-500
      to-cyan-400
      shadow-[0_12px_30px_rgba(59,130,246,0.35)]
    "
    >
      <div className="h-2.5 w-2.5 rounded-full bg-white" />
    </div>

    {/* Content */}
    <div>
      <h3
        className="
        text-[22px]
        font-semibold
        leading-tight
        tracking-[-0.03em]
        text-slate-900
      "
      >
        Cross-channel Budget Allocation
      </h3>

      <p
        className="
        mt-3
        text-[15px]
        leading-7
        text-slate-500
      "
      >
        Shifts spend automatically toward the highest-performing
        channels to maximize return on ad spend.
      </p>
    </div>
  </div>

  {/* Animated Bottom Border */}
  <div
    className="
    absolute
    bottom-0
    left-0
    h-[3px]
    w-0
    bg-gradient-to-r
    from-blue-500
    to-cyan-400
    transition-all
    duration-500
    group-hover:w-full
  "
  />
</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .energy-path {
          fill: none;
          stroke: #3478f6;
          stroke-width: 6;
          stroke-linecap: round;
          stroke-dasharray: 30 400;
          animation: flow 4s linear infinite;
          filter: drop-shadow(0 0 12px rgba(52, 120, 246, 0.9));
        }

        @keyframes flow {
          from {
            stroke-dashoffset: 430;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </section>
  );
}

function Step({ label, className }) {
  return (
    <div
      className={`absolute ${className} bg-white px-6 py-2 rounded-full shadow-md border border-slate-100`}
    >
      {label}
    </div>
  );
}

function Card({ title, desc, className }) {
  return (
    <div
      className={`
      absolute ${className}
      w-[380px]
      min-h-[200px]
      rounded-[32px]
      border border-slate-200/70
      bg-white/80
      backdrop-blur-xl
      p-8
      overflow-hidden
      group
      transition-all duration-500
      hover:-translate-y-3
      hover:border-blue-200
      hover:shadow-[0_30px_80px_rgba(59,130,246,0.15)]
      `}
    >
      {/* Glow */}
      <div
        className="
        absolute
        top-0
        right-0
        w-40
        h-40
        bg-blue-500/10
        blur-3xl
        rounded-full
        opacity-0
        group-hover:opacity-100
        transition-all
        duration-500
        "
      />

      <div className="relative z-10 flex gap-5">
        {/* Icon */}
        <div
          className="
          w-14
          h-14
          rounded-2xl
          bg-gradient-to-br
          from-blue-500
          to-cyan-400
          flex
          items-center
          justify-center
          shadow-[0_15px_35px_rgba(59,130,246,0.35)]
          shrink-0
          "
        >
          <div className="w-3 h-3 rounded-full bg-white" />
        </div>

        {/* Content */}
        <div>
          <h3
            className="
            text-[28px]
            leading-tight
            font-semibold
            tracking-[-0.04em]
            text-slate-900
            "
          >
            {title}
          </h3>

          <p
            className="
            mt-4
            text-[16px]
            leading-7
            text-slate-500
            "
          >
            {desc}
          </p>
        </div>
      </div>

      {/* Bottom Line */}
      <div
        className="
        absolute
        bottom-0
        left-0
        h-[3px]
        w-0
        bg-gradient-to-r
        from-blue-500
        to-cyan-400
        group-hover:w-full
        transition-all
        duration-500
        "
      />
    </div>
  );
}

function MobileCard({ title, desc }) {
  return (
    <div
      className="
      relative
      overflow-hidden
      rounded-[28px]
      border
      border-slate-200/70
      bg-white/90
      backdrop-blur-xl
      p-6
      shadow-[0_10px_40px_rgba(15,23,42,0.06)]
      "
    >
      <div className="flex items-start gap-4">
        <div
          className="
          w-12
          h-12
          rounded-xl
          bg-gradient-to-br
          from-blue-500
          to-cyan-400
          shrink-0
          "
        />

        <div>
          <h3 className="text-xl font-semibold tracking-tight text-slate-900">
            {title}
          </h3>

          <p className="mt-3 text-slate-500 leading-7">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}
