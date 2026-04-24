import About from "@/../components/About";
import Contact from "@/../components/Contact";
import Experience from "@/../components/Experience";
import Footer from "@/../components/Footer";
import Header from "@/../components/Header";
import Hero from "@/../components/Hero";
import Skills from "@/../components/Skills";
import { ThemeProvider } from "@/../components/ThemeContext";
import Projects from "../../components/Projects";

export default function Home() {
	return (
		<>
			<ThemeProvider>
				<div className="min-h-screen bg-background relative overflow-x-hidden">
					{/* Cursor Light */}
					{/* <CursorLight /> */}

					{/* ── Ambient Background Orbs ── */}
					<div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
						{/* Violet orb — top left */}
						<div
							className="orb-animate-1 absolute -top-48 -left-48 w-187.5 h-187.5 rounded-full"
							style={{
								background:
									"radial-gradient(circle, var(--orb-primary) 0%, transparent 70%)",
								filter: "blur(64px)",
							}}
						/>
						{/* Cyan orb — top right */}
						<div
							className="orb-animate-2 absolute -top-24 -right-48 w-150 h-150 rounded-full"
							style={{
								background:
									"radial-gradient(circle, var(--orb-secondary) 0%, transparent 70%)",
								filter: "blur(64px)",
							}}
						/>
						{/* Blue orb — bottom center */}
						<div
							className="orb-animate-3 absolute bottom-0 left-1/2 -translate-x-1/2 w-162.5 h-162.5 rounded-full"
							style={{
								background:
									"radial-gradient(circle, var(--orb-tertiary) 0%, transparent 70%)",
								filter: "blur(72px)",
							}}
						/>
						{/* Secondary violet — mid right */}
						<div
							className="orb-animate-2 absolute top-1/2 -right-24 w-105 h-105 rounded-full"
							style={{
								background:
									"radial-gradient(circle, var(--orb-primary) 0%, transparent 70%)",
								filter: "blur(80px)",
								opacity: 0.55,
							}}
						/>
						{/* Small accent — mid left */}
						<div
							className="orb-animate-3 absolute top-[60%] -left-24 w-[320px] h-80 rounded-full"
							style={{
								background:
									"radial-gradient(circle, var(--orb-secondary) 0%, transparent 70%)",
								filter: "blur(60px)",
								opacity: 0.5,
							}}
						/>
						{/* Noise grain texture */}
						<div
							className="absolute inset-0 opacity-[0.025] dark:opacity-[0.045]"
							style={{
								backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
								backgroundRepeat: "repeat",
								backgroundSize: "128px 128px",
							}}
						/>
					</div>

					<Header />
					<main>
						<Hero />
						<About />
						<Experience />
						<Projects />
						<Skills />
						<Contact />
					</main>
					<Footer />
				</div>
			</ThemeProvider>
		</>
	);
}
