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
			"85+ componenti React e 17 servizi per forbes.it. ISR con revalidazione a 5 min riduce i tempi di risposta del 60% vs SSR puro. Microservizio DeepSearch (CogitAI) con ricerca semantica SSR/API JSON — deployato in produzione via GitHub Actions CI/CD.",
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
			"Microservizio REST che genera summary social-ottimizzati (400-480 char + hashtag) via GPT-4o-mini — latenza media <2s per richiesta. Rate limiting 10 req/min per IP (SlowAPI), validazione Pydantic, containerizzato con Docker e deployato in produzione.",
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
			"Classe User monolitica (~2.000 righe) decomposta in 11 PHP Traits modulari (post, chat, notifiche, wallet, hashtag, eventi, gruppi) su codebase enterprise. Zero breaking changes: piena compatibilità con il codice in produzione garantita da review su PR.",
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
			"Sito BFC Home in Astro (SSG, Lighthouse 95+). Hackathon 24h: UI totem self-service con scansione documenti, blacklist real-time e validazione costruita in React + Directus — consegnata funzionante entro la deadline.",
		image:
			"https://images.unsplash.com/photo-1567789733718-254c719b4974?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
		technologies: ["Astro", "React", "JavaScript", "Directus", "CSS3"],
		liveUrl: "#",
		githubUrl: "https://github.com/Jomar-Navarro",
		accent: "rgba(124,58,237,0.2)",
		badge: "🏆 Hackathon",
	},
];
