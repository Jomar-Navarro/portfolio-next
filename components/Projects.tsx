"use client";

import { motion, useMotionValue, useTransform } from "motion/react";
import { ExternalLink } from "lucide-react";

import { GitHubIcon } from "@/../components/Icon";
import { ImageWithFallback } from "@/../components/figma/ImageWithFallBack";
import { useRef, MouseEvent } from "react";
import { projects } from "@/../data/projects";

function TiltCard({
	project,
	index,
}: {
	project: (typeof projects)[0];
	index: number;
}) {
	const cardRef = useRef<HTMLDivElement>(null);
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const rotateX = useTransform(y, [-60, 60], [6, -6]);
	const rotateY = useTransform(x, [-60, 60], [-6, 6]);

	const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
		const rect = cardRef.current?.getBoundingClientRect();
		if (!rect) return;
		x.set(e.clientX - rect.left - rect.width / 2);
		y.set(e.clientY - rect.top - rect.height / 2);
	};

	const handleMouseLeave = () => {
		x.set(0);
		y.set(0);
	};

	return (
		<motion.div
			ref={cardRef}
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.7, delay: index * 0.12 }}
			viewport={{ once: true }}
			style={{
				rotateX,
				rotateY,
				transformStyle: "preserve-3d",
				perspective: 1000,
			}}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			className="group glass gradient-border rounded-2xl overflow-hidden cursor-default transition-shadow duration-300"
			whileHover={{ scale: 1.015 }}
		>
			{/* Image */}
			<div className="aspect-video overflow-hidden relative">
				<ImageWithFallback
					src={project.image}
					alt={project.title}
					className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
				/>
				{/* Overlay */}
				<div
					className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4"
					style={{
						background: "rgba(7,7,16,0.72)",
						backdropFilter: "blur(6px)",
					}}
				>
					{project.liveUrl !== "#" && (
						<a
							href={project.liveUrl}
							target="_blank"
							rel="noopener noreferrer"
							onClick={(e) => e.stopPropagation()}
							className="p-3 glass rounded-xl text-white hover:text-primary transition-colors"
						>
							<ExternalLink size={20} />
						</a>
					)}
					<a
						href={project.githubUrl}
						target="_blank"
						rel="noopener noreferrer"
						onClick={(e) => e.stopPropagation()}
						className="p-3 glass rounded-xl text-white hover:text-primary transition-colors"
					>
						<GitHubIcon size={20} />
					</a>
				</div>

				{/* Badge */}
				<div className="absolute top-3 left-3">
					<span
						className="px-2.5 py-1 rounded-full"
						style={{
							fontSize: "0.7rem",
							fontWeight: 600,
							background: "rgba(7,7,16,0.7)",
							backdropFilter: "blur(8px)",
							border: "1px solid rgba(255,255,255,0.12)",
							color: "#fff",
						}}
					>
						{project.badge}
					</span>
				</div>

				{/* Glow strip at bottom of image */}
				<div
					className="absolute bottom-0 left-0 right-0 h-12"
					style={{
						background: `linear-gradient(to top, ${project.accent}, transparent)`,
					}}
				/>
			</div>

			{/* Content */}
			<div className="p-5">
				<h3
					className="mb-2 text-foreground"
					style={{ fontWeight: 700, fontSize: "1rem" }}
				>
					{project.title}
				</h3>
				<p
					className="text-muted-foreground mb-4 leading-relaxed"
					style={{ fontSize: "0.86rem" }}
				>
					{project.description}
				</p>

				{/* Tech tags */}
				<div className="flex flex-wrap gap-1.5 mb-4">
					{project.technologies.map((tech) => (
						<span
							key={tech}
							className="px-2.5 py-1 rounded-full"
							style={{
								fontSize: "0.7rem",
								fontWeight: 500,
								background: "rgba(124,58,237,0.10)",
								border: "1px solid rgba(124,58,237,0.22)",
								color: "#a78bfa",
							}}
						>
							{tech}
						</span>
					))}
				</div>

				{/* Links */}
				<div
					className="flex gap-5 pt-1 border-t"
					style={{ borderColor: "rgba(255,255,255,0.06)" }}
				>
					{project.liveUrl !== "#" ? (
						<a
							href={project.liveUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-1.5 text-primary hover:text-primary/80 transition-colors pt-3"
							style={{ fontSize: "0.82rem" }}
						>
							<ExternalLink size={13} />
							Live Demo
						</a>
					) : (
						<span
							className="flex items-center gap-1.5 text-muted-foreground/40 pt-3 cursor-not-allowed"
							style={{ fontSize: "0.82rem" }}
						>
							<ExternalLink size={13} />
							Private
						</span>
					)}
					<a
						href={project.githubUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors pt-3"
						style={{ fontSize: "0.82rem" }}
					>
						<GitHubIcon size={13} />
						Source
					</a>
				</div>
			</div>
		</motion.div>
	);
}

export default function Projects() {
	return (
		<section id="projects" className="py-28 relative">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
						Portfolio
					</p>
					<h2
						className="gradient-text mb-4"
						style={{
							fontSize: "clamp(1.8rem, 4vw, 3rem)",
							fontWeight: 700,
							lineHeight: 1.1,
						}}
					>
						Progetti Rilevanti
					</h2>
					<p className="text-muted-foreground max-w-xl mx-auto">
						Dalla produzione enterprise ai microservizi AI — progetti reali con
						impatto concreto.
					</p>
				</motion.div>

				<div className="grid md:grid-cols-2 gap-6">
					{projects.map((project, index) => (
						<TiltCard key={project.id} project={project} index={index} />
					))}
				</div>
			</div>
		</section>
	);
}
