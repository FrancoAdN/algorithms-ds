//Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings.
//Recursion would be a great way to solve this!

function stringifyNumbers(obj) {
	let result = {};
	for (let key in obj) {
		if (typeof obj[key] === "number") {
			result[key] = obj[key].toString();
		} else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
			result[key] = stringifyNumbers(obj[key]);
		} else {
			result[key] = obj[key];
		}
	}

	return result;
}

module.exports = stringifyNumbers;
