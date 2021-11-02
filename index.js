const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require('./dist/generateHTML')
const path = require('path');


const employees = [];
const newManager = () => 
{
    inquirer
        .prompt([
            {
                type: "list",
                name: "position",
                message: "What position is the employee in?",
                choices: [
                    "Manager"
                ]
            }, 
            {
                type: "input",
                name: "name",
                message: "What is the name of the Manager?",
            }, 
            {
                type: "input",
                name: "id",
                message: "What is the ID of the Manager?",
            }, 
            {
                type: "input",
                name: "email",
                message: "What is the Manager's email address?",
            },
            {
                type: "input",
                name: "officeNumber",
                message: "What is the manager's office number?",
            }

        ]).then(function(data) 
        {

            const newManager = new Manager(data.name, data.id, data.email, data.officeNumber);
            newManager.role = "Manager";
            employees.push(newManager);
            addEmployee();
            
        })
};
const newEmployee = () => 
{
    inquirer
        .prompt([
            {
                type: "list",
                name: "position",
                message: "What position is the employee in?",
                choices: [
                    "Manager",
                    "Engineer",
                    "Intern"
                ]
            }, 
            {
                type: "input",
                name: "name",
                message: "What is the name of the employee?",
            }, 
            {
                type: "input",
                name: "id",
                message: "What is the ID of the employee?",
            }, 
            {
                type: "input",
                name: "email",
                message: "What is the employee's email address?",
            },

        ]).then(function(data) 
        {

            switch (data.position) 
            {
                case "Manager":
                    inquirer.prompt(
                    {
                        type: "input",
                        name: "officeNumber",
                        message: "What is the manager's office number?",
                    }).then(function(manData) 
                    {
                        const newManager = new Manager(data.name, data.id, data.email, manData.officeNumber);
                        newManager.role = "Manager";
                        employees.push(newManager);
                        addEmployee();
                    });
                    break;
                case "Engineer":
                    inquirer.prompt(
                    {
                        type: "input",
                        name: "github",
                        message: "What is the engineer's Github Username?",

                    }).then(function(engData) 
                    {
                        const newEngineer = new Engineer(data.name, data.id, data.email, engData.github);
                        newEngineer.role = "Engineer";
                        employees.push(newEngineer);
                        addEmployee();
                    });
                    break;
                case "Intern":
                    inquirer.prompt(
                    {
                        type: "input",
                        name: "school",
                        message: "What is the intern's school?",

                    }).then(function(intData) 
                    {
                        const newIntern = new Intern(data.name, data.id, data.email, intData.school);
                        newIntern.role = "Intern";
                        employees.push(newIntern);
                        addEmployee();
                    });
                    break;
            }
        })
};
const addEmployee = () => 
{
    inquirer
        .prompt(
        {
            type: "confirm",
            name: "addEmployee",
            message: "Would you like to add an employee?",

        }).then(function(data) 
        {
            if (data.addEmployee) 
            {
                newEmployee();
            } else 
            {
                console.log(employees)
                fs.writeFile((__dirname, 'output/index.html'), generateHTML(employees), "utf8", function(err) 
                {
                    err ? console.log(err) : console.log("Success!");
                });
            }
        })
}

const addManager = () => 
{
    console.log(generateHTML)
    inquirer
        .prompt(
        {
            type: "confirm",
            name: "addManager",
            message: "Would you like to add a manager?",

        }).then(function(data) 
        {
            if (data.addManager) 
            {
                newManager();
            } 
            else 
            {
                fs.writeFile(path.join(__dirname, 'output/index.html'), generateHTML(employees), "utf8", function(err) 
                {
                    err ? console.log(err) : console.log("Success!");                  
                });
            }
        })
}


addManager();