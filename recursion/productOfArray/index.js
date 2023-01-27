// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(arr) {
	// let result = 1;

	// function helper(array) {
	// 	if (array.length === 0) return;
	// 	result = result * array.shift();
	// 	console.log(result, array);
	// 	helper(array);
	// }

	// helper(arr);

	// return result;

	if (arr.length === 0) return 1;
	return arr.shift() * productOfArray(arr);
}

module.exports = productOfArray;
