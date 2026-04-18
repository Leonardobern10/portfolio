interface Project {
  num: string;
  type: string;
  title: string;
  desc: string;
  decision?: string;
  stack: string[];
  github: string;
  live?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    num: "01",
    type: "Featured",
    title: "TaskLy — Collaborative Task Platform",
    desc: "A full microservices platform where each domain — auth, tasks, comments, notifications — runs as an independent service with its own data and deployment boundary. Built in 14 days, from architecture planning to documentation.",
    decision:
      "RabbitMQ for async event delivery (tasks.created, comment.new) to decouple the notification pipeline from the request lifecycle. QueryBuilder over repository.find() for composable, dynamic filtering.",
    stack: ["NestJS", "TypeScript", "RabbitMQ", "PostgreSQL", "WebSockets", "JWT", "Turborepo", "Docker"],
    github: "https://github.com/Leonardobern10/TaskLy",
    featured: true,
  },
  {
    num: "02",
    type: "Mobile",
    title: "PillOnTime",
    desc: "Mobile app that helps users manage medications and never miss a dose. Automatic dose calculation, push notifications, usage history, and offline-first SQLite persistence.",
    stack: ["React Native", "TypeScript", "Expo", "SQLite"],
    github: "https://github.com/Leonardobern10/Pill_On_Time",
  },
  {
    num: "03",
    type: "Full-stack",
    title: "E-commerce System",
    desc: "Full e-commerce system with Vue.js frontend and Node.js backend — user management, product catalog, shopping cart, order flow, and JWT authentication.",
    stack: ["Vue.js", "Node.js", "MongoDB", "Express", "JWT"],
    github: "https://github.com/Leonardobern10",
  },
  {
    num: "04",
    type: "API",
    title: "Expense Management API",
    desc: "RESTful API built with Spring Boot for personal finance management — expense tracking, debt control, category-based limits, and JWT-based authentication.",
    stack: ["Java", "Spring Boot", "MongoDB", "Docker", "JWT"],
    github: "https://github.com/Leonardobern10",
  },
  {
    num: "05",
    type: "Backend",
    title: "Car Management System",
    desc: "Full CRUD application for vehicle management with Spring Boot and JPA — pagination, Swagger documentation, and JUnit test coverage.",
    stack: ["Java", "Spring Boot", "PostgreSQL", "JPA", "Swagger", "JUnit"],
    github: "https://github.com/Leonardobern10",
  },
  {
    num: "06",
    type: "Frontend",
    title: "Locale Travel",
    desc: "Responsive, accessible landing page built with React + TypeScript, Vite, TailwindCSS, and shadcn/ui — focused on component architecture and UI best practices.",
    stack: ["React", "TypeScript", "TailwindCSS", "Vite", "shadcn/ui"],
    github: "https://github.com/Leonardobern10",
    live: "https://portfolio-leonardo25.vercel.app",
  },
];

