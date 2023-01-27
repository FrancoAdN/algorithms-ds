const capitalizeFirst = require("./index");

describe("capitalizeFirst", () => {
	it("should capitalize each string's first letter", () => {
		expect(capitalizeFirst(["car", "taco", "banana"])).toEqual([
			"Car",
			"Taco",
			"Banana",
		]);
	});
});
