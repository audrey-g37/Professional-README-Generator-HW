// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "") {
    return `## License
    This project is licensed with ${license}.`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "") {
    return `## License Link`;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "") {
    return `## License Section`;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  - 

  ## Installation
  ${data.installInstructions}

  ## Usage
  ${data.usageInfo}

  ## Credits
  ${data.contribution}

${renderLicenseBadge()}

  ## Tests
  ${data.testIns}
`;
}

module.exports = generateMarkdown;
