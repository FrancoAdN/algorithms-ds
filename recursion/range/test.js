const recursiveRange = require("./index");
describe("recursiveRange", () => {
	it("range of 6 equal 21", () => {
		expect(recursiveRange(6)).toBe(21);
	});
	it("range of 10 equal 55", () => {
		expect(recursiveRange(10)).toBe(55);
	});
	it("range of 20 equal 210", () => {
		expect(recursiveRange(20)).toBe(210);
	});
});
