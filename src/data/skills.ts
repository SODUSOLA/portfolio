export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  { category: "Backend", skills: ["Node.js", "Express", "FastAPI (Python)", "REST API Design", "JWT Auth"] },
  { category: "Frontend", skills: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "Recharts"] },
  { category: "Database", skills: ["PostgreSQL", "Prisma ORM", "MongoDB", "Redis"] },
  { category: "Infrastructure", skills: ["Docker", "BullMQ", "Socket.IO", "Swagger/OpenAPI"] },
  { category: "AI Integration", skills: ["Google Gemini AI"] },
  { category: "Tools", skills: ["Git", "GitHub", "Postman"] },
];
