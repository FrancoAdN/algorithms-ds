// Write a recursive function called reverse which accepts a string and returns a new string in reverse.

function reverse(str, iterations = 0) {
	if (iterations === Math.floor(str.length / 2)) return str;

	str = str.split("");

	const temp = str[iterations];
	str[iterations] = str[str.length - 1 - iterations];
	str[str.length - 1 - iterations] = temp;

	return reverse(str.join(""), (iterations += 1));
}

module.exports = reverse;
