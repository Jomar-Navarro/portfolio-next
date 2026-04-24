import { describe, it, expect } from "vitest";
import { projects } from "./projects";

describe("projects data", () => {
	it("contiene almeno un progetto", () => {
		expect(projects.length).toBeGreaterThan(0);
	});

	it("ogni progetto ha id univoco", () => {
		const ids = projects.map((p) => p.id);
		expect(new Set(ids).size).toBe(ids.length);
	});

	it("ogni progetto ha title, description e technologies", () => {
		projects.forEach((p) => {
			expect(p.title).toBeTruthy();
			expect(p.description.length).toBeGreaterThan(20);
			expect(p.technologies.length).toBeGreaterThan(0);
		});
	});

	it("ogni progetto con liveUrl '#' non ha link live attivo", () => {
		projects.forEach((p) => {
			if (p.liveUrl === "#") {
				expect(p.liveUrl).toBe("#");
			} else {
				expect(p.liveUrl).toMatch(/^https?:\/\//);
			}
		});
	});
});
