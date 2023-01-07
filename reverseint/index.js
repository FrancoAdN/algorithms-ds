// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
	const sign = Math.sign(n);
	let reversed = 0;
	n = Math.abs(n);
	while (n > 0) {
		let lastDigit = n % 10;
		reversed = reversed * 10 + lastDigit;
		n = parseInt(n / 10);
	}
	return reversed * sign;
}

module.exports = reverseInt;
