"use client";

import { motion } from "motion/react";
import { ImageWithFallback } from "@/../components/figma/ImageWithFallBack";
import Coding from "../public/static/img/coding.png";
import { highlights, stackTags } from "@/../data/about";

export default function About() {
	return (
		<section id="about" className="py-28 relative">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Section header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<p
						className="text-primary uppercase tracking-widest mb-3"
						style={{ fontSize: "0.75rem", fontWeight: 600 }}
					>
						Chi sono
					</p>
					<h2
						className="gradient-text mb-4"
						style={{
							fontSize: "clamp(1.8rem, 4vw, 3rem)",
							fontWeight: 700,
							lineHeight: 1.1,
						}}
					>
						About Me
					</h2>
					<p className="text-muted-foreground max-w-xl mx-auto">
						Developer italiano con background multiculturale e passione per le
						tecnologie AI.
					</p>
				</motion.div>

				{/* Two-column grid */}
				<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
					{/* ── Left: Photo + stack tags ── */}
					<motion.div
						initial={{ opacity: 0, x: -28 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.75 }}
						viewport={{ once: true }}
					>
						{/* Photo card */}
						<div className="relative max-w-sm mx-auto lg:mx-0 mb-6">
							{/* Glow behind card */}
							<div
								className="absolute -inset-4 rounded-3xl opacity-40 blur-2xl pointer-events-none"
								style={{
									background:
										"linear-gradient(135deg, rgba(124,58,237,0.55), rgba(6,182,212,0.3))",
								}}
							/>
							<div
								className="relative glass gradient-border rounded-3xl overflow-hidden"
								style={{ aspectRatio: "4/3" }}
							>
								<ImageWithFallback
									src={Coding.src}
									alt="Developer workspace"
									className="w-full h-full object-cover"
								/>
								{/* Dark overlay at bottom */}
								<div
									className="absolute inset-0 pointer-events-none"
									style={{
										background:
											"linear-gradient(to top, rgba(7,7,16,0.55) 0%, transparent 55%)",
									}}
								/>
								{/* Status badge */}
								<div className="absolute bottom-4 left-4">
									<div className="relative glass gradient-border rounded-xl px-3 py-1.5 inline-flex items-center gap-2">
										<div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
										<span
											style={{
												fontSize: "0.75rem",
												color: "var(--foreground)",
											}}
										>
											Currently @ IDI srl · Torino
										</span>
									</div>
								</div>
							</div>
						</div>

						{/* Stack tags row */}
						<div className="flex flex-wrap gap-2">
							{stackTags.map((tag, i) => (
								<motion.span
									key={tag}
									initial={{ opacity: 0, scale: 0.85 }}
									whileInView={{ opacity: 1, scale: 1 }}
									transition={{ delay: 0.3 + i * 0.05, duration: 0.3 }}
									viewport={{ once: true }}
									whileHover={{ scale: 1.08 }}
									className="relative glass gradient-border rounded-lg px-3 py-1 cursor-default"
									style={{
										fontSize: "0.72rem",
										color: "var(--primary)",
										whiteSpace: "nowrap",
									}}
								>
									{tag}
								</motion.span>
							))}
						</div>
					</motion.div>

					{/* ── Right: Bio + bullets + cards ── */}
					<motion.div
						initial={{ opacity: 0, x: 28 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.75 }}
						viewport={{ once: true }}
						className="space-y-6"
					>
						{/* Bio */}
						<div>
							<h3 className="mb-3 text-foreground" style={{ fontWeight: 600 }}>
								Il mio percorso
							</h3>
							<p className="text-muted-foreground leading-relaxed">
								Sono un{" "}
								<strong className="text-foreground" style={{ opacity: 0.85 }}>
									Junior Full-Stack Developer
								</strong>{" "}
								con specializzazione in AI Integration, attualmente nel team di{" "}
								<strong className="text-foreground" style={{ opacity: 0.85 }}>
									IDI srl
								</strong>{" "}
								a Torino. Ho deployato in produzione microservizi AI con{" "}
								<em>FastAPI + OpenAI GPT-4o-mini</em> e contribuito al frontend
								di{" "}
								<strong className="text-foreground" style={{ opacity: 0.85 }}>
									forbes.it
								</strong>{" "}
								con oltre 85 componenti React.
							</p>
						</div>

						{/* Bullet list */}
						<div>
							<h4 className="mb-3 text-foreground" style={{ fontWeight: 600 }}>
								Cosa faccio
							</h4>
							<ul className="space-y-2.5">
								{[
									"Frontend con Next.js 15, React 19 e TypeScript",
									"Backend & AI: FastAPI, OpenAI API, Laravel, PHP 8.x",
									"DevOps: Docker, GitHub Actions CI/CD, Vercel, Plesk",
									"Workflow Agile: code review, PR management, monitoring New Relic",
								].map((item) => (
									<li
										key={item}
										className="flex items-start gap-2.5 text-muted-foreground"
									>
										<span
											className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
											style={{
												background: "linear-gradient(135deg, #a78bfa, #22d3ee)",
											}}
										/>
										<span style={{ fontSize: "0.9rem" }}>{item}</span>
									</li>
								))}
							</ul>
						</div>

						{/* Highlight cards 2×2 */}
						<div className="grid grid-cols-2 gap-3">
							{highlights.map((h, i) => {
								const Icon = h.icon;
								return (
									<motion.div
										key={h.label}
										initial={{ opacity: 0, y: 10 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.45, delay: i * 0.08 }}
										viewport={{ once: true }}
										whileHover={{ scale: 1.03 }}
										className="relative glass gradient-border rounded-2xl p-4 cursor-default"
									>
										<Icon size={17} className="text-primary mb-2" />
										<p
											className="text-foreground mb-0.5"
											style={{ fontSize: "0.82rem", fontWeight: 600 }}
										>
											{h.label}
										</p>
										<p
											className="text-muted-foreground"
											style={{ fontSize: "0.71rem" }}
										>
											{h.desc}
										</p>
									</motion.div>
								);
							})}
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
