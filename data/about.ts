import { Code2, Cpu, Zap, Globe } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Highlight = {
	icon: LucideIcon;
	label: string;
	desc: string;
};

export const highlights: Highlight[] = [
	{ icon: Code2, label: "Full-Stack", desc: "Next.js, React, PHP, Laravel" },
	{ icon: Cpu, label: "AI Integration", desc: "FastAPI · OpenAI GPT-4o-mini" },
	{ icon: Zap, label: "CI/CD & DevOps", desc: "Docker · GitHub Actions · Vercel" },
	{ icon: Globe, label: "3 Lingue", desc: "Italiano · English B2 · Filipino" },
];

export const stackTags = [
	"Next.js 15",
	"React 19",
	"TypeScript",
	"PHP 8.x",
	"Python",
	"Laravel",
	"FastAPI",
	"Docker",
];
