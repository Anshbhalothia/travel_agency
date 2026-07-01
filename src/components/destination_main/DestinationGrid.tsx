"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Heart, MapPin, Star, Clock, Maximize, Bed, Car, Ship, LayoutGrid, List, SlidersHorizontal, X } from "lucide-react";
import { listingsData, Listing } from "@/data/listings";

const FILTERS = ["All", "Hotel", "Tours", "Activity", "Rental", "Car", "Yacht"];
const PAGE_SIZE = 12;

export default function DestinationGrid() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const tabQuery = searchParams.get("tab") || "All";
  const locQuery = searchParams.get("loc") || "";
  
  const [activeFilter, setActiveFilter] = useState(tabQuery);
  const [view, setView] = useState<"grid" | "list">("grid");
  const [sort, setSort] = useState("default");
  const [page, setPage] = useState(1);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  // Sidebar States
  const [priceMin, setPriceMin] = useState<number | "">("");
  const [priceMax, setPriceMax] = useState<number | "">("");
  const [ratingFilter, setRatingFilter] = useState<number | null>(null);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [selectedPropType, setSelectedPropType] = useState<string[]>([]);
  const [selectedDuration, setSelectedDuration] = useState<string>("Any");

  useEffect(() => {
    setActiveFilter(FILTERS.includes(tabQuery) ? tabQuery : "All");
  }, [tabQuery]);

  // Reset pagination on filter changes
  useEffect(() => { setPage(1); }, [activeFilter, locQuery, sort, priceMin, priceMax, ratingFilter, selectedAmenities, selectedPropType, selectedDuration]);

  const handleFilterClick = (f: string) => {
    setActiveFilter(f);
    router.push(`?tab=${f}${locQuery ? `&loc=${locQuery}` : ''}`, { scroll: false });
  };

  const clearAllFilters = () => {
    setPriceMin(""); setPriceMax(""); setRatingFilter(null);
    setSelectedAmenities([]); setSelectedPropType([]); setSelectedDuration("Any");
    setSort("default");
  };

  // 1. Core Filtering
  let filteredData = listingsData.filter(item => {
    if (activeFilter !== "All" && item.type !== activeFilter) return false;
    if (locQuery && item.location !== locQuery) return false;
    if (priceMin !== "" && item.price < priceMin) return false;
    if (priceMax !== "" && item.price > priceMax) return false;
    if (ratingFilter !== null && Math.floor(item.rating) !== ratingFilter) return false;
    
    if (selectedAmenities.length > 0) {
      if (!item.amenities) return false;
      const hasAll = selectedAmenities.every(a => item.amenities!.includes(a));
      if (!hasAll) return false;
    }
    
    if (selectedPropType.length > 0) {
      if (!item.propertyType || !selectedPropType.includes(item.propertyType)) return false;
    }

    if (selectedDuration !== "Any") {
      if (item.meta.duration !== selectedDuration) return false;
    }

    return true;
  });

  // 2. Sorting
  filteredData = [...filteredData].sort((a, b) => {
    if (sort === "price-asc") return a.price - b.price;
    if (sort === "price-desc") return b.price - a.price;
    if (sort === "rating") return b.rating - a.rating;
    return 0;
  });

  // 3. Pagination
  const totalPages = Math.ceil(filteredData.length / PAGE_SIZE);
  const paginatedData = filteredData.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <section id="results-grid" className="bg-[#050816] py-20 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Results Header */}
        <div className="text-center mb-8">
          <p className="text-gray-400 text-sm">
            Showing <span className="text-white font-semibold">{filteredData.length}</span> {activeFilter !== "All" ? activeFilter + "s" : "experiences"}
            {locQuery ? <> in <span className="text-[#D4AF37] italic">{locQuery}</span></> : ""}
          </p>
        </div>

        {/* Top Tab Bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => handleFilterClick(f)}
              className={`px-6 py-2 rounded-full border transition-all ${
                activeFilter === f ? "bg-[#D4AF37] border-[#D4AF37] text-black font-medium shadow-[0_0_20px_rgba(212,175,55,0.3)]" : "bg-transparent border-white/20 text-white hover:border-[#D4AF37] hover:text-[#D4AF37]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Toolbar: Mobile Filter Trigger, Sort, View Toggle */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-white/10">
          <button onClick={() => setMobileDrawerOpen(true)} className="lg:hidden flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-white hover:bg-white/10">
            <SlidersHorizontal className="w-4 h-4" /> Filters
          </button>
          <div className="hidden lg:block text-gray-400 text-sm">Fine-tune your search</div>

          <div className="flex items-center gap-4 ml-auto">
            <select value={sort} onChange={e => setSort(e.target.value)} className="bg-transparent border border-white/20 text-white text-sm rounded-lg px-3 py-2 outline-none focus:border-[#D4AF37] cursor-pointer">
              <option value="default" className="bg-[#050816]">Sort: Default</option>
              <option value="price-asc" className="bg-[#050816]">Price: Low to High</option>
              <option value="price-desc" className="bg-[#050816]">Price: High to Low</option>
              <option value="rating" className="bg-[#050816]">Top Rated</option>
            </select>
            <div className="flex border border-white/20 rounded-lg overflow-hidden">
              <button onClick={() => setView("grid")} className={`p-2 transition-colors ${view === "grid" ? "bg-[#D4AF37] text-black" : "bg-transparent text-gray-400 hover:text-white"}`}><LayoutGrid className="w-4 h-4" /></button>
              <button onClick={() => setView("list")} className={`p-2 transition-colors ${view === "list" ? "bg-[#D4AF37] text-black" : "bg-transparent text-gray-400 hover:text-white"}`}><List className="w-4 h-4" /></button>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar - Desktop Sticky */}
          <div className="hidden lg:block w-1/4 shrink-0">
            <div className="sticky top-24 bg-white/[0.02] border border-white/10 rounded-2xl p-6 backdrop-blur-sm space-y-8">
              <SidebarContent 
                clearAll={clearAllFilters} priceMin={priceMin} setPriceMin={setPriceMin} priceMax={priceMax} setPriceMax={setPriceMax}
                ratingFilter={ratingFilter} setRatingFilter={setRatingFilter}
                activeFilter={activeFilter} selectedAmenities={selectedAmenities} setSelectedAmenities={setSelectedAmenities}
                selectedPropType={selectedPropType} setSelectedPropType={setSelectedPropType}
                selectedDuration={selectedDuration} setSelectedDuration={setSelectedDuration}
              />
            </div>
          </div>

          {/* Grid Area */}
          <div className="flex-1">
            {paginatedData.length > 0 ? (
              <>
                <motion.div layout className={`grid gap-6 ${view === 'grid' ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'}`}>
                  <AnimatePresence>
                    {paginatedData.map(listing => (
                      <DestinationCard key={listing.id} listing={listing} view={view} />
                    ))}
                  </AnimatePresence>
                </motion.div>
                
                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center items-center gap-2 mt-12 pt-8 border-t border-white/10">
                    <button disabled={page === 1} onClick={() => { setPage(p => p - 1); document.getElementById('results-grid')?.scrollIntoView(); }} className="px-4 py-2 rounded-lg border border-white/20 text-white disabled:opacity-30 hover:bg-white/5 transition-colors">← Prev</button>
                    {Array.from({ length: totalPages }).map((_, i) => (
                      <button key={i} onClick={() => { setPage(i + 1); document.getElementById('results-grid')?.scrollIntoView(); }} className={`w-10 h-10 rounded-lg font-medium transition-colors ${page === i + 1 ? "bg-[#D4AF37] text-black" : "bg-transparent text-gray-400 hover:text-white hover:bg-white/5 border border-transparent"}`}>{i + 1}</button>
                    ))}
                    <button disabled={page === totalPages} onClick={() => { setPage(p => p + 1); document.getElementById('results-grid')?.scrollIntoView(); }} className="px-4 py-2 rounded-lg border border-white/20 text-white disabled:opacity-30 hover:bg-white/5 transition-colors">Next →</button>
                  </div>
                )}
              </>
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-32 border border-white/5 rounded-3xl bg-white/[0.01]">
                <p className="text-gray-400 text-lg">No experiences match your filters.</p>
                <button onClick={clearAllFilters} className="mt-4 text-[#D4AF37] font-medium border-b border-[#D4AF37] pb-1 hover:text-white hover:border-white transition-colors">Clear all filters</button>
              </motion.div>
            )}
          </div>
        </div>

        {/* Mobile Sidebar Drawer */}
        <AnimatePresence>
          {mobileDrawerOpen && (
            <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }} transition={{ type: "spring", damping: 25, stiffness: 200 }} className="fixed inset-0 z-50 flex flex-col justify-end lg:hidden">
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileDrawerOpen(false)} />
              <div className="relative bg-[#050816] w-full h-[85vh] rounded-t-3xl border-t border-white/10 p-6 overflow-y-auto">
                <button onClick={() => setMobileDrawerOpen(false)} className="absolute top-6 right-6 text-gray-400 hover:text-white"><X className="w-6 h-6" /></button>
                <h3 className="text-xl font-serif text-white mb-6">Filters</h3>
                <SidebarContent 
                  clearAll={clearAllFilters} priceMin={priceMin} setPriceMin={setPriceMin} priceMax={priceMax} setPriceMax={setPriceMax}
                  ratingFilter={ratingFilter} setRatingFilter={setRatingFilter}
                  activeFilter={activeFilter} selectedAmenities={selectedAmenities} setSelectedAmenities={setSelectedAmenities}
                  selectedPropType={selectedPropType} setSelectedPropType={setSelectedPropType}
                  selectedDuration={selectedDuration} setSelectedDuration={setSelectedDuration}
                />
                <button onClick={() => setMobileDrawerOpen(false)} className="w-full mt-8 bg-[#D4AF37] text-black font-semibold py-4 rounded-xl">Apply Filters</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

