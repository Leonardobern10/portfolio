export default function Footer() {
  return (
    <footer className="px-10 py-8 border-t border-white/[0.06] flex justify-between items-center">
      <span className="font-mono-custom text-[12px] text-[#555250]">
        © 2025 Leonardo Bernardo
      </span>
      <a
        href="#hero"
        className="font-mono-custom text-[12px] text-[#555250] hover:text-accent transition-colors"
      >
        Back to top ↑
      </a>
    </footer>
  );
}
