import React, { useState } from "react";
import carPng from "../../assets/car.png";
import yellowCar from "../../assets/banner-car.png";
import { HiOutlineCalendar, HiOutlineLocationMarker, HiOutlineSparkles, HiOutlineKey } from "react-icons/hi";
import { RiShieldCheckLine, RiSpeedUpLine, RiFlashlightLine, RiArrowRightLine } from "react-icons/ri";

const Hero = () => {
  const [pickupLocation, setPickupLocation] = useState("LAX Private Aviation (Atlantic / Signature)");
  const [vehicleClass, setVehicleClass] = useState("all");
  const [activeCarEdition, setActiveCarEdition] = useState("black"); // black or gold

  const handleSearch = (e) => {
    e.preventDefault();
    const fleetSection = document.getElementById("fleet");
    if (fleetSection) {
      fleetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-slate-50 dark:bg-obsidian-950 pt-8 pb-16 lg:py-20 transition-colors duration-300">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-sky-500/5 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & Copy */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            {/* Editorial Kicker */}
            <div
              data-aos="fade-up"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary font-mono"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span>Bespoke Mobility & Executive Fleet</span>
            </div>

            {/* Main Headline */}
            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-4xl sm:text-5xl xl:text-6xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white leading-[1.12]"
            >
              The Sovereign Standard in{" "}
              <span className="luxury-gradient-text">Luxury Car Rental</span>
            </h1>

            {/* Subtitle with zero lorem ipsum */}
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              Hand-delivered to private aviation tarmacs, five-star residences, and executive offices in under 60 minutes. Guaranteed exact model reservations with zero-deductible coverage.
            </p>

            {/* Trust Proof Points */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-2 text-xs text-slate-700 dark:text-slate-300"
            >
              <div className="flex items-center gap-2">
                <RiShieldCheckLine className="text-primary text-base" />
                <span className="font-medium">Zero-Deductible Insurance</span>
              </div>
              <div className="flex items-center gap-2">
                <HiOutlineKey className="text-primary text-base" />
                <span className="font-medium">Guaranteed Exact Model</span>
              </div>
              <div className="flex items-center gap-2">
                <HiOutlineSparkles className="text-primary text-base" />
                <span className="font-medium">Tarmac & Doorstep Delivery</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2"
            >
              <a href="#fleet" className="btn-primary w-full sm:w-auto">
                <span>Browse Available Fleet</span>
                <RiArrowRightLine className="text-base" />
              </a>
              <a href="#experience" className="btn-secondary w-full sm:w-auto">
                <span>How Concierge Works</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Vehicle Showcase */}
          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            className="lg:col-span-6 relative flex flex-col items-center justify-center"
          >
            {/* Interactive Edition Toggles */}
            <div className="flex items-center gap-2 mb-4 p-1 rounded-lg bg-slate-200/70 dark:bg-obsidian-850/80 border border-slate-300/60 dark:border-obsidian-750 backdrop-blur-sm z-20">
              <button
                onClick={() => setActiveCarEdition("black")}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all duration-200 ${
                  activeCarEdition === "black"
                    ? "bg-obsidian-950 text-white dark:bg-primary dark:text-obsidian-950 shadow-sm"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                Obsidian Black Edition
              </button>
              <button
                onClick={() => setActiveCarEdition("gold")}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all duration-200 ${
                  activeCarEdition === "gold"
                    ? "bg-obsidian-950 text-white dark:bg-primary dark:text-obsidian-950 shadow-sm"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                Solar Amber Edition
              </button>
            </div>

            {/* Car Image with Floating Specs */}
            <div className="relative w-full max-w-lg lg:max-w-none flex items-center justify-center min-h-[300px] sm:min-h-[360px]">
              <img
                src={activeCarEdition === "black" ? carPng : yellowCar}
                alt="Veloce Luxury Performance Fleet"
                referrerPolicy="no-referrer"
                className="w-full object-contain max-h-[340px] sm:max-h-[420px] drop-shadow-[0_25px_35px_rgba(0,0,0,0.35)] transition-all duration-700 transform hover:scale-105"
              />

              {/* Floating Spec 1: Horsepower */}
              <div className="absolute top-4 right-2 sm:right-6 glass-card px-3.5 py-2.5 flex items-center gap-2.5 shadow-lg border border-slate-200/80 dark:border-obsidian-700">
                <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center text-primary">
                  <RiFlashlightLine className="text-base" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Power</div>
                  <div className="text-sm font-bold font-mono tabular-nums text-slate-900 dark:text-white">617 HP</div>
                </div>
              </div>

              {/* Floating Spec 2: Acceleration */}
              <div className="absolute bottom-4 left-2 sm:left-6 glass-card px-3.5 py-2.5 flex items-center gap-2.5 shadow-lg border border-slate-200/80 dark:border-obsidian-700">
                <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center text-primary">
                  <RiSpeedUpLine className="text-base" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">0-60 MPH</div>
                  <div className="text-sm font-bold font-mono tabular-nums text-slate-900 dark:text-white">2.9 sec</div>
                </div>
              </div>
            </div>

            {/* Caption */}
            <div className="text-xs text-slate-500 dark:text-slate-400 text-center mt-2 font-mono">
              Featured: 2026 BMW M8 Competition Gran Coupé · Active in Los Angeles & Miami
            </div>
          </div>
        </div>

        {/* Quick Fleet Reservation Search Bar */}
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="mt-12 lg:mt-16 glass-card p-4 sm:p-6 shadow-xl border border-slate-200 dark:border-obsidian-750"
        >
          <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
            {/* Location */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                <HiOutlineLocationMarker className="text-primary text-sm" />
                <span>Pickup & Delivery Terminal</span>
              </label>
              <select
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-obsidian-850 border border-slate-300 dark:border-obsidian-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <option>LAX Private Aviation (Atlantic / Signature)</option>
                <option>Beverly Hills Concierge Lounge</option>
                <option>JFK Executive Aviation (Sheltair / Modern)</option>
                <option>Miami Opa-Locka Executive Airport (KOPF)</option>
                <option>Manhattan Hotel & Residence VIP Drop</option>
                <option>London Heathrow VIP Terminal (Windsor Suite)</option>
              </select>
            </div>

            {/* Dates */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                <HiOutlineCalendar className="text-primary text-sm" />
                <span>Rental Dates</span>
              </label>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="date"
                  defaultValue="2026-10-01"
                  className="w-full px-2.5 py-2 rounded-lg text-xs font-medium bg-slate-100 dark:bg-obsidian-850 border border-slate-300 dark:border-obsidian-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <input
                  type="date"
                  defaultValue="2026-10-05"
                  className="w-full px-2.5 py-2 rounded-lg text-xs font-medium bg-slate-100 dark:bg-obsidian-850 border border-slate-300 dark:border-obsidian-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
            </div>

            {/* Vehicle Category */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                <HiOutlineSparkles className="text-primary text-sm" />
                <span>Preferred Fleet Class</span>
              </label>
              <select
                value={vehicleClass}
                onChange={(e) => setVehicleClass(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-obsidian-850 border border-slate-300 dark:border-obsidian-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <option value="all">All Vehicles (Sedans, SUVs, Exotics, EVs)</option>
                <option value="sedan">Executive Sedans (BMW 7, S-Class)</option>
                <option value="suv">Performance SUVs (Cayenne GTS, Range Rover)</option>
                <option value="exotic">Exotic & Sports GT (M8, AMG GT)</option>
                <option value="ev">Electric Pioneers (Taycan, Model S Plaid)</option>
              </select>
            </div>

            {/* Submit / Check Availability */}
            <div>
              <button
                type="submit"
                className="w-full btn-primary py-2.5 text-xs font-bold uppercase tracking-wider"
              >
                Check Real-Time Availability
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
