const reverseSSL = require("./index");
const SinglyLinkedList = require("./SLL");
describe("reverseSSL", () => {
	it("should reverse the linked list", () => {
		const array = [13, 27, 32, 71];
		const list = new SinglyLinkedList();
		list.insertArray(array);
		reverseSSL(list);
		expect(list.parseToArray()).toEqual(array.reverse());
		reverseSSL(list);
		expect(list.parseToArray()).toEqual([13, 27, 32, 71]);
	});
});
