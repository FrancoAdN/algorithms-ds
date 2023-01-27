/**
 * Write a function called sumZero which accepts a sorted array of integers.
 * The function should find the first pair where the sum is 0.
 * Return an array that includes both values that sum up to zero or undefined
 * if the pair does not exist
 */
// Multiple Pointers Pattern
function sumZero(nums) {
	let left = 0,
		right = nums.length - 1;

	while (left < right) {
		const sum = nums[left] + nums[right];
		if (nums[left] + nums[right] === 0) return [nums[left], nums[right]];

		if (sum < 0) left++;
		else right--;
	}
}

module.exports = sumZero;
