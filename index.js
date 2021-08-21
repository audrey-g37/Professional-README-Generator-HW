// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

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
  },
  {
    type: "input",
    message: "Enter the contribution guidelines ",
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
    choices: ["MIT", "BSD", "GPL", "IBM"],
  },
  {
    type: "input",
    message: "Enter your GitHub username: ",
    name: "githubUsername",
  },
  {
    type: "input",
    message: "Enter your preferred email address: ",
    name: "email",
  },
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFile(` ${fileName}`, `${generateMarkdown(data)}`, (err) =>{
//         err ? console.log(err) : console.log("Done.");
//     });

// }

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    data = generateMarkdown(data);
    fs.writeFile("README.md", JSON.stringify(data), (err) => {
      err ? console.log(err) : console.log("File was created.");
    });
  });
}

// Function call to initialize app
init();
