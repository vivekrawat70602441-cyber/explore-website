export default function Navbar() {
  return (
    <nav className="flex items-center justify-between gap-4 px-6 md:px-12">
      <a
        href="#home"
        className="text-2xl font-bold tracking-widest text-white opacity-50"
      >
        EXPLORE<span className="text-cyan-300">.</span>
      </a>

      <div className="flex gap-6">
        <a
          href="#home"
          className="opacity-50 transition hover:text-cyan-300"
        >
          Home
        </a>

        <a
          href="#destination"
          className="opacity-50 transition hover:text-cyan-300"
        >
          Discover
        </a>
      </div>
    </nav>
  );
}