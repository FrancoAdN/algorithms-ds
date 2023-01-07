// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
// 	return str.split("").reverse().join("");
// }

function reverse(str) {
	str = str.split("");
	const middle = Math.round(str.length / 2);
	for (let i = 0; i < middle; i++) {
		const temp = str[i];
		str[i] = str[str.length - i - 1];
		str[str.length - i - 1] = temp;
	}
	return str.join("");
}

module.exports = reverse;
