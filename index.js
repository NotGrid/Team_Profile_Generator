const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHtml = require('./generatehtml');
let teamArray = [];
const path = require('path');
// function to input manager info
function teamManager() {
    inquirer.prompt([

        {
            type: 'input',
            name: 'manager',
            message: "What is the team manager's name?",
        },
        {
            type: 'input',
            name: 'employeeID',
            message: 'What is your employee ID number?',
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your email address?",
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your office number?',
        },
    ]).then(({manager, employeeID, email, officeNumber}) => {
        let theManager = new Manager(manager, employeeID, email, officeNumber);
        teamArray.push(theManager);
        otherTeamMembers();
    })
};
// function to input other possible team members
function otherTeamMembers() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'employeeList',
            message: 'Select additional team memebers',
            choices: ['Engineer', 'Intern', 'None'],
        },
    ]).then(({employeeList}) => {
        if(employeeList === 'Engineer') {
            teamEngineer();
        }else if(employeeList === 'Intern') {
            teamIntern();
        }else {
       
            // generated team function goes here
            writeToFile('dist/index.html', generateHtml(teamArray));
        }
    });
};

function teamEngineer() {
    inquirer.prompt([

        {
            type: 'input',
            name: 'name',
            message: "What is the team members's name?",
        },
        {
            type: 'input',
            name: 'employeeID',
            message: 'What is your employee ID number?',
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your email address?",
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your github?',
        },
    ]).then(({name, employeeID, email, github}) => {
        let theEngineer = new Engineer(name, employeeID, email, github);
        teamArray.push(theEngineer);
        otherTeamMembers();
    })
};

function teamIntern() {
    inquirer.prompt([

        {
            type: 'input',
            name: 'name',
            message: "What is the team members's name?",
        },
        {
            type: 'input',
            name: 'employeeID',
            message: 'What is your employee ID number?',
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your email address?",
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is your school?',
        },
    ]).then(({name, employeeID, email, school}) => {
        let theIntern = new Intern(name, employeeID, email, school);
        teamArray.push(theIntern);
        otherTeamMembers();
    })
};
// function to generate html file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if(err) {
            console.log(err);
        }else {
            console.log('Team successfully generated!');
        }
    })
};
teamManager();