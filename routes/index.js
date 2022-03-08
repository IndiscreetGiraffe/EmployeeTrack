const { express } = require('express');
const inquirer = require('inquirer');
const db = require('../db/connection');
const cTable = require('console.table');
const { isAsyncFunction } = require('util/types');

let departments = [];
let roles = [];
let employees = [];
let updatedRole = [];

console.log("--------------Employee Tracker--------------------");

async function startQuestions() {
    const question = await inquirer.prompt([
        {
            type: 'list',
            name: 'trackerAction',
            message: "What would you like to do today?",
            choices: ['View all departments', 'View all employees', 'View all roles', 'Add a department', 'Add an employee', 'Add a role', 'Update an employee role', 'Quit']
        }
    ])

    
}
