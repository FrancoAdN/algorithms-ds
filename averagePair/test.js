const averagePair = require("./index");

describe("averagePair", () => {
	it("should return true", () => {
		const nums = [1, 2, 3];
		const average = 2.5;
		expect(averagePair(nums, average)).toBeTruthy();
	});
	it("should return true", () => {
		const nums = [1, 3, 3, 5, 6, 7, 10, 12, 19];
		const average = 8;
		expect(averagePair(nums, average)).toBeTruthy();
	});
	it("should return false", () => {
		const nums = [-1, 0, 3, 4, 5, 6];
		const average = 4.1;
		expect(averagePair(nums, average)).toBeFalsy();
	});
	it("should return false", () => {
		const nums = [];
		const average = 4;
		expect(averagePair(nums, average)).toBeFalsy();
	});
});
