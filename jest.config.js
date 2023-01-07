module.exports = {
	moduleFileExtensions: ["js", "json", "ts"],
	rootDir: "./",
	testRegex: "test.js$",

	coverageDirectory: "../coverage",
	collectCoverageFrom: ["./**/*.js"],

	coverageThreshold: {
		global: {
			branches: 100,
			functions: 100,
			lines: 100,
			statements: 100,
		},
	},
	testEnvironment: "node",
};
