const sumZero = require("./index");

describe("sumZero", () => {
	it("returns [-3, 3]", () => {
		const nums = [-3, -2, -1, 0, 1, 2, 3];
		expect(sumZero(nums)).toEqual([-3, 3]);
	});

	it("returns undefined", () => {
		const nums = [-2, 0, 1, 3];
		expect(sumZero(nums)).toBeUndefined();
	});

	it("returns undefined", () => {
		const nums = [1, 2, 3];
		expect(sumZero(nums)).toBeUndefined();
	});

	it("returns [-1, 1]", () => {
		const nums = [-9, -6, -3, -1, 0, 1];
		expect(sumZero(nums)).toEqual([-1, 1]);
	});
	it("returns [-2, 2]", () => {
		const nums = [-7, -3, -2, -1, 0, 1, 2, 4];
		expect(sumZero(nums)).toEqual([-2, 2]);
	});
});
