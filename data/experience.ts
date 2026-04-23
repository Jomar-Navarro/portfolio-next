export type ExperienceItem = {
	type: "work" | "edu";
	role: string;
	company: string;
	period: string;
	location?: string;
	bullets: string[];
	tags: string[];
	color: string;
	textColor: string;
};

export const experienceItems: ExperienceItem[] = [
	{
		type: "work",
		role: "Jr. Full-Stack Developer",
		company: "IDI srl",
		period: "Maggio 2025 – Presente",
		location: "Torino, IT",
		bullets: [
			"Microservizio AI (FastAPI + OpenAI GPT-4o-mini) per summary social-ottimizzati con rate limiting e Docker — deployato in produzione.",
			"Portale forbes.it (Next.js 15 + React 19 + TypeScript): 85+ componenti, API REST Laravel con filtri avanzati.",
			"Refactoring classe User in 11 PHP Traits modulari su piattaforma social enterprise.",
			"Workflow Agile: code review su PR, CI/CD GitHub Actions, deploy test/prod separati.",
		],
		tags: ["Next.js 15", "FastAPI", "OpenAI", "PHP 8.x", "Laravel", "Docker", "GitHub Actions"],
		color: "rgba(124,58,237,0.15)",
		textColor: "#a78bfa",
	},
	{
		type: "edu",
		role: "React – The Complete Guide",
		company: "Udemy — Maximilian Schwarzmüller",
		period: "Set 2024 – Dic 2024",
		bullets: ["Corso avanzato React, Next.js e Redux per applicazioni SPA/SSR moderne."],
		tags: ["React", "Next.js", "Redux", "TypeScript"],
		color: "rgba(6,182,212,0.15)",
		textColor: "#22d3ee",
	},
	{
		type: "edu",
		role: "Master Full-Stack Web Developer",
		company: "Boolean",
		period: "Gen 2024 – Lug 2024",
		location: "Torino, IT",
		bullets: [
			"Corso intensivo da 700 ore (live): HTML, CSS, JS, PHP, Laravel, Vue.js, MySQL, Git, Agile/Scrum.",
		],
		tags: ["PHP", "Laravel", "Vue.js", "MySQL", "Agile"],
		color: "rgba(6,182,212,0.15)",
		textColor: "#22d3ee",
	},
	{
		type: "work",
		role: "Addetto Controllo Qualità",
		company: "CO.R.A s.r.l",
		period: "Feb 2023 – Set 2023",
		location: "Torino, IT",
		bullets: [
			"QA su componentistica automotive: rigore procedurale e attenzione al dettaglio trasferiti nel testing software.",
		],
		tags: ["QA", "Testing", "Automotive"],
		color: "rgba(124,58,237,0.12)",
		textColor: "#a78bfa",
	},
	{
		type: "edu",
		role: "Diploma Perito Meccanico & Meccatronico",
		company: "I.I.S A. Avogadro",
		period: "2016 – 2022",
		location: "Torino, IT",
		bullets: ["Diploma tecnico con focus su sistemi meccanici e meccatronici."],
		tags: ["Meccanica", "Meccatronica"],
		color: "rgba(37,99,235,0.15)",
		textColor: "#60a5fa",
	},
];
