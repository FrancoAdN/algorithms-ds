// Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string
function collectStrings(object) {
	let result = [];
	for (let key in object) {
		if (typeof object[key] === "string") result.push(object[key]);
		else if (typeof object[key] === "object" && !Array.isArray(object[key]))
			result = [...result, ...collectStrings(object[key])];
	}

	return result;
}

module.exports = collectStrings;
