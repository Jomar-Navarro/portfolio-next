import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Jomar Navarro — Junior Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
	return new ImageResponse(
		(
			<div
				style={{
					width: "1200px",
					height: "630px",
					background: "#070710",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					fontFamily: "sans-serif",
					position: "relative",
					overflow: "hidden",
				}}
			>
				{/* Ambient orbs */}
				<div
					style={{
						position: "absolute",
						top: "-120px",
						left: "-120px",
						width: "500px",
						height: "500px",
						borderRadius: "50%",
						background: "radial-gradient(circle, rgba(124,58,237,0.35) 0%, transparent 70%)",
						filter: "blur(60px)",
					}}
				/>
				<div
					style={{
						position: "absolute",
						top: "-80px",
						right: "-100px",
						width: "400px",
						height: "400px",
						borderRadius: "50%",
						background: "radial-gradient(circle, rgba(6,182,212,0.25) 0%, transparent 70%)",
						filter: "blur(60px)",
					}}
				/>

				{/* Content */}
				<div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", zIndex: 1 }}>
					{/* Name */}
					<div
						style={{
							fontSize: "80px",
							fontWeight: 800,
							background: "linear-gradient(135deg, #a78bfa, #22d3ee)",
							backgroundClip: "text",
							color: "transparent",
							lineHeight: 1.1,
						}}
					>
						Jomar Navarro
					</div>

					{/* Title */}
					<div style={{ fontSize: "32px", color: "rgba(226,232,240,0.7)", fontWeight: 500 }}>
						Junior Full-Stack Developer · AI Integration · Torino
					</div>

					{/* Stack badges */}
					<div style={{ display: "flex", gap: "12px", marginTop: "16px", flexWrap: "wrap", justifyContent: "center" }}>
						{["Next.js 15", "React 19", "TypeScript", "FastAPI", "Docker"].map((tech) => (
							<div
								key={tech}
								style={{
									padding: "8px 20px",
									borderRadius: "999px",
									background: "rgba(255,255,255,0.06)",
									border: "1px solid rgba(255,255,255,0.12)",
									color: "#a78bfa",
									fontSize: "18px",
									fontWeight: 500,
								}}
							>
								{tech}
							</div>
						))}
					</div>

					{/* URL */}
					<div style={{ fontSize: "22px", color: "rgba(226,232,240,0.35)", marginTop: "24px" }}>
						jomarnavarro.dev
					</div>
				</div>
			</div>
		),
		{ ...size },
	);
}
