/**
 * Given an array of positive integers, some elements appear twice and others appear once.
 * Find all the elements that appear twice in this array. Note that you can return the elements in any order.
 */
function findAllDuplicates(nums) {
	let duplicates = [];
	let seen = new Set();

	for (let i = 0; i < nums.length; i++) {
		if (seen.has(nums[i])) {
			duplicates.push(nums[i]);
		} else {
			seen.add(nums[i]);
		}
	}

	return duplicates;
}

module.exports = findAllDuplicates;
