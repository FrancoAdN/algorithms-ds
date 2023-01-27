const productOfArray = require("./index");

describe("productOfArray", () => {
	it("[1,2,3] => 6", () => {
		expect(productOfArray([1, 2, 3])).toBe(6);
	});
	it("[1,2,3,10] => 60", () => {});
	expect(productOfArray([1, 2, 3, 10])).toBe(60);
});
