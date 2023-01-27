const findAllDuplicates = require("./index");

describe("findAllDuplicates", () => {
	it("returns an array of duplicate elements", () => {
		expect(findAllDuplicates([1, 2, 3, 4, 2, 5, 6, 5])).toEqual([2, 5]);
		expect(findAllDuplicates([1, 2, 1, 4, 5, 6, 5])).toEqual([1, 5]);
		expect(
			findAllDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 11])
		).toEqual([11]);
	});
	it("handles edge cases", () => {
		expect(findAllDuplicates([])).toEqual([]);
		expect(findAllDuplicates([1, 2, 3, 4, 5, 6, 7, 8])).toEqual([]);
	});
});
