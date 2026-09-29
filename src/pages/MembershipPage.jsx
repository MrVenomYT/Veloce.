import React from "react";
import AppStoreBanner from "../components/AppStoreBanner/AppStoreBanner";
import Experience from "../components/Experience/Experience";
import Contact from "../components/Contact/Contact";
import { Link } from "react-router-dom";
import { RiArrowLeftLine } from "react-icons/ri";

const MembershipPage = () => {
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
      </div>

      <AppStoreBanner />
      <Experience />
      <Contact />
    </div>
  );
};

export default MembershipPage;
