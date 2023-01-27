// Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.
function capitalizeFirst(arr, index = 0) {
	if (index === arr.length) return arr;

	const word = arr[index];
	arr[index] = word.charAt(0).toUpperCase() + word.slice(1);

	return capitalizeFirst(arr, (index += 1));
}

module.exports = capitalizeFirst;
