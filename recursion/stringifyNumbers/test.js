const stringifyNumbers = require("./index");

describe("stringifyNumbers", () => {
	it("should stringify each number", () => {
		let obj = {
			num: 1,
			test: [],
			data: {
				val: 4,
				info: {
					isRight: true,
					random: 66,
				},
			},
		};

		const result = stringifyNumbers(obj);
		const expected = {
			num: "1",
			test: [],
			data: {
				val: "4",
				info: {
					isRight: true,
					random: "66",
				},
			},
		};

		expect(result).toEqual(expected);
	});
});
