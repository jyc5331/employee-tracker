const cTable = require("console.table");
const inquirer = require("inquirer");
const { getAllDepartments, getAllRoles } = require("./db/database");

const openingFunction = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message:
          "What would you like to do? Please select one of the following: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role (Required)",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update an employee role",
        ],
      },
    ])
    .then(function (data) {
      console.log(data);
      if (data.choice === "View all departments") {
        return viewAllDepartments();
      }
      if (data.choice === "View all roles") {
        return viewAllRoles();
      }
      if (data.choice === "View all employees") {
        return promptUserIntern();
      }
      if (data.choice === "Add a department") {
        generateHTML(employees);
      }
      if (data.choice === "Add a role") {
        generateHTML(employees);
      }
      if (data.choice === "Add an employee") {
        generateHTML(employees);
      }
      if (data.choice === "Update an employee role") {
        generateHTML(employees);
      }
    });
};

// view all departments
const viewAllDepartments = () => {
  getAllDepartments().then(function (results) {
    console.log(results);
    //look into mapping so you can clean up results and put them into a new object
    // let departments = new Map()
    // departments.set(results {id, name})
  });
};

const viewAllRoles = () => {
  getAllRoles().then(function (results) {
    console.log(results);
  });
};

openingFunction();
