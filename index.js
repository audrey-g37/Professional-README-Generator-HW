// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const markdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "Enter the title of your project ",
    name: "title",
  },
  {
    type: "input",
    message: "Enter the description ",
    name: "description",
  },
  {
    type: "input",
    message: "Enter the installation instructions ",
    name: "installInstructions",
    default: "npm i",
  },
  {
    type: "input",
    message: "Enter the usage information ",
    name: "usageInfo",
    default: "node index.js",
  },
  {
    type: "input",
    message: "Enter the credits and contribution guidelines ",
    name: "contribution",
  },
  {
    type: "input",
    message: "Enter the test instructions ",
    name: "testIns",
    default: "npm run test",
  },
  {
    type: "list",
    message: "Choose a license ",
    name: "license",
    choices: ["MIT", "BSD", "GPL"],
  },
  {
    type: "input",
    message: "Enter your GitHub username: ",
    name: "github",
  },
  {
    type: "input",
    message: "Enter your preferred email address: ",
    name: "email",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(`./Generated/${fileName}`, data, (err) => {
    err ? console.log(err) : console.log("File was created.");
  });
}

function makeDirectory() {
  fs.mkdir("./Generated", { recursive: true }, (err) => {
    if (err) throw err;
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    makeDirectory();

    writeToFile("README.md", markdown(data));
  });
}

// Function call to initialize app
init();
