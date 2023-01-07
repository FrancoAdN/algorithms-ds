// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
	const chunked = [];
	let chunk = [];
	for (let i = 0; i < array.length; i++) {
		chunk.push(array[i]);
		if ((i + 1) % size === 0 || i === array.length - 1) {
			chunked.push(chunk);
			chunk = [];
		}
	}
	return chunked;
}

// function chunk(array, size) {
// 	const chunked = [];
// 	let index = 0;
// 	while (index < array.length) {
// 		chunked.push(array.slice(index, size + index));
// 		index += size;
// 	}
// 	return chunked;
// }

module.exports = chunk;
