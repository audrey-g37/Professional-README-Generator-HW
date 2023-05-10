// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
	if (license !== '') {
		return `This project is licensed with ${license}.`;
	}
	return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
	if (license === 'MIT') {
		return 'https://img.shields.io/badge/license-MIT-blue';
	}
	if (license === 'BSD') {
		return 'https://img.shields.io/badge/license-BSD-blue';
	}
	if (license === 'GPL') {
		return 'https://img.shields.io/badge/license-GPL-blue';
	}
	return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
	const {
		title = '',
		license = '',
		description = '',
		installInstructions = '',
		usageInfo = '',
		contribution = '',
		testIns = '',
		github = '',
		email = ''
	} = data;

	// original text
	let headerText = `# ${title} ![License Image](${renderLicenseLink(license)})`;
	let tableOfContentsText = `## Table of Contents`;
	let readmeText = ``;

	if (description)
		headerText += `
## Description
${description}`;
	if (installInstructions) {
		readmeText += `
## Installation
${installInstructions}`;
		tableOfContentsText += `
- [Installation](#installation)`;
	}
	if (usageInfo) {
		readmeText += `
## Usage
${usageInfo}`;
		tableOfContentsText += `
- [Usage](#usage)`;
	}
	if (contribution) {
		readmeText += `
## Contribution Guidelines
  ${contribution}`;
		tableOfContentsText += `
- [Contributing](#contribution-guidelines)`;
	}
	if (license) {
		readmeText += `
## License
${renderLicenseBadge(license)}`;
		tableOfContentsText += `
- [License](#license)`;
	}
	if (testIns) {
		readmeText += `
## Test Instructions
${testIns}`;
		tableOfContentsText += `
- [Test](#test-instructions)`;
	}
	if (github) {
		readmeText += `
### GitHub Profile
[My Profile](https://github.com/${github})`;
		tableOfContentsText += `
- [GitHub Profile](#github-profile)`;
	}
	if (email) {
		readmeText += `
### Email
${email}`;
		tableOfContentsText += `
- [Contact by Email](#email)`;
	}
	return `${headerText}
${tableOfContentsText}
${readmeText}`;
}

module.exports = generateMarkdown;
