import { Destination } from "@/types/destination";

export const destinations: Destination[] = [
  {
    slug: "bali",
    name: "Bali",
    country: "Indonesia",
    tagline: "Destination",
    heroVideo: "/videos/bali.mp4",
    heroDescription:
      "Where ancient temples meet emerald rice terraces and the ocean whispers at every shore.",
    rating: 4.9,
    facts: [
      { icon: "Clock", label: "Best Duration", value: "7 – 14 Days" },
      { icon: "Coins", label: "Avg. Budget", value: "$80 – $200 / day" },
      { icon: "Thermometer", label: "Climate", value: "Tropical, 26–32°C" },
      { icon: "Languages", label: "Language", value: "Balinese, Indonesian" },
      { icon: "Plane", label: "Nearest Airport", value: "Ngurah Rai (DPS)" },
    ],
    galleryItems: [
      { label: "Tegallalang Rice Terraces", image: "/images/destinations/bali/gallery-1.jpg", alt: "Lush green rice terraces of Tegallalang" },
      { label: "Tanah Lot Temple", image: "/images/destinations/bali/gallery-2.jpg", alt: "Tanah Lot temple at sunset" },
      { label: "Sacred Monkey Forest", image: "/images/destinations/bali/gallery-3.jpg", alt: "Monkeys among ancient temple ruins" },
      { label: "Uluwatu Cliffs", image: "/images/destinations/bali/gallery-4.jpg", alt: "Dramatic sea cliffs at Uluwatu" },
      { label: "Mount Batur Sunrise", image: "/images/destinations/bali/gallery-5.jpg", alt: "Sunrise over volcanic Mount Batur" },
    ],
    experiences: [
      { emoji: "🏄", title: "Surf Kuta Beach", description: "Catch your first wave or challenge a reef break. Bali's swells suit every level, from beginner whites to expert barrels.", tag: "Adventure", tagColor: "coral" },
      { emoji: "🛕", title: "Temple Sunrise Tour", description: "Watch the island wake beneath a golden sky from ancient Hindu shrines older than your imagination.", tag: "Cultural", tagColor: "gold" },
      { emoji: "🌿", title: "Ubud Wellness Retreat", description: "Yoga, sound baths, and Ayurvedic spa rituals nestled in the jungle canopy of Ubud's healing valley.", tag: "Wellness", tagColor: "green" },
      { emoji: "🍜", title: "Street Food Safari", description: "Nasi goreng at dawn, sate lilit at noon, and bebek betutu by firelight. A culinary odyssey through warungs and night markets.", tag: "Food & Drink", tagColor: "amber" },
      { emoji: "🤿", title: "Dive Amed's Reefs", description: "The USAT Liberty wreck and coral gardens of Amed are among Southeast Asia's most celebrated dive sites.", tag: "Adventure", tagColor: "blue" },
      { emoji: "🎭", title: "Kecak Fire Dance", description: "At cliff-edge Uluwatu, 70 bare-chested men chant the ancient Ramayana against a blazing sunset sky.", tag: "Cultural", tagColor: "purple" },
    ],
    months: [
      { name: "Jan", rating: "avoid" }, { name: "Feb", rating: "avoid" },
      { name: "Mar", rating: "good" }, { name: "Apr", rating: "good" },
      { name: "May", rating: "peak" }, { name: "Jun", rating: "peak" },
      { name: "Jul", rating: "peak" }, { name: "Aug", rating: "peak" },
      { name: "Sep", rating: "good" }, { name: "Oct", rating: "good" },
      { name: "Nov", rating: "avoid" }, { name: "Dec", rating: "avoid" },
    ],
    tips: [
      { number: "01", title: "Dress Respectfully at Temples", text: "A sarong and sash are required at all temples. Most provide loaners, but carrying your own is good practice." },
      { number: "02", title: "Rent a Scooter in Ubud", text: "Traffic makes taxis slow. A scooter unlocks hidden roads, sunrise viewpoints, and waterfall trails impossible by car." },
      { number: "03", title: "Book Villas, Skip Hotels", text: "Private pool villas in Canggu and Seminyak cost the same as mid-range hotels. The experience is incomparable." },
      { number: "04", title: "Cash is Still King", text: "Many warungs, temples, and local markets only accept cash. Keep IDR on hand; airport rates are poor — use in-city ATMs." },
    ],
    ctaTitle: "Ready to Discover Bali?",
    ctaSubtitle: "Let us craft the perfect itinerary, tailored to your travel style.",
  },




  {
  slug: "dubai",
  name: "Dubai",
  country: "United Arab Emirates",
  tagline: "Destination",
  heroVideo: "/videos/dubai.mp4",
  heroDescription:
    "A dazzling city where futuristic skyscrapers rise from golden deserts, blending luxury, adventure, and world-class experiences.",
  rating: 4.9,

  facts: [
    { icon: "Clock", label: "Best Duration", value: "4 – 7 Days" },
    { icon: "Coins", label: "Avg. Budget", value: "$120 – $350 / day" },
    { icon: "Thermometer", label: "Climate", value: "Desert, 18–42°C" },
    { icon: "Languages", label: "Language", value: "Arabic, English" },
    { icon: "Plane", label: "Nearest Airport", value: "Dubai Intl. (DXB)" },
  ],

  galleryItems: [
    {
      label: "Burj Khalifa",
      image: "/images/destinations/dubai/gallery-1.jpg",
      alt: "Burj Khalifa towering above Dubai skyline",
    },
    {
      label: "Dubai Marina",
      image: "/images/destinations/dubai/gallery-2.jpg",
      alt: "Luxury yachts and skyscrapers at Dubai Marina",
    },
    {
      label: "Desert Safari",
      image: "/images/destinations/dubai/gallery-3.jpg",
      alt: "4x4 vehicles crossing golden desert dunes",
    },
    {
      label: "Palm Jumeirah",
      image: "/images/destinations/dubai/gallery-4.jpg",
      alt: "Aerial view of Palm Jumeirah island",
    },
    {
      label: "Museum of the Future",
      image: "/images/destinations/dubai/gallery-5.jpg",
      alt: "Futuristic architecture of Museum of the Future",
    },
  ],

  experiences: [
    {
      emoji: "🏙️",
      title: "Ascend Burj Khalifa",
      description:
        "Witness breathtaking panoramic views from the world's tallest building and experience Dubai from above the clouds.",
      tag: "Luxury",
      tagColor: "gold",
    },
    {
      emoji: "🏜️",
      title: "Desert Safari Adventure",
      description:
        "Enjoy dune bashing, camel rides, sandboarding, and a traditional Bedouin-style evening under the stars.",
      tag: "Adventure",
      tagColor: "coral",
    },
    {
      emoji: "🛥️",
      title: "Dubai Marina Cruise",
      description:
        "Sail past glittering skyscrapers while enjoying dinner and spectacular city lights reflected on the water.",
      tag: "Luxury",
      tagColor: "blue",
    },
    {
      emoji: "🛍️",
      title: "Shop at Dubai Mall",
      description:
        "Explore one of the world's largest malls, featuring luxury brands, entertainment zones, and an indoor aquarium.",
      tag: "Shopping",
      tagColor: "purple",
    },
    {
      emoji: "🌴",
      title: "Relax at Palm Jumeirah",
      description:
        "Unwind at world-famous beach resorts and enjoy pristine beaches along Dubai's iconic man-made island.",
      tag: "Leisure",
      tagColor: "green",
    },
    {
      emoji: "🍽️",
      title: "Fine Dining Experiences",
      description:
        "Savor Michelin-starred cuisine and rooftop dining with incredible skyline views across the city.",
      tag: "Food & Drink",
      tagColor: "amber",
    },
  ],

  months: [
    { name: "Jan", rating: "peak" },
    { name: "Feb", rating: "peak" },
    { name: "Mar", rating: "good" },
    { name: "Apr", rating: "good" },
    { name: "May", rating: "avoid" },
    { name: "Jun", rating: "avoid" },
    { name: "Jul", rating: "avoid" },
    { name: "Aug", rating: "avoid" },
    { name: "Sep", rating: "avoid" },
    { name: "Oct", rating: "good" },
    { name: "Nov", rating: "peak" },
    { name: "Dec", rating: "peak" },
  ],

  tips: [
    {
      number: "01",
      title: "Respect Local Culture",
      text: "Dubai is modern but rooted in tradition. Dress modestly in public places and religious sites.",
    },
    {
      number: "02",
      title: "Use the Metro",
      text: "Dubai Metro is affordable, clean, and one of the easiest ways to avoid city traffic.",
    },
    {
      number: "03",
      title: "Book Attractions Early",
      text: "Popular attractions like Burj Khalifa and desert safaris often sell out during peak season.",
    },
    {
      number: "04",
      title: "Avoid Summer Heat",
      text: "Temperatures can exceed 40°C from June to September, making outdoor activities challenging.",
    },
  ],

  ctaTitle: "Ready to Experience Dubai?",
  ctaSubtitle:
    "Let us design a luxury Dubai getaway tailored to your style and interests.",
},
{
  slug: "baku",
  name: "Baku",
  country: "Azerbaijan",
  tagline: "Destination",
  heroVideo: "/videos/Baku.mp4",
  heroDescription:
    "A fascinating blend of ancient Silk Road heritage and futuristic architecture set along the shores of the Caspian Sea.",
  rating: 4.8,

  facts: [
    { icon: "Clock", label: "Best Duration", value: "4 – 6 Days" },
    { icon: "Coins", label: "Avg. Budget", value: "$60 – $180 / day" },
    { icon: "Thermometer", label: "Climate", value: "Mild, 5–32°C" },
    { icon: "Languages", label: "Language", value: "Azerbaijani, English" },
    { icon: "Plane", label: "Nearest Airport", value: "Heydar Aliyev (GYD)" },
  ],

  galleryItems: [
    {
      label: "Flame Towers",
      image: "/images/destinations/baku/gallery-1.jpg",
      alt: "Iconic Flame Towers lighting up Baku skyline",
    },
    {
      label: "Old City",
      image: "/images/destinations/baku/gallery-2.jpg",
      alt: "Historic streets of Icherisheher",
    },
    {
      label: "Heydar Aliyev Center",
      image: "/images/destinations/baku/gallery-3.jpg",
      alt: "Modern architecture of Heydar Aliyev Center",
    },
    {
      label: "Baku Boulevard",
      image: "/images/destinations/baku/gallery-4.jpg",
      alt: "Waterfront promenade along Caspian Sea",
    },
    {
      label: "Gobustan National Park",
      image: "/images/destinations/baku/gallery-5.jpg",
      alt: "Ancient rock carvings and landscapes",
    },
  ],

  experiences: [
    {
      emoji: "🏛️",
      title: "Explore Old City",
      description:
        "Walk through centuries-old stone streets, hidden courtyards, and UNESCO-listed landmarks.",
      tag: "Cultural",
      tagColor: "gold",
    },
    {
      emoji: "🔥",
      title: "Witness Flame Towers",
      description:
        "Watch Baku's iconic towers illuminate the skyline with dazzling light displays after sunset.",
      tag: "Landmark",
      tagColor: "coral",
    },
    {
      emoji: "🌋",
      title: "Mud Volcano Excursion",
      description:
        "Visit one of the world's largest concentrations of mud volcanoes just outside the city.",
      tag: "Adventure",
      tagColor: "green",
    },
    {
      emoji: "🏖️",
      title: "Caspian Waterfront Walk",
      description:
        "Enjoy scenic views, gardens, and lively cafés along Baku Boulevard.",
      tag: "Leisure",
      tagColor: "blue",
    },
    {
      emoji: "🏗️",
      title: "Heydar Aliyev Center",
      description:
        "Admire one of the most celebrated architectural masterpieces in the world.",
      tag: "Architecture",
      tagColor: "purple",
    },
    {
      emoji: "🍢",
      title: "Taste Azerbaijani Cuisine",
      description:
        "Try plov, kebabs, dolma, and traditional sweets in authentic local restaurants.",
      tag: "Food & Drink",
      tagColor: "amber",
    },
  ],

  months: [
    { name: "Jan", rating: "avoid" },
    { name: "Feb", rating: "avoid" },
    { name: "Mar", rating: "good" },
    { name: "Apr", rating: "peak" },
    { name: "May", rating: "peak" },
    { name: "Jun", rating: "good" },
    { name: "Jul", rating: "good" },
    { name: "Aug", rating: "good" },
    { name: "Sep", rating: "peak" },
    { name: "Oct", rating: "peak" },
    { name: "Nov", rating: "good" },
    { name: "Dec", rating: "avoid" },
  ],

  tips: [
    {
      number: "01",
      title: "Carry Local Currency",
      text: "Many local shops and markets prefer Azerbaijani Manat over cards.",
    },
    {
      number: "02",
      title: "Explore Beyond Baku",
      text: "Take a day trip to Gobustan and the mud volcanoes for a unique experience.",
    },
    {
      number: "03",
      title: "Walk the Old City",
      text: "The best way to discover hidden gems is simply wandering through Icherisheher.",
    },
    {
      number: "04",
      title: "Visit at Sunset",
      text: "Baku's skyline and Caspian waterfront are especially beautiful after dark.",
    },
  ],

  ctaTitle: "Ready to Explore Baku?",
  ctaSubtitle:
    "Discover Azerbaijan's vibrant capital where history and innovation meet.",
},

{
  slug: "thailand",
  name: "Thailand",
  country: "Thailand",
  tagline: "Destination",
  heroVideo: "/videos/thailand.mp4",
  heroDescription:
    "Golden temples, tropical islands, vibrant street markets, and unforgettable adventures await in the Land of Smiles.",
  rating: 4.9,

  facts: [
    { icon: "Clock", label: "Best Duration", value: "7 – 14 Days" },
    { icon: "Coins", label: "Avg. Budget", value: "$50 – $180 / day" },
    { icon: "Thermometer", label: "Climate", value: "Tropical, 24–35°C" },
    { icon: "Languages", label: "Language", value: "Thai, English" },
    { icon: "Plane", label: "Nearest Airport", value: "Bangkok (BKK)" },
  ],

  galleryItems: [
    {
      label: "Phi Phi Islands",
      image: "/images/destinations/thailand/gallery-1.jpg",
      alt: "Turquoise waters of Phi Phi Islands",
    },
    {
      label: "Grand Palace",
      image: "/images/destinations/thailand/gallery-2.jpg",
      alt: "Historic Grand Palace in Bangkok",
    },
    {
      label: "Railay Beach",
      image: "/images/destinations/thailand/gallery-3.jpg",
      alt: "Limestone cliffs at Railay Beach",
    },
    {
      label: "Floating Market",
      image: "/images/destinations/thailand/gallery-4.jpg",
      alt: "Traditional floating market boats",
    },
    {
      label: "Chiang Mai Temples",
      image: "/images/destinations/thailand/gallery-5.jpg",
      alt: "Ancient temples in Chiang Mai",
    },
  ],

  experiences: [
    {
      emoji: "🏝️",
      title: "Island Hopping Adventure",
      description:
        "Explore breathtaking islands with crystal-clear waters, hidden lagoons, and white-sand beaches.",
      tag: "Adventure",
      tagColor: "blue",
    },
    {
      emoji: "🛕",
      title: "Temple Discovery",
      description:
        "Visit centuries-old temples showcasing Thailand's rich spiritual and architectural heritage.",
      tag: "Cultural",
      tagColor: "gold",
    },
    {
      emoji: "🍜",
      title: "Street Food Journey",
      description:
        "Sample authentic Pad Thai, mango sticky rice, and countless local delicacies.",
      tag: "Food & Drink",
      tagColor: "amber",
    },
    {
      emoji: "🐘",
      title: "Ethical Elephant Sanctuary",
      description:
        "Spend time with rescued elephants in responsible wildlife conservation centers.",
      tag: "Nature",
      tagColor: "green",
    },
    {
      emoji: "🤿",
      title: "Scuba Diving Excursion",
      description:
        "Discover colorful coral reefs and vibrant marine life around Thailand's islands.",
      tag: "Adventure",
      tagColor: "coral",
    },
    {
      emoji: "🎉",
      title: "Bangkok Nightlife",
      description:
        "Experience rooftop bars, bustling night markets, and energetic entertainment districts.",
      tag: "Entertainment",
      tagColor: "purple",
    },
  ],

  months: [
    { name: "Jan", rating: "peak" },
    { name: "Feb", rating: "peak" },
    { name: "Mar", rating: "good" },
    { name: "Apr", rating: "good" },
    { name: "May", rating: "avoid" },
    { name: "Jun", rating: "avoid" },
    { name: "Jul", rating: "avoid" },
    { name: "Aug", rating: "avoid" },
    { name: "Sep", rating: "avoid" },
    { name: "Oct", rating: "good" },
    { name: "Nov", rating: "peak" },
    { name: "Dec", rating: "peak" },
  ],

  tips: [
    {
      number: "01",
      title: "Respect Temple Etiquette",
      text: "Dress modestly and remove shoes before entering sacred temple areas.",
    },
    {
      number: "02",
      title: "Carry Cash",
      text: "Many street food vendors and local markets accept cash only.",
    },
    {
      number: "03",
      title: "Stay Hydrated",
      text: "Thailand's tropical climate can be hot and humid throughout the year.",
    },
    {
      number: "04",
      title: "Use Local Transport",
      text: "Tuk-tuks, BTS Skytrain, and ferries are efficient ways to get around.",
    },
  ],

  ctaTitle: "Ready to Discover Thailand?",
  ctaSubtitle:
    "Let us create the perfect Thailand adventure filled with culture, beaches, and unforgettable memories.",
},


{
  slug: "singapore",
  name: "Singapore",
  country: "Singapore",
  tagline: "Destination",
  heroVideo: "/videos/singapore.mp4",
  heroDescription:
    "A futuristic island city where iconic architecture, lush gardens, luxury shopping, and diverse cultures come together in perfect harmony.",
  rating: 4.9,

  facts: [
    { icon: "Clock", label: "Best Duration", value: "4 – 6 Days" },
    { icon: "Coins", label: "Avg. Budget", value: "$100 – $250 / day" },
    { icon: "Thermometer", label: "Climate", value: "Tropical, 25–33°C" },
    { icon: "Languages", label: "Language", value: "English, Mandarin, Malay" },
    { icon: "Plane", label: "Nearest Airport", value: "Changi Airport (SIN)" },
  ],

  galleryItems: [
    {
      label: "Marina Bay Sands",
      image: "/images/destinations/singapore/gallery-1.jpg",
      alt: "Marina Bay Sands skyline view",
    },
    {
      label: "Gardens by the Bay",
      image: "/images/destinations/singapore/gallery-2.jpg",
      alt: "Supertree Grove illuminated at night",
    },
    {
      label: "Merlion Park",
      image: "/images/destinations/singapore/gallery-3.jpg",
      alt: "Singapore Merlion overlooking Marina Bay",
    },
    {
      label: "Sentosa Island",
      image: "/images/destinations/singapore/gallery-4.jpg",
      alt: "Beaches and attractions on Sentosa Island",
    },
    {
      label: "Jewel Changi",
      image: "/images/destinations/singapore/gallery-5.jpg",
      alt: "Indoor waterfall at Jewel Changi Airport",
    },
  ],

  experiences: [
    {
      emoji: "🌆",
      title: "Marina Bay Night Views",
      description:
        "Watch the city sparkle from Marina Bay Sands and enjoy spectacular skyline views.",
      tag: "Luxury",
      tagColor: "gold",
    },
    {
      emoji: "🌳",
      title: "Gardens by the Bay",
      description:
        "Explore futuristic gardens, towering Supertrees, and breathtaking floral displays.",
      tag: "Nature",
      tagColor: "green",
    },
    {
      emoji: "🎢",
      title: "Universal Studios Singapore",
      description:
        "Experience thrilling rides, themed attractions, and family-friendly entertainment.",
      tag: "Adventure",
      tagColor: "coral",
    },
    {
      emoji: "🛍️",
      title: "Orchard Road Shopping",
      description:
        "Discover luxury brands, designer boutiques, and world-class shopping malls.",
      tag: "Shopping",
      tagColor: "purple",
    },
    {
      emoji: "🍜",
      title: "Hawker Food Experience",
      description:
        "Taste authentic Singaporean dishes from Michelin-recognized hawker centers.",
      tag: "Food & Drink",
      tagColor: "amber",
    },
    {
      emoji: "🏝️",
      title: "Sentosa Island Escape",
      description:
        "Relax on sandy beaches and enjoy exciting attractions on Singapore's entertainment island.",
      tag: "Leisure",
      tagColor: "blue",
    },
  ],

  months: [
    { name: "Jan", rating: "good" },
    { name: "Feb", rating: "peak" },
    { name: "Mar", rating: "good" },
    { name: "Apr", rating: "good" },
    { name: "May", rating: "good" },
    { name: "Jun", rating: "peak" },
    { name: "Jul", rating: "peak" },
    { name: "Aug", rating: "good" },
    { name: "Sep", rating: "good" },
    { name: "Oct", rating: "good" },
    { name: "Nov", rating: "avoid" },
    { name: "Dec", rating: "peak" },
  ],

  tips: [
    {
      number: "01",
      title: "Use MRT Transport",
      text: "Singapore's MRT system is clean, affordable, and the fastest way to travel around the city.",
    },
    {
      number: "02",
      title: "Carry a Water Bottle",
      text: "The tropical weather can be humid year-round, so staying hydrated is essential.",
    },
    {
      number: "03",
      title: "Try Hawker Centers",
      text: "Some of Singapore's best food is found in affordable local hawker markets.",
    },
    {
      number: "04",
      title: "Follow Local Rules",
      text: "Singapore is known for strict laws that help keep the city exceptionally clean and safe.",
    },
  ],

  ctaTitle: "Ready to Explore Singapore?",
  ctaSubtitle:
    "Experience the perfect blend of innovation, culture, luxury, and unforgettable attractions.",
},


{
  slug: "srilanka",
  name: "Sri Lanka",
  country: "Sri Lanka",
  tagline: "Destination",
  heroVideo: "/videos/srilanka.mp4",
  heroDescription:
    "An island paradise filled with ancient kingdoms, misty tea plantations, golden beaches, and incredible wildlife encounters.",
  rating: 4.8,

  facts: [
    { icon: "Clock", label: "Best Duration", value: "7 – 12 Days" },
    { icon: "Coins", label: "Avg. Budget", value: "$40 – $150 / day" },
    { icon: "Thermometer", label: "Climate", value: "Tropical, 22–33°C" },
    { icon: "Languages", label: "Language", value: "Sinhala, Tamil, English" },
    { icon: "Plane", label: "Nearest Airport", value: "Bandaranaike (CMB)" },
  ],

  galleryItems: [
    {
      label: "Sigiriya Rock Fortress",
      image: "/images/destinations/srilanka/gallery-1.jpg",
      alt: "Ancient Sigiriya Rock Fortress",
    },
    {
      label: "Ella Train Journey",
      image: "/images/destinations/srilanka/gallery-2.jpg",
      alt: "Scenic train passing through tea plantations",
    },
    {
      label: "Nine Arch Bridge",
      image: "/images/destinations/srilanka/gallery-3.jpg",
      alt: "Historic Nine Arch Bridge in Ella",
    },
    {
      label: "Galle Fort",
      image: "/images/destinations/srilanka/gallery-4.jpg",
      alt: "Colonial-era Galle Fort by the sea",
    },
    {
      label: "Yala National Park",
      image: "/images/destinations/srilanka/gallery-5.jpg",
      alt: "Wildlife safari in Yala National Park",
    },
  ],

  experiences: [
    {
      emoji: "🦁",
      title: "Climb Sigiriya Rock",
      description:
        "Scale one of Asia's most iconic ancient fortresses for panoramic jungle views.",
      tag: "Adventure",
      tagColor: "coral",
    },
    {
      emoji: "🚂",
      title: "Ella Scenic Train Ride",
      description:
        "Enjoy one of the world's most beautiful train journeys through lush tea estates.",
      tag: "Scenic",
      tagColor: "green",
    },
    {
      emoji: "🐘",
      title: "Wildlife Safari",
      description:
        "Spot elephants, leopards, crocodiles, and exotic birds in national parks.",
      tag: "Nature",
      tagColor: "gold",
    },
    {
      emoji: "🏖️",
      title: "Southern Coast Beaches",
      description:
        "Relax on pristine beaches and enjoy surfing, whale watching, and ocean sunsets.",
      tag: "Leisure",
      tagColor: "blue",
    },
    {
      emoji: "🛕",
      title: "Ancient Cultural Sites",
      description:
        "Explore centuries-old temples and UNESCO World Heritage monuments.",
      tag: "Cultural",
      tagColor: "purple",
    },
    {
      emoji: "🍛",
      title: "Authentic Sri Lankan Cuisine",
      description:
        "Taste flavorful curries, hoppers, seafood specialties, and local street food.",
      tag: "Food & Drink",
      tagColor: "amber",
    },
  ],

  months: [
    { name: "Jan", rating: "peak" },
    { name: "Feb", rating: "peak" },
    { name: "Mar", rating: "good" },
    { name: "Apr", rating: "good" },
    { name: "May", rating: "avoid" },
    { name: "Jun", rating: "avoid" },
    { name: "Jul", rating: "good" },
    { name: "Aug", rating: "good" },
    { name: "Sep", rating: "good" },
    { name: "Oct", rating: "avoid" },
    { name: "Nov", rating: "good" },
    { name: "Dec", rating: "peak" },
  ],

  tips: [
    {
      number: "01",
      title: "Travel by Train",
      text: "Sri Lanka's scenic rail journeys offer unforgettable views and authentic experiences.",
    },
    {
      number: "02",
      title: "Carry Cash",
      text: "Many small towns and local markets still prefer cash payments.",
    },
    {
      number: "03",
      title: "Respect Religious Sites",
      text: "Wear modest clothing and remove footwear before entering temples.",
    },
    {
      number: "04",
      title: "Book Safaris Early",
      text: "Popular national park safaris often get fully booked during peak season.",
    },
  ],

  ctaTitle: "Ready to Discover Sri Lanka?",
  ctaSubtitle:
    "Experience ancient heritage, breathtaking landscapes, and unforgettable wildlife adventures.",
},



{
  slug: "malaysia",
  name: "Malaysia",
  country: "Malaysia",
  tagline: "Destination",
  heroVideo: "/videos/Malaysia.mp4",
  heroDescription:
    "A vibrant destination where modern skylines, tropical islands, ancient rainforests, and diverse cultures create unforgettable journeys.",
  rating: 4.8,

  facts: [
    { icon: "Clock", label: "Best Duration", value: "6 – 10 Days" },
    { icon: "Coins", label: "Avg. Budget", value: "$50 – $180 / day" },
    { icon: "Thermometer", label: "Climate", value: "Tropical, 24–34°C" },
    { icon: "Languages", label: "Language", value: "Malay, English" },
    { icon: "Plane", label: "Nearest Airport", value: "Kuala Lumpur (KUL)" },
  ],

  galleryItems: [
    {
      label: "Petronas Towers",
      image: "/images/destinations/malaysia/gallery-1.jpg",
      alt: "Petronas Twin Towers illuminated at night",
    },
    {
      label: "Langkawi Island",
      image: "/images/destinations/malaysia/gallery-2.jpg",
      alt: "Tropical beaches of Langkawi",
    },
    {
      label: "Batu Caves",
      image: "/images/destinations/malaysia/gallery-3.jpg",
      alt: "Colorful steps leading to Batu Caves",
    },
    {
      label: "Cameron Highlands",
      image: "/images/destinations/malaysia/gallery-4.jpg",
      alt: "Rolling tea plantations in Cameron Highlands",
    },
    {
      label: "Penang Heritage Streets",
      image: "/images/destinations/malaysia/gallery-5.jpg",
      alt: "Historic streets and murals in Penang",
    },
  ],

  experiences: [
    {
      emoji: "🏙️",
      title: "Petronas Skybridge Visit",
      description:
        "Admire Kuala Lumpur's skyline from one of the world's most famous twin towers.",
      tag: "Landmark",
      tagColor: "gold",
    },
    {
      emoji: "🏝️",
      title: "Langkawi Island Escape",
      description:
        "Relax on white-sand beaches and enjoy crystal-clear waters and island adventures.",
      tag: "Leisure",
      tagColor: "blue",
    },
    {
      emoji: "🛕",
      title: "Explore Batu Caves",
      description:
        "Visit Malaysia's iconic Hindu shrine and climb its colorful staircase.",
      tag: "Cultural",
      tagColor: "purple",
    },
    {
      emoji: "🌿",
      title: "Cameron Highlands Retreat",
      description:
        "Discover cool mountain weather, tea plantations, and scenic hiking trails.",
      tag: "Nature",
      tagColor: "green",
    },
    {
      emoji: "🍜",
      title: "Malaysian Food Trail",
      description:
        "Enjoy a fusion of Malay, Chinese, and Indian flavors across bustling food markets.",
      tag: "Food & Drink",
      tagColor: "amber",
    },
    {
      emoji: "🦧",
      title: "Rainforest Adventure",
      description:
        "Explore ancient rainforests and encounter unique wildlife in Malaysia's natural reserves.",
      tag: "Adventure",
      tagColor: "coral",
    },
  ],

  months: [
    { name: "Jan", rating: "good" },
    { name: "Feb", rating: "peak" },
    { name: "Mar", rating: "peak" },
    { name: "Apr", rating: "good" },
    { name: "May", rating: "good" },
    { name: "Jun", rating: "good" },
    { name: "Jul", rating: "peak" },
    { name: "Aug", rating: "peak" },
    { name: "Sep", rating: "good" },
    { name: "Oct", rating: "avoid" },
    { name: "Nov", rating: "avoid" },
    { name: "Dec", rating: "good" },
  ],

  tips: [
    {
      number: "01",
      title: "Pack for Rain",
      text: "Tropical showers can occur throughout the year, even during dry seasons.",
    },
    {
      number: "02",
      title: "Use Grab App",
      text: "Grab is the easiest and most affordable way to get around major cities.",
    },
    {
      number: "03",
      title: "Try Local Cuisine",
      text: "Don't miss nasi lemak, satay, laksa, and authentic street food experiences.",
    },
    {
      number: "04",
      title: "Visit Multiple Regions",
      text: "Malaysia offers completely different experiences between cities, islands, and highlands.",
    },
  ],

  ctaTitle: "Ready to Explore Malaysia?",
  ctaSubtitle:
    "Discover tropical beauty, cultural diversity, and world-class experiences across Malaysia.",
},


{
  slug: "maldives",
  name: "Maldives",
  country: "Maldives",
  tagline: "Destination",
  heroVideo: "/videos/Maldives.mp4",
  heroDescription:
    "A tropical paradise of turquoise lagoons, overwater villas, pristine beaches, and unforgettable luxury experiences in the Indian Ocean.",
  rating: 5.0,

  facts: [
    { icon: "Clock", label: "Best Duration", value: "4 – 8 Days" },
    { icon: "Coins", label: "Avg. Budget", value: "$200 – $800 / day" },
    { icon: "Thermometer", label: "Climate", value: "Tropical, 26–31°C" },
    { icon: "Languages", label: "Language", value: "Dhivehi, English" },
    { icon: "Plane", label: "Nearest Airport", value: "Velana Intl. (MLE)" },
  ],

  galleryItems: [
    {
      label: "Overwater Villas",
      image: "/images/destinations/maldives/gallery-1.jpg",
      alt: "Luxury overwater villas above crystal-clear lagoon",
    },
    {
      label: "Private Sandbank",
      image: "/images/destinations/maldives/gallery-2.jpg",
      alt: "Isolated sandbank surrounded by turquoise waters",
    },
    {
      label: "Coral Reefs",
      image: "/images/destinations/maldives/gallery-3.jpg",
      alt: "Colorful coral reefs with tropical marine life",
    },
    {
      label: "Sunset Cruise",
      image: "/images/destinations/maldives/gallery-4.jpg",
      alt: "Luxury yacht sailing during sunset",
    },
    {
      label: "Underwater Restaurant",
      image: "/images/destinations/maldives/gallery-5.jpg",
      alt: "Dining beneath the ocean surrounded by marine life",
    },
  ],

  experiences: [
    {
      emoji: "🏝️",
      title: "Private Island Escape",
      description:
        "Enjoy complete privacy on secluded islands surrounded by breathtaking turquoise lagoons.",
      tag: "Luxury",
      tagColor: "gold",
    },
    {
      emoji: "🤿",
      title: "World-Class Snorkeling",
      description:
        "Swim among vibrant coral reefs, manta rays, sea turtles, and tropical fish.",
      tag: "Adventure",
      tagColor: "blue",
    },
    {
      emoji: "🌅",
      title: "Sunset Dolphin Cruise",
      description:
        "Watch playful dolphins leap across the ocean during magical sunset cruises.",
      tag: "Nature",
      tagColor: "green",
    },
    {
      emoji: "💆",
      title: "Oceanfront Spa Retreat",
      description:
        "Relax with luxury spa treatments while listening to gentle waves beneath your villa.",
      tag: "Wellness",
      tagColor: "purple",
    },
    {
      emoji: "🍽️",
      title: "Underwater Dining",
      description:
        "Experience extraordinary dining surrounded by colorful marine life and coral gardens.",
      tag: "Food & Drink",
      tagColor: "amber",
    },
    {
      emoji: "🚤",
      title: "Island Hopping Adventure",
      description:
        "Explore local islands, hidden lagoons, and untouched beaches across the archipelago.",
      tag: "Adventure",
      tagColor: "coral",
    },
  ],

  months: [
    { name: "Jan", rating: "peak" },
    { name: "Feb", rating: "peak" },
    { name: "Mar", rating: "peak" },
    { name: "Apr", rating: "good" },
    { name: "May", rating: "avoid" },
    { name: "Jun", rating: "avoid" },
    { name: "Jul", rating: "good" },
    { name: "Aug", rating: "good" },
    { name: "Sep", rating: "avoid" },
    { name: "Oct", rating: "good" },
    { name: "Nov", rating: "peak" },
    { name: "Dec", rating: "peak" },
  ],

  tips: [
    {
      number: "01",
      title: "Choose the Right Resort",
      text: "Every island offers a unique experience, from family-friendly resorts to ultra-luxury escapes.",
    },
    {
      number: "02",
      title: "Book Water Villas Early",
      text: "The most sought-after villas sell out months in advance, especially during peak season.",
    },
    {
      number: "03",
      title: "Pack Reef-Safe Sunscreen",
      text: "Protect both your skin and the fragile marine ecosystem while enjoying the beaches.",
    },
    {
      number: "04",
      title: "Bring Underwater Gear",
      text: "A snorkel camera helps capture unforgettable moments beneath the crystal-clear waters.",
    },
  ],

  ctaTitle: "Ready to Escape to the Maldives?",
  ctaSubtitle:
    "Let us create your dream island getaway filled with luxury, romance, and unforgettable ocean adventures.",
},


{
  slug: "mauritius",
  name: "Mauritius",
  country: "Mauritius",
  tagline: "Destination",
  heroVideo: "/videos/Mauritius.mp4",
  heroDescription:
    "An island paradise where turquoise lagoons, lush mountains, vibrant culture, and luxury resorts create unforgettable memories.",
  rating: 4.9,

  facts: [
    { icon: "Clock", label: "Best Duration", value: "5 – 8 Days" },
    { icon: "Coins", label: "Avg. Budget", value: "$100 – $300 / day" },
    { icon: "Thermometer", label: "Climate", value: "Tropical, 20–32°C" },
    { icon: "Languages", label: "Language", value: "English, French, Creole" },
    { icon: "Plane", label: "Nearest Airport", value: "Sir Seewoosagur Ramgoolam (MRU)" },
  ],

  galleryItems: [
    {
      label: "Le Morne Brabant",
      image: "/images/destinations/mauritius/gallery-1.jpg",
      alt: "Le Morne mountain overlooking turquoise waters",
    },
    {
      label: "Île aux Cerfs",
      image: "/images/destinations/mauritius/gallery-2.jpg",
      alt: "Beautiful beaches of Ile aux Cerfs",
    },
    {
      label: "Chamarel Seven Colored Earth",
      image: "/images/destinations/mauritius/gallery-3.jpg",
      alt: "Unique multicolored sand dunes",
    },
    {
      label: "Black River Gorges",
      image: "/images/destinations/mauritius/gallery-4.jpg",
      alt: "Lush rainforest landscapes and waterfalls",
    },
    {
      label: "Grand Baie",
      image: "/images/destinations/mauritius/gallery-5.jpg",
      alt: "Luxury marina and beach destination",
    },
  ],

  experiences: [
    {
      emoji: "🏖️",
      title: "Luxury Beach Retreat",
      description:
        "Relax on some of the world's most beautiful beaches with crystal-clear lagoons.",
      tag: "Luxury",
      tagColor: "gold",
    },
    {
      emoji: "⛰️",
      title: "Le Morne Adventure",
      description:
        "Hike the iconic mountain for spectacular panoramic views across the island.",
      tag: "Adventure",
      tagColor: "coral",
    },
    {
      emoji: "🤿",
      title: "Lagoon Snorkeling",
      description:
        "Explore colorful reefs, tropical fish, and calm turquoise waters.",
      tag: "Nature",
      tagColor: "blue",
    },
    {
      emoji: "🌿",
      title: "Rainforest Exploration",
      description:
        "Discover waterfalls, hiking trails, and unique wildlife in protected reserves.",
      tag: "Nature",
      tagColor: "green",
    },
    {
      emoji: "🍤",
      title: "Creole Culinary Experience",
      description:
        "Taste fresh seafood and a fusion of Indian, African, and French influences.",
      tag: "Food & Drink",
      tagColor: "amber",
    },
    {
      emoji: "🚤",
      title: "Island Excursions",
      description:
        "Visit hidden coves, offshore islands, and scenic coastal villages by boat.",
      tag: "Adventure",
      tagColor: "purple",
    },
  ],

  months: [
    { name: "Jan", rating: "good" },
    { name: "Feb", rating: "avoid" },
    { name: "Mar", rating: "good" },
    { name: "Apr", rating: "peak" },
    { name: "May", rating: "peak" },
    { name: "Jun", rating: "peak" },
    { name: "Jul", rating: "peak" },
    { name: "Aug", rating: "peak" },
    { name: "Sep", rating: "peak" },
    { name: "Oct", rating: "peak" },
    { name: "Nov", rating: "good" },
    { name: "Dec", rating: "good" },
  ],

  tips: [
    {
      number: "01",
      title: "Rent a Car",
      text: "The best way to explore the island's beaches, mountains, and hidden gems is by car.",
    },
    {
      number: "02",
      title: "Explore Beyond Resorts",
      text: "Local villages, markets, and natural attractions reveal Mauritius' true charm.",
    },
    {
      number: "03",
      title: "Book Water Activities",
      text: "Popular snorkeling and catamaran tours fill up quickly during peak season.",
    },
    {
      number: "04",
      title: "Carry Light Clothing",
      text: "The tropical climate is warm throughout the year, especially near the coast.",
    },
  ],

  ctaTitle: "Ready to Discover Mauritius?",
  ctaSubtitle:
    "Experience tropical beauty, luxury resorts, and unforgettable island adventures.",
},



{
  slug: "europe",
  name: "Europe",
  country: "Multi-Country Experience",
  tagline: "Destination",
  heroVideo: "/videos/Europe.mp4",
  heroDescription:
    "From the Swiss Alps to Parisian boulevards and Mediterranean coastlines, Europe offers timeless beauty, culture, and unforgettable experiences.",
  rating: 5.0,

  facts: [
    { icon: "Clock", label: "Best Duration", value: "10 – 20 Days" },
    { icon: "Coins", label: "Avg. Budget", value: "$120 – $400 / day" },
    { icon: "Thermometer", label: "Climate", value: "Varies by Region" },
    { icon: "Languages", label: "Language", value: "Multiple European Languages" },
    { icon: "Plane", label: "Nearest Airport", value: "Major European Hubs" },
  ],

  galleryItems: [
    {
      label: "Swiss Alps",
      image: "/images/destinations/europe/gallery-1.jpg",
      alt: "Snow-capped Swiss Alps landscape",
    },
    {
      label: "Eiffel Tower",
      image: "/images/destinations/europe/gallery-2.jpg",
      alt: "Eiffel Tower illuminated at sunset",
    },
    {
      label: "Venice Canals",
      image: "/images/destinations/europe/gallery-3.jpg",
      alt: "Historic canals and gondolas in Venice",
    },
    {
      label: "Santorini",
      image: "/images/destinations/europe/gallery-4.jpg",
      alt: "Whitewashed houses overlooking the sea",
    },
    {
      label: "Amsterdam Canals",
      image: "/images/destinations/europe/gallery-5.jpg",
      alt: "Picturesque canals and historic architecture",
    },
  ],

  experiences: [
    {
      emoji: "🏔️",
      title: "Swiss Alpine Adventure",
      description:
        "Explore breathtaking mountain scenery, scenic trains, and charming alpine villages.",
      tag: "Adventure",
      tagColor: "blue",
    },
    {
      emoji: "🗼",
      title: "Parisian Elegance",
      description:
        "Experience world-famous landmarks, art museums, and romantic city streets.",
      tag: "Cultural",
      tagColor: "gold",
    },
    {
      emoji: "🚤",
      title: "Venice Canal Cruise",
      description:
        "Glide through historic waterways surrounded by timeless architecture.",
      tag: "Scenic",
      tagColor: "purple",
    },
    {
      emoji: "🏛️",
      title: "Historic Wonders",
      description:
        "Discover centuries of history through castles, cathedrals, and ancient monuments.",
      tag: "Cultural",
      tagColor: "green",
    },
    {
      emoji: "🍷",
      title: "European Culinary Journey",
      description:
        "Indulge in fine wines, authentic cuisines, and world-renowned gastronomy.",
      tag: "Food & Drink",
      tagColor: "amber",
    },
    {
      emoji: "🌅",
      title: "Mediterranean Escape",
      description:
        "Relax along spectacular coastlines and charming seaside towns.",
      tag: "Leisure",
      tagColor: "coral",
    },
  ],

  months: [
    { name: "Jan", rating: "good" },
    { name: "Feb", rating: "good" },
    { name: "Mar", rating: "good" },
    { name: "Apr", rating: "peak" },
    { name: "May", rating: "peak" },
    { name: "Jun", rating: "peak" },
    { name: "Jul", rating: "peak" },
    { name: "Aug", rating: "peak" },
    { name: "Sep", rating: "peak" },
    { name: "Oct", rating: "good" },
    { name: "Nov", rating: "good" },
    { name: "Dec", rating: "peak" },
  ],

  tips: [
    {
      number: "01",
      title: "Plan Transportation Early",
      text: "High-speed trains and flights are often much cheaper when booked in advance.",
    },
    {
      number: "02",
      title: "Pack for Different Climates",
      text: "Weather varies significantly across Europe depending on the region and season.",
    },
    {
      number: "03",
      title: "Use Rail Passes",
      text: "Rail passes can save both time and money when visiting multiple countries.",
    },
    {
      number: "04",
      title: "Allow Extra Time",
      text: "Europe's biggest charm lies in wandering through its streets, cafés, and hidden corners.",
    },
  ],

  ctaTitle: "Ready for Your European Adventure?",
  ctaSubtitle:
    "Let us craft a personalized journey through Europe's most iconic destinations and hidden gems.",
},

 
];

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug);
}

export function getAllDestinationSlugs(): string[] {
  return destinations.map((d) => d.slug);
}
