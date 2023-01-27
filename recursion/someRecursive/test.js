const someRecursive = require("./index");

describe("", () => {
	const isOdd = (val) => val % 2 !== 0;
	it("should return true", () => {
		expect(someRecursive([1, 2, 3, 4], isOdd)).toBeTruthy();
	});
	it("should return true", () => {
		expect(someRecursive([4, 6, 8, 9], isOdd)).toBeTruthy();
	});
	it("should return false", () => {
		expect(someRecursive([4, 6, 8], isOdd)).toBeFalsy();
	});
	it("should return false", () => {
		expect(someRecursive([4, 6, 8], (val) => val > 10)).toBeFalsy();
	});
});
