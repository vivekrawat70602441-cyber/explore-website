export default function Footer() {
  return (
    <footer
      id="footer"
      className="border-t border-white/10 bg-slate-950 px-6 py-10 text-center"
    >
      <a
        href="#home"
        className="text=xl font-bold tracking-widest text-white"
      >
        EXPLORE<span className="text-cyan-300">.</span>
      </a>

      <p className="mt-3 text-sm text-gray-400">
        Your next adventure starts here.
      </p>

      <a
        href="#home"
        className="mt-5 inline-block text-sm text-cyan-300 hover:text-white"
      >
        Back to top  ↑
      </a>

      <p className="mt-8 text-xs text-gray-600">
        © 2026 Explore. All rights reserved.
      </p>
    </footer>
  );
}