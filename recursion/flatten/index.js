// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.
function flatten(arr) {
	let result = [];

	for (let i = 0; i < arr.length; i++) {
		if (Array.isArray(arr[i])) result = [...result, ...flatten(arr[i])];
		else result.push(arr[i]);
	}

	return result;
}

module.exports = flatten;
