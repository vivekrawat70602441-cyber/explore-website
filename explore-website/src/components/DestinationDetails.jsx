import { AnimatePresence, motion } from "motion/react";

export default function DestinationDetails({ destination, onClose }) {
    return (
        <AnimatePresence>
            {destination && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
                    initials={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.article
                        layoutId={`destination-${destination.id}`}
                        onClick={(event) => event.stopPropagation()}
                        className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-slate-900"
                    >
                        <motion.img
                            layoutId={`image-${destination.id}`}
                            src={destination.image}
                            alt={destination.title}
                            className="h-64 w-full object-cover sm:h-80"
                        />

                        <div className="p-6 sm:p-8">
                            <p className="text-sm text-cyan-300">
                                {destination.category}
                            </p>

                            <h2 className="mt-2 text-3xl font-bold text-white">
                                {destination.title}
                            </h2>

                            <p className="mt-4 text-gray-300">
                                {destination.description}
                            </p>

                            <button
                                onClick={onClose}
                                className="mt-6 rounded-full bg-cyan-300 px-6 py-3 font-semibold text-slate-950"
                            >
                                Close X
                            </button>
                        </div>
                    </motion.article>
                </motion.div>
            )}
        </AnimatePresence>
    );
}