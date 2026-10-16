import Navbar from "./Navbar";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative isolate min-h-155 overflow-hidden bg-cover bg-center md:min-h-175"
      style={{
        backgroundImage: "url('https://images.openai.com/static-rsc-4/8PVqf1KF-LCUdYxP393rMuux1Cgyd5atpazuV0T4meJaWg-oorm5i_PScE8_Ok_4vQtbN5zXr0Q7FH8u5pzMe70m7OuQYhZk0TxMQRMNVe8SKm80ed--1UY3LJmas_poC4vHd7DXFLTbMw_JfZ5-OeNlLg9P7aBh_34w9jvJCwPEamkGLSWt2lbuQqKrvtkJ?purpose=fullsize')",
      }}
    >
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-black/55 via-black/25 to-transparent" />

      <Navbar />

      <div className="mx-auto flex min-h-132.5 max-w-7xl flex-col justify-center px-6 pb-16 md:min-h-150 md:px-12">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300/65 sm:text-sm">
          Discover the extraordinary
        </p>

        <h1 className="max-w-3xl text-5xl font-bold leading-[1.08] tracking-tight text-white/70 sm:text-6xl md:text-7xl">
          Find Your Next
          <span className="block text-cyan-300/70">Adventure</span>
        </h1>

        <p className="mt-6 max-w-xl text-base leading-7 text-gray-300/70 sm:text-lg">
          Explore  breathtaking destinations, discover hidden places, and create unforgettable memories wherever your journey takes you.
        </p>

        <a
          href="#destinations"
          className="mt-8 w-fit rounded-full bg-cyan-300 px-7 py-3.5 font-semibold text-slate-950 opacity-60 transition hover:bg-white"
        >
          Explore Destinations →
        </a>

        <p className="mt-8 text-xs tracking-widest text-white/40">
          EXPLORE MORE · EXPERIENCE MORE
        </p>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-slate-950 to-transparent" />
    </section>
  );
}