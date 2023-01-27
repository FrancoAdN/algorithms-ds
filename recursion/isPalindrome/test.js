const isPalindrome = require("./index");

describe("isPalindrome", () => {
	it("awesome not to be palindrome", () => {
		expect(isPalindrome("awesome")).toBeFalsy();
	});
	it("foobar not to be palindrome", () => {
		expect(isPalindrome("foobar")).toBeFalsy();
	});
	it("tacocat be palindrome", () => {
		expect(isPalindrome("tacocat")).toBeTruthy();
	});
	it("amanaplanacanalpanama be palindrome", () => {
		expect(isPalindrome("amanaplanacanalpanama")).toBeTruthy();
	});
	it("amanaplanacanalpandemonium not to be palindrome", () => {
		expect(isPalindrome("amanaplanacanalpandemonium")).toBeFalsy();
	});
});
