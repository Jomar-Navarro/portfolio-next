import { describe, it, expect } from "vitest";
import { experienceItems } from "./experience";

describe("experience data", () => {
	it("contiene almeno un elemento", () => {
		expect(experienceItems.length).toBeGreaterThan(0);
	});

	it("ogni item ha type 'work' o 'edu'", () => {
		experienceItems.forEach((item) => {
			expect(["work", "edu"]).toContain(item.type);
		});
	});

	it("ogni item ha almeno un bullet", () => {
		experienceItems.forEach((item) => {
			expect(item.bullets.length).toBeGreaterThan(0);
		});
	});

	it("il primo item è work (posizione attuale)", () => {
		expect(experienceItems[0].type).toBe("work");
		expect(experienceItems[0].company).toBeTruthy();
	});
});
