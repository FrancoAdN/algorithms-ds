/*
Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome 
(reads the same forward and backward). Otherwise it returns false.
*/

function isPalindrome(str) {
	if (str.length === 1) return true;

	if (str.length === 2 && str[0] === str[1]) return true;

	const lastLetter = str[str.length - 1];
	const firstLetter = str[0];

	if (lastLetter !== firstLetter) return false;

	str = str.slice(1, -1);
	return isPalindrome(str);
}

module.exports = isPalindrome;
