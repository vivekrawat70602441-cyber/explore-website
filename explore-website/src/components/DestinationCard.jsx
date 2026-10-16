import { motion } from "motion/react";

export default function DestinationCard({ destination, onSelect }) {
  return (
    <motion.article
      layoutId={`destination-${destination.id}`}
      onClick={() => onSelect(destination)}
      className="group relative h-90 min-w-0 shrink-0 snap-start overflow-hidden rounded-2xl border border-white/10 sm:h-100 w-[85%] sm:w-[47%] lg:w-[calc((100%-2.5rem)/3)]"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
    >
      <motion.img
        layoutId={`image-${destination.id}`}
        src={destination.image}
        alt={destination.title}
        loading="lazy"
        draggable="false"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/15 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
        <span className="inline-block rounded-full border border-white/30 bg-black/30 px-3 py-1 text-xs text-cyan-200 backdrop-blur-sm">
          {destination.category}
        </span>

        <h3 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
          {destination.title}
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-200 line-clamp-3">
          {destination.description}
        </p>

       <div className="mt-4 flex items-center justify-between">
        <span className="cursor-pointer text-sm font-semibold text-cyan-300 transition-colors group-hover:text-white">
          Show more
        </span>

        <span className="text-lg text-cyan-300 transition-transform group-hover:translate-x-1">
            →
        </span>
       </div>
      </div>
    </motion.article>
  );
}
