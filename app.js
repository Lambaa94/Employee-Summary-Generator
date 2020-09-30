const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Choices = require("inquirer/lib/objects/choices");

const employees = []

console.log("Please build your team.")
inquirer.prompt([
    {
        type: "input",
        message: "What is your manager's name?",
        name: "managerName"
        
    },
    {
        type: "input",
        message: "What is your manager's id?",
        name: "managerId"
    },
    {
        type: "input",
        message: "What is your manager's email?",
        name: "managerEmail"
    },
    {
        type: "input",
        message: "What is your manager's office number?",
        name: "office"

    }]).then(function (managerAnswers) {
        const manager = new Manager(managerAnswers.managerName, managerAnswers.managerId, managerAnswers.managerEmail, managerAnswers.office);
        employees.push(manager);

        makeEmployees();

    });

function makeEmployees() {
    inquirer.prompt([
        {
            type: "list",
            message: "Which type of team member would you like to add?",
            name: "addMember",
            choices: ["Engineer", "Intern", "I don't want to add more members."],
        }]).then(function({addMember}) {
            if (addMember === "Engineer") {
                inquirer.prompt([
                {
                    type: "input",
                    message: "What is your engineer's name?",
                    name: "engineerName"
                },
                {
                    type: "input",
                    message: "What is your engineer's id",
                    name: "engineerId"
                },
                {
                    type: "input",
                    message: "What is your engineer's email?",
                    name: "engineerEmail"
                },
                {
                    type: "input",
                    message: "What is your engineer's GitHub?",
                    name: "github"
                },
                ]).then(function (engineerAnswers) {
                    const engineer = new Engineer(engineerAnswers.engineerName, engineerAnswers.engineerId, engineerAnswers.engineerEmail, engineerAnswers.github)
                    employees.push(engineer);
                    makeEmployees();

                })
            } else if (addMember === "Intern") {
                inquirer.prompt([
                {
                    type: "input",
                    message: "What is your intern's name?",
                    name: "internName"
                },
                {
                    type: "input",
                    message: "What is your intern's id",
                    name: "internId"
                },
                {
                    type: "input",
                    message: "What is your intern's email?",
                    name: "internEmail"
                },
                {
                    type: "input",
                    message: "Where did your intern go to school?",
                    name: "school"
                },
                ]).then(function (internAnswers) {
                    const intern = new Intern(internAnswers.internName, internAnswers.internId, internAnswers.internEmail, internAnswers.school)
                    employees.push(intern);
                    makeEmployees();

                })
            } else {
                console.log("Generating employees...");
               
                const html = render(employees);
                
                fs.writeFile(outputPath, html, function (err) {
                    if (err) throw err;
                    console.log("Success!")
                });
            };



        })};