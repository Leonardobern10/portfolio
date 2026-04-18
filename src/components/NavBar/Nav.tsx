export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-10 py-5 border-b border-white/[0.06] bg-[#0a0a0b]/85 backdrop-blur-md">
      <span className="font-mono-custom text-[13px] text-accent tracking-widest">
        LB.dev
      </span>

      <div className="hidden md:flex gap-8">
        {["About", "Projects", "Writing", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="font-mono-custom text-[12px] text-[#888580] hover:text-[#f0ede8] tracking-widest uppercase transition-colors duration-200"
          >
            {item}
          </a>
        ))}
      </div>

      <a
        href="#contact"
        className="font-mono-custom text-[12px] text-[#0a0a0b] bg-accent px-5 py-2 rounded-sm tracking-wide hover:opacity-85 transition-opacity"
      >
        Hire me
      </a>
    </nav>
  );
}
