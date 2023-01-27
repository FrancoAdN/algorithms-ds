const reverse = require("./index");

describe("reverse", () => {
	it("should reverse awesome", () => {
		expect(reverse("awesome")).toBe("emosewa");
	});
	it("should reverse rithmschool", () => {
		expect(reverse("rithmschool")).toBe("loohcsmhtir");
	});
	it("should reverse home", () => {
		expect(reverse("home")).toBe("emoh");
	});
});
