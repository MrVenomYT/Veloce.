import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { RiPhoneLine } from "react-icons/ri";
import ResponsiveMenu from "./ResponsiveMenu";
import { Navlinks } from "./Navlinks";

const Navbar = ({ theme, setTheme }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-obsidian-950/95 backdrop-blur-md shadow-md border-b border-slate-200/80 dark:border-obsidian-750/80 py-3"
          : "bg-white dark:bg-obsidian-950 border-b border-slate-200/50 dark:border-obsidian-800/50 py-4"
      }`}
    >
      <div className="container">
        <div className="flex justify-between items-center">
          {/* Zone 1: Single text element wordmark */}
          <Link
            to="/"
            className="flex items-center gap-2 group transition-transform duration-200 hover:opacity-90"
          >
            <span className="w-2.5 h-7 rounded-sm bg-primary block"></span>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white uppercase">
                VELOCE<span className="text-primary font-normal">.</span>
              </span>
            </div>
          </Link>

          {/* Zone 2: Clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-7">
            {Navlinks.map(({ id, name, path }) => (
              <Link
                key={id}
                to={path}
                className={`text-sm font-medium transition-colors py-1 relative group whitespace-nowrap ${
                  location.pathname === path
                    ? "text-primary font-semibold"
                    : "text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary"
                }`}
              >
                {name}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  location.pathname === path ? "w-full" : "w-0 group-hover:w-full"
                }`}></span>
              </Link>
            ))}
          </nav>

          {/* Zone 3: Actions (Theme toggle, VIP hotline, CTA button) */}
          <div className="flex items-center gap-3 md:gap-4">
            {/* VIP Concierge Phone Indicator */}
            <a
              href="tel:+18005558356"
              className="hidden xl:flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-primary transition-colors px-3 py-1.5 rounded-md border border-slate-200 dark:border-obsidian-750"
            >
              <RiPhoneLine className="text-primary text-sm" />
              <span>+1 (800) 555-VELOCE</span>
            </a>

            {/* Theme switch button */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle dark/light theme"
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-obsidian-850 transition-colors"
            >
              {theme === "dark" ? (
                <BiSolidSun className="text-xl text-primary" />
              ) : (
                <BiSolidMoon className="text-xl text-slate-700" />
              )}
            </button>

            {/* Primary Action Button */}
            <Link
              to="/fleet"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-lg bg-primary hover:bg-primary-light text-obsidian-950 font-semibold text-xs tracking-wider uppercase transition-all duration-200 shadow-md shadow-primary/20 hover:shadow-primary/30"
            >
              Reserve Fleet
            </Link>

            {/* Mobile Hamburger toggle */}
            <button
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
              className="lg:hidden p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-obsidian-850 transition-colors"
            >
              {showMenu ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </header>
  );
};

export default Navbar;
