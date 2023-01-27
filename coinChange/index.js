/**
 * Write a function called coinChange which accepts two parameters: an array of denominations and a value. The function should return the number of ways you can obtain the value from the given collection of denominations. You can think of this as figuring out the number of ways to make change for a given value from a supply of coins.
 */
function coinChange(denominations, value) {
	const ways = new Array(value + 1).fill(0);
	ways[0] = 1;

	for (let i = 0; i < denominations.length; i++) {
		for (let j = denominations[i]; j <= value; j++) {
			ways[j] += ways[j - denominations[i]];
		}
	}

	return ways[value];
}

/*
This function uses a dynamic programming approach to solving the problem. It creates an array ways with a length of value + 1 and fills it with zeros. The first element, ways[0], is set to 1 because there is 1 way to make 0, which is not to use any coin.

The function then iterates through the denominations, and for each denomination, it iterates through the ways array starting from the denomination's value and up to the target value.

For each index j in the ways array, it adds the number of ways to make the target value minus the current denomination, ways[j-denominations[i]], to the current number of ways, ways[j].

In the end, the function returns the last element of the ways array, which is the number of ways to make the target value from the given denominations.
 */

module.exports = coinChange;
