import React from "react";
import { Link } from "react-router-dom";
import { FaUserShield, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { Navlinks } from "./Navlinks";

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  return (
    <>
      {/* Backdrop */}
      {showMenu && (
        <div
          onClick={() => setShowMenu(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity"
        />
      )}

      {/* Drawer */}
      <div
        className={`${
          showMenu ? "translate-x-0" : "-translate-x-full"
        } fixed bottom-0 top-0 left-0 z-50 flex h-full w-[80%] max-w-sm flex-col justify-between bg-white dark:bg-obsidian-900 dark:text-white px-6 pb-6 pt-8 text-slate-900 transition-transform duration-300 ease-in-out lg:hidden border-r border-slate-200 dark:border-obsidian-750 shadow-2xl overflow-y-auto`}
      >
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center gap-3 pb-4 border-b border-slate-200 dark:border-obsidian-750">
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
              <FaUserShield size={22} />
            </div>
            <div>
              <h2 className="text-base font-bold font-display tracking-wide uppercase">
                VELOCE Concierge
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                VIP Private Fleet Services
              </p>
            </div>
          </div>

          {/* Nav links */}
          <nav className="space-y-1">
            {Navlinks.map((data) => (
              <Link
                key={data.id}
                to={data.path}
                onClick={() => setShowMenu(false)}
                className="flex items-center justify-between py-3 px-3 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-obsidian-800 hover:text-primary dark:hover:text-primary transition-colors text-sm font-semibold"
              >
                <span>{data.name}</span>
                <span className="text-xs text-primary font-mono">→</span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom details */}
        <div className="pt-6 border-t border-slate-200 dark:border-obsidian-750 space-y-4">
          <div className="text-xs space-y-2 text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-primary" />
              <span>Beverly Hills · Manhattan · Miami · London</span>
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-primary" />
              <span>24/7 VIP Line: +1 (800) 555-8356</span>
            </div>
          </div>

          <Link
            to="/fleet"
            onClick={() => setShowMenu(false)}
            className="w-full btn-primary text-center block py-2.5 text-xs font-semibold uppercase tracking-wider"
          >
            Explore Available Fleet
          </Link>
        </div>
      </div>
    </>
  );
};

export default ResponsiveMenu;
