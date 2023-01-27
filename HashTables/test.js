const HashTable = require("./index");

describe("HashTable", () => {
	const ht = new HashTable(17);
	ht.set("maroon", "#800000");
	ht.set("yellow", "#FFFF00");
	ht.set("olive", "#808000");
	ht.set("salmon", "#FA8072");
	ht.set("lightcoral", "#F08080");
	ht.set("mediumvioletred", "#C71585");
	ht.set("plum", "#DDA0DD");
	ht.set("purple", "#DDA0DD");
	ht.set("violet", "#DDA0DD");

	it("should return an array with the keys", () => {
		expect(ht.keys()).toEqual([
			"plum",
			"salmon",
			"violet",
			"purple",
			"maroon",
			"yellow",
			"olive",
			"lightcoral",
			"mediumvioletred",
		]);
	});

	it("should return an array with the values", () => {
		expect(ht.values()).toEqual([
			"#DDA0DD",
			"#FA8072",
			"#800000",
			"#FFFF00",
			"#808000",
			"#F08080",
			"#C71585",
		]);
	});

	it("should return the value of a given key", () => {
		expect(ht.get("salmon")).toBe("#FA8072");
	});
});
