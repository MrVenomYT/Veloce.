import React from "react";
import CarPng from "../../assets/car1.png";
import { RiShieldStarLine, RiSparklingLine, RiMapPinTimeLine } from "react-icons/ri";

const About = () => {
  return (
    <section id="experience" className="py-20 bg-slate-100 dark:bg-obsidian-950 transition-colors duration-300">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image with Floating Detail Card */}
          <div
            data-aos="slide-right"
            data-aos-duration="1000"
            className="lg:col-span-6 relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-lg">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-primary/5 rounded-3xl blur-2xl transform -rotate-3 scale-95"></div>
              
              {/* Car Image */}
              <img
                src={CarPng}
                alt="Range Rover SV Luxury SUV Fleet"
                referrerPolicy="no-referrer"
                className="relative z-10 w-full object-contain max-h-[360px] sm:max-h-[420px] drop-shadow-[0_20px_30px_rgba(0,0,0,0.3)] transform hover:scale-105 transition-transform duration-500"
              />

              {/* Floating Quality Assurance Card */}
              <div className="absolute -bottom-4 -left-2 sm:left-4 z-20 glass-card p-4 max-w-xs shadow-xl border border-slate-200/80 dark:border-obsidian-700">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary shrink-0">
                    <RiShieldStarLine className="text-xl" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                      48-Point Concierge Protocol
                    </h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">
                      Multi-stage detail & mechanical check before every handover.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Value Pillars */}
          <div className="lg:col-span-6 space-y-6">
            <div
              data-aos="fade-up"
              className="text-xs font-semibold uppercase tracking-widest text-primary font-mono"
            >
              The VELOCE Heritage
            </div>

            <h2
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white leading-tight"
            >
              Redefining Mobility for Discerning Travelers
            </h2>

            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed"
            >
              Founded for executives, creative visionaries, and automotive purists who demand flawless execution. We bypass traditional rental counter queues, hidden surcharges, and model substitutions with an elevated, privately-owned fleet delivered directly to you.
            </p>

            {/* Value Pillars List */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="space-y-4 pt-2"
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center text-primary shrink-0 mt-0.5">
                  <RiSparklingLine className="text-base" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    Pristine Climate-Controlled Storage
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                    Every vehicle is housed in multi-stage air-filtered private facilities with active battery maintenance and meticulous paint protection.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center text-primary shrink-0 mt-0.5">
                  <RiMapPinTimeLine className="text-base" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    Tarmac & Curbside Priority Handover
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                    Direct handoff at private aviation FBOs (Signature, Atlantic, Sheltair) or luxury residential addresses in under 60 minutes.
                  </p>
                </div>
              </div>
            </div>

            {/* Action */}
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="pt-2"
            >
              <a href="#fleet" className="btn-primary">
                Explore Available Fleet
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
