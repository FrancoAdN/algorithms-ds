// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
	const mapped = str.split("").reduce((acc, curr) => {
		acc[curr] = acc[curr] + 1 || 1;
		return acc;
	}, {});
	return Object.keys(mapped).reduce(
		(acc, curr) => {
			if (mapped[curr] > acc.cant) acc = { char: curr, cant: mapped[curr] };
			return acc;
		},
		{ char: "", cant: 0 }
	).char;
}

module.exports = maxChar;
