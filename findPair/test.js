const findPair = require("./index");

describe("findPair", () => {
	it("returns true if a pair with difference n exists in the array", () => {
		expect(findPair([1, 2, 3, 4, 5, 6], 3)).toBe(true);
		expect(findPair([1, 2, 3, 4, 5, 6], 1)).toBe(true);
		expect(findPair([1, 2, 3, 4, 5, 6], 2)).toBe(true);
	});
	it("returns false if no pair with difference n exists in the array", () => {
		expect(findPair([1, 2, 3, 4, 5, 6], 8)).toBe(false);
		expect(findPair([1, 2, 3, 4, 5, 6], 10)).toBe(false);
		expect(findPair([1, 2, 3, 4, 5, 6], 7)).toBe(false);
	});
});