// ----------------------------------------------------
// CARD COMPONENT
// ----------------------------------------------------
function DestinationCard({ listing, view }: { listing: Listing, view: "grid" | "list" }) {
  const [liked, setLiked] = useState(false);

  return (
    <motion.div layout initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className={`group relative bg-white/[0.02] border border-white/10 backdrop-blur-sm transition-all hover:border-[#D4AF37]/50 hover:shadow-[0_25px_80px_rgba(212,175,55,0.1)] ${view === 'list' ? 'flex flex-col md:flex-row rounded-2xl overflow-hidden' : 'rounded-3xl flex flex-col overflow-hidden'}`}>
      <Link href={`/destinations/${listing.slug}`} className="absolute inset-0 z-10" />
      
      <div className={`relative overflow-hidden shrink-0 ${view === 'list' ? 'md:w-72 h-64 md:h-auto' : 'h-64'}`}>
        <img src={listing.image} alt={listing.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent" />
        
        <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); setLiked(!liked); }} className="absolute top-4 right-4 p-2 bg-black/40 backdrop-blur-md rounded-full border border-white/20 transition-colors z-20">
          <Heart className={`w-5 h-5 transition-colors ${liked ? "fill-[#D4AF37] text-[#D4AF37]" : "text-white"}`} />
        </button>
        <span className="absolute top-4 left-4 bg-[#D4AF37] text-black text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full z-20">{listing.type}</span>
      </div>

      <div className={`p-6 flex flex-col flex-grow ${view === 'list' ? 'justify-center' : ''}`}>
        <div className="flex items-center text-gray-400 text-sm mb-2"><MapPin className="w-4 h-4 mr-1 text-[#D4AF37]" /> {listing.location}</div>
        <h3 className="text-xl font-serif text-white mb-4 line-clamp-2 group-hover:text-[#D4AF37] transition-colors relative z-20">{listing.title}</h3>

        <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm mb-6 border-b border-white/10 pb-4">
          {listing.meta.duration && <div className="flex items-center gap-1"><Clock className="w-4 h-4" /> {listing.meta.duration}</div>}
          {listing.meta.sqft && <div className="flex items-center gap-1"><Maximize className="w-4 h-4" /> {listing.meta.sqft} sqft</div>}
          {listing.meta.beds && <div className="flex items-center gap-1"><Bed className="w-4 h-4" /> {listing.meta.beds} Beds</div>}
          {listing.meta.year && <div className="flex items-center gap-1"><Car className="w-4 h-4" /> {listing.meta.year}</div>}
          {listing.meta.transmission && <div className="flex items-center gap-1">{listing.meta.transmission}</div>}
          {listing.meta.length && <div className="flex items-center gap-1"><Ship className="w-4 h-4" /> {listing.meta.length}</div>}
        </div>

        <div className="flex justify-between items-end mt-auto relative z-20">
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">From</p>
            <div className="flex items-center gap-2">
              {listing.salePrice ? (
                <><span className="text-2xl font-bold text-white">${listing.salePrice}</span><span className="text-sm text-gray-500 line-through">${listing.price}</span></>
              ) : <span className="text-2xl font-bold text-white">${listing.price}</span>}
            </div>
          </div>
          <div className="flex items-center gap-1 text-[#D4AF37]"><Star className="w-4 h-4 fill-[#D4AF37]" /><span className="font-bold text-white">{listing.rating.toFixed(1)}</span></div>
        </div>
      </div>
    </motion.div>
  );
}

