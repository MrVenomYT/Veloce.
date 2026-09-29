import React, { useState } from "react";
import { 
  HiOutlineSparkles, 
  HiOutlineShieldCheck, 
  HiX,
  HiOutlineCheck,
  HiOutlineLocationMarker,
  HiOutlineUser,
  HiOutlineMail,
  HiOutlinePhone
} from "react-icons/hi";
import { 
  RiSpeedUpLine, 
  RiFlashlightLine, 
  RiUser3Line, 
  RiCheckDoubleFill
} from "react-icons/ri";
import { fleetVehicles } from "../../data/fleetData";

const CarList = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedCar, setSelectedCar] = useState(null);
  const [reservationCar, setReservationCar] = useState(null);

  // Reservation form state
  const [rentalDays, setRentalDays] = useState(3);
  const [includeDelivery, setIncludeDelivery] = useState(true);
  const [includeChauffeur, setIncludeChauffeur] = useState(false);
  const [includeInsurance, setIncludeInsurance] = useState(true);
  const [pickupCity, setPickupCity] = useState("Los Angeles (LAX VIP)");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingRef, setBookingRef] = useState("");

  const filteredCars = selectedCategory === "all"
    ? fleetVehicles
    : fleetVehicles.filter((c) => c.category === selectedCategory);

  const calculateTotal = (car) => {
    if (!car) return { discountedDaily: 0, discountRate: 1, subtotal: 0, deliveryFee: 0, chauffeurFee: 0, insuranceFee: 0 };
    const baseDaily = car.price;
    const discountRate = rentalDays >= 7 ? 0.8 : rentalDays >= 3 ? 0.9 : 1.0;
    const discountedDaily = Math.round(baseDaily * discountRate);
    let subtotal = discountedDaily * rentalDays;

    if (includeDelivery) subtotal += 75;
    if (includeChauffeur) subtotal += 150 * rentalDays;
    if (includeInsurance) subtotal += 35 * rentalDays;

    return {
      discountedDaily,
      discountRate,
      subtotal,
      deliveryFee: includeDelivery ? 75 : 0,
      chauffeurFee: includeChauffeur ? 150 * rentalDays : 0,
      insuranceFee: includeInsurance ? 35 * rentalDays : 0,
    };
  };

  const handleOpenReservation = (car) => {
    setReservationCar(car);
    setBookingConfirmed(false);
  };

  const handleConfirmReservation = (e) => {
    e.preventDefault();
    const ref = `VEL-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(ref);
    setBookingConfirmed(true);
  };

  return (
    <section id="fleet" className="py-20 bg-white dark:bg-obsidian-900 transition-colors duration-300">
      <div className="container">
        {/* Section Heading & Context */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div
              data-aos="fade-up"
              className="text-xs font-semibold uppercase tracking-widest text-primary font-mono"
            >
              Curated Executive Fleet
            </div>
            <h2
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white"
            >
              Select Your Masterpiece on Wheels
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-sm sm:text-base text-slate-600 dark:text-slate-300"
            >
              Every vehicle in our collection is precision-detailed, factory-certified, and guaranteed to match your exact reserved VIN and trim.
            </p>
          </div>

          {/* Interactive Filter Tabs (functional segmented buttons) */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-obsidian-850 border border-slate-200 dark:border-obsidian-750 self-start md:self-auto"
          >
            {[
              { id: "all", label: "All Vehicles" },
              { id: "sedan", label: "Executive Sedans" },
              { id: "exotic", label: "Exotic & GT" },
              { id: "suv", label: "Performance SUVs" },
              { id: "electric", label: "Electric Pioneers" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all duration-200 whitespace-nowrap ${
                  selectedCategory === tab.id
                    ? "bg-obsidian-950 text-white dark:bg-primary dark:text-obsidian-950 shadow-sm"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map((car) => (
            <div
              key={car.id}
              data-aos="fade-up"
              data-aos-delay={car.aosDelay}
              className="glass-card group flex flex-col justify-between overflow-hidden border border-slate-200/90 dark:border-obsidian-750 hover:border-primary/60 dark:hover:border-primary/60 transition-all duration-300 hover:shadow-xl"
            >
              <div>
                {/* Image Showcase Container */}
                <div className="relative w-full h-56 bg-gradient-to-b from-slate-100 to-slate-200/50 dark:from-obsidian-850 dark:to-obsidian-950 flex items-center justify-center p-4 overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_12px_18px_rgba(0,0,0,0.25)]"
                  />
                  
                  {/* Category label */}
                  <div className="absolute top-3 left-3 text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                    {car.categoryLabel}
                  </div>

                  {/* Guaranteed tag */}
                  <div className="absolute top-3 right-3 flex items-center gap-1 text-[11px] font-semibold text-primary bg-obsidian-950/80 px-2 py-0.5 rounded backdrop-blur-sm">
                    <HiOutlineShieldCheck className="text-xs" />
                    <span>Exact VIN Lock</span>
                  </div>
                </div>

                {/* Car Content */}
                <div className="p-5 space-y-4">
                  {/* Title and Pricing */}
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white leading-snug group-hover:text-primary transition-colors">
                      {car.name}
                    </h3>
                  </div>

                  {/* Daily Rate with tabular nums */}
                  <div className="flex items-baseline gap-1.5 pb-2 border-b border-slate-200 dark:border-obsidian-750">
                    <span className="text-2xl font-bold font-mono tabular-nums text-slate-900 dark:text-white">
                      ${car.price}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      / 24 Hours (All Taxes Inc.)
                    </span>
                  </div>

                  {/* Specifications Grid */}
                  <div className="grid grid-cols-3 gap-2 text-xs py-1">
                    <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
                      <RiFlashlightLine className="text-primary text-sm shrink-0" />
                      <span className="font-mono tabular-nums font-semibold text-slate-800 dark:text-slate-200">{car.hp} HP</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
                      <RiSpeedUpLine className="text-primary text-sm shrink-0" />
                      <span className="font-mono tabular-nums font-semibold text-slate-800 dark:text-slate-200">{car.acceleration}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
                      <RiUser3Line className="text-primary text-sm shrink-0" />
                      <span className="font-medium text-slate-800 dark:text-slate-200">{car.seats} Seats</span>
                    </div>
                  </div>

                  {/* Highlight feature */}
                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 italic">
                    ✦ {car.highlight}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-5 pt-0 grid grid-cols-2 gap-2">
                <button
                  onClick={() => setSelectedCar(car)}
                  className="px-3 py-2 rounded-lg border border-slate-300 dark:border-obsidian-700 hover:border-primary/60 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors text-center"
                >
                  Full Specs
                </button>
                <button
                  onClick={() => handleOpenReservation(car)}
                  className="px-3 py-2 rounded-lg bg-primary hover:bg-primary-light text-obsidian-950 text-xs font-bold uppercase tracking-wider transition-all duration-200 text-center shadow-sm shadow-primary/20"
                >
                  Reserve
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div
          data-aos="fade-up"
          className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-obsidian-900 via-obsidian-850 to-obsidian-900 border border-obsidian-750 text-white flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold font-display">
              Need a Custom Fleet for Corporate Events or Film Production?
            </h4>
            <p className="text-xs text-slate-400">
              We coordinate multi-vehicle motorcades, armored transport, and dedicated chauffeurs across California, New York, and Florida.
            </p>
          </div>
          <a
            href="#contact"
            className="btn-primary text-xs font-bold uppercase tracking-wider shrink-0"
          >
            Speak with Fleet Director
          </a>
        </div>
      </div>

      {/* MODAL 1: Full Vehicle Specs */}
      {selectedCar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="glass-card max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 relative border border-slate-200 dark:border-obsidian-700">
            <button
              onClick={() => setSelectedCar(null)}
              className="absolute top-4 right-4 p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-obsidian-800 transition-colors"
            >
              <HiX size={20} />
            </button>

            {/* Header */}
            <div className="space-y-1 pr-8">
              <div className="text-xs font-semibold uppercase tracking-wider text-primary font-mono">
                {selectedCar.categoryLabel}
              </div>
              <h3 className="text-2xl font-bold font-display text-slate-900 dark:text-white">
                {selectedCar.name}
              </h3>
            </div>

            {/* Image */}
            <div className="w-full h-48 sm:h-56 bg-slate-100 dark:bg-obsidian-850 rounded-xl flex items-center justify-center p-4">
              <img
                src={selectedCar.image}
                alt={selectedCar.name}
                referrerPolicy="no-referrer"
                className="max-h-full object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.3)]"
              />
            </div>

            {/* Specs Table */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-obsidian-850 border border-slate-200 dark:border-obsidian-750">
                <span className="text-slate-500 dark:text-slate-400 block mb-1">Engine / Powerplant</span>
                <span className="font-semibold text-slate-900 dark:text-white">{selectedCar.engine}</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-obsidian-850 border border-slate-200 dark:border-obsidian-750">
                <span className="text-slate-500 dark:text-slate-400 block mb-1">Horsepower</span>
                <span className="font-bold font-mono text-primary">{selectedCar.hp} HP</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-obsidian-850 border border-slate-200 dark:border-obsidian-750">
                <span className="text-slate-500 dark:text-slate-400 block mb-1">0 to 60 MPH</span>
                <span className="font-bold font-mono text-slate-900 dark:text-white">{selectedCar.acceleration}</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-obsidian-850 border border-slate-200 dark:border-obsidian-750">
                <span className="text-slate-500 dark:text-slate-400 block mb-1">Top Speed</span>
                <span className="font-semibold text-slate-900 dark:text-white">{selectedCar.topSpeed}</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-obsidian-850 border border-slate-200 dark:border-obsidian-750">
                <span className="text-slate-500 dark:text-slate-400 block mb-1">Transmission</span>
                <span className="font-semibold text-slate-900 dark:text-white">{selectedCar.transmission}</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-obsidian-850 border border-slate-200 dark:border-obsidian-750">
                <span className="text-slate-500 dark:text-slate-400 block mb-1">Range / Tank</span>
                <span className="font-semibold text-slate-900 dark:text-white">{selectedCar.range}</span>
              </div>
            </div>

            {/* Standard Inclusions */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-obsidian-850 border border-slate-200 dark:border-obsidian-750 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-1.5">
                <HiOutlineSparkles className="text-primary" />
                <span>Complimentary Executive Inclusions</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <RiCheckDoubleFill className="text-primary shrink-0" />
                  <span>Comprehensive Collision Coverage (Zero Deductible)</span>
                </div>
                <div className="flex items-center gap-2">
                  <RiCheckDoubleFill className="text-primary shrink-0" />
                  <span>Free Additional Approved Drivers</span>
                </div>
                <div className="flex items-center gap-2">
                  <RiCheckDoubleFill className="text-primary shrink-0" />
                  <span>24/7 Dedicated Concierge & Roadside Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <RiCheckDoubleFill className="text-primary shrink-0" />
                  <span>E-ZPass / SunPass Toll Transponder Included</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between pt-2 border-t border-slate-200 dark:border-obsidian-750">
              <div>
                <span className="text-2xl font-bold font-mono text-slate-900 dark:text-white">${selectedCar.price}</span>
                <span className="text-xs text-slate-500"> / day</span>
              </div>
              <button
                onClick={() => {
                  const car = selectedCar;
                  setSelectedCar(null);
                  handleOpenReservation(car);
                }}
                className="btn-primary"
              >
                Proceed to Instant Reservation
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: Interactive Booking Reservation Flow */}
      {reservationCar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
          <div className="glass-card max-w-3xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 space-y-6 relative border border-slate-200 dark:border-obsidian-700">
            <button
              onClick={() => {
                setReservationCar(null);
                setBookingConfirmed(false);
              }}
              className="absolute top-4 right-4 p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-obsidian-800 transition-colors"
            >
              <HiX size={20} />
            </button>

            {!bookingConfirmed ? (
              <form onSubmit={handleConfirmReservation} className="space-y-6">
                {/* Header */}
                <div className="space-y-1">
                  <div className="text-xs font-semibold uppercase tracking-wider text-primary font-mono">
                    Instant Secure Reservation
                  </div>
                  <h3 className="text-2xl font-bold font-display text-slate-900 dark:text-white">
                    Book {reservationCar.name}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Lock in guaranteed vehicle availability with transparent pricing and zero hidden fees.
                  </p>
                </div>

                {/* Duration Slider with Tiered Discount */}
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-obsidian-850 border border-slate-200 dark:border-obsidian-750 space-y-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-semibold text-slate-700 dark:text-slate-300">
                      Rental Duration: <span className="font-bold text-primary">{rentalDays} {rentalDays === 1 ? 'Day' : 'Days'}</span>
                    </span>
                    {rentalDays >= 7 ? (
                      <span className="text-emerald-500 font-bold font-mono">Weekly Tier Discount (-20% Applied)</span>
                    ) : rentalDays >= 3 ? (
                      <span className="text-emerald-500 font-bold font-mono">3+ Day Multi-Day Discount (-10% Applied)</span>
                    ) : (
                      <span className="text-slate-500">Standard Daily Rate</span>
                    )}
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="14"
                    value={rentalDays}
                    onChange={(e) => setRentalDays(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-200 dark:bg-obsidian-700 rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                  <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                    <span>1 Day</span>
                    <span>3 Days (-10%)</span>
                    <span>7 Days (-20%)</span>
                    <span>14 Days</span>
                  </div>
                </div>

                {/* Pickup Location & Add-on Services */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Location Selector */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                      <HiOutlineLocationMarker className="text-primary text-sm" />
                      <span>Delivery Hub / Airport Terminal</span>
                    </label>
                    <select
                      value={pickupCity}
                      onChange={(e) => setPickupCity(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-obsidian-850 border border-slate-300 dark:border-obsidian-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
                    >
                      <option>Los Angeles (LAX VIP Signature / Atlantic)</option>
                      <option>Beverly Hills Private Concierge Showroom</option>
                      <option>New York (JFK / LGA Sheltair Aviation)</option>
                      <option>Miami Executive Airport (KOPF FBO)</option>
                      <option>Manhattan Hotel & Residence VIP Handover</option>
                      <option>London Heathrow VIP Windsor Suite</option>
                    </select>
                  </div>

                  {/* Add-ons Checkboxes */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block">
                      VIP Add-on Services
                    </label>
                    <div className="space-y-1.5 text-xs">
                      <label className="flex items-center justify-between p-2 rounded-lg bg-slate-100 dark:bg-obsidian-850 border border-slate-200 dark:border-obsidian-750 cursor-pointer">
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={includeDelivery}
                            onChange={(e) => setIncludeDelivery(e.target.checked)}
                            className="accent-primary"
                          />
                          <span>White-Glove Tarmac / Residence Handover</span>
                        </div>
                        <span className="font-mono font-bold">$75 flat</span>
                      </label>
                      <label className="flex items-center justify-between p-2 rounded-lg bg-slate-100 dark:bg-obsidian-850 border border-slate-200 dark:border-obsidian-750 cursor-pointer">
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={includeChauffeur}
                            onChange={(e) => setIncludeChauffeur(e.target.checked)}
                            className="accent-primary"
                          />
                          <span>Uniformed Executive Chauffeur</span>
                        </div>
                        <span className="font-mono font-bold">+$150/day</span>
                      </label>
                      <label className="flex items-center justify-between p-2 rounded-lg bg-slate-100 dark:bg-obsidian-850 border border-slate-200 dark:border-obsidian-750 cursor-pointer">
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={includeInsurance}
                            onChange={(e) => setIncludeInsurance(e.target.checked)}
                            className="accent-primary"
                          />
                          <span>Zero-Deductible Full Shield Coverage</span>
                        </div>
                        <span className="font-mono font-bold">+$35/day</span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Guest Contact Details */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1">
                      <HiOutlineUser className="text-primary text-xs" />
                      <span>Full Name</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Marcus Vance"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg text-xs bg-slate-100 dark:bg-obsidian-850 border border-slate-300 dark:border-obsidian-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1">
                      <HiOutlineMail className="text-primary text-xs" />
                      <span>Work / Personal Email</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. m.vance@apexcapital.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg text-xs bg-slate-100 dark:bg-obsidian-850 border border-slate-300 dark:border-obsidian-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1">
                      <HiOutlinePhone className="text-primary text-xs" />
                      <span>Mobile Number</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +1 (310) 555-0199"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg text-xs bg-slate-100 dark:bg-obsidian-850 border border-slate-300 dark:border-obsidian-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                </div>

                {/* Price Breakdown Calculation */}
                {(() => {
                  const pricing = calculateTotal(reservationCar);
                  return (
                    <div className="p-4 rounded-xl bg-slate-100 dark:bg-obsidian-950 border border-slate-200 dark:border-obsidian-750 space-y-2">
                      <div className="flex justify-between text-xs text-slate-600 dark:text-slate-400">
                        <span>Daily Rate ({rentalDays} days @ ${pricing.discountedDaily}/day):</span>
                        <span className="font-mono tabular-nums font-semibold">${pricing.discountedDaily * rentalDays}</span>
                      </div>
                      {pricing.deliveryFee > 0 && (
                        <div className="flex justify-between text-xs text-slate-600 dark:text-slate-400">
                          <span>VIP Tarmac / Residence Handover:</span>
                          <span className="font-mono tabular-nums font-semibold">${pricing.deliveryFee}</span>
                        </div>
                      )}
                      {pricing.chauffeurFee > 0 && (
                        <div className="flex justify-between text-xs text-slate-600 dark:text-slate-400">
                          <span>Dedicated Chauffeur Service ({rentalDays} days):</span>
                          <span className="font-mono tabular-nums font-semibold">${pricing.chauffeurFee}</span>
                        </div>
                      )}
                      {pricing.insuranceFee > 0 && (
                        <div className="flex justify-between text-xs text-slate-600 dark:text-slate-400">
                          <span>Zero-Deductible Comprehensive Coverage:</span>
                          <span className="font-mono tabular-nums font-semibold">${pricing.insuranceFee}</span>
                        </div>
                      )}
                      <div className="pt-2 border-t border-slate-200 dark:border-obsidian-750 flex justify-between items-baseline">
                        <div>
                          <span className="text-base font-bold text-slate-900 dark:text-white">Estimated Total:</span>
                          <span className="text-[11px] text-slate-500 block">Includes all state taxes & roadside dispatch</span>
                        </div>
                        <span className="text-2xl font-bold font-mono text-primary tabular-nums">
                          ${pricing.subtotal}
                        </span>
                      </div>
                    </div>
                  );
                })()}

                {/* Submit Action */}
                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setReservationCar(null)}
                    className="btn-secondary text-xs"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn-primary text-xs font-bold uppercase tracking-wider"
                  >
                    Confirm & Lock Reservation
                  </button>
                </div>
              </form>
            ) : (
              /* Confirmation Screen */
              <div className="space-y-6 text-center py-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto text-3xl">
                  <HiOutlineCheck />
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-bold uppercase tracking-widest text-primary font-mono">
                    Reservation Confirmed
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 dark:text-white">
                    You're Ready to Drive, {fullName || "Guest"}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto">
                    Your reservation has been locked in our dispatch system. Our VIP concierge director has been notified and will contact you via WhatsApp / Phone within 15 minutes.
                  </p>
                </div>

                {/* Reservation Voucher Summary */}
                <div className="glass-card max-w-md mx-auto p-4 text-left text-xs space-y-2.5 border border-slate-200 dark:border-obsidian-700 bg-slate-50 dark:bg-obsidian-850">
                  <div className="flex justify-between border-b border-slate-200 dark:border-obsidian-750 pb-2">
                    <span className="text-slate-500">Booking Reference:</span>
                    <span className="font-mono font-bold text-primary">{bookingRef}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Vehicle:</span>
                    <span className="font-semibold text-slate-900 dark:text-white">{reservationCar.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Duration:</span>
                    <span className="font-semibold text-slate-900 dark:text-white">{rentalDays} Days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Handover Location:</span>
                    <span className="font-semibold text-slate-900 dark:text-white">{pickupCity}</span>
                  </div>
                  <div className="flex justify-between border-t border-slate-200 dark:border-obsidian-750 pt-2 font-bold text-sm">
                    <span className="text-slate-900 dark:text-white">Total Amount:</span>
                    <span className="font-mono text-primary">${calculateTotal(reservationCar).subtotal}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <button
                    onClick={() => {
                      setReservationCar(null);
                      setBookingConfirmed(false);
                    }}
                    className="btn-primary w-full sm:w-auto text-xs"
                  >
                    Done & Back to Fleet
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default CarList;
