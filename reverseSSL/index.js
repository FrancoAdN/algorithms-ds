function reverseSSL(list) {
	if (!list.head || !list.head.next) return;

	let current = list.head;
	let previous = null;
	let next = current.next;
	let count = 0;
	while (current) {
		next = current.next;
		current.next = previous;
		previous = current;
		current = next;
		count++;
	}
	list.head = previous;
}

module.exports = reverseSSL;
