const coinChange = require("./index");

describe("coinChange", () => {
	it("returns the correct number of ways to make change for a value", () => {
		expect(coinChange([1, 2, 3], 4)).toBe(4);
		expect(coinChange([2, 5, 3, 6], 10)).toBe(5);
		expect(coinChange([1, 2, 5], 12)).toBe(13);
		expect(coinChange([3, 5], 7)).toBe(2);
		expect(coinChange([1, 2, 3], 0)).toBe(1);
	});
	it("handles edge cases", () => {
		expect(coinChange([], 5)).toBe(0);
		expect(coinChange([1, 2, 3], -1)).toBe(0);
	});
});
