// Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.
function nestedEvenSum(obj) {
	let result = 0;
	for (let prop in obj) {
		if (typeof obj[prop] === "object") result += nestedEvenSum(obj[prop]);
		else if (typeof obj[prop] === "number" && obj[prop] % 2 === 0)
			result += obj[prop];
	}

	return result;
}

module.exports = nestedEvenSum;
