// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
	constructor() {
		this.handler = {};
	}
	// Register an event handler
	on(eventName, callback) {
		if (this.handler[eventName]) this.handler[eventName].push(callback);
		else this.handler[eventName] = [callback];
	}

	// Trigger all callbacks associated
	// with a given eventName
	trigger(eventName) {
		if (this.handler[eventName]) {
			for (let cb of this.handler[eventName]) {
				cb();
			}
		}
	}

	// Remove all event handlers associated
	// with the given eventName
	off(eventName) {
		delete this.handler[eventName];
	}
}

module.exports = Events;
