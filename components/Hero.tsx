"use client";

import { motion } from "motion/react";
import { ChevronDown, MapPin, ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { roles, stats, floatingTags } from "@/../data/hero";

function useTypewriter(texts: string[], speed = 60, pause = 2000) {
	const [index, setIndex] = useState(0);
	const [displayed, setDisplayed] = useState("");
	const [deleting, setDeleting] = useState(false);

	useEffect(() => {
		const current = texts[index];
		let timeout: ReturnType<typeof setTimeout>;

		if (!deleting && displayed.length < current.length) {
			timeout = setTimeout(
				() => setDisplayed(current.slice(0, displayed.length + 1)),
				speed,
			);
		} else if (!deleting && displayed.length === current.length) {
			timeout = setTimeout(() => setDeleting(true), pause);
		} else if (deleting && displayed.length > 0) {
			timeout = setTimeout(
				() => setDisplayed(displayed.slice(0, -1)),
				speed / 2,
			);
		} else if (deleting && displayed.length === 0) {
			// eslint-disable-next-line react-hooks/set-state-in-effect
			setDeleting(false);
			setIndex((i) => (i + 1) % texts.length);
		}

		return () => clearTimeout(timeout);
	}, [displayed, deleting, index, texts, speed, pause]);

	return displayed;
}

function useCounter(target: number, duration = 1500, inView = false) {
	const [count, setCount] = useState(0);
	useEffect(() => {
		if (!inView) return;
		let start = 0;
		const step = target / (duration / 16);
		const timer = setInterval(() => {
			start += step;
			if (start >= target) {
				setCount(target);
				clearInterval(timer);
			} else setCount(Math.floor(start));
		}, 16);
		return () => clearInterval(timer);
	}, [target, duration, inView]);
	return count;
}


function StatCounter({
	value,
	suffix,
	label,
}: {
	value: number;
	suffix: string;
	label: string;
}) {
	const [inView, setInView] = useState(false);
	const count = useCounter(value, 1200, inView);
	return (
		<motion.div
			className="text-center"
			onViewportEnter={() => setInView(true)}
			viewport={{ once: true }}
		>
			<div
				className="gradient-text font-bold mb-1"
				style={{ fontSize: "1.9rem", lineHeight: 1 }}
			>
				{count}
				{suffix}
			</div>
			<div className="text-muted-foreground" style={{ fontSize: "0.82rem" }}>
				{label}
			</div>
		</motion.div>
	);
}


export default function Hero() {
	const typed = useTypewriter(roles);

	const scrollToAbout = () =>
		document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
	return (
		<section
			className="min-h-screen flex items-center justify-center relative pt-24 pb-16"
			style={{ overflow: "hidden" }}
		>
			{/* Floating tech labels container — absolutely positioned, isolated from flexbox */}
			<div
				className="absolute inset-0 pointer-events-none"
				style={{ zIndex: 0 }}
			>
				{floatingTags.map((tag) => (
					<motion.div
						key={tag.label}
						initial={{ opacity: 0, scale: 0.75 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5, delay: tag.delay }}
						className="absolute hidden xl:block glass gradient-border rounded-full px-3 py-1.5 select-none"
						style={{
							left: tag.left,
							right: tag.right,
							top: tag.top,
							fontSize: "0.72rem",
							color: "var(--muted-foreground)",
						}}
					>
						{tag.label}
					</motion.div>
				))}
			</div>

			{/* Main content — perfectly centered, unaffected by floating tags */}
			<div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
				{/* Location / status badge */}
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="relative inline-flex items-center gap-2 glass gradient-border rounded-full px-4 py-2 mb-8"
				>
					<MapPin size={12} className="text-primary shrink-0" />
					<span
						className="text-muted-foreground"
						style={{ fontSize: "0.8rem" }}
					>
						Torino, Italia
					</span>
					<span className="w-px h-3 bg-border" />
					<Sparkles size={12} className="text-primary shrink-0" />
					<span
						className="text-muted-foreground"
						style={{ fontSize: "0.8rem" }}
					>
						Open to work
					</span>
					<div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
				</motion.div>

				{/* Name */}
				<motion.div
					initial={{ opacity: 0, y: 24 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, delay: 0.1 }}
					className="mb-5"
				>
					<h1
						className="tracking-tight"
						style={{
							fontSize: "clamp(2.6rem, 8vw, 6.5rem)",
							fontWeight: 800,
							lineHeight: 1.05,
						}}
					>
						<span style={{ color: "rgba(226,232,240,0.3)" }}>Hi, I&apos;m </span>
						<span className="gradient-text">Jomar Navarro</span>
					</h1>
				</motion.div>

				{/* Typewriter */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.3 }}
					className="flex items-center justify-center gap-2 mb-6"
					style={{ minHeight: "2rem" }}
				>
					<span
						className="gradient-text"
						style={{
							fontSize: "clamp(0.95rem, 2.2vw, 1.25rem)",
							fontWeight: 600,
						}}
					>
						{typed}
					</span>
					<span
						className="w-0.5 h-5 rounded-full animate-pulse shrink-0"
						style={{ background: "linear-gradient(180deg, #a78bfa, #22d3ee)" }}
					/>
				</motion.div>

				{/* Description */}
				<motion.p
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, delay: 0.42 }}
					className="text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
					style={{ fontSize: "1rem" }}
				>
					Sviluppo microservizi AI con{" "}
					<strong className="text-foreground" style={{ opacity: 0.75 }}>
						FastAPI + OpenAI
					</strong>{" "}
					e frontend moderni con{" "}
					<strong className="text-foreground" style={{ opacity: 0.75 }}>
						Next.js 15 + React 19
					</strong>
					. Contributor su{" "}
					<strong className="text-foreground" style={{ opacity: 0.75 }}>
						forbes.it
					</strong>{" "}
					· Torino, Italia.
				</motion.p>

				{/* CTAs */}
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, delay: 0.54 }}
					className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
				>
					<button
						onClick={scrollToAbout}
						className="group flex items-center gap-2 px-7 py-3.5 rounded-2xl text-white transition-all duration-300 hover:scale-105"
						style={{
							background: "linear-gradient(135deg, #7c3aed, #0891b2)",
							boxShadow:
								"0 0 28px rgba(124,58,237,0.4), 0 0 56px rgba(124,58,237,0.12)",
						}}
					>
						<span style={{ fontWeight: 500 }}>Scopri i miei progetti</span>
						<ArrowRight
							size={15}
							className="transition-transform duration-300 group-hover:translate-x-1"
						/>
					</button>

					<a
						href="mailto:jomarnavarro201@gmail.com"
						className="relative flex items-center gap-2 px-7 py-3.5 rounded-2xl glass gradient-border text-foreground hover:bg-white/10 transition-all duration-300 hover:scale-105"
					>
						Contattami
					</a>
				</motion.div>

				{/* Stats */}
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, delay: 0.68 }}
					className="flex flex-wrap justify-center gap-8 sm:gap-14"
				>
					{stats.map((s) => (
						<StatCounter
							key={s.label}
							value={s.value}
							suffix={s.suffix}
							label={s.label}
						/>
					))}
				</motion.div>
			</div>

			{/* Scroll cue */}
			<motion.button
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1.6, duration: 0.7 }}
				onClick={scrollToAbout}
				className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
				aria-label="Scorri in basso"
			>
				<ChevronDown size={22} className="animate-bounce" />
			</motion.button>
		</section>
	);
}
