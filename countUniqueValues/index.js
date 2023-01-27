/**
 * Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array.
 * There can be negative numbers in the array, but it will always be sorted.
 */
function countUniqueValues(nums) {
	if (nums.length === 0) return 0;

	let pointer = 0;
	for (let i = 1; i < nums.length; i++) {
		if (nums[pointer] !== nums[i]) {
			pointer++;
			nums[pointer] = nums[i];
		}
	}

	return pointer + 1;
}

module.exports = countUniqueValues;
