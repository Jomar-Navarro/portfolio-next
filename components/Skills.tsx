"use client";

import { motion } from "motion/react";
import { skillCategories } from "@/../data/skills";

export default function Skills() {
	return (
		<section id="skills" className="py-28 relative">
			<div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
						Competenze
					</p>
					<h2
						className="gradient-text mb-4"
						style={{
							fontSize: "clamp(1.8rem, 4vw, 3rem)",
							fontWeight: 700,
							lineHeight: 1.1,
						}}
					>
						Skills & Technologies
					</h2>
					<p className="text-muted-foreground max-w-xl mx-auto">
						Stack tecnico reale — le tecnologie che uso ogni giorno in
						produzione.
					</p>
				</motion.div>

				<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
					{skillCategories.map((category, categoryIndex) => (
						<motion.div
							key={category.title}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7, delay: categoryIndex * 0.12 }}
							viewport={{ once: true }}
							whileHover={{ scale: 1.02 }}
							className="relative glass gradient-border rounded-2xl p-5 transition-all duration-300"
							style={{ boxShadow: `0 8px 32px ${category.color}` }}
						>
							{/* Header */}
							<div className="flex items-center gap-2 mb-5">
								<span style={{ fontSize: "1.1rem" }}>{category.emoji}</span>
								<div
									className="w-0.5 h-5 rounded-full"
									style={{
										background: `linear-gradient(180deg, ${category.textColor}, transparent)`,
									}}
								/>
								<h3
									className="text-foreground"
									style={{ fontWeight: 600, fontSize: "0.88rem" }}
								>
									{category.title}
								</h3>
							</div>

							{/* Skills */}
							<div className="flex flex-wrap gap-2">
								{category.skills.map((skill, skillIndex) => (
									<motion.span
										key={skill}
										initial={{ opacity: 0, scale: 0.8 }}
										whileInView={{ opacity: 1, scale: 1 }}
										transition={{
											duration: 0.35,
											delay: categoryIndex * 0.1 + skillIndex * 0.04,
										}}
										viewport={{ once: true }}
										whileHover={{ scale: 1.08 }}
										className="px-2.5 py-1 rounded-lg cursor-default transition-all duration-200"
										style={{
											fontSize: "0.75rem",
											fontWeight: 500,
											background: category.color,
											border: `1px solid ${category.borderColor}`,
											color: category.textColor,
										}}
									>
										{skill}
									</motion.span>
								))}
							</div>
						</motion.div>
					))}
				</div>

				{/* Bottom strip */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.5 }}
					viewport={{ once: true }}
					className="mt-12 text-center"
				>
					<div className="relative inline-block glass gradient-border rounded-2xl px-8 py-5 max-w-2xl">
						<h3 className="gradient-text mb-2" style={{ fontWeight: 700 }}>
							Continuous Learning
						</h3>
						<p
							className="text-muted-foreground"
							style={{ fontSize: "0.88rem" }}
						>
							La tecnologia evolve rapidamente, e io con essa. Attualmente
							esplorando architetture AI-first e best practice per applicazioni
							Next.js scalabili.
						</p>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
