const capitalizeWords = require("./index");

describe("capitalizeWords", () => {
	it("should capitalize all the words", () => {
		const words = ["i", "am", "learning", "recursion"];
		const result = capitalizeWords(words);
		expect(result).toEqual(["I", "AM", "LEARNING", "RECURSION"]);
	});
});