function FeaturedProject({ project }: { project: Project }) {
  return (
    <div className="bg-[#111113] p-10 grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-12 border-b border-white/[0.06] fade-in">
      <div>
        <div className="flex justify-between items-center mb-5">
          <span className="font-mono-custom text-[11px] text-[#555250] tracking-[0.1em]">
            {project.num}
          </span>
          <span className="font-mono-custom text-[11px] text-accent border border-accent px-2 py-1 rounded-sm tracking-wide">
            {project.type}
          </span>
        </div>
        <h3 className="font-serif-custom text-[1.7rem] font-light leading-[1.15] tracking-[-0.01em] mb-3">
          {project.title}
        </h3>
        <p className="text-[#888580] text-[14px] leading-[1.75] mb-5">
          {project.desc}
        </p>
        {project.decision && (
          <div className="border-l-2 border-accent pl-5 py-1 mb-5 bg-[#0a0a0b]">
            <p className="font-mono-custom text-[10px] text-accent uppercase tracking-[0.1em] mb-2">
              Key decision
            </p>
            <p className="text-[#888580] text-[13px] leading-[1.7]">
              {project.decision}
            </p>
          </div>
        )}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.stack.map((s) => (
            <span
              key={s}
              className="font-mono-custom text-[11px] px-2 py-1 bg-[#18181c] text-[#888580] rounded-sm"
            >
              {s}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="font-mono-custom text-[12px] text-[#555250] border-b border-white/[0.09] pb-px hover:text-accent hover:border-accent transition-colors tracking-wide"
          >
            GitHub →
          </a>
        </div>
      </div>

      {/* ASCII Architecture */}
      <div className="flex flex-col justify-center">
        <div className="bg-[#0a0a0b] border border-white/[0.09] rounded p-6 font-mono-custom text-[12px] leading-[2] text-[#888580]">
          <p className="text-[10px] text-[#555250] uppercase tracking-[0.1em] mb-3">
            Architecture
          </p>
          <div>┌─────────────────┐</div>
          <div>│ <span className="text-accent">API Gateway</span>     │ :3000</div>
          <div>└────────┬────────┘</div>
          <div>{"         "}│ TCP / MQ</div>
          <div>{"    "}┌────┴────┐</div>
          <div>
            {"  "}
            <span className="text-[#47ffd8]">Auth</span>
            {"     "}
            <span className="text-[#47ffd8]">Tasks</span>
            {"  "}:3001/3002
          </div>
          <div>{"    "}└────┬────┘</div>
          <div>
            {"         "}│ <span className="text-accent">RabbitMQ</span>
          </div>
          <div>{"  "}┌──────▼──────┐</div>
          <div>
            {"  "}│ <span className="text-[#47ffd8]">Notifications</span> │ WS
          </div>
          <div>{"  "}└─────────────┘</div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  return (
    <div
      className="bg-[#111113] p-10 hover:bg-[#18181c] transition-colors fade-in border-b border-r border-white/[0.06] last:border-r-0"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex justify-between items-center mb-5">
        <span className="font-mono-custom text-[11px] text-[#555250] tracking-[0.1em]">
          {project.num}
        </span>
        <span className="font-mono-custom text-[11px] text-accent border border-accent px-2 py-1 rounded-sm tracking-wide">
          {project.type}
        </span>
      </div>
      <h3 className="font-serif-custom text-[1.4rem] font-light leading-[1.2] tracking-[-0.01em] mb-3">
        {project.title}
      </h3>
      <p className="text-[#888580] text-[14px] leading-[1.75] mb-5">
        {project.desc}
      </p>
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.stack.map((s) => (
          <span
            key={s}
            className="font-mono-custom text-[11px] px-2 py-1 bg-[#18181c] text-[#888580] rounded-sm"
          >
            {s}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="font-mono-custom text-[12px] text-[#555250] border-b border-white/[0.09] pb-px hover:text-accent hover:border-accent transition-colors tracking-wide"
        >
          GitHub →
        </a>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="font-mono-custom text-[12px] text-[#555250] border-b border-white/[0.09] pb-px hover:text-[#47ffd8] hover:border-[#47ffd8] transition-colors tracking-wide"
          >
            Live →
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const featured = projects.find((p) => p.featured)!;
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-28 bg-[#111113]">
      <div className="max-w-[1100px] mx-auto px-10">
        <div className="mb-16 fade-in">
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-5 h-px bg-accent" />
            <span className="font-mono-custom text-[11px] text-accent tracking-[0.12em] uppercase">
              Projects
            </span>
          </div>
          <h2 className="font-serif-custom text-4xl md:text-5xl font-light tracking-[-0.02em] leading-[1.1]">
            Things I've built.
          </h2>
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto px-10">
        {/* Featured */}
        <FeaturedProject project={featured} />

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-l border-white/[0.06]">
          {rest.map((p, i) => (
            <ProjectCard key={p.num} project={p} delay={i * 50} />
          ))}
        </div>
      </div>
    </section>
  );
}
