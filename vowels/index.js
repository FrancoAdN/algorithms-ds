// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
	const vowls = ["a", "e", "i", "o", "u"];
	return str
		.toLowerCase()
		.split("")
		.reduce((acc, curr) => {
			if (vowls.includes(curr)) acc++;
			return acc;
		}, 0);
}

//regex
// function vowels(str) {
// 	const matches = str.match(/[aeiou]/gi);
// 	return matches ? matches.length : 0;
// }

module.exports = vowels;
