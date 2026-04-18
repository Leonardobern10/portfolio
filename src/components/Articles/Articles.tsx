const MEDIUM_URL = "https://medium.com/@leonardo.bernardo2658";

const articles = [
  {
    title: "Observability: Beyond Logs and Metrics",
    tags: ["observability", "full-stack"],
  },
  {
    title:
      "Design Patterns in Depth: Theory, Practice, and Real-World Application",
    tags: ["design-patterns", "clean-code", "solid"],
  },
  {
    title: "The DNS Service: How It Works and Why It Matters",
    tags: ["dns", "networking"],
  },
  {
    title: "How Email Works: The Mail Service Explained",
    tags: ["email", "networking"],
  },
  {
    title: "The Application Layer: HTTP, HTTPS, and How the Web Communicates",
    tags: ["https", "web", "internet"],
  },
  {
    title: "The Importance of Application Architecture in the Digital Era",
    tags: ["architecture", "software-engineering"],
  },
  {
    title: "Virtual Circuits: Fundamentals and How They Work",
    tags: ["networking", "computer-science"],
  },
  {
    title: "Packet Routing: Switching, Routing, and Virtual Circuits",
    tags: ["routing", "networking"],
  },
  {
    title: "Datagrams on the Internet + Understanding the Network Layer",
    tags: ["tcp", "ip", "internet"],
  },
];

export default function Articles() {
  return (
    <section id="writing" className="py-28">
      <div className="max-w-[1100px] mx-auto px-10">
        {/* Header */}
        <div className="mb-16 fade-in">
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-5 h-px bg-accent" />
            <span className="font-mono-custom text-[11px] text-accent tracking-[0.12em] uppercase">
              Writing
            </span>
          </div>
          <h2 className="font-serif-custom text-4xl md:text-5xl font-light tracking-[-0.02em] leading-[1.1] mb-4">
            Thinking out loud
            <br />
            about engineering.
          </h2>
          <p className="text-[#888580] text-[16px] max-w-[520px] leading-[1.8]">
            I write about software engineering fundamentals and architecture on
            Medium — because understanding the "why" matters as much as knowing
            the "how."
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06] fade-in">
          {articles.map((article) => (
            <a
              key={article.title}
              href={MEDIUM_URL}
              target="_blank"
              rel="noreferrer"
              className="bg-[#0a0a0b] p-8 hover:bg-[#18181c] transition-colors group block"
            >
              <div className="flex flex-wrap gap-1.5 mb-4">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono-custom text-[10px] px-2 py-1 bg-[#111113] text-[#555250] rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-[#f0ede8] text-[15px] leading-[1.45] mb-4">
                {article.title}
              </p>
              <span className="font-mono-custom text-[11px] text-[#47ffd8] tracking-wide border-b border-transparent group-hover:border-[#47ffd8] pb-px transition-colors">
                Read on Medium →
              </span>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 text-center fade-in">
          <a
            href={MEDIUM_URL}
            target="_blank"
            rel="noreferrer"
            className="font-mono-custom text-[13px] text-[#f0ede8] border border-white/[0.15] px-8 py-3.5 rounded-sm inline-block hover:border-white transition-colors tracking-wide"
          >
            All articles on Medium →
          </a>
        </div>
      </div>
    </section>
  );
}
