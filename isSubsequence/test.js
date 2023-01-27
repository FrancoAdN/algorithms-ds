const isSubsequence = require("./index");

describe("isSubsequence", () => {
	it("returns true", () => {
		expect(isSubsequence("hello", "hello world")).toBeTruthy();
	});
	it("returns true", () => {
		expect(isSubsequence("sing", "sting")).toBeTruthy();
	});

	it("returns true", () => {
		expect(isSubsequence("abc", "abracadabra")).toBeTruthy();
	});
	it("returns false", () => {
		expect(isSubsequence("abc", "acb")).toBeFalsy();
	});
});
