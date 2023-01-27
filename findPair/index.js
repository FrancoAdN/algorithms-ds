/**
 * Given an unsorted array and a number n, find if there exists a pair of elements in the array whose difference is n.
 * This function should return true if the pair exists or false if it does not.
 */
function findPair(arr, n) {
	let seen = new Set();
	for (let i = 0; i < arr.length; i++) {
		if (seen.has(arr[i] - n) || seen.has(arr[i] + n)) {
			return true;
		}
		seen.add(arr[i]);
	}
	return false;
}

module.exports = findPair;
