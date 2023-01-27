const fs = require("fs");
const foldername = process.argv[process.argv.indexOf("-f") + 1];

if (!foldername) {
	process.exit();
}

if (!fs.existsSync(foldername)) {
	fs.mkdirSync(foldername);
	const indexFile = `
function ${foldername}() {}; 

module.exports = ${foldername}
`;

	const testFile = `
const ${foldername} = require('./index');

describe("${foldername}", () => {

  it("", () => {

  });
})
`;

	fs.writeFileSync(`./${foldername}/index.js`, indexFile);
	fs.writeFileSync(`./${foldername}/test.js`, testFile);
}
