import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { RiMapPinLine, RiPhoneLine, RiMailLine } from "react-icons/ri";

const fleetLinks = [
  { title: "BMW M8 Competition", path: "/fleet" },
  { title: "Porsche Taycan Turbo S", path: "/fleet" },
  { title: "Mercedes-AMG GT 63 S", path: "/fleet" },
  { title: "Range Rover SV Autobiography", path: "/fleet" },
  { title: "Audi RS e-tron GT", path: "/fleet" },
  { title: "BMW 760i Executive Lounge", path: "/fleet" },
];

const hubLinks = [
  { title: "Los Angeles (LAX Signature)", path: "/contact" },
  { title: "New York (JFK Sheltair)", path: "/contact" },
  { title: "Miami (Opa-Locka FBO)", path: "/contact" },
  { title: "London (Heathrow Windsor)", path: "/contact" },
  { title: "Dubai (DWC VIP Terminal)", path: "/contact" },
];

const serviceLinks = [
  { title: "Private Aviation Tarmac Drop", path: "/#experience" },
  { title: "Dedicated Chauffeur Protocol", path: "/#experience" },
  { title: "Sovereign Membership Privileges", path: "/membership" },
  { title: "Zero-Deductible Coverage & Limits", path: "/security-and-insurance" },
  { title: "Web Digital Concierge & Passes", path: "/membership" },
];

const Footer = () => {
  return (
    <footer className="bg-slate-900 dark:bg-obsidian-950 text-slate-400 text-xs border-t border-slate-800 dark:border-obsidian-800 transition-colors duration-300">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="flex items-center gap-2">
              <span className="w-2.5 h-7 rounded-sm bg-primary block"></span>
              <span className="text-2xl font-display font-extrabold tracking-tight text-white uppercase">
                VELOCE<span className="text-primary font-normal">.</span>
              </span>
            </Link>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              The premier sovereign mobility service for private aviation travelers, executives, and automotive connoisseurs. Operating privately-owned fleets in California, New York, Florida, and the United Kingdom.
            </p>

            <div className="space-y-2 pt-2 text-slate-300">
              <div className="flex items-center gap-2.5">
                <RiMapPinLine className="text-primary text-sm shrink-0" />
                <span>9405 Wilshire Blvd, Beverly Hills, CA 90212</span>
              </div>
              <div className="flex items-center gap-2.5">
                <RiPhoneLine className="text-primary text-sm shrink-0" />
                <span>+1 (800) 555-VELOCE (8356)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <RiMailLine className="text-primary text-sm shrink-0" />
                <span>concierge@veloce-mobility.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2 text-slate-400">
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-primary hover:text-obsidian-950 transition-colors">
                <FaInstagram size={16} />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-primary hover:text-obsidian-950 transition-colors">
                <FaLinkedin size={16} />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-primary hover:text-obsidian-950 transition-colors">
                <FaTwitter size={16} />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-primary hover:text-obsidian-950 transition-colors">
                <FaYoutube size={16} />
              </a>
            </div>
          </div>

          {/* Col 2: Fleet */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white font-mono">
              Featured Fleet
            </h4>
            <ul className="space-y-2">
              {fleetLinks.map((item) => (
                <li key={item.title}>
                  <Link to={item.path} className="hover:text-primary transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Operating Hubs */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white font-mono">
              Operating Hubs
            </h4>
            <ul className="space-y-2">
              {hubLinks.map((item) => (
                <li key={item.title}>
                  <Link to={item.path} className="hover:text-primary transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Client Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white font-mono">
              Concierge Services
            </h4>
            <ul className="space-y-2">
              {serviceLinks.map((item) => (
                <li key={item.title}>
                  <Link to={item.path} className="hover:text-primary transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom legal bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 dark:border-obsidian-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© 2026 VELOCE Luxury Mobility Group Inc. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <span>·</span>
            <Link to="/terms-and-conditions" className="hover:text-primary transition-colors">
              Rental Terms & Conditions
            </Link>
            <span>·</span>
            <Link to="/security-and-insurance" className="hover:text-primary transition-colors">
              Security & Insurance
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
