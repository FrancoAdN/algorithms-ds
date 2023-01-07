// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
	for (let i = 0; i < arr.length - 1; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] > arr[j]) {
				const temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
	}
	return arr;
}

function selectionSort(arr) {
	for (let i = 0; i < arr.length - 1; i++) {
		let indexOfMin = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[indexOfMin]) indexOfMin = j;
		}
		const temp = arr[i];
		arr[i] = arr[indexOfMin];
		arr[indexOfMin] = temp;
	}

	return arr;
}

function mergeSort(arr) {
	if (arr.length === 1) {
		return arr;
	}
	const center = Math.floor(arr.length / 2);
	const left = arr.slice(0, center);
	const right = arr.slice(center);

	return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
	const result = [];
	while (left.length && right.length) {
		if (left[0] < right[0]) result.push(left.shift());
		else result.push(right.shift());
	}

	return [...result, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
