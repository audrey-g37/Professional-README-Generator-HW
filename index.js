// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown');

// Create an array of questions for user input
const questions = [
	{
		type: 'input',
		message: 'Enter the title of your project ',
		name: 'title'
	},
	{
		type: 'input',
		message: 'Enter the description ',
		name: 'description'
	},
	{
		type: 'input',
		message: 'Enter the installation instructions ',
		name: 'installInstructions',
		default: 'npm i'
	},
	{
		type: 'input',
		message: 'Enter the usage information ',
		name: 'usageInfo'
	},
	{
		type: 'input',
		message: 'Enter the contribution guidelines ',
		name: 'contribution'
	},
	{
		type: 'input',
		message: 'Enter the test instructions ',
		name: 'testIns',
		default: 'npm run test'
	},
	{
		type: 'list',
		message: 'Choose a license ',
		name: 'license',
		choices: ['MIT', 'BSD', 'GPL']
	},
	{
		type: 'input',
		message: 'Enter your GitHub username: ',
		name: 'github'
	},
	{
		type: 'input',
		message: 'Enter your preferred email address: ',
		name: 'email',
		validate: (input) => {
			return input && !input.match(/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/)
				? 'Must ve a valid email.'
				: true;
		}
	}
];

// Create a function to write README file
function writeToFile(fileName, data) {
	fs.writeFile(`./Generated/${fileName}`, data, (err) => {
		err ? console.log(err) : console.log('File was created.');
	});
}

//Create a function to store the file in a new directory
function makeDirectory() {
	fs.mkdir('./Generated', { recursive: true }, (err) => {
		if (err) throw err;
	});
}

// function to see if a generated README file already exists - asks user if they wish to overwrite or create a new one.
async function saveFile(readmeData) {
	let fileName = 'README.md';
	if (fs.existsSync(`./Generated/${fileName}`)) {
		const overwriteQuestion = [
			{
				type: 'list',
				choices: ['Overwrite existing file', 'Create new file'],
				message:
					'There is already a generated README.md file saved.  Do you wish to overwrite the existing readme or save this input in a new README file?',
				name: 'overwrite'
			}
		];
		await inquirer.prompt(overwriteQuestion).then((data) => {
			const { overwrite } = data;
			// if the user wants to create a new file - reading all files in the directory of generated files and creating a new one with digits at the end of the file name (finds the largest number in the files names and adds one to it)
			if (overwrite !== 'Overwrite existing file') {
				fs.readdirSync('./Generated').reduce((prev, next) => {
					let digitFileChar = +next.split('.')[0].slice(6);
					if (digitFileChar >= prev) {
						fileName = `README${digitFileChar ? (digitFileChar += 1) : 1}.md`;
					}
					return digitFileChar;
				}, 0);
			}
		});
	}
	writeToFile(fileName, readmeData);
}

// Create a function to initialize app
function init() {
	inquirer.prompt(questions).then(async (data) => {
		makeDirectory();

		// generating the markdown text
		const readmeData = markdown(data);

		saveFile(readmeData);
	});
}

// Function call to initialize app
init();
