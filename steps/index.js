// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, curr = 1) {
	let stair = "";
	for (let i = 0; i < n; i++) {
		stair += i < curr ? "#" : " ";
	}
	console.log(stair);
	if (n === curr) return;

	return steps(n, curr + 1);
}

// function steps(n) {
// 	for (let i = 1; i <= n; i++) {
// 		let stair = "";
// 		for (let j = 0; j < n; j++) {
// 			stair += j < i ? "#" : " ";
// 		}
// 		console.log(stair);
// 	}
// }

module.exports = steps;
