"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Briefcase, GraduationCap } from "lucide-react";
import { type ExperienceItem, experienceItems } from "@/../data/experience";

function TimelineCard({ item, index }: { item: ExperienceItem; index: number }) {
	const Icon = item.type === "work" ? Briefcase : GraduationCap;

	return (
		<motion.div
			initial={{ opacity: 0, x: 20 }}
			whileInView={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.55, delay: index * 0.07 }}
			viewport={{ once: true }}
			className="relative flex gap-5"
		>
			{/* Dot on the line */}
			<div
				className="relative shrink-0 flex flex-col items-center"
				style={{ width: "2.25rem" }}
			>
				<motion.div
					initial={{ scale: 0 }}
					whileInView={{ scale: 1 }}
					transition={{ duration: 0.35, delay: index * 0.07 + 0.15 }}
					viewport={{ once: true }}
					className="relative z-10 flex items-center justify-center w-9 h-9 rounded-full"
					style={{
						background: item.color,
						border: `2px solid ${item.textColor}`,
						boxShadow: `0 0 12px ${item.textColor}50`,
						flexShrink: 0,
					}}
				>
					<Icon size={14} style={{ color: item.textColor }} />
				</motion.div>
			</div>

			{/* Card */}
			<motion.div
				whileHover={{ scale: 1.01 }}
				className="relative flex-1 glass gradient-border rounded-2xl p-5 mb-8 transition-all duration-300"
				style={{ boxShadow: `0 4px 20px ${item.color}` }}
			>
				{/* Role + company */}
				<div className="mb-3">
					<h4
						className="text-foreground mb-0.5"
						style={{ fontWeight: 700, fontSize: "0.97rem" }}
					>
						{item.role}
					</h4>
					<span
						style={{
							fontSize: "0.83rem",
							color: item.textColor,
							fontWeight: 500,
						}}
					>
						{item.company}
					</span>
				</div>

				{/* Period + location chips */}
				<div className="flex flex-wrap gap-2 mb-4">
					<span
						className="px-2.5 py-1 rounded-full"
						style={{
							fontSize: "0.71rem",
							background: "rgba(255,255,255,0.06)",
							color: "var(--muted-foreground)",
						}}
					>
						📅 {item.period}
					</span>
					{item.location && (
						<span
							className="px-2.5 py-1 rounded-full"
							style={{
								fontSize: "0.71rem",
								background: "rgba(255,255,255,0.06)",
								color: "var(--muted-foreground)",
							}}
						>
							📍 {item.location}
						</span>
					)}
				</div>

				{/* Bullets */}
				<ul className="space-y-1.5 mb-4">
					{item.bullets.map((b) => (
						<li
							key={b}
							className="flex items-start gap-2 text-muted-foreground"
							style={{ fontSize: "0.83rem" }}
						>
							<span
								className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
								style={{ background: item.textColor }}
							/>
							<span>{b}</span>
						</li>
					))}
				</ul>

				{/* Tags */}
				<div className="flex flex-wrap gap-1.5">
					{item.tags.map((t) => (
						<span
							key={t}
							className="px-2.5 py-0.5 rounded-full"
							style={{
								fontSize: "0.7rem",
								fontWeight: 500,
								background: item.color,
								color: item.textColor,
								border: `1px solid ${item.textColor}35`,
							}}
						>
							{t}
						</span>
					))}
				</div>
			</motion.div>
		</motion.div>
	);
}

export default function Experience() {
	const lineRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: lineRef,
		offset: ["start 85%", "end 15%"],
	});
	const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

	return (
		<section id="experience" className="py-28 relative">
			<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-center mb-14"
				>
					<p
						className="text-primary uppercase tracking-widest mb-3"
						style={{ fontSize: "0.75rem", fontWeight: 600 }}
					>
						Percorso
					</p>
					<h2
						className="gradient-text mb-4"
						style={{
							fontSize: "clamp(1.8rem, 4vw, 3rem)",
							fontWeight: 700,
							lineHeight: 1.1,
						}}
					>
						Esperienza & Formazione
					</h2>
					<p className="text-muted-foreground max-w-xl mx-auto">
						Dal diploma tecnico al deployment in produzione su piattaforme
						enterprise.
					</p>
				</motion.div>

				{/* Timeline wrapper */}
				<div
					ref={lineRef}
					className="relative"
					style={{ position: "relative" }}
				>
					{/* Background line (grey) */}
					<div
						className="absolute top-0 bottom-0 left-4"
						style={{
							width: "2px",
							background: "rgba(255,255,255,0.07)",
							borderRadius: "1px",
						}}
					/>

					{/* Animated fill line */}
					<motion.div
						className="absolute top-0 left-4 origin-top"
						style={{
							width: "2px",
							height: "100%",
							scaleY,
							background: "linear-gradient(180deg, #a78bfa, #22d3ee)",
							boxShadow: "0 0 8px rgba(167,139,250,0.6)",
							borderRadius: "1px",
						}}
					/>

					{/* Cards */}
					<div className="pl-14">
						{experienceItems.map((item, i) => (
							<TimelineCard
								key={`${item.company}-${i}`}
								item={item}
								index={i}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
