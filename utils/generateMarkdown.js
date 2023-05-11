// If there is no license, return an empty string
function renderLicenseBadge(license) {
	return license ? `This project is licensed with ${license}.` : '';
}

// If there is no license, return an empty string
function renderLicenseLink(license) {
	return license ? `https://img.shields.io/badge/license-${license}-blue` : '';
}

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
[${email}](mailto:${email})`;
		tableOfContentsText += `
- [Contact by Email](#email)`;
	}

	return `${headerText}
${tableOfContentsText}
${readmeText}`;
}

module.exports = generateMarkdown;
