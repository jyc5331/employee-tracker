const cTable = require("console.table");
const inquirer = require("inquirer");
const {
  getAllDepartments,
  getAllRoles,
  getAllEmployees,
} = require("./db/database");

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
        return viewAllEmployees();
      }
      if (data.choice === "Add a department") {
        addToDepartment(employees);
      }
      if (data.choice === "Add a role") {
        addToRole(employees);
      }
      if (data.choice === "Add an employee") {
        addToEmployee(employees);
      }
      if (data.choice === "Update an employee role") {
        updateEmployeeRole(employees);
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

const viewAllEmployees = () => {
  getAllEmployees().then(function (results) {
    console.log(results);
  });
};

const addToDepartment = () => {
  //run inquire prompt for necessary info (name)
  //add that to the DB by passing inquirer responses like so into "addDepartment(responses go here)"
  //console.log a success message
};

const addToRole = () => {
  //run inquire prompt for necessary info (title, salary, dept_id)
  //add that to the DB by passing inquirer responses like so into "addRole(responses go here)"
  //console.log a success message
};

const addToEmployee = () => {
  //run inquire prompt for necessary info (first, last, role_id, manager_id)
  //add that to the DB with addEmployee()
  //console.log a success message
};

const updateEmployeeRole = () => {
  //run inquire prompt for necessary info
  //change DB with updateEmployee()
  //console.log a success message
};

openingFunction();
