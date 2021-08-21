// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "") {
    return `This project is licensed with ${license}.`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "https://img.shields.io/badge/license-MIT-blue";
  }
  if (license === "BSD") {
    return "https://img.shields.io/badge/license-BSD-blue";
  }
  if (license === "GPL") {
    return "https://img.shields.io/badge/license-GPL-blue";
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ![License Image](${renderLicenseLink(data.license)})

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contribution-guidelines)
  - [License](#license)
  - [Test](#test-instructions)
  - [GitHub Profile](#github-profile)
  - [Contact by Email](#email)

  ## Installation
  ${data.installInstructions}

  ## Usage
  ${data.usageInfo}

  ## Contribution Guidelines
  ${data.contribution}

  ## License
  ${renderLicenseBadge(data.license)}


  ## Test Instructions
  ${data.testIns}

  ### GitHub Profile
  [My Profile](https://github.com/${data.github})

  ### Email
  ${data.email}
`;
}

module.exports = generateMarkdown;
