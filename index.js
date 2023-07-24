// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: 'title'
    },
    {
        type: "input",
        message: "What is the description of your project?",
        name: 'description'
    },
    {
        type: "input",
        message: "Please enter installation instructions: ",
        default: "There are no installation instructions.",
        name: 'installation'
    },
    {
        type: "input",
        message: "Please enter usage information: ",
        default: "There is no usage information.",
        name: 'usage'
    },
    {
        type: "input",
        message: "What is your email?",
        name: 'email'
    },
    {
        type: "input",
        message: "What is your github username?",
        name: 'username'
    },
    {
        type: "list",
        message: "Please choose a license:",
        name: "license",
        choices: ["MIT", "ISC", "Apache", "None"]
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success!')) //Shorthand version of an "if" statement
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(answers) {
            const markdownContent = generateMarkdown(answers);
            writeToFile("README.md", markdownContent);
        });
}

// Function call to initialize app
init();