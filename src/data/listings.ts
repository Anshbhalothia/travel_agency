export type ListingType = "Hotel" | "Tours" | "Activity" | "Rental" | "Car" | "Yacht";

export type ListingMeta = {
  duration?: string;
  sqft?: number;
  beds?: number;
  baths?: number;
  rooms?: number;
  year?: number;
  transmission?: "Automatic" | "Manual";
  fuel?: string;
  mileage?: string;
  length?: string;
  speed?: string;
  capacity?: number;
};

export interface Listing {
  id: string;
  type: ListingType;
  title: string;
  location: string;
  image: string;
  price: number;
  salePrice?: number;
  rating: number;
  reviews: number;
  slug: string;
  amenities?: string[];
  propertyType?: string;
  meta: ListingMeta;
}

export const listingsData: Listing[] = [
  // ==========================================
  // HOTELS (10 Items)
  // ==========================================
  { id: 'h1', type: 'Hotel', title: 'The Azure Resort & Spa', location: 'Maldives', image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?q=80&w=800&auto=format&fit=crop', price: 1250, rating: 4.9, reviews: 128, slug: 'maldives-azure-resort', propertyType: 'Resort', amenities: ['Breakfast Included', 'Pool', 'Room Service'], meta: { sqft: 1200, rooms: 1, beds: 1, baths: 1 } },
  { id: 'h2', type: 'Hotel', title: 'Bosphorus Palace', location: 'Istanbul, Turkey', image: 'https://images.unsplash.com/photo-1542314831-c6a4d142104d?q=80&w=800&auto=format&fit=crop', price: 850, rating: 4.8, reviews: 342, slug: 'istanbul-bosphorus-palace', propertyType: 'Hotel', amenities: ['Breakfast Included', 'Restaurant'], meta: { sqft: 900, rooms: 1, beds: 1, baths: 1 } },
  { id: 'h3', type: 'Hotel', title: 'Burj Al Arab Luxury Suite', location: 'Dubai, UAE', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop', price: 2500, rating: 5.0, reviews: 89, slug: 'dubai-burj-al-arab', propertyType: 'Hotel', amenities: ['Breakfast Included', 'Pool', 'Room Service', 'Parking'], meta: { sqft: 2200, rooms: 2, beds: 2, baths: 2 } },
  { id: 'h4', type: 'Hotel', title: 'The Ritz London', location: 'Greater London, UK', image: 'https://images.unsplash.com/photo-1551882547-ff40eb0d1b73?q=80&w=800&auto=format&fit=crop', price: 1100, rating: 4.9, reviews: 512, slug: 'london-ritz-hotel', propertyType: 'Hotel', amenities: ['Breakfast Included', 'Restaurant', 'Room Service'], meta: { sqft: 850, rooms: 1, beds: 1, baths: 1 } },
  { id: 'h5', type: 'Hotel', title: 'Four Seasons Sayan', location: 'Bali, Indonesia', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop', price: 950, salePrice: 800, rating: 4.9, reviews: 412, slug: 'bali-four-seasons', propertyType: 'Resort', amenities: ['Breakfast Included', 'Pool', 'Pet Friendly'], meta: { sqft: 1500, rooms: 1, beds: 2, baths: 1 } },
  { id: 'h6', type: 'Hotel', title: 'Marina Bay Sands', location: 'Singapore', image: 'https://images.unsplash.com/photo-1565243163777-66a7b7a5a8f5?q=80&w=800&auto=format&fit=crop', price: 1400, rating: 4.8, reviews: 1205, slug: 'singapore-marina-bay-sands', propertyType: 'Hotel', amenities: ['Pool', 'Restaurant', 'Parking'], meta: { sqft: 1100, rooms: 1, beds: 1, baths: 1 } },
  { id: 'h7', type: 'Hotel', title: 'Kempinski Grand', location: 'Europe', image: 'https://images.unsplash.com/photo-1590490359683-658d3d23f972?q=80&w=800&auto=format&fit=crop', price: 450, salePrice: 380, rating: 4.7, reviews: 890, slug: 'europe-kempinski', propertyType: 'Hotel', amenities: ['Breakfast Included', 'Parking'], meta: { sqft: 750, rooms: 1, beds: 2, baths: 1 } },
  { id: 'h8', type: 'Hotel', title: 'Jumeirah Beach Hotel', location: 'Dubai, UAE', image: 'https://images.unsplash.com/photo-1572097361849-01ec01c7df0d?q=80&w=800&auto=format&fit=crop', price: 600, rating: 4.8, reviews: 310, slug: 'dubai-jumeirah-beach', propertyType: 'Resort', amenities: ['Pool', 'Room Service', 'Restaurant'], meta: { sqft: 850, rooms: 1, beds: 1, baths: 1 } },
  { id: 'h9', type: 'Hotel', title: 'St. Regis Resort', location: 'Bali, Indonesia', image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800&auto=format&fit=crop', price: 1800, rating: 5.0, reviews: 145, slug: 'bali-st-regis', propertyType: 'Resort', amenities: ['Breakfast Included', 'Pool', 'Room Service', 'Parking'], meta: { sqft: 1800, rooms: 2, beds: 2, baths: 2 } },
  { id: 'h10', type: 'Hotel', title: 'Amanpuri Suites', location: 'Thailand', image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=800&auto=format&fit=crop', price: 850, salePrice: 700, rating: 4.9, reviews: 220, slug: 'thailand-amanpuri', propertyType: 'Resort', amenities: ['Breakfast Included', 'Pool'], meta: { sqft: 1000, rooms: 1, beds: 1, baths: 1 } },

  // ==========================================
  // TOURS (10 Items)
  // ==========================================
  { id: 't1', type: 'Tours', title: 'Cappadocia Hot Air Balloon', location: 'Istanbul, Turkey', image: 'https://images.unsplash.com/photo-1642257859842-c95f9fa8121d?q=80&w=800&auto=format&fit=crop', price: 350, salePrice: 299, rating: 4.9, reviews: 850, slug: 'turkey-cappadocia-balloon', meta: { duration: 'Half Day (3–6 hrs)' } },
  { id: 't2', type: 'Tours', title: 'Bali Temple & Jungle Expedition', location: 'Bali, Indonesia', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop', price: 299, rating: 4.8, reviews: 85, slug: 'bali-temple-jungle', meta: { duration: 'Multi-Day' } },
  { id: 't3', type: 'Tours', title: 'London Historical Private Guide', location: 'Greater London, UK', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800&auto=format&fit=crop', price: 150, rating: 4.7, reviews: 112, slug: 'london-historical-guide', meta: { duration: 'Half Day (3–6 hrs)' } },
  { id: 't4', type: 'Tours', title: 'Paris Art & Culture Walk', location: 'Europe', image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=800&auto=format&fit=crop', price: 120, salePrice: 95, rating: 4.9, reviews: 430, slug: 'europe-paris-art-walk', meta: { duration: 'Under 3 hours' } },
  { id: 't5', type: 'Tours', title: 'Maldives Island Hopping', location: 'Maldives', image: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?q=80&w=800&auto=format&fit=crop', price: 450, rating: 4.9, reviews: 75, slug: 'maldives-island-hopping', meta: { duration: 'Full Day (6+ hrs)' } },
  { id: 't6', type: 'Tours', title: 'Ayutthaya Ruins Explorer', location: 'Thailand', image: 'https://images.unsplash.com/photo-1627918456070-55e1db8df7c3?q=80&w=800&auto=format&fit=crop', price: 80, rating: 4.6, reviews: 198, slug: 'thailand-ayutthaya-ruins', meta: { duration: 'Full Day (6+ hrs)' } },
  { id: 't7', type: 'Tours', title: 'Al Fahidi Heritage Tour', location: 'Dubai, UAE', image: 'https://images.unsplash.com/photo-1586220742614-72252174c8bc?q=80&w=800&auto=format&fit=crop', price: 85, salePrice: 75, rating: 5.0, reviews: 42, slug: 'dubai-al-fahidi', meta: { duration: 'Under 3 hours' } },
  { id: 't8', type: 'Tours', title: 'Dubai Modern Architecture Tour', location: 'Dubai, UAE', image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=800&auto=format&fit=crop', price: 140, rating: 4.8, reviews: 315, slug: 'dubai-architecture-tour', meta: { duration: 'Half Day (3–6 hrs)' } },
  { id: 't9', type: 'Tours', title: 'Singapore Night Safari', location: 'Singapore', image: 'https://images.unsplash.com/photo-1543781502-39c0490b830d?q=80&w=800&auto=format&fit=crop', price: 110, rating: 4.7, reviews: 620, slug: 'singapore-night-safari', meta: { duration: 'Half Day (3–6 hrs)' } },
  { id: 't10', type: 'Tours', title: 'Thai Ancient Temples Explorer', location: 'Thailand', image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=800&auto=format&fit=crop', price: 180, salePrice: 150, rating: 4.8, reviews: 290, slug: 'thailand-temples-explorer', meta: { duration: 'Full Day (6+ hrs)' } },

  // ==========================================
  // ACTIVITIES (10 Items)
  // ==========================================
  { id: 'a1', type: 'Activity', title: 'Phi Phi Islands Scuba Diving', location: 'Thailand', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800&auto=format&fit=crop', price: 150, rating: 4.7, reviews: 210, slug: 'thailand-scuba-diving', meta: { duration: 'Full Day (6+ hrs)' } },
  { id: 'a2', type: 'Activity', title: 'Desert Safari & Dune Bashing', location: 'Dubai, UAE', image: 'https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?q=80&w=800&auto=format&fit=crop', price: 120, salePrice: 89, rating: 4.8, reviews: 1450, slug: 'dubai-desert-safari', meta: { duration: 'Half Day (3–6 hrs)' } },
  { id: 'a3', type: 'Activity', title: 'Thames River VIP Cruise', location: 'Greater London, UK', image: 'https://images.unsplash.com/photo-1520939817895-060bdaf4ed1b?q=80&w=800&auto=format&fit=crop', price: 220, rating: 4.9, reviews: 56, slug: 'london-thames-cruise', meta: { duration: 'Under 3 hours' } },
  { id: 'a4', type: 'Activity', title: 'Helicopter Ride Over The Palm', location: 'Dubai, UAE', image: 'https://images.unsplash.com/photo-1506501655097-0f8c37dce0a8?q=80&w=800&auto=format&fit=crop', price: 450, rating: 5.0, reviews: 312, slug: 'dubai-helicopter-ride', meta: { duration: 'Under 3 hours' } },
  { id: 'a5', type: 'Activity', title: 'Snorkeling with Manta Rays', location: 'Maldives', image: 'https://images.unsplash.com/photo-1544983050-717013327db0?q=80&w=800&auto=format&fit=crop', price: 180, salePrice: 140, rating: 4.9, reviews: 128, slug: 'maldives-snorkeling', meta: { duration: 'Half Day (3–6 hrs)' } },
  { id: 'a6', type: 'Activity', title: 'Bosphorus Sunset Cruise', location: 'Istanbul, Turkey', image: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?q=80&w=800&auto=format&fit=crop', price: 95, rating: 4.8, reviews: 415, slug: 'istanbul-bosphorus-cruise', meta: { duration: 'Under 3 hours' } },
  { id: 'a7', type: 'Activity', title: 'Traditional Cooking Masterclass', location: 'Bali, Indonesia', image: 'https://images.unsplash.com/photo-1556910103-1c02745a8720?q=80&w=800&auto=format&fit=crop', price: 75, rating: 4.9, reviews: 205, slug: 'bali-cooking-class', meta: { duration: 'Half Day (3–6 hrs)' } },
  { id: 'a8', type: 'Activity', title: 'Elephant Sanctuary Visit', location: 'Thailand', image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=800&auto=format&fit=crop', price: 120, salePrice: 99, rating: 4.8, reviews: 540, slug: 'thailand-elephant-sanctuary', meta: { duration: 'Full Day (6+ hrs)' } },
  { id: 'a9', type: 'Activity', title: 'Marina Bay Light Show Cruise', location: 'Singapore', image: 'https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?q=80&w=800&auto=format&fit=crop', price: 110, rating: 4.7, reviews: 189, slug: 'singapore-marina-cruise', meta: { duration: 'Under 3 hours' } },
  { id: 'a10', type: 'Activity', title: 'Mount Batur Sunrise Trek', location: 'Bali, Indonesia', image: 'https://images.unsplash.com/photo-1590050854486-13e0980c6be4?q=80&w=800&auto=format&fit=crop', price: 65, rating: 4.8, reviews: 88, slug: 'bali-mount-batur-trek', meta: { duration: 'Half Day (3–6 hrs)' } },

  // ==========================================
  // RENTALS (Villas/Estates - 10 Items)
  // ==========================================
  { id: 'r1', type: 'Rental', title: 'Glass House Villa', location: 'Singapore', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop', price: 3200, rating: 4.9, reviews: 56, slug: 'singapore-glass-house', propertyType: 'Villa', amenities: ['Pool', 'Parking'], meta: { sqft: 4500, rooms: 4, beds: 4, baths: 4 } },
  { id: 'r2', type: 'Rental', title: 'Mayfair Townhouse', location: 'Greater London, UK', image: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=800&auto=format&fit=crop', price: 4500, rating: 5.0, reviews: 12, slug: 'london-mayfair-townhouse', propertyType: 'Villa', amenities: ['Parking', 'Pet Friendly'], meta: { sqft: 5200, rooms: 5, beds: 6, baths: 4 } },
  { id: 'r3', type: 'Rental', title: 'Uluwatu Cliff Mansion', location: 'Bali, Indonesia', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop', price: 2800, salePrice: 2200, rating: 4.8, reviews: 44, slug: 'bali-uluwatu-mansion', propertyType: 'Villa', amenities: ['Pool', 'Room Service'], meta: { sqft: 3800, rooms: 3, beds: 4, baths: 3 } },
  { id: 'r4', type: 'Rental', title: 'Palm Jumeirah Signature Villa', location: 'Dubai, UAE', image: 'https://images.unsplash.com/photo-1613490901235-98f5a6b0907d?q=80&w=800&auto=format&fit=crop', price: 5500, rating: 5.0, reviews: 29, slug: 'dubai-palm-villa', propertyType: 'Villa', amenities: ['Pool', 'Parking', 'Room Service'], meta: { sqft: 6500, rooms: 6, beds: 7, baths: 6 } },
  { id: 'r5', type: 'Rental', title: 'Private Overwater Bungalow', location: 'Maldives', image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=800&auto=format&fit=crop', price: 4200, salePrice: 3800, rating: 4.9, reviews: 88, slug: 'maldives-overwater-bungalow', propertyType: 'Resort', amenities: ['Breakfast Included', 'Pool'], meta: { sqft: 2100, rooms: 2, beds: 2, baths: 2 } },
  { id: 'r6', type: 'Rental', title: 'Bosphorus View Mansion', location: 'Istanbul, Turkey', image: 'https://images.unsplash.com/photo-1600607687930-ce428a1768c8?q=80&w=800&auto=format&fit=crop', price: 2100, rating: 4.8, reviews: 63, slug: 'istanbul-bosphorus-mansion', propertyType: 'Villa', amenities: ['Parking'], meta: { sqft: 4000, rooms: 4, beds: 5, baths: 4 } },
  { id: 'r7', type: 'Rental', title: 'Phuket Oceanfront Villa', location: 'Thailand', image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=800&auto=format&fit=crop', price: 1800, rating: 4.9, reviews: 142, slug: 'thailand-phuket-villa', propertyType: 'Villa', amenities: ['Pool', 'Parking'], meta: { sqft: 3200, rooms: 3, beds: 4, baths: 3 } },
  { id: 'r8', type: 'Rental', title: 'Sentosa Island Estate', location: 'Singapore', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop', price: 4800, rating: 4.9, reviews: 17, slug: 'singapore-sentosa-estate', propertyType: 'Villa', amenities: ['Pool', 'Room Service', 'Parking'], meta: { sqft: 5800, rooms: 5, beds: 5, baths: 5 } },
  { id: 'r9', type: 'Rental', title: 'Amalfi Coast Penthouse', location: 'Europe', image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=800&auto=format&fit=crop', price: 2400, salePrice: 1950, rating: 4.8, reviews: 51, slug: 'europe-amalfi-penthouse', propertyType: 'Apartment', amenities: ['Restaurant'], meta: { sqft: 2800, rooms: 3, beds: 3, baths: 2 } },
  { id: 'r10', type: 'Rental', title: 'Chelsea Luxury Apartment', location: 'Greater London, UK', image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=800&auto=format&fit=crop', price: 950, rating: 4.7, reviews: 88, slug: 'london-chelsea-apartment', propertyType: 'Apartment', amenities: ['Parking', 'Pet Friendly'], meta: { sqft: 2400, rooms: 4, beds: 4, baths: 2 } },

  // ==========================================
  // CARS (10 Items)
  // ==========================================
  { id: 'c1', type: 'Car', title: 'Rolls Royce Cullinan', location: 'Greater London, UK', image: 'https://images.unsplash.com/photo-1633655442104-dc4437255909?q=80&w=800&auto=format&fit=crop', price: 1800, rating: 4.9, reviews: 44, slug: 'london-rolls-royce', meta: { year: 2023, transmission: 'Automatic', fuel: 'Petrol' } },
  { id: 'c2', type: 'Car', title: 'Lamborghini Urus', location: 'Dubai, UAE', image: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=800&auto=format&fit=crop', price: 1500, rating: 4.8, reviews: 92, slug: 'dubai-lamborghini-urus', meta: { year: 2024, transmission: 'Automatic', fuel: 'Petrol' } },
  { id: 'c3', type: 'Car', title: 'Mercedes G63 AMG', location: 'Istanbul, Turkey', image: 'https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=800&auto=format&fit=crop', price: 1200, salePrice: 950, rating: 4.7, reviews: 120, slug: 'istanbul-mercedes-g63', meta: { year: 2022, transmission: 'Automatic', fuel: 'Petrol' } },
  { id: 'c4', type: 'Car', title: 'Bentley Bentayga', location: 'Greater London, UK', image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=800&auto=format&fit=crop', price: 1400, rating: 4.9, reviews: 38, slug: 'london-bentley-bentayga', meta: { year: 2023, transmission: 'Automatic', fuel: 'Petrol' } },
  { id: 'c5', type: 'Car', title: 'Ferrari F8 Tributo', location: 'Dubai, UAE', image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=800&auto=format&fit=crop', price: 2200, rating: 5.0, reviews: 55, slug: 'dubai-ferrari-f8', meta: { year: 2023, transmission: 'Automatic', fuel: 'Petrol' } },
  { id: 'c6', type: 'Car', title: 'Porsche 911 Carrera', location: 'Singapore', image: 'https://images.unsplash.com/photo-1503376760367-13eea78d4a6f?q=80&w=800&auto=format&fit=crop', price: 900, salePrice: 750, rating: 4.8, reviews: 110, slug: 'singapore-porsche-911', meta: { year: 2022, transmission: 'Automatic', fuel: 'Petrol' } },
  { id: 'c7', type: 'Car', title: 'Range Rover Autobiography', location: 'Bali, Indonesia', image: 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?q=80&w=800&auto=format&fit=crop', price: 850, rating: 4.9, reviews: 84, slug: 'bali-range-rover', meta: { year: 2024, transmission: 'Automatic', fuel: 'Petrol' } },
  { id: 'c8', type: 'Car', title: 'Aston Martin DB11', location: 'Europe', image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=800&auto=format&fit=crop', price: 1600, rating: 4.7, reviews: 26, slug: 'europe-aston-martin', meta: { year: 2021, transmission: 'Automatic', fuel: 'Petrol' } },
  { id: 'c9', type: 'Car', title: 'McLaren 720S', location: 'Dubai, UAE', image: 'https://images.unsplash.com/photo-1621244192661-7501a3014a93?q=80&w=800&auto=format&fit=crop', price: 2500, salePrice: 2100, rating: 5.0, reviews: 41, slug: 'dubai-mclaren-720s', meta: { year: 2023, transmission: 'Automatic', fuel: 'Petrol' } },
  { id: 'c10', type: 'Car', title: 'Mercedes S-Class Maybach', location: 'Istanbul, Turkey', image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=800&auto=format&fit=crop', price: 1300, rating: 4.9, reviews: 77, slug: 'istanbul-sclass-maybach', meta: { year: 2024, transmission: 'Automatic', fuel: 'Petrol' } },

  // ==========================================
  // YACHTS (10 Items)
  // ==========================================
  { id: 'y1', type: 'Yacht', title: 'Majesty 105 Superyacht', location: 'Dubai, UAE', image: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=800&auto=format&fit=crop', price: 5500, rating: 5.0, reviews: 32, slug: 'dubai-majesty-105', meta: { length: '105 ft', capacity: 12, beds: 5 } },
  { id: 'y2', type: 'Yacht', title: 'Azimut 72 Flybridge', location: 'Maldives', image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=800&auto=format&fit=crop', price: 3800, rating: 4.9, reviews: 41, slug: 'maldives-azimut-72', meta: { length: '72 ft', capacity: 8, beds: 4 } },
  { id: 'y3', type: 'Yacht', title: 'Sunseeker Manhattan', location: 'Europe', image: 'https://images.unsplash.com/photo-1605281317010-fe5ffe798166?q=80&w=800&auto=format&fit=crop', price: 4200, rating: 4.8, reviews: 18, slug: 'europe-sunseeker-manhattan', meta: { length: '68 ft', capacity: 10, beds: 3 } },
  { id: 'y4', type: 'Yacht', title: 'Princess V65', location: 'Greater London, UK', image: 'https://images.unsplash.com/photo-1574092523267-27b3b3b27b99?q=80&w=800&auto=format&fit=crop', price: 3200, salePrice: 2800, rating: 4.7, reviews: 22, slug: 'london-princess-v65', meta: { length: '65 ft', capacity: 10, beds: 3 } },
  { id: 'y5', type: 'Yacht', title: 'Riva Domino 86', location: 'Europe', image: 'https://images.unsplash.com/photo-1599304620601-cb863c52a0a2?q=80&w=800&auto=format&fit=crop', price: 7500, rating: 5.0, reviews: 14, slug: 'europe-riva-domino', meta: { length: '86 ft', capacity: 12, beds: 4 } },
  { id: 'y6', type: 'Yacht', title: 'Ferretti 780', location: 'Istanbul, Turkey', image: 'https://images.unsplash.com/photo-1559814030-9eb98877bc95?q=80&w=800&auto=format&fit=crop', price: 4800, rating: 4.9, reviews: 36, slug: 'istanbul-ferretti-780', meta: { length: '78 ft', capacity: 12, beds: 4 } },
  { id: 'y7', type: 'Yacht', title: 'Lagoon 52 Catamaran', location: 'Bali, Indonesia', image: 'https://images.unsplash.com/photo-1540946485063-a40da27545f8?q=80&w=800&auto=format&fit=crop', price: 2100, salePrice: 1850, rating: 4.8, reviews: 92, slug: 'bali-lagoon-52', meta: { length: '52 ft', capacity: 15, beds: 5 } },
  { id: 'y8', type: 'Yacht', title: 'Gulf Craft Nomad', location: 'Dubai, UAE', image: 'https://images.unsplash.com/photo-1520638545802-0e3650ce84a0?q=80&w=800&auto=format&fit=crop', price: 4100, rating: 4.8, reviews: 47, slug: 'dubai-gulf-craft', meta: { length: '75 ft', capacity: 14, beds: 4 } },
  { id: 'y9', type: 'Yacht', title: 'Leopard 51 Powercat', location: 'Thailand', image: 'https://images.unsplash.com/photo-1569300647185-3b10b0366657?q=80&w=800&auto=format&fit=crop', price: 1900, rating: 4.9, reviews: 110, slug: 'thailand-leopard-51', meta: { length: '51 ft', capacity: 12, beds: 3 } },
  { id: 'y10', type: 'Yacht', title: 'Ocean Alexander 90', location: 'Singapore', image: 'https://images.unsplash.com/photo-1517457494541-11d51c4115ec?q=80&w=800&auto=format&fit=crop', price: 8200, salePrice: 7500, rating: 5.0, reviews: 19, slug: 'singapore-ocean-alexander', meta: { length: '90 ft', capacity: 16, beds: 5 } },
];