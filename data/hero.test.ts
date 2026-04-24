import { describe, it, expect } from "vitest";
import { roles, stats, floatingTags } from "./hero";

describe("hero data", () => {
	it("roles contiene almeno un ruolo", () => {
		expect(roles.length).toBeGreaterThan(0);
	});

	it("ogni stat ha value > 0 e suffix definito", () => {
		stats.forEach((s) => {
			expect(s.value).toBeGreaterThan(0);
			expect(typeof s.suffix).toBe("string");
			expect(s.label).toBeTruthy();
		});
	});

	it("ogni floatingTag ha label, top e delay", () => {
		floatingTags.forEach((tag) => {
			expect(tag.label).toBeTruthy();
			expect(tag.top).toBeTruthy();
			expect(tag.delay).toBeGreaterThan(0);
		});
	});
});
