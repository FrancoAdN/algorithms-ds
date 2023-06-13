function studyTikcode(accounts, events) {
  let n = accounts.length;
  for (let i = 0; i < events.length; i++) {
    if (events[i][0] === 1) {
      for (let j = 0; j < n; j++) {
        if (accounts[j] < events[i][1]) {
          accounts[j] = events[i][1];
        }
      }
    } else if (events[i][0] === 2) {
      accounts[events[i][1]] = events[i][2];
    }
  }
  return accounts;
}

module.exports = studyTikcode;
