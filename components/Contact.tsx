"use client";

import { motion } from "motion/react";
import { Mail, ArrowRight, Copy, Check } from "lucide-react";
import { useState } from "react";
import { contactMethods } from "@/../data/contact";


function ContactCard({
	method,
	index,
}: {
	method: (typeof contactMethods)[0];
	index: number;
}) {
	const [copied, setCopied] = useState(false);
	const IconComponent = method.icon;

	const handleCopy = (e: React.MouseEvent) => {
		if (!method.copyable) return;
		e.preventDefault();
		navigator.clipboard.writeText(method.value).then(() => {
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		});
	};

	return (
		<motion.a
			href={method.href}
			target={method.href.startsWith("mailto") ? undefined : "_blank"}
			rel="noopener noreferrer"
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, delay: index * 0.1 }}
			viewport={{ once: true }}
			whileHover={{ scale: 1.03 }}
			className="relative group glass gradient-border rounded-2xl p-5 flex items-center gap-4 transition-all duration-300"
			style={{ boxShadow: `0 4px 20px ${method.color}` }}
		>
			<div
				className="p-3 rounded-xl shrink-0"
				style={{
					background: method.color,
					border: `1px solid ${method.textColor}25`,
				}}
			>
				<IconComponent size={20} style={{ color: method.textColor }} />
			</div>

			<div className="flex-1 min-w-0">
				<p
					className="text-foreground mb-0.5"
					style={{ fontSize: "0.82rem", fontWeight: 600 }}
				>
					{method.label}
				</p>
				<p
					className="text-muted-foreground truncate"
					style={{ fontSize: "0.78rem" }}
				>
					{method.value}
				</p>
			</div>

			{method.copyable ? (
				<button
					onClick={handleCopy}
					className="p-2 rounded-lg text-muted-foreground hover:text-primary transition-colors shrink-0"
					style={{ background: "rgba(255,255,255,0.04)" }}
				>
					{copied ? (
						<Check size={14} className="text-emerald-400" />
					) : (
						<Copy size={14} />
					)}
				</button>
			) : (
				<ArrowRight
					size={16}
					className="text-muted-foreground shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary"
				/>
			)}
		</motion.a>
	);
}

export default function Contact() {
	return (
		<section id="contact" className="py-28 relative">
			<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
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
						Contatti
					</p>
					<h2
						className="gradient-text mb-4"
						style={{
							fontSize: "clamp(1.8rem, 4vw, 3rem)",
							fontWeight: 700,
							lineHeight: 1.1,
						}}
					>
						Lavoriamo Insieme
					</h2>
					<p className="text-muted-foreground max-w-xl mx-auto">
						Sono disponibile per nuove opportunità, progetti interessanti o
						semplicemente una chiacchierata su tecnologia e sviluppo.
					</p>
				</motion.div>

				{/* Cards grid */}
				<div className="grid sm:grid-cols-2 gap-4 mb-10">
					{contactMethods.map((method, index) => (
						<ContactCard key={method.label} method={method} index={index} />
					))}
				</div>

				{/* Availability + CTA */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.5 }}
					viewport={{ once: true }}
					className="flex flex-col items-center gap-5"
				>
					<div className="relative glass gradient-border rounded-full px-6 py-3 flex items-center gap-3">
						<div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
						<span className="text-foreground" style={{ fontSize: "0.875rem" }}>
							Disponibile per nuovi progetti · Maggio 2025 →
						</span>
					</div>

					<a
						href="mailto:jomarnavarro201@gmail.com"
						className="flex items-center gap-2 px-8 py-4 rounded-2xl text-white font-medium transition-all duration-300 hover:scale-105"
						style={{
							background: "linear-gradient(135deg, #7c3aed, #0891b2)",
							boxShadow:
								"0 0 30px rgba(124,58,237,0.35), 0 0 60px rgba(124,58,237,0.12)",
						}}
					>
						<Mail size={18} />
						Scrivimi una mail
						<ArrowRight
							size={16}
							className="transition-transform duration-300 group-hover:translate-x-1"
						/>
					</a>
				</motion.div>
			</div>
		</section>
	);
}
