const countUniqueValues = require("./index");

describe("countUniqueValues", () => {
	it("returns 0", () => {
		expect(countUniqueValues([])).toBe(0);
	});

	it("returns 2", () => {
		const nums = [1, 1, 1, 1, 1, 2];
		expect(countUniqueValues(nums)).toBe(2);
	});

	it("returns 4", () => {
		const nums = [-2, -1, -1, 0, 1];
		expect(countUniqueValues(nums)).toBe(4);
	});

	it("returns 7", () => {
		const nums = [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13];
		expect(countUniqueValues(nums)).toBe(7);
	});
});
