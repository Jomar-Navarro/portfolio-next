export type SkillCategory = {
	title: string;
	emoji: string;
	color: string;
	borderColor: string;
	textColor: string;
	skills: string[];
};

export const skillCategories: SkillCategory[] = [
	{
		title: "Core · Quotidiano",
		emoji: "⚡",
		color: "rgba(124,58,237,0.2)",
		borderColor: "rgba(124,58,237,0.3)",
		textColor: "#a78bfa",
		skills: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "PHP 8.x", "Laravel", "Python", "MySQL"],
	},
	{
		title: "AI & Architecture",
		emoji: "🤖",
		color: "rgba(6,182,212,0.2)",
		borderColor: "rgba(6,182,212,0.3)",
		textColor: "#22d3ee",
		skills: ["OpenAI GPT-4o-mini", "FastAPI", "Pydantic", "SlowAPI", "RESTful API", "ISR / SSR / SSG", "Docker", "CogitAI"],
	},
	{
		title: "Legacy & Ops",
		emoji: "🔧",
		color: "rgba(37,99,235,0.2)",
		borderColor: "rgba(37,99,235,0.3)",
		textColor: "#60a5fa",
		skills: ["PHP Traits", "Smarty", "SQLite", "New Relic", "Datadog", "Plesk", "systemd", "WordPress REST API"],
	},
	{
		title: "Tools & Workflow",
		emoji: "🛠",
		color: "rgba(124,58,237,0.15)",
		borderColor: "rgba(124,58,237,0.25)",
		textColor: "#c4b5fd",
		skills: ["Git", "GitHub Actions CI/CD", "Vite", "Vercel", "HTML5", "CSS3", "SASS", "JavaScript ES6+"],
	},
];
