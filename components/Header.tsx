"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeContext";

const navLinks = [
	{ label: "About", id: "about" },
	{ label: "Experience", id: "experience" },
	{ label: "Projects", id: "projects" },
	{ label: "Skills", id: "skills" },
	{ label: "Contact", id: "contact" },
];

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const { theme, toggleTheme } = useTheme();

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 20);
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) element.scrollIntoView({ behavior: "smooth" });
		setIsMenuOpen(false);
	};

	return (
		<header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
			<nav
				className={`relative w-full max-w-5xl rounded-2xl transition-[background,border-color,box-shadow] duration-500 ${
					scrolled
						? "glass"
						: "bg-transparent border border-transparent"
				}`}
				style={scrolled ? {
					backdropFilter: "blur(20px) saturate(180%)",
					WebkitBackdropFilter: "blur(20px) saturate(180%)",
				} : undefined}
			>
				<div className="flex items-center justify-between px-6 h-14">
					{/* Logo */}
					<button
						onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
						className="gradient-text font-semibold tracking-tight hover:opacity-80 transition-opacity"
						style={{ fontSize: "1.1rem" }}
					>
						Portfolio
					</button>

					{/* Desktop Nav */}
					<div className="hidden md:flex items-center gap-1">
						{navLinks.map((link) => (
							<button
								key={link.id}
								onClick={() => scrollToSection(link.id)}
								className="px-4 py-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-white/10 transition-all duration-200"
							>
								{link.label}
							</button>
						))}

						{/* Divider */}
						<div className="w-px h-5 bg-border mx-2" />

						{/* Theme toggle */}
						<button
							onClick={toggleTheme}
							aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
							className="p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-white/10 transition-all duration-200"
						>
							{theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
						</button>
					</div>

					{/* Mobile */}
					<div className="md:hidden flex items-center gap-2">
						<button
							// onClick={toggleTheme}
							className="p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-white/10 transition-all duration-200"
						>
							{theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
						</button>
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-white/10 transition-all duration-200"
						>
							{isMenuOpen ? <X size={20} /> : <Menu size={20} />}
						</button>
					</div>
				</div>

				{/* Mobile dropdown */}
				{isMenuOpen && (
					<div className="md:hidden border-t border-border px-6 py-4 flex flex-col gap-1">
						{navLinks.map((link) => (
							<button
								key={link.id}
								onClick={() => scrollToSection(link.id)}
								className="py-2 px-3 rounded-xl text-left text-muted-foreground hover:text-foreground hover:bg-white/10 transition-all duration-200"
							>
								{link.label}
							</button>
						))}
					</div>
				)}
			</nav>
		</header>
	);
}
