const fs = require('fs');

function deleteReadme() {
	fs.rm('./Generated/README.md', (err) => {
		err ? console.error(err) : console.log('File Deleted');
	});
}

deleteReadme();
