const S = require("./index");
const bubbleSort = S.bubbleSort;
const selectionSort = S.selectionSort;
const mergeSort = S.mergeSort;
const merge = S.merge;
const insertionSort = S.insertionSort;
const quickSort = S.quickSort;
const radixSort = S.RadixSort;

function getArray() {
	return [100, -40, 500, -124, 0, 21, 7];
}

function getSortedArray() {
	return [-124, -40, 0, 7, 21, 100, 500];
}

describe("Bubble sort", () => {
	test("sorts an array", () => {
		expect(bubbleSort(getArray())).toEqual(getSortedArray());
	});
});

describe("Selection sort", () => {
	test("sorts an array", () => {
		expect(selectionSort(getArray())).toEqual(getSortedArray());
	});
});

describe("Insertion sort", () => {
	test("sorts an array", () => {
		expect(insertionSort(getArray())).toEqual(getSortedArray());
	});
});

describe("Merge sort", () => {
	test("merge function can join together two sorted arrays", () => {
		const left = [1, 10];
		const right = [2, 8, 12];

		expect(merge(left, right)).toEqual([1, 2, 8, 10, 12]);
	});

	test("sorts an array", () => {
		expect(mergeSort(getArray())).toEqual(getSortedArray());
	});
});

describe("Quick sort", () => {
	test("sorts an array", () => {
		expect(quickSort(getArray())).toEqual(getSortedArray());
	});
});

describe("Radix sort", () => {
	test("sorts an array of positive numbers", () => {
		const nums = [12, 345, 21, 123564, 0, 12, 2345, 12575];
		const sorted = [0, 12, 12, 21, 345, 2345, 12575, 123564];
		expect(radixSort.sort(nums)).toEqual(sorted);
	});
});
