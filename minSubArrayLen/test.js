const minSubArrayLen = require("./index");

describe("minSubArrayLen", () => {
	it("returns 2", () => {
		const nums = [2, 3, 1, 2, 4, 3];
		const sum = 7;
		expect(minSubArrayLen(nums, sum)).toBe(2);
	});

	it("returns 2", () => {
		const nums = [2, 1, 6, 5, 4];
		const sum = 9;
		expect(minSubArrayLen(nums, sum)).toBe(2);
	});

	it("returns 1", () => {
		const nums = [3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19];
		const sum = 52;
		expect(minSubArrayLen(nums, sum)).toBe(1);
	});

	it("returns 3", () => {
		const nums = [1, 4, 16, 22, 5, 7, 8, 9, 10];
		const sum = 39;
		expect(minSubArrayLen(nums, sum)).toBe(3);
	});

	it("returns 5", () => {
		const nums = [1, 4, 16, 22, 5, 7, 8, 9, 10];
		const sum = 55;
		expect(minSubArrayLen(nums, sum)).toBe(5);
	});

	it("returns 2", () => {
		const nums = [4, 3, 3, 8, 1, 2, 3];
		const sum = 11;
		expect(minSubArrayLen(nums, sum)).toBe(2);
	});

	it("returns 5", () => {
		const nums = [1, 4, 16, 22, 5, 7, 8, 9, 10];
		const sum = 95;
		expect(minSubArrayLen(nums, sum)).toBe(0);
	});
});
