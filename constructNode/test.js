const constructNote = require("./index");

describe("constructNote", () => {
	it("returns true if message can be built with letters", () => {
		expect(constructNote("hello", "hello")).toBe(true);
		expect(constructNote("world", "dlorw")).toBe(true);
		expect(constructNote("abcdefg", "abcdefgabcdefg")).toBe(true);
	});

	it("returns false if message cannot be built with letters", () => {
		expect(constructNote("hello", "hey")).toBe(false);
		expect(constructNote("world", "wo")).toBe(false);
		expect(constructNote("abcdefg", "abcde")).toBe(false);
	});

	it("handles edge cases", () => {
		expect(constructNote("", "abc")).toBe(true);
		expect(constructNote("", "")).toBe(true);
		expect(constructNote("abc", "")).toBe(false);
	});
});
