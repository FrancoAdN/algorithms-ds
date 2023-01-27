const flatten = require("./index");

describe("flatten", () => {
	it("should flat the given array", () => {
		expect(flatten([1, 2, 3, [4, 5]])).toEqual([1, 2, 3, 4, 5]);
	});
	it("should flat the given array", () => {
		expect(flatten([1, [2, [3, 4], [[5]]]])).toEqual([1, 2, 3, 4, 5]);
	});
	it("should flat the given array", () => {
		expect(flatten([[1], [2], [3]])).toEqual([1, 2, 3]);
	});
	it("should flat the given array", () => {
		expect(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])).toEqual([1, 2, 3]);
	});
});
