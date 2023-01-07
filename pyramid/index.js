// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// not recursive solution
// function pyramid(n) {
// 	for (let i = 1; i <= n; i++) {
// 		let stair = "";
// 		let offset = i * 2 - 1;
// 		for (let j = 0; j < n * 2 - 1; j++) {
// 			if (j < offset) stair += "#";
// 			else {
// 				stair += " ";
// 				stair = " " + stair;
// 				j++;
// 			}
// 		}
// 		console.log(stair);
// 	}
// }

// recursive solution
function pyramid(n, currLevel = 1) {
	let level = "";
	const cantOfChars = currLevel * 2 - 1;
	for (let i = 0; i < n * 2 - 1; i++) {
		if (i < cantOfChars) level += "#";
		else {
			level += " ";
			level = " " + level;
			i++;
		}
	}

	console.log(level);
	if (n === currLevel) return;

	return pyramid(n, currLevel + 1);
}

// another recursive solution
// function pyramid(n, row = 0, level = "") {
// 	if (n === row) return;

// 	if (level.length === n * 2 - 1) {
// 		console.log(level);
// 		return pyramid(n, row + 1);
// 	}

// 	const midpoint = Math.floor((2 * n - 1) / 2);
// 	if (midpoint - row <= level.length && midpoint + row >= level.length)
// 		level += "#";
// 	else level += " ";

// 	return pyramid(n, row, level);
// }

module.exports = pyramid;
