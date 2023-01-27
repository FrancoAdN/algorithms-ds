/**
 * Returns the first index at which a given element can be found in the array, or -1 if it is not present.
 */
function bSearch(arr, val) {
	let start = 0;
	let end = arr.length - 1;
	while (start <= end) {
		const middle = Math.floor((start + end) / 2);
		const current = arr[middle];

		if (current < val) start = middle + 1;
		else if (current > val) end = middle - 1;
		else return middle;
	}

	return -1;
}
