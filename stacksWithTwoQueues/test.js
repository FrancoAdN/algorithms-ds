const Stack = require("./index");

describe("Stack", () => {
	let stack;
	beforeEach(() => {
		stack = new Stack();
	});
	it("push method should return the stack", () => {
		expect(stack.push(1)).toBe(stack);
		expect(stack.push(2)).toBe(stack);
		expect(stack.push(3)).toBe(stack);
	});
	it("pop method should return the value popped", () => {
		stack.push(1);
		stack.push(2);
		stack.push(3);
		expect(stack.pop()).toBe(3);
		expect(stack.pop()).toBe(2);
		expect(stack.pop()).toBe(1);
	});
	it("pop method should return null if stack is empty", () => {
		expect(stack.pop()).toBe(null);
	});
});
