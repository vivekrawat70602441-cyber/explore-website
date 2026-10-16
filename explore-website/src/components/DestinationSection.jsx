import DestinationCard from "./DestinationCard";

import { useRef, useState } from 'react';
import DestinationDetails from "./DestinationDetails";

const destinations = [
  {
    id: 1,
    title: "Mountain Escape",
    category: "Nature",
    description: "Escape the noise of everyday life and discover the peaceful beauty of the mountains. Surrounded by towering peaks, fresh air, and breathtaking landscapes, this destination is perfect for travelers who want to relax, explore scenic trails, and reconnect with nature. Watch the sunrise paint the mountains in golden light, enjoy quiet moments among the clouds, and create unforgettable memories far away the busy city.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxqmg6At8ITF3s4-Tf6ArGmzqW6qmdQg9lIbOReZLkfQ&s=10",
  },
  {
    id: 2,
    title: "Ocean Paradise",
    category: "Beach",
    description: "Discover a tropical paradise where crystal-clear waters meet golden sandy beaches. Spend your mornings listening to the gentle waves, explore beautiful coastlines, and enjoy spectacular sunsets over the ocean. Whether you love swimming, relaxing under palm trees, or discovering hidden seaside spots, this destination offers the perfect escape for anyone looking for peace, adventure, and unforgettable coastal experiences.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlsTtHYR9Pa1WHXVjSavVj_nkfX_WOwSwwyEDWyccd4g&s=10",
  },
  {
    id: 3,
    title: "Forest Retreat",
    category: "Adventure",
    description: "Step into a world of towering tress, winding trails, and peaceful natural surroundings. This forest retreat is ideal for travelers who want to slow down, breathe fresh air, and experience the beauty of untouched landscapes. Explore hidden paths, listen to birds singing through the tress, and discover the magic of nature at every turn. It is a wonderful place to disconnect from daily stress and enjoy a refreshing outdoor adventure.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdKRQ184Hu2cWyLuoYRhSasw1Wg5ybwJefwxfta9Zu1A&s=10",
  },
  {
    id: 4,
    title: "Desert Journey",
    category: "Exploration",
    description: "Experience the fascinating beauty of endless sand dunes, golden horizons, and dramatic desert landscapes. As the sunlight changes throughout the day, the desert transforms into a breathtaking scene of warm colors and deep shadows. Discover the peaceful silence of open spaces, explore remarkable natural formations, and enjoy unforgettable sunsets beneath the vast sky. This journey is perfect for explorers who want something different from ordinary travel destinations.",
    image: "https://plus.unsplash.com/premium_photo-1661963573455-ba0446e2cab9?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    id: 5,
    title: "Winter Wonderland",
    category: "Winter",
    description: "Enter a magical winter landscape filled with snow-covered mountains, frosty forests, and breathtaking white scenery. Enjoy the peaceful atmosphere of snowy trails, admire the beauty of frozen landscapes, and experience the charm of winter in the mountains. Whether you prefer a cozy getaway or an adventurous outdoor journey, this destination offers a refreshing change of scenery and countless opportunities to capture beautiful moments.",
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    id: 6,
    title: "City Lights",
    category: "City Life",
    description: "Discover a vibrant city that comes alive after sunset with glowing skyscrapers, lively streets, and unforgettable nighttime views. Explore local restaurants, discover hidden cafes, experience the energy of busy neighborhoods, and admire the architecture illuminated by thousands of lights. Every street has a different story to tell, making this destination perfect for travelers who enjoy urban adventures, photography, culture, and the excitement of city life.",
    image: "https://images.unsplash.com/photo-1505811210036-052144988918?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    id: 7,
    title: "Tropical Island",
    category: "Beach",
    description: "Escape to an island surrounded by turquoise waters, soft sandy beaches, and beautiful tropical scenery. Spend your days exploring the coastline, discovering colorful marine life, and relaxing beneath swaying palm trees. Enjoy peaceful mornings by the sea and spectacular sunsets that turn the horizon into a painting of orange, pink, and gold. This destination is perfect for anyone dreaming of a relaxing island holiday filled with natural beauty and memorable experiences.",
    image: "https://plus.unsplash.com/premium_photo-1723867356920-8e05009f3499?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    id: 8,
    title: "Alpine Adventure",
    category: "Adventure",
    description: "Journey into the heart of the Alps, where dramatic mountain peaks, green valleys, and breathtaking alpine scenery create an unforgettable adventure. Explore scenic hiking trails, discover charming mountain villages, and enjoy panoramic views from elevated viewpoints. Every season brings a different kind of beauty, from colorful summer meadows to peaceful snow-covered slopes. It is the ideal destination for travelers who love outdoor exploration, fresh mountain air, and extraordinary natural landscapes.",
    image: "https://images.unsplash.com/photo-1614686454913-1e93f6f8ea1d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    id: 9,
    title: "Golden Sunset",
    category: "Relaxation",
    description: "Slow down and enjoy the peaceful beauty of a golden sunset as the sky fills with warm shades of orange, pink, and purple. Find a quiet viewpoint, watch the changing colors reflect across the landscape, and take a moment to appreciate the world around you. Whether you are traveling alone, spending time with friends, or simply looking for a peaceful escape, this destination offers a beautiful reminder to pause, relax, and enjoy life's simple moments.",
    image: "https://plus.unsplash.com/premium_photo-1692282102639-233ec9f24468?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
];


export default function DestinationSection() {
  const [selectedDestination, setSelectedDestination] = useState(null);
  const carouselRef = useRef(null);

  function scrollCarousel(direction) {
    const carousel = carouselRef.current;

    if (!carousel) return;

    carousel.scrollBy({
      left: direction * carousel.clientWidth,
      behavior: "smooth",
    });
  }

  return (
    <section
      id="destinations"
      className="scroll-mt-6 bg-slate-950 px-5 py-16 sm:px-8 md:px-12 md:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300 sm:text-sm">
              Curated for explorers
            </p>

            <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Popular Destinations
            </h2>

            <p className="mt-3 text-sm text-gray-400 sm:text-base">
              Find a place that inspires your next journey.
            </p>
          </div>

          <div className="flex shrink-0 gap-2">
            <button
              type="button"
              onClick={() => scrollCarousel(-1)}
              aria-label="Scroll to previous destinations"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-xl text-white transition hover:border-cyan-300 hover:bg-cyan-300 hover:text-slate-950"
            >
              ←
            </button>

            <button
              type="button"
              onClick={() => scrollCarousel(1)}
              aria-label="Scroll to next destinations"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-xl text-white transition hover:border-cyan-300 hover:bg-cyan-300 hover:text-slate-950"
            >
              →
            </button>
          </div>
        </div>

        <div
          ref={carouselRef}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain pb-5 scrollbar-none [&::-webkit-srollbar]:hidden"
        >
          {destinations.map((destination) =>
            selectedDestination?.id === destination.id ? null : (
              <DestinationCard
                key={destination.id}
                destination={destination}
                onSelect={setSelectedDestination}
              />
            ))}
        </div>

        <p className="mt-3 text-center text-xs text-gray-500">
          ← Swipe or use the arrows to explore  →
        </p>
      </div>

      <DestinationDetails
        destination={selectedDestination}
        onClose={() => setSelectedDestination(null)}
      />
    </section>
  );
}
