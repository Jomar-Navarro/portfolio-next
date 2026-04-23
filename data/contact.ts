import { Mail, MapPin } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "../components/Icon";

export const contactMethods = [
	{
		icon: Mail,
		label: "Email",
		value: "jomarnavarro201@gmail.com",
		href: "mailto:jomarnavarro201@gmail.com",
		color: "rgba(124,58,237,0.25)",
		textColor: "#a78bfa",
		copyable: true,
	},
	{
		icon: GitHubIcon,
		label: "GitHub",
		value: "github.com/Jomar-Navarro",
		href: "https://github.com/Jomar-Navarro",
		color: "rgba(255,255,255,0.08)",
		textColor: "#e2e8f0",
		copyable: false,
	},
	{
		icon: LinkedInIcon,
		label: "LinkedIn",
		value: "linkedin.com/in/jomar-navarro",
		href: "https://www.linkedin.com/in/jomar-navarro/",
		color: "rgba(6,182,212,0.22)",
		textColor: "#22d3ee",
		copyable: false,
	},
	{
		icon: MapPin,
		label: "Posizione",
		value: "Torino, Italia",
		href: "https://maps.google.com/?q=Torino,Italy",
		color: "rgba(37,99,235,0.22)",
		textColor: "#60a5fa",
		copyable: false,
	},
];
