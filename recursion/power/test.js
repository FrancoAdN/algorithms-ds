const power = require("./index");

describe("power", () => {
	it("1000^0 to equal 1", () => {
		expect(power(1000, 0)).toBe(1);
	});
	it("2^4 to equal 16", () => {
		expect(power(2, 4)).toBe(16);
	});
	it("5^6 to equal 15625", () => {
		expect(power(5, 6)).toBe(15625);
	});
	it("3^4 to equal 81", () => {
		expect(power(3, 4)).toBe(81);
	});
});
