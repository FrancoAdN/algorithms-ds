const findLongestSubstring = require("./index");

describe("findLongestSubstring", () => {
	it("returns 0", () => {
		expect(findLongestSubstring("")).toBe(0);
	});

	it("returns 7", () => {
		expect(findLongestSubstring("rithmschool")).toBe(7);
	});

	it("returns 6", () => {
		expect(findLongestSubstring("thisisawesome")).toBe(6);
	});

	it("returns 7", () => {
		expect(findLongestSubstring("thecatinthehat")).toBe(7);
	});

	it("returns 1", () => {
		expect(findLongestSubstring("bbbbbb")).toBe(1);
	});

	it("returns 8", () => {
		expect(findLongestSubstring("longestsubstring")).toBe(8);
	});

	it("returns 6", () => {
		expect(findLongestSubstring("thisishowwedoit")).toBe(6);
	});
});