// ----------------------------------------------------
// SIDEBAR CONTENT COMPONENT
// ----------------------------------------------------
function SidebarContent({ clearAll, priceMin, setPriceMin, priceMax, setPriceMax, ratingFilter, setRatingFilter, activeFilter, selectedAmenities, setSelectedAmenities, selectedPropType, setSelectedPropType, selectedDuration, setSelectedDuration }: any) {
  const toggleArray = (arr: string[], setArr: any, val: string) => setArr(arr.includes(val) ? arr.filter(x => x !== val) : [...arr, val]);

  return (
    <>
      <div className="flex justify-between items-center"><h3 className="text-lg font-serif text-white">Filters</h3><button onClick={clearAll} className="text-sm text-[#D4AF37] hover:underline">Clear All</button></div>
      
      <div className="space-y-4">
        <h4 className="text-sm uppercase tracking-widest text-gray-500">Price Range</h4>
        <div className="flex items-center gap-2">
          <input type="number" placeholder="Min $" value={priceMin} onChange={e => setPriceMin(e.target.value ? Number(e.target.value) : "")} className="w-full bg-[#050816]/50 border border-white/10 rounded-lg p-2 text-white text-sm outline-none focus:border-[#D4AF37]" />
          <span className="text-gray-500">-</span>
          <input type="number" placeholder="Max $" value={priceMax} onChange={e => setPriceMax(e.target.value ? Number(e.target.value) : "")} className="w-full bg-[#050816]/50 border border-white/10 rounded-lg p-2 text-white text-sm outline-none focus:border-[#D4AF37]" />
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-sm uppercase tracking-widest text-gray-500">Star Rating</h4>
        <div className="space-y-2">
          {[5, 4, 3].map(stars => (
            <label key={stars} className="flex items-center gap-3 cursor-pointer group">
              <input type="checkbox" checked={ratingFilter === stars} onChange={() => setRatingFilter(ratingFilter === stars ? null : stars)} className="w-4 h-4 rounded border-white/20 bg-transparent text-[#D4AF37] focus:ring-[#D4AF37]" />
              <div className="flex items-center gap-1">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className={`w-3 h-3 ${i < stars ? "fill-[#D4AF37] text-[#D4AF37]" : "text-gray-600"}`} />)}</div>
            </label>
          ))}
        </div>
      </div>

      {(activeFilter === "All" || activeFilter === "Hotel" || activeFilter === "Rental") && (
        <>
          <div className="space-y-4">
            <h4 className="text-sm uppercase tracking-widest text-gray-500">Property Type</h4>
            <div className="space-y-2">
              {["Hotel", "Resort", "Apartment", "Villa"].map(type => (
                <label key={type} className="flex items-center gap-3 cursor-pointer text-sm text-gray-400 hover:text-white transition-colors">
                  <input type="checkbox" checked={selectedPropType.includes(type)} onChange={() => toggleArray(selectedPropType, setSelectedPropType, type)} className="w-4 h-4 rounded border-white/20 bg-transparent text-[#D4AF37] focus:ring-[#D4AF37]" />
                  {type}
                </label>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm uppercase tracking-widest text-gray-500">Amenities</h4>
            <div className="space-y-2">
              {["Breakfast Included", "Parking", "Room Service", "Pool", "Pet Friendly"].map(amenity => (
                <label key={amenity} className="flex items-center gap-3 cursor-pointer text-sm text-gray-400 hover:text-white transition-colors">
                  <input type="checkbox" checked={selectedAmenities.includes(amenity)} onChange={() => toggleArray(selectedAmenities, setSelectedAmenities, amenity)} className="w-4 h-4 rounded border-white/20 bg-transparent text-[#D4AF37] focus:ring-[#D4AF37]" />
                  {amenity}
                </label>
              ))}
            </div>
          </div>
        </>
      )}

      {(activeFilter === "Tours" || activeFilter === "Activity") && (
        <div className="space-y-4">
          <h4 className="text-sm uppercase tracking-widest text-gray-500">Duration</h4>
          <div className="space-y-2">
            {["Any", "Half Day (3–6 hrs)", "Full Day (6+ hrs)"].map(dur => (
              <label key={dur} className="flex items-center gap-3 cursor-pointer text-sm text-gray-400 hover:text-white transition-colors">
                <input type="radio" checked={selectedDuration === dur} onChange={() => setSelectedDuration(dur)} className="w-4 h-4 text-[#D4AF37] focus:ring-[#D4AF37] border-white/20 bg-transparent" />
                {dur}
              </label>
            ))}
          </div>
        </div>
      )}
    </>
  );
}