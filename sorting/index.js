// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort
function swapElements(arr, i, j) {
	[arr[i], arr[j]] = [arr[j], arr[i]];
}

// O(n^2)
function bubbleSort(arr) {
	for (let i = 0; i < arr.length - 1; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] > arr[j]) {
				swapElements(arr, i, j);
			}
		}
	}
	return arr;
}

// O(n^2)
function selectionSort(arr) {
	for (let i = 0; i < arr.length - 1; i++) {
		let indexOfMin = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[indexOfMin]) indexOfMin = j;
		}
		swapElements(arr, i, indexOfMin);
	}

	return arr;
}

// O(n^2)
function insertionSort(arr) {
	for (let i = 1; i < arr.length; i++) {
		let current = arr[i];
		// if j was declared within the for loop, wouldn't be definded in the next scope
		let j = i - 1;
		for (j; j >= 0 && arr[j] > current; j--) {
			arr[j + 1] = arr[j];
		}
		arr[j + 1] = current;
	}
	return arr;
}

// O(n log n)
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

// O(n log n)
function quickSort(arr, left = 0, right = arr.length - 1) {
	if (left < right) {
		const pivotIndex = pivot(arr, left, right);
		quickSort(arr, left, pivotIndex - 1);
		quickSort(arr, pivotIndex + 1, right);
	}
	return arr;
}

function pivot(arr, start = 0, end = arr.length - 1) {
	const pivot = arr[start];
	let swapIndex = start;

	for (let i = start + 1; i < arr.length; i++) {
		if (pivot > arr[i]) {
			swapIndex++;
			swapElements(arr, swapIndex, i);
		}
	}
	swapElements(arr, start, swapIndex);
	return swapIndex;
}

// O(nK) where K = mostDigits
function radixSort(nums) {
	const maxDigit = mostDigits(nums);

	for (let i = 0; i < maxDigit; i++) {
		let digitBuckets = Array.from({ length: 10 }, () => []);
		for (let num of nums) {
			const nDigit = getDigit(num, i);
			digitBuckets[nDigit].push(num);
		}
		nums = [].concat(...digitBuckets);
	}
	return nums;
}

function getDigit(num, place) {
	return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function digitCount(num) {
	if (num === 0) return 1;
	return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
	return nums.reduce((acc, curr) => {
		acc = Math.max(acc, digitCount(curr));
		return acc;
	}, 0);
}

class RadixSort {
	constructor(arr) {
		this.nums = arr;
	}

	static sort(arr) {
		const rd = new RadixSort(arr);
		return rd.sortNumbers();
	}

	sortNumbers() {
		const maxDigit = this.mostDigits();

		for (let i = 0; i < maxDigit; i++) {
			let digitBuckets = Array.from({ length: 10 }, () => []);
			for (let num of this.nums) {
				const nDigit = this.getDigit(num, i);
				digitBuckets[nDigit].push(num);
			}
			this.nums = [].concat(...digitBuckets);
		}
		return this.nums;
	}

	getDigit(num, place) {
		return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
	}

	digitCount(num) {
		if (num === 0) return 1;
		return Math.floor(Math.log10(Math.abs(num))) + 1;
	}

	mostDigits() {
		return this.nums.reduce((acc, curr) => {
			acc = Math.max(acc, this.digitCount(curr));
			return acc;
		}, 0);
	}
}

module.exports = {
	bubbleSort,
	selectionSort,
	mergeSort,
	merge,
	insertionSort,
	quickSort,
	radixSort,
	RadixSort,
};
