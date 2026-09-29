import React from "react";
import { RiStarFill, RiDoubleQuotesL, RiShieldCheckFill } from "react-icons/ri";

const testimonials = [
  {
    name: "Marcus Vance",
    role: "Managing Director",
    company: "Apex Capital Partners · New York",
    vehicle: "Rented: BMW M8 Competition Gran Coupé",
    quote: "Tarmac delivery at JFK Sheltair was executed with military precision. The BMW M8 was pristine, child seats pre-installed, and our itinerary pre-loaded on navigation. Flawless executive service.",
    rating: 5,
    aosDelay: "0",
  },
  {
    name: "Elena Rostova",
    role: "Executive Film Producer",
    company: "Pacific Horizon Media · Los Angeles",
    vehicle: "Rented: Range Rover SV Autobiography",
    quote: "VELOCE is the only fleet partner in California that guarantees the exact VIN and colorway you book. We dispatched three vehicles for a location shoot with zero friction and perfect reliability.",
    rating: 5,
    aosDelay: "150",
  },
  {
    name: "Julian Thorne",
    role: "Technology Founder & LP",
    company: "Venture Velocity · Miami",
    vehicle: "Rented: Porsche Taycan Turbo S",
    quote: "The Taycan Turbo S made our Miami investor summit seamless. Keyless digital phone access, 100% battery at delivery, and zero counter lines or tedious paperwork.",
    rating: 5,
    aosDelay: "300",
  },
];

const Testimonial = () => {
  return (
    <section id="reviews" className="py-20 bg-slate-100 dark:bg-obsidian-950 transition-colors duration-300">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div
            data-aos="fade-up"
            className="text-xs font-semibold uppercase tracking-widest text-primary font-mono"
          >
            Verified Client Experiences
          </div>
          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white"
          >
            Trusted by Industry Leaders & Discerning Drivers
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-sm sm:text-base text-slate-600 dark:text-slate-300"
          >
            Hear from managing directors, production teams, and travelers who rely on VELOCE for uncompromised mobility.
          </p>
        </div>

        {/* Testimonials 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.name}
              data-aos="fade-up"
              data-aos-delay={item.aosDelay}
              className="glass-card p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:border-primary/60 dark:hover:border-primary/60 transition-all duration-300 hover:shadow-xl relative"
            >
              <div className="space-y-4">
                {/* Stars and Quote mark */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-primary text-sm">
                    {[...Array(item.rating)].map((_, i) => (
                      <RiStarFill key={i} />
                    ))}
                  </div>
                  <RiDoubleQuotesL className="text-2xl text-slate-300 dark:text-obsidian-700" />
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Author & Verification */}
              <div className="pt-4 border-t border-slate-200 dark:border-obsidian-750 space-y-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white font-display">
                    {item.name}
                  </h4>
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                    <RiShieldCheckFill className="text-xs" />
                    <span>Verified Renter</span>
                  </div>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {item.role} · {item.company}
                </p>
                <p className="text-[11px] font-mono text-primary pt-1">
                  {item.vehicle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
