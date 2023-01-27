/**
Implement a function called, areThereDuplicates which accepts a variable number of arguments,
and checks whether there are any duplicates among the arguments passed in. 
O(n)
 */
function areThereDuplicates(...args) {
	if (args.length === 1) return true;

	const obj = {};
	for (let arg of args) {
		if (obj[arg]) return true;
		obj[arg] = 1;
	}

	return false;
	// return new Set(args).size !== args.length;
}
module.exports = areThereDuplicates;
