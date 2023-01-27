const sameFrequency = require("./index");

describe("sameFrequency", () => {
	it("returns true", () => {
		expect(sameFrequency(182, 281)).toBeTruthy();
	});
	it("returns false", () => {
		expect(sameFrequency(34, 14)).toBeFalsy();
	});
	it("returns true", () => {
		expect(sameFrequency(3589578, 5879385)).toBeTruthy();
	});
	it("returns false", () => {
		expect(sameFrequency(22, 222)).toBeFalsy();
	});
});
