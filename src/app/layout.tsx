import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "https://jomarnavarro.dev";

export const metadata: Metadata = {
	metadataBase: new URL(BASE_URL),
	title: {
		default: "Jomar Navarro — Junior Full-Stack Developer | Torino",
		template: "%s | Jomar Navarro",
	},
	description:
		"Junior Full-Stack Developer specializzato in AI Integration. Next.js 15, FastAPI, React 19, TypeScript. Contributor su forbes.it. Disponibile per nuovi progetti a Torino.",
	keywords: [
		"Full-Stack Developer",
		"Next.js",
		"React",
		"TypeScript",
		"FastAPI",
		"AI Integration",
		"Torino",
		"Jomar Navarro",
	],
	authors: [{ name: "Jomar Navarro", url: BASE_URL }],
	creator: "Jomar Navarro",
	openGraph: {
		type: "website",
		locale: "it_IT",
		url: BASE_URL,
		siteName: "Jomar Navarro — Portfolio",
		title: "Jomar Navarro — Junior Full-Stack Developer",
		description:
			"Junior Full-Stack Developer specializzato in AI Integration. Next.js 15, FastAPI, React 19. Contributor su forbes.it.",
		images: [
			{
				url: "/opengraph-image",
				width: 1200,
				height: 630,
				alt: "Jomar Navarro — Junior Full-Stack Developer",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Jomar Navarro — Junior Full-Stack Developer",
		description:
			"Junior Full-Stack Developer specializzato in AI Integration. Next.js 15, FastAPI, React 19.",
		images: ["/opengraph-image"],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: { index: true, follow: true, "max-image-preview": "large" },
	},
	alternates: { canonical: BASE_URL },
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="it"
			className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
			suppressHydrationWarning
		>
			<head>
				<script
					dangerouslySetInnerHTML={{
						__html: `try{var t=localStorage.getItem('theme');if(t==='light')document.documentElement.classList.remove('dark');else document.documentElement.classList.add('dark');}catch(e){}`,
					}}
				/>
			</head>
			<body className="min-h-full flex flex-col">{children}</body>
		</html>
	);
}
