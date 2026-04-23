import { socials } from "@/../data/footer";

export default function Footer() {
	return (
		<footer className="py-10 relative">
			{/* Gradient divider */}
			<div
				className="max-w-6xl mx-auto mb-8 px-6"
				style={{
					height: "1px",
					background:
						"linear-gradient(90deg, transparent, rgba(124,58,237,0.45), rgba(6,182,212,0.45), transparent)",
				}}
			/>

			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col md:flex-row justify-between items-center gap-5">
					{/* Brand */}
					<div>
						<span
							className="gradient-text font-bold"
							style={{ fontSize: "1.05rem" }}
						>
							Jomar Navarro
						</span>
						<p
							className="text-muted-foreground mt-0.5"
							style={{ fontSize: "0.75rem" }}
						>
							Junior Full-Stack Developer · AI Integration · Torino, IT
						</p>
					</div>

					{/* Social icons */}
					<div className="flex items-center gap-3">
						{socials.map(({ icon: Icon, href, label }) => (
							<a
								key={label}
								href={href}
								target={href.startsWith("mailto") ? undefined : "_blank"}
								rel="noopener noreferrer"
								aria-label={label}
								className="relative p-2.5 glass gradient-border rounded-xl text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
							>
								<Icon size={16} />
							</a>
						))}
					</div>

					{/* Copyright */}
					<p className="text-muted-foreground" style={{ fontSize: "0.75rem" }}>
						© {new Date().getFullYear()} Jomar Navarro · Built with React &
						Tailwind
					</p>
				</div>
			</div>
		</footer>
	);
}
