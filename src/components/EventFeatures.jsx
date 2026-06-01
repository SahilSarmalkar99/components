import React, { useRef } from "react";
import {
  Calendar,
  CreditCard,
  BarChart3,
  QrCode,
  Ticket,
  CheckCircle2,
} from "lucide-react";
import { barFadeIn } from "../utils/barFad";
import { arc } from "../utils/arc";

export default function EventFeatures() {

  const barsRef  = useRef([]);
  barFadeIn(barsRef);

  const leftArcRef = useRef(null);
  const rightArcRef = useRef(null);

  arc(leftArcRef , rightArcRef)
  return (
    <section className="bg-[#f7f8fa] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-4xl md:text-6xl font-bold tracking-[-0.05em] text-zinc-900 leading-none">
            Here's what you'll need
            <br />
            for a successful event
          </h2>
        </div>

        {/* Grid */}
        <div className="grid gap-6">
          {/* TOP CARD */}
          <div className="group bg-white rounded-[36px] border border-zinc-200 p-8 lg:p-12 shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              {/* Left */}
              <div>
                <div className="flex items-center gap-2 text-emerald-600 text-xs font-semibold uppercase tracking-widest mb-6">
                  <Ticket size={16} />
                  Powerful Ticket System
                </div>

                <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 leading-[1] mb-6">
                  That takes care of everything
                </h3>

                <div className="flex flex-wrap gap-3">
                  {[
                    "Create events",
                    "Offline and Online",
                    "Ticket Shop",
                    "Custom Forms",
                  ].map((item) => (
                    <span
                      key={item}
                      className="px-4 py-2 rounded-full bg-zinc-100 text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right */}
              <div className="flex flex-col lg:flex-row gap-5 justify-center">
                {/* Event Creator */}
                <div className="w-full max-w-[280px] rounded-[28px] bg-gradient-to-br from-zinc-800 via-stone-700 to-amber-100 p-5 shadow-2xl">
                  <div className="flex justify-center gap-2 mb-5">
                    <div className="w-5 h-5 rounded-full bg-pink-400"></div>
                    <div className="w-5 h-5 rounded-full bg-cyan-300"></div>
                    <div className="w-5 h-5 rounded-full bg-indigo-500"></div>
                  </div>

                  <h4 className="text-white text-sm mb-4">
                    Create an event
                  </h4>

                  <div className="space-y-3">
                    <div className="h-11 rounded-xl bg-white/20" />
                    <div className="grid grid-cols-2 gap-2">
                      <div className="h-11 rounded-xl bg-white/20" />
                      <div className="h-11 rounded-xl bg-white/20" />
                    </div>
                    <div className="h-3 w-2/3 rounded-full bg-white/20" />

                    <button className="w-full h-12 rounded-xl bg-white text-zinc-900 font-semibold mt-4">
                      Create Event
                    </button>
                  </div>
                </div>

                {/* Right Widgets */}
                <div className="space-y-5">
                  <div className="bg-zinc-50 rounded-[24px] p-5 w-[220px] shadow-sm">
                    <h4 className="font-medium mb-4">Payment Method</h4>

                    <div
                      ref={(el) => (barsRef.current[0] = el)}
                      className="relative overflow-hidden h-12 rounded-xl bg-emerald-500 mb-3"
                    >
                      <div className="shimmer"></div>
                    </div>

                    <div
                      ref={(el) => (barsRef.current[1] = el)}
                      className="relative overflow-hidden h-12 rounded-xl bg-sky-400 w-1/2"
                    >
                      <div className="shimmer"></div>
                    </div>
                  </div>

                  <div className="bg-amber-200 rounded-[24px] p-5 w-[220px] shadow-sm">
                    <div className="flex items-center justify-between">
                      <img
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80"
                        alt=""
                        className="w-12 h-12 rounded-full object-cover"
                      />

                      <div className="flex gap-2">
                        <div className="w-8 h-8 rounded-full bg-white/50" />
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-sm font-bold">
                          2
                        </div>
                        <div className="w-8 h-8 rounded-full bg-white/50" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Analytics */}
            <div className="group bg-white rounded-[36px] border border-zinc-200 p-8 shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="flex items-center gap-2 text-emerald-600 text-xs font-semibold uppercase tracking-widest mb-6">
                <BarChart3 size={16} />
                Detailed Analytics
              </div>

              <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
                Live insights to help you make smarter decisions
              </h3>

              <div className="flex flex-wrap gap-3 mb-10">
                {[
                  "Sales Report",
                  "Cash Payment",
                  "Store Views",
                  "Data Export",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full bg-zinc-100 text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Chart */}
              <div className="relative h-[260px] flex justify-center items-center">
               <div className="relative w-[320px] h-[180px]">
                <svg
                  viewBox="0 0 320 180"
                  className="absolute inset-0 w-full h-full"
                >
                  {/* Left Arc */}
                  <path
                  ref={leftArcRef}
                    d="M40 150 A120 120 0 0 1 160 30"
                    fill="none"
                    stroke="#49B6A5"
                    strokeWidth="30"
                    strokeLinecap="round"
                  />

                  {/* Right Arc */}
                  <path
                  ref={rightArcRef}
                    d="M160 30 A120 120 0 0 1 280 150"
                    fill="none"
                    stroke="#75BFE7"
                    strokeWidth="30"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
                <div className="absolute bottom-4 bg-white rounded-2xl p-4 shadow-lg">
                  <div className="flex gap-4">
                    <div className="w-16 h-8 rounded bg-emerald-400"></div>
                    <div className="w-16 h-8 rounded bg-sky-400"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Scanner */}
            <div className="group bg-white rounded-[36px] border border-zinc-200 p-8 shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="flex items-center gap-2 text-emerald-600 text-xs font-semibold uppercase tracking-widest mb-6">
                <QrCode size={16} />
                Ticket Scanner
              </div>

              <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
                Fast, reliable check-ins.
                <br />
                Zero chaos.
              </h3>

              <div className="flex flex-wrap gap-3 mb-10">
                {[
                  "Mobile Scanning",
                  "Instant Validation",
                  "Entry Tracking",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full bg-zinc-100 text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-center gap-5">
                <div className="relative w-[220px] h-[260px] rounded-[28px] bg-gradient-to-br from-zinc-100 to-emerald-50 shadow-inner flex items-center justify-center">
                  <div className="w-20 h-20 border-4 border-emerald-500 border-dashed rounded-xl"></div>

                  <div className="absolute left-[-30px] bottom-16 bg-rose-100 rounded-xl px-4 py-2 shadow">
                    <div className="flex items-center gap-2 text-xs">
                      <CheckCircle2 size={14} />
                      Ticket scanned
                    </div>
                  </div>

                  <div className="absolute left-[-30px] bottom-4 bg-orange-100 rounded-xl px-4 py-2 shadow">
                    <div className="flex items-center gap-2 text-xs">
                      <CreditCard size={14} />
                      Cash collected
                    </div>
                  </div>
                </div>

                <div className="w-28 h-28 rounded-3xl bg-amber-200 flex items-center justify-center">
                  <QrCode size={48} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}