export const SkillsText: { [key in TLanguages]: TSkillsContent } = {
  es: {
    title: "Mis conocimientos técnicos",
    subTitle:
      "Estas son algunas de las herramientas y tecnologías con las que trabajo día a día para construir aplicaciones modernas, escalables y eficientes.",
    groups: {
      frontend: {
        label: "Frontend",
        items: [
          { name: "ReactJS", url: "reactjs.png" },
          { name: "Next.js", url: "nextjs.png" },
          { name: "Tailwind CSS", url: "tailwindcss.png" },
          { name: "TypeScript", url: "typescript.svg" },
          { name: "Zustand", url: "zustand.svg" },
        ],
      },
      backend: {
        label: "Backend",
        items: [
          { name: "Node.js", url: "nodejs.png" },
          { name: "NestJS", url: "nestjs.svg" },
          { name: "Express", url: "express2.png" },
          { name: "Prisma ORM", url: "prisma2.png" },
        ],
      },
      databases: {
        label: "Bases de datos",
        items: [
          { name: "PostgreSQL", url: "postgresql.png" },
          { name: "MySQL", url: "mysql2.png" },
          { name: "MongoDB", url: "mongodb.png" },
          { name: "Redis", url: "redis.svg" },
        ],
      },
      tools: {
        label: "Herramientas",
        items: [
          { name: "Docker", url: "docker.svg" },
          { name: "Git", url: "git2.png" },
          { name: "GitHub", url: "github.png" },
          { name: "VSCode", url: "vscode.png" },
          { name: "Postman", url: "postman.png" },
          { name: "Cloudflare", url: "cloudflare.svg" },
        ],
      },
    },
  },
  en: {
    title: "My technical skills",
    subTitle:
      "Here are some of the tools and technologies I use to build modern, scalable, and efficient applications.",
    groups: {
      frontend: {
        label: "Frontend",
        items: [
          { name: "ReactJS", url: "reactjs.png" },
          { name: "Next.js", url: "nextjs.png" },
          { name: "Tailwind CSS", url: "tailwindcss.png" },
          { name: "TypeScript", url: "typescript.svg" },
          { name: "Zustand", url: "zustand.svg" },
        ],
      },
      backend: {
        label: "Backend",
        items: [
          { name: "Node.js", url: "nodejs.png" },
          { name: "NestJS", url: "nestjs.svg" },
          { name: "Express", url: "express2.png" },
          { name: "Prisma ORM", url: "prisma2.png" },
        ],
      },
      databases: {
        label: "Bases de datos",
        items: [
          { name: "PostgreSQL", url: "postgresql.png" },
          { name: "MySQL", url: "mysql2.png" },
          { name: "MongoDB", url: "mongodb.png" },
          { name: "Redis", url: "redis.svg" },
        ],
      },
      tools: {
        label: "Herramientas",
        items: [
          { name: "Docker", url: "docker.svg" },
          { name: "Git", url: "git2.png" },
          { name: "GitHub", url: "github.png" },
          { name: "VSCode", url: "vscode.png" },
          { name: "Postman", url: "postman.png" },
          { name: "Cloudflare", url: "cloudflare.svg" },
        ],
      },
    },
  },
} as const;
