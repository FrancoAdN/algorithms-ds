function constructNote(message, letters) {
	let letterCount = {};

	for (let i = 0; i < letters.length; i++) {
		if (!letterCount[letters[i]]) {
			letterCount[letters[i]] = 1;
		} else {
			letterCount[letters[i]]++;
		}
	}

	for (let i = 0; i < message.length; i++) {
		if (!letterCount[message[i]] || letterCount[message[i]] < 1) {
			return false;
		} else {
			letterCount[message[i]]--;
		}
	}

	return true;
}

module.exports = constructNote;
