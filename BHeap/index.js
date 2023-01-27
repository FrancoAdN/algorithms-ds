class MaxBinaryHeap {
	constructor() {
		this.values = [];
	}

	insert(value) {
		this.values.push(value);
		this.bubbleUp();
	}

	bubbleUp() {
		let index = this.values.length - 1;
		const element = this.values[index];
		while (index > 0) {
			const parentIdx = Math.floor((index - 1) / 2);
			const parent = this.values[parentIdx];
			if (element <= parent) break;
			this.values[index] = parent;
			this.values[parentIdx] = element;
			index = parentIdx;
		}
	}

	extractMax() {
		const max = this.values[0];
		const end = this.values.pop();
		if (this.values.length > 0) {
			this.values[0] = end;
			this.sinkDown();
		}
		return max;
	}

	sinkDown() {
		let index = 0;
		const element = this.values[index];
		while (true) {
			const leftIdx = 2 * index + 1;
			const rightIdx = leftIdx + 1;
			let left, right;
			let swap = null;
			if (leftIdx < this.values.length) {
				left = this.values[leftIdx];
				if (left > element) {
					swap = leftIdx;
				}
			}

			if (rightIdx < this.values.length) {
				right = this.values[rightIdx];
				if ((!swap && right > element) || (swap && right > left)) {
					swap = rightIdx;
				}
			}
			if (!swap) break;
			this.values[index] = this.values[swap];
			this.values[swap] = element;
			index = swap;
		}
	}
}

module.exports = MaxBinaryHeap;
