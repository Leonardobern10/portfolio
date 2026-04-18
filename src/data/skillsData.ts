import type { SkillTopic } from "../types/SkillTopicType";

export const skillsData: SkillTopic[] = [
  {
    label: "Backend",
    items: [
      { name: "Node.js", highlight: true },
      { name: "TypeScript", highlight: true },
      { name: "NestJS", highlight: true },
      { name: "Java", highlight: false },
      { name: "Spring Boot", highlight: false },
      { name: "REST APIs", highlight: false },
    ],
  },
  {
    label: "Architecture",
    items: [
      { name: "Microservices", highlight: true },
      { name: "RabbitMQ", highlight: true },
      { name: "Event-driven", highlight: false },
      { name: "WebSockets", highlight: false },
      { name: "Docker", highlight: false },
    ],
  },
  {
    label: "Data",
    items: [
      { name: "PostgreSQL", highlight: true },
      { name: "MongoDB", highlight: false },
      { name: "Redis", highlight: false },
      { name: "TypeORM", highlight: false },
      { name: "SQLite", highlight: false },
    ],
  },
  {
    label: "Frontend",
    items: [
      { name: "React", highlight: false },
      { name: "React Native", highlight: false },
      { name: "Vue.js", highlight: false },
      { name: "TailwindCSS", highlight: false },
    ],
  },
];
