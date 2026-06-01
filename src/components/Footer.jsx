import { useEffect, useRef } from "react";
import { textFadeIn } from "../utils/fadeIn";

export default function Footer() {

    const ref = useRef();


        textFadeIn(ref);

  return (
    <footer className="relative min-h-screen w-full overflow-hidden bg-black px-6 py-20 md:px-12 lg:px-20 flex flex-col justify-between">
      
      {/* Glow Effects */}
      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-purple-700/20 blur-[180px]" />
      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-violet-600/20 blur-[180px]" />

      <div className="relative z-10 flex flex-col h-full">
        
        {/* Top Content */}
        <div className="grid gap-14 mb-10 lg:grid-cols-[1.8fr_1fr_1fr_1fr_1fr]">
          
          {/* Brand */}
          <div>
            <h2 className="text-4xl font-bold text-white">
              NEXA<span className="text-purple-500">.</span>
            </h2>

            <p className="mt-5 max-w-md text-zinc-400 leading-relaxed">
              Transform your workflow with AI-powered automation,
              analytics and collaboration tools built for modern teams.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="mb-5 text-white font-medium">Product</h3>
            <ul className="space-y-3 text-zinc-400">
              <li><a href="#" className="hover:text-purple-400 transition">Features</a></li>
              <li><a href="#" className="hover:text-purple-400 transition">Pricing</a></li>
              <li><a href="#" className="hover:text-purple-400 transition">Integrations</a></li>
              <li><a href="#" className="hover:text-purple-400 transition">Updates</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-5 text-white font-medium">Company</h3>
            <ul className="space-y-3 text-zinc-400">
              <li><a href="#" className="hover:text-purple-400 transition">About</a></li>
              <li><a href="#" className="hover:text-purple-400 transition">Careers</a></li>
              <li><a href="#" className="hover:text-purple-400 transition">Contact</a></li>
              <li><a href="#" className="hover:text-purple-400 transition">Blog</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-5 text-white font-medium">Resources</h3>
            <ul className="space-y-3 text-zinc-400">
              <li><a href="#" className="hover:text-purple-400 transition">Docs</a></li>
              <li><a href="#" className="hover:text-purple-400 transition">Support</a></li>
              <li><a href="#" className="hover:text-purple-400 transition">API</a></li>
              <li><a href="#" className="hover:text-purple-400 transition">Status</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-5 text-white font-medium">Social</h3>
            <ul className="space-y-3 text-zinc-400">
              <li><a href="#" className="hover:text-purple-400 transition">Twitter</a></li>
              <li><a href="#" className="hover:text-purple-400 transition">LinkedIn</a></li>
              <li><a href="#" className="hover:text-purple-400 transition">GitHub</a></li>
              <li><a href="#" className="hover:text-purple-400 transition">Discord</a></li>
            </ul>
          </div>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Bottom */}
        <div>
          <div className="h-px w-full bg-white/10 mb-8" />

          <div className="flex flex-col gap-4 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
            <p>© 2026 Nexa. All rights reserved.</p>

            <div className="flex gap-6">
              <a href="#" className="hover:text-purple-400 transition">
                Privacy
              </a>
              <a href="#" className="hover:text-purple-400 transition">
                Terms
              </a>
            </div>
          </div>

          {/* Huge Text */}
          <div ref={ref} className="overflow-hidden mt-8">
            <h1
              className="
                text-center
                font-black
                uppercase
                leading-[0.8]
                tracking-[-0.08em]
                bg-gradient-to-r
                from-purple-900/20
                via-purple-500
                to-purple-900/20
                bg-clip-text
                text-transparent
                select-none
                text-[5rem]
                sm:text-[8rem]
                md:text-[12rem]
                lg:text-[18rem]
                xl:text-[24rem]
              "
            >
              NEXA
            </h1>
          </div>
        </div>
      </div>
    </footer>
  );
}