const maxSubarraySum = require("./index");

describe("maxSubarraySum", () => {
	it("should return the max sum", () => {
		const nums = [100, 200, 300, 400];
		expect(maxSubarraySum(nums, 2)).toBe(700);
	});

	it("should return the max sum", () => {
		const nums = [1, 4, 2, 10, 23, 3, 1, 0, 20];
		expect(maxSubarraySum(nums, 4)).toBe(39);
	});

	it("should return the max sum", () => {
		const nums = [-3, 4, 0, -2, 6, -1];
		expect(maxSubarraySum(nums, 2)).toBe(5);
	});

	it("should return the max sum", () => {
		const nums = [3, -2, 7, -4, 1, -1, 4, -2, 1];
		expect(maxSubarraySum(nums, 2)).toBe(5);
	});

	it("should return the max sum", () => {
		const nums = [3, -2];
		expect(maxSubarraySum(nums, 3)).toBe(null);
	});
});
