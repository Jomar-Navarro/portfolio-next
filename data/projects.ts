export type Project = {
	id: number;
	title: string;
	description: string;
	image: string;
	technologies: string[];
	liveUrl: string;
	githubUrl: string;
	accent: string;
	badge: string;
};

export const projects: Project[] = [
	{
		id: 1,
		title: "Forbes Italia — Portale Web",
		description:
			"Architettura frontend modulare per forbes.it: 85+ componenti React, 17 servizi, ISR con revalidazione a 5 min e CDN multi-layer. Microservizio DeepSearch (CogitAI) con ricerca semantica SSR/API JSON, deployato con GitHub Actions CI/CD.",
		image:
			"https://images.unsplash.com/photo-1610902422826-548d3472fff5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
		technologies: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "WordPress API", "Docker"],
		liveUrl: "https://forbes.it",
		githubUrl: "#",
		accent: "rgba(124,58,237,0.3)",
		badge: "🚀 Production",
	},
	{
		id: 2,
		title: "AI Summarizer Microservice",
		description:
			"Microservizio REST standalone che genera summary social-ottimizzati (400-480 char + hashtag) tramite GPT-4o-mini. Rate limiting (10 req/min per IP via SlowAPI), validazione Pydantic, CORS middleware e Dockerfile dedicato.",
		image:
			"https://images.unsplash.com/photo-1674027444485-cec3da58eef4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
		technologies: ["Python", "FastAPI", "OpenAI GPT-4o-mini", "Pydantic", "Docker", "SlowAPI"],
		liveUrl: "#",
		githubUrl: "https://github.com/Jomar-Navarro",
		accent: "rgba(6,182,212,0.3)",
		badge: "🤖 AI",
	},
	{
		id: 3,
		title: "IDI Social Network — Refactoring",
		description:
			"Refactoring della classe core User in 11 PHP Traits modulari su una codebase enterprise di grandi dimensioni (post, chat, notifiche, wallet, hashtag, eventi, gruppi), mantenendo piena compatibilità con il codice in produzione.",
		image:
			"https://images.unsplash.com/photo-1656776890105-3d80eb67af13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
		technologies: ["PHP 8.x", "Smarty", "MySQL", "Docker"],
		liveUrl: "#",
		githubUrl: "https://github.com/Jomar-Navarro",
		accent: "rgba(37,99,235,0.25)",
		badge: "⚙️ Enterprise",
	},
	{
		id: 4,
		title: "BFC Home & Hackathon Totem UI",
		description:
			"Sito BFC Home con Astro (SSG + performance). Hackathon: UI totem self-service con scansione documenti, blacklist e validazione real-time costruita in React + Directus in 24h.",
		image:
			"https://images.unsplash.com/photo-1567789733718-254c719b4974?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
		technologies: ["Astro", "React", "JavaScript", "Directus", "CSS3"],
		liveUrl: "#",
		githubUrl: "https://github.com/Jomar-Navarro",
		accent: "rgba(124,58,237,0.2)",
		badge: "🏆 Hackathon",
	},
];
