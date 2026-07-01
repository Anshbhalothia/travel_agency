"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, MapPin, Calendar, Users, ChevronDown, Plus, Minus } from "lucide-react";

const TABS = ["Hotel", "Tours", "Activity", "Rental", "Car", "Yacht"];
const DESTINATIONS = ["Dubai, UAE", "Bali, Indonesia", "Thailand", "Singapore", "Maldives", "Istanbul, Turkey", "Greater London, UK", "Europe"];

export default function DestinationHero() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("Hotel");
  const [selectedLocation, setSelectedLocation] = useState("");
  
  // Hotel specific
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guestsOpen, setGuestsOpen] = useState(false);
  const [guests, setGuests] = useState({ rooms: 1, adults: 2, children: 0 });
  const popupRef = useRef<HTMLDivElement>(null);

  // Secondary Fields
  const [tourType, setTourType] = useState("");
  const [activityType, setActivityType] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [tripType, setTripType] = useState("");
  const [charterType, setCharterType] = useState("");

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) setGuestsOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const updateGuests = (field: keyof typeof guests, delta: number) => {
    setGuests(prev => ({ ...prev, [field]: Math.max(0, prev[field] + delta) }));
  };

  const handleSearch = () => {
    const params = new URLSearchParams();
    params.set("tab", activeTab);
    if (selectedLocation) params.set("loc", selectedLocation);

    if (activeTab === "Hotel") {
      if (checkIn) params.set("checkIn", checkIn);
      if (checkOut) params.set("checkOut", checkOut);
      params.set("rooms", String(guests.rooms));
      params.set("adults", String(guests.adults));
      params.set("children", String(guests.children));
    } else if (activeTab === "Tours" && tourType) params.set("tourType", tourType);
    else if (activeTab === "Activity" && activityType) params.set("activityType", activityType);
    else if (activeTab === "Rental" && propertyType) params.set("propertyType", propertyType);
    else if (activeTab === "Car" && tripType) params.set("tripType", tripType);
    else if (activeTab === "Yacht" && charterType) params.set("charterType", charterType);

    const gridElement = document.getElementById("results-grid");
    if (gridElement) gridElement.scrollIntoView({ behavior: "smooth" });
    
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <section className="relative h-screen min-h-[680px] flex items-center pt-[90px] box-border overflow-hidden bg-[#050816]">
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1439066615861-d1af74d74000?q=80&w=1920&auto=format&fit=crop" alt="Hero" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050816]/90 via-[#050816]/60 to-[#050816]/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/70 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-16 animate-[destFadeUp_0.9s_0.2s_both]">
        <div className="max-w-2xl mb-10">
          <p className="uppercase tracking-[6px] text-[#D4AF37] text-sm font-semibold mb-4">
            Explore the World
          </p>
          <h1 
            className="text-5xl md:text-7xl text-white font-bold leading-tight mb-4"
            style={{ fontFamily: "var(--ab-display, serif)" }}
          >
            Find Your Next
            <em 
              className="block italic mt-[6px] text-[0.82em]" 
              style={{ color: "var(--ab-gold, #D4AF37)" }}
            >
              Destination
            </em>
          </h1>
        </div>
        <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl">
          <div className="flex overflow-x-auto hide-scrollbar gap-2 mb-6 border-b border-white/10 pb-4">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-6 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                  activeTab === tab ? "text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                {tab}
                {activeTab === tab && <motion.div layoutId="tabUnderline" className="absolute -bottom-[17px] left-0 right-0 h-[2px] bg-[#D4AF37]" />}
              </button>
            ))}
          </div>

          <div className="min-h-[60px]">
            <AnimatePresence mode="wait">
              <motion.div key={activeTab} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                
                <div className="relative bg-[#050816]/50 border border-white/10 rounded-xl p-3 md:col-span-1">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37] w-5 h-5" />
                  <select value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)} className="w-full bg-transparent text-white pl-10 outline-none appearance-none cursor-pointer text-sm">
                    <option value="" className="bg-[#050816]">Where to?</option>
                    {DESTINATIONS.map(d => <option key={d} value={d} className="bg-[#050816]">{d}</option>)}
                  </select>
                </div>

                {activeTab === "Hotel" ? (
                  <>
                    <div className="relative bg-[#050816]/50 border border-white/10 rounded-xl p-3">
                      <input type="date" value={checkIn} onChange={e => setCheckIn(e.target.value)} className="w-full bg-transparent text-white outline-none cursor-pointer [color-scheme:dark] text-sm" />
                    </div>
                    <div className="relative bg-[#050816]/50 border border-white/10 rounded-xl p-3">
                      <input type="date" value={checkOut} onChange={e => setCheckOut(e.target.value)} className="w-full bg-transparent text-white outline-none cursor-pointer [color-scheme:dark] text-sm" />
                    </div>
                    
                    <div className="relative" ref={popupRef}>
                      <button onClick={() => setGuestsOpen(!guestsOpen)} className="w-full bg-[#050816]/50 border border-white/10 rounded-xl p-3 flex items-center text-left">
                        <Users className="text-[#D4AF37] w-5 h-5 mr-3 shrink-0" />
                        <span className="text-white text-sm truncate">{guests.rooms} Rm · {guests.adults + guests.children} Gsts</span>
                        <ChevronDown className="w-4 h-4 text-gray-400 ml-auto" />
                      </button>
                      <AnimatePresence>
                        {guestsOpen && (
                          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute top-full left-0 mt-2 w-full min-w-[240px] bg-[#050816] border border-[#D4AF37]/30 rounded-xl p-4 shadow-xl z-50">
                            {Object.entries(guests).map(([key, val]) => (
                              <div key={key} className="flex justify-between items-center mb-4 last:mb-0">
                                <span className="capitalize text-white text-sm">{key}</span>
                                <div className="flex items-center gap-3">
                                  <button onClick={() => updateGuests(key as keyof typeof guests, -1)} className="p-1 rounded bg-white/10 hover:bg-[#D4AF37] hover:text-black"><Minus className="w-4 h-4" /></button>
                                  <span className="w-4 text-center text-white">{val}</span>
                                  <button onClick={() => updateGuests(key as keyof typeof guests, 1)} className="p-1 rounded bg-white/10 hover:bg-[#D4AF37] hover:text-black"><Plus className="w-4 h-4" /></button>
                                </div>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </>
                ) : (
                  <div className="relative bg-[#050816]/50 border border-white/10 rounded-xl p-3 md:col-span-2">
                    <select 
                      value={
                        activeTab === "Tours" ? tourType :
                        activeTab === "Activity" ? activityType :
                        activeTab === "Rental" ? propertyType :
                        activeTab === "Car" ? tripType : charterType
                      }
                      onChange={(e) => {
                        if (activeTab === "Tours") setTourType(e.target.value);
                        else if (activeTab === "Activity") setActivityType(e.target.value);
                        else if (activeTab === "Rental") setPropertyType(e.target.value);
                        else if (activeTab === "Car") setTripType(e.target.value);
                        else if (activeTab === "Yacht") setCharterType(e.target.value);
                      }}
                      className="w-full bg-transparent text-white outline-none appearance-none cursor-pointer text-sm"
                    >
                      <option value="" className="bg-[#050816]">Any Type</option>
                      {activeTab === "Tours" && ["Day Trip", "Multi-Day", "Cultural", "Adventure"].map(o => <option key={o} value={o} className="bg-[#050816]">{o}</option>)}
                      {activeTab === "Activity" && ["Outdoor", "Water Sports", "Cultural", "Nightlife"].map(o => <option key={o} value={o} className="bg-[#050816]">{o}</option>)}
                      {activeTab === "Rental" && ["Apartment", "Villa", "Resort", "Penthouse"].map(o => <option key={o} value={o} className="bg-[#050816]">{o}</option>)}
                      {activeTab === "Car" && ["One Way", "Round Trip", "Airport Transfer"].map(o => <option key={o} value={o} className="bg-[#050816]">{o}</option>)}
                      {activeTab === "Yacht" && ["Private", "Group", "Domestic", "International"].map(o => <option key={o} value={o} className="bg-[#050816]">{o}</option>)}
                    </select>
                  </div>
                )}

                <button onClick={handleSearch} className={`${activeTab !== "Hotel" ? "md:col-span-1" : "md:col-span-full mt-2"} bg-[#D4AF37] text-black font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-[#eadd87] transition-all hover:scale-[1.02]`}>
                  <Search className="w-5 h-5" /> Search
                </button>

              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}