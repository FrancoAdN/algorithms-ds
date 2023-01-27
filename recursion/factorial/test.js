const factorial = require("./index");

describe("factorial", () => {
	it("0! is equal to 1", () => {
		expect(factorial(0)).toBe(1);
	});
	it("4! is equal to 24", () => {
		expect(factorial(4)).toBe(24);
	});
	it("6! is equal to 720", () => {
		expect(factorial(6)).toBe(720);
	});
});
