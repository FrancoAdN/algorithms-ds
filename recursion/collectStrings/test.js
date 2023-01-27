const collectStrings = require("./index");

describe("collectStrings", () => {
	it("should return an array of three strings", () => {
		const obj = {
			stuff: "foo",
			data: {
				val: {
					thing: {
						info: "bar",
						moreInfo: {
							evenMoreInfo: {
								weMadeIt: "baz",
							},
						},
					},
				},
			},
		};
		expect(collectStrings(obj)).toEqual(["foo", "bar", "baz"]);
	});
});
