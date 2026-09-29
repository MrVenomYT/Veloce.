import React, { useState } from "react";
import { 
  RiPhoneLine, 
  RiMailSendLine, 
  RiMapPin2Line, 
  RiTimeLine,
  RiCheckDoubleLine 
} from "react-icons/ri";

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "Executive Self-Drive",
    vehicle: "BMW M8 Competition Gran Coupé",
    city: "Los Angeles (LAX / Beverly Hills)",
    notes: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-obsidian-950 transition-colors duration-300">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Info & Hubs */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <div
                data-aos="fade-up"
                className="text-xs font-semibold uppercase tracking-widest text-primary font-mono"
              >
                VIP Fleet Concierge
              </div>
              <h2
                data-aos="fade-up"
                data-aos-delay="100"
                className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white"
              >
                Initiate Your Bespoke Mobility Itinerary
              </h2>
              <p
                data-aos="fade-up"
                data-aos-delay="200"
                className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed"
              >
                Whether you require an immediate private jet tarmac handover, long-term corporate leasing, or a multi-vehicle film production convoy, our fleet directors are on standby 24/7.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div data-aos="fade-up" data-aos-delay="300" className="space-y-4">
              <div className="glass-card p-4 flex items-center gap-4">
                <div className="w-11 h-11 rounded-lg bg-primary/15 flex items-center justify-center text-primary shrink-0">
                  <RiPhoneLine className="text-xl" />
                </div>
                <div>
                  <h4 className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    24/7 Global VIP Dispatch Hotline
                  </h4>
                  <a
                    href="tel:+18005558356"
                    className="text-sm font-bold text-slate-900 dark:text-white hover:text-primary transition-colors font-mono"
                  >
                    +1 (800) 555-VELOCE (8356)
                  </a>
                </div>
              </div>

              <div className="glass-card p-4 flex items-center gap-4">
                <div className="w-11 h-11 rounded-lg bg-primary/15 flex items-center justify-center text-primary shrink-0">
                  <RiMailSendLine className="text-xl" />
                </div>
                <div>
                  <h4 className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    Executive Concierge Inquiries
                  </h4>
                  <a
                    href="mailto:concierge@veloce-mobility.com"
                    className="text-sm font-bold text-slate-900 dark:text-white hover:text-primary transition-colors font-mono"
                  >
                    concierge@veloce-mobility.com
                  </a>
                </div>
              </div>

              <div className="glass-card p-4 flex items-center gap-4">
                <div className="w-11 h-11 rounded-lg bg-primary/15 flex items-center justify-center text-primary shrink-0">
                  <RiMapPin2Line className="text-xl" />
                </div>
                <div>
                  <h4 className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    Operating Flagship Hubs
                  </h4>
                  <p className="text-xs font-semibold text-slate-900 dark:text-white">
                    Los Angeles · Manhattan · Miami Beach · London Mayfair · Dubai
                  </p>
                </div>
              </div>
            </div>

            {/* Response Time Guarantee */}
            <div data-aos="fade-up" className="p-4 rounded-xl bg-primary/10 border border-primary/20 text-xs text-slate-800 dark:text-slate-200 flex items-center gap-3">
              <RiTimeLine className="text-primary text-xl shrink-0" />
              <span>
                <strong>15-Minute Response SLA:</strong> All digital inquiries submitted through this portal receive priority dispatch review within 15 minutes.
              </span>
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div className="lg:col-span-7">
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="glass-card p-6 sm:p-8 border border-slate-200 dark:border-obsidian-750 shadow-xl"
            >
              {!formSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1 mb-4">
                    <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white">
                      Request Fleet Itinerary & Quote
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Fill out your itinerary details below for guaranteed vehicle allocation.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Full Legal Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Jonathan Vance"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg text-xs bg-slate-100 dark:bg-obsidian-850 border border-slate-300 dark:border-obsidian-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Work / Personal Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. j.vance@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg text-xs bg-slate-100 dark:bg-obsidian-850 border border-slate-300 dark:border-obsidian-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Mobile Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +1 (310) 555-0199"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg text-xs bg-slate-100 dark:bg-obsidian-850 border border-slate-300 dark:border-obsidian-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Service Required
                      </label>
                      <select
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-obsidian-850 border border-slate-300 dark:border-obsidian-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
                      >
                        <option>Executive Self-Drive Hire</option>
                        <option>Dedicated Chauffeur & Armored Escort</option>
                        <option>Corporate Fleet Account (Monthly)</option>
                        <option>Film & Commercial Production Convoy</option>
                        <option>Private Aviation Tarmac Handover</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Primary Vehicle Selection
                      </label>
                      <select
                        value={formData.vehicle}
                        onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-obsidian-850 border border-slate-300 dark:border-obsidian-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
                      >
                        <option>BMW M8 Competition Gran Coupé ($320/day)</option>
                        <option>Porsche Taycan Turbo S ($380/day)</option>
                        <option>Mercedes-AMG GT 63 S ($350/day)</option>
                        <option>Range Rover SV Autobiography ($290/day)</option>
                        <option>Audi RS e-tron GT Carbon ($310/day)</option>
                        <option>BMW 760i xDrive Executive Lounge ($260/day)</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Destination City / Airport
                      </label>
                      <select
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-obsidian-850 border border-slate-300 dark:border-obsidian-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
                      >
                        <option>Los Angeles (LAX Signature / Beverly Hills)</option>
                        <option>New York (JFK / LGA / Manhattan Suite)</option>
                        <option>Miami (KOPF FBO / South Beach)</option>
                        <option>London (Heathrow VIP / Mayfair)</option>
                        <option>Dubai (DWC VIP Terminal / Downtown)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Flight Details / Special Concierge Notes
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Arriving on NetJets flight #NJ382 at Signature Aviation LAX. Please prepare vehicle with cabin temperature set to 68°F and child booster seat."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg text-xs bg-slate-100 dark:bg-obsidian-850 border border-slate-300 dark:border-obsidian-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full btn-primary py-3 text-xs font-bold uppercase tracking-wider"
                    >
                      Submit Priority Inquiry
                    </button>
                  </div>
                </form>
              ) : (
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto text-3xl">
                    <RiCheckDoubleLine />
                  </div>
                  <h3 className="text-2xl font-bold font-display text-slate-900 dark:text-white">
                    Priority Inquiry Dispatched
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                    Thank you, {formData.name}. Your itinerary for the <strong>{formData.vehicle}</strong> at {formData.city} has been routed to our Senior Fleet Concierge. We will confirm vehicle availability within 15 minutes.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="btn-secondary text-xs"
                  >
                    Submit Another Request
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
