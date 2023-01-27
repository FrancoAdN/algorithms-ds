class HashTable {
	constructor(size = 53) {
		this.keyMap = new Array(size);
	}

	_hash(key) {
		let total = 0;
		const WEIRD_PRIME = 31;

		for (let i = 0; i < Math.min(key.length, 100); i++) {
			const value = key[i].charCodeAt(0) - 96;
			total = (total * WEIRD_PRIME + value) % this.keyMap.length;
		}

		return total;
	}

	set(key, value) {
		const index = this._hash(key);
		const keyValuePair = [key, value];

		if (!this.keyMap[index]) {
			this.keyMap[index] = [];
		}

		this.keyMap[index].push(keyValuePair);
	}

	get(key) {
		const index = this._hash(key);
		if (!this.keyMap[index]) return undefined;
		for (let value of this.keyMap[index]) {
			if (value[0] === key) return value[1];
		}
	}

	keys() {
		let result = [];
		for (let item of this.keyMap) {
			if (item) {
				result = result.concat(item.map((valueKeyPair) => valueKeyPair[0]));
			}
		}

		return result;
	}

	values() {
		let result = [];
		for (let item of this.keyMap) {
			if (item) {
				item.forEach((valueKeyPair) => {
					if (!result.includes(valueKeyPair[1])) {
						result.push(valueKeyPair[1]);
					}
				});
			}
		}
		return result;
	}
}

module.exports = HashTable;
