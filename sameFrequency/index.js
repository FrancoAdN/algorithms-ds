/**
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
Your solution MUST have the following complexities:
Time: O(N)
 */
function sameFrequency(n1, n2) {
	return (
		n1.toString().split("").sort().join("") ===
		n2.toString().split("").sort().join("")
	);
}
module.exports = sameFrequency;
