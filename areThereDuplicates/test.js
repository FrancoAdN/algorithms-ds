const areThereDuplicates = require("./index");

describe("areThereDuplicates", () => {
	it("should return false", () => {
		expect(areThereDuplicates(1, 2, 3)).toBeFalsy();
	});
	it("should return true", () => {
		expect(areThereDuplicates("a", "b", "c", "a")).toBeTruthy();
	});
	it("should return true", () => {
		expect(areThereDuplicates(1, 2, 2)).toBeTruthy();
	});
});
