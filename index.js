const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
let teamArray = [];
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
            console.log(teamArray);
            // generated team function goes here
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
    ]).then((teamMember) => {
        console.log(teamMember);
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
    ]).then((teamMember) => {
        console.log(teamMember);
        otherTeamMembers();
    })
};
teamManager();