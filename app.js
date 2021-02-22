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
        addToDepartment();
      }
      if (data.choice === "Add a role") {
        addToRole();
      }
      if (data.choice === "Add an employee") {
        addToEmployee();
      }
      if (data.choice === "Update an employee role") {
        updateEmployeeRole();
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
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the department's name? (Required)",
      validate: (departmentInput) => {
        if (departmentInput) {
          return true;
        } else {
          console.log("Please enter the employee's name");
          return false;
        }
      },
    },
  ]);
  //.then would go here, but getting syntax error
  //add that to the DB by passing inquirer responses like so into "addDepartment(responses go here)"
  //console.log a success message
};

const addToRole = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the role's title? (Required)",
      validate: (titleInput) => {
        if (titleInput) {
          return true;
        } else {
          console.log("Please enter the title of the role");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "salary",
      message: "What is the salary of the role? (Required)",
      validate: (salaryInput) => {
        if (isNaN(salaryInput)) {
          console.log(
            "Please enter the salary of the role. Do not use commas or decimals"
          );
          return false;
        } else {
          return true;
        }
      },
    },
    {
      type: "input",
      name: "name",
      message: "What is the ID of the role's department? (Required)",
      validate: (departmentInput) => {
        if (isNaN(departmentInput)) {
          console.log("Please enter the ID of the role's department");
          return false;
        } else {
          return true;
        }
      },
    },
  ]);
  //add that to the DB by passing inquirer responses like so into "addRole(responses go here)"
  //console.log a success message
};

const addToEmployee = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "first",
      message: "What is the employee's first name? (Required)",
      validate: (firstInput) => {
        if (firstInput) {
          return true;
        } else {
          console.log("Please enter the employee's first name");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "last",
      message: "What is the employee's last name? (Required)",
      validate: (lastInput) => {
        if (lastInput) {
          return true;
        } else {
          console.log("Please enter the employee's last name");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "roleid",
      message: "What is the ID of the employee's role? (Required)",
      validate: (employeeRoleInput) => {
        if (isNaN(employeeRoleInput)) {
          console.log("Please enter the ID of the employee's role");
          return false;
        } else {
          return true;
        }
      },
    },
    {
      type: "input",
      name: "managerid",
      message: "What is the ID of the employee's manager? (Required)",
      validate: (managerIdInput) => {
        if (isNaN(managerIdInput)) {
          console.log("Please enter the ID employee's manager");
          return false;
        } else {
          return true;
        }
      },
    },
  ]);
  //add that to the DB with addEmployee()
  //console.log a success message
};

const updateEmployeeRole = () => {
  return inquirer.prompt([
    //make the first thing a drop down list of current results
    {
      type: "input",
      name: "first",
      message: "What is the employee's first name? (Required)",
      validate: (firstInput) => {
        if (firstInput) {
          return true;
        } else {
          console.log("Please enter the employee's first name");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "last",
      message: "What is the employee's last name? (Required)",
      validate: (lastInput) => {
        if (lastInput) {
          return true;
        } else {
          console.log("Please enter the employee's last name");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "roleid",
      message: "What is the ID of the employee's role? (Required)",
      validate: (employeeRoleInput) => {
        if (isNaN(employeeRoleInput)) {
          console.log("Please enter the ID of the employee's role");
          return false;
        } else {
          return true;
        }
      },
    },
    {
      type: "input",
      name: "managerid",
      message: "What is the ID of the employee's manager? (Required)",
      validate: (managerIdInput) => {
        if (isNaN(managerIdInput)) {
          console.log("Please enter the ID employee's manager");
          return false;
        } else {
          return true;
        }
      },
    },
  ]);
  //change DB with updateEmployee()
  //console.log a success message
};

openingFunction();
