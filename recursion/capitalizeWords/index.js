//Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.
function capitalizeWords(arr, index = 0) {
	if (index === arr.length) return arr;

	arr[index] = arr[index].toUpperCase();

	return capitalizeWords(arr, (index += 1));
}

module.exports = capitalizeWords;
