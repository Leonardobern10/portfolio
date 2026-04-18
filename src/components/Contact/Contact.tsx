const contactLinks = [
  { label: "Email", value: "leonardo.bernardo2658@gmail.com", href: "mailto:leonardo.bernardo2658@gmail.com" },
  { label: "LinkedIn", value: "linkedin.com/in/leonardo-bern", href: "https://linkedin.com/in/leonardo-bern" },
  { label: "GitHub", value: "github.com/Leonardobern10", href: "https://github.com/Leonardobern10" },
  { label: "Medium", value: "@leonardo.bernardo2658", href: "https://medium.com/@leonardo.bernardo2658" },
];

const availability = [
  "Full-time roles (CLT or PJ)",
  "Remote-first positions",
  "Backend or fullstack roles",
  "National or international",
  "Overlap UTC-3 (Brazil)",
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28 bg-[#111113] relative overflow-hidden"
    >
      {/* Glow */}
      <div className="pointer-events-none absolute bottom-[-30%] left-[-10%] w-[500px] h-[500px] bg-[radial-gradient(ellipse,rgba(71,255,216,0.05)_0%,transparent_60%)]" />

      <div className="max-w-[1100px] mx-auto px-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-20 items-start">

          {/* Left */}
          <div className="fade-in">
            <h2 className="font-serif-custom text-5xl md:text-[4rem] font-light tracking-[-0.03em] leading-[1.05] mb-6">
              Let's build
              <br />
              something{" "}
              <em className="not-italic text-[#47ffd8]">real.</em>
            </h2>
            <p className="text-[#888580] text-[16px] leading-[1.8] mb-10">
              I'm actively looking for my first professional role in software
              engineering. If you're hiring or just want to talk tech, I'd love
              to connect.
            </p>

            <div className="space-y-4">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noreferrer"
                  className="flex items-center gap-6 group"
                >
                  <span className="font-mono-custom text-[11px] text-[#555250] w-16 tracking-wide flex-shrink-0">
                    {link.label}
                  </span>
                  <span className="text-[#f0ede8] text-[15px] border-b border-white/[0.09] pb-0.5 group-hover:text-accent group-hover:border-accent transition-colors">
                    {link.value}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Right — Availability card */}
          <div className="fade-in [transition-delay:100ms]">
            <div className="bg-[#18181c] border border-white/[0.09] rounded p-8">
              <div className="flex items-center gap-2 mb-6">
                <span className="pulse-dot inline-block w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <span className="font-mono-custom text-[12px] text-accent uppercase tracking-[0.08em]">
                  Available now
                </span>
              </div>

              <div className="space-y-3 mb-8">
                {availability.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="font-mono-custom text-[12px] text-accent">
                      ✓
                    </span>
                    <span className="text-[#888580] text-[14px]">{item}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/[0.06] pt-6">
                <p className="font-mono-custom text-[11px] text-[#555250] uppercase tracking-wide mb-1">
                  Response time
                </p>
                <p className="text-[#888580] text-[14px]">Usually within 24h</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
