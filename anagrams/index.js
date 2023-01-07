// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
	const erasePunctuaction = (str) => {
		const punctuation = [" ", ".", "?", ",", "!"];
		return str
			.toLowerCase()
			.split("")
			.reduce((acc, curr) => {
				// another valid implementation:
				/*
				if (
					curr.charCodeAt() >= "a".charCodeAt() &&
					curr.charCodeAt() <= "z".charCodeAt()
				)
					acc += curr;
          */
				if (!punctuation.includes(curr)) acc += curr;
				return acc;
			}, "");
	};

	return (
		erasePunctuaction(stringA).split("").sort().join("") ===
		erasePunctuaction(stringB).split("").sort().join("")
	);
}

function anagramsMap(stringA, stringB) {
	const buildCharMap = (str) => {
		return str
			.replace("/[^w]/g", "")
			.toLowerCase()
			.split("")
			.reduce((acc, curr) => {
				acc[curr] = acc[curr] + 1 || 1;
				return acc;
			}, {});
	};

	const charMapA = buildCharMap(stringA);
	const charMapB = buildCharMap(stringB);

	const keysMapA = Object.keys(charMapA);

	if (keysMapA.length !== Object.keys(charMapB).length) return false;

	return keysMapA.every((key) => {
		return charMapB[key] && charMapA[key] === charMapB[key];
	});
}

function anagramsRegEx(stringA, stringB) {
	return (
		stringA.replace("/[^w]/g", "").toLowerCase().split("").sort().join("") ===
		stringB.replace("/[^w]/g", "").toLowerCase().split("").sort().join("")
	);
}

module.exports = anagrams;
