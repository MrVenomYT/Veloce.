import React from "react";
import CarList from "../components/CarList/CarList";
import Experience from "../components/Experience/Experience";
import { Link } from "react-router-dom";
import { RiArrowLeftLine, RiShieldStarLine } from "react-icons/ri";

const FleetPage = () => {
  return (
    <div className="pt-8 bg-slate-50 dark:bg-obsidian-950 min-h-screen">
      <div className="container pb-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-primary transition-colors mb-4"
        >
          <RiArrowLeftLine className="text-sm" />
          <span>Return to Home</span>
        </Link>
        <div className="p-6 rounded-2xl bg-gradient-to-r from-obsidian-950 via-obsidian-900 to-obsidian-950 text-white border border-obsidian-750 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-[11px] font-mono text-primary uppercase font-bold tracking-wider">
              VIP Fleet Catalog & Real-Time Availability
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold font-display">
              Exotic, Executive & Performance Vehicles
            </h1>
            <p className="text-xs text-slate-400 max-w-xl">
              All vehicles include $0 deductible insurance, guaranteed exact model reservation, and private airport tarmac delivery.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-primary bg-primary/10 px-3.5 py-2 rounded-lg border border-primary/30 shrink-0">
            <RiShieldStarLine className="text-base" />
            <span>Guaranteed VIN Match</span>
          </div>
        </div>
      </div>

      <CarList />
      <Experience />
    </div>
  );
};

export default FleetPage;
