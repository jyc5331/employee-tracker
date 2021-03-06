const cTable = require("console.table");
const inquirer = require("inquirer");
const {
  getAllDepartments,
  getAllRoles,
  getAllEmployees,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployee,
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

const cycleAgain = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "Would you like to start from the beginning?(Required)",
        choices: ["Yes", "No"],
      },
    ])
    .then(function (cycleInput) {
      console.log(cycleInput);
      if (cycleInput.choice === "Yes") {
        openingFunction();
        return true;
      } else {
        console.log("Thank you for using this application");
        return false;
      }
    });
};

const viewAllDepartments = () => {
  getAllDepartments().then(function ([results]) {
    console.table(results);
    cycleAgain();
  });
};

const viewAllRoles = () => {
  getAllRoles().then(function ([results]) {
    console.table(results);
    cycleAgain();
  });
};

const viewAllEmployees = () => {
  getAllEmployees().then(function ([results]) {
    console.table(results);
    cycleAgain();
  });
};

const addToDepartment = () => {
  return inquirer
    .prompt([
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
    ])
    .then(function (departmentInput) {
      addDepartment(departmentInput.name);
      console.log(
        departmentInput.name + " was successfully added to your database"
      );
    })
    .then(function () {
      cycleAgain();
    });
};

const addToRole = () => {
  return inquirer
    .prompt([
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
        name: "department",
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
    ])
    .then(function (roleInput) {
      addRole(roleInput.title, roleInput.salary, roleInput.department);
      console.log(roleInput.title + " was successfully added to your database");
    })
    .then(function () {
      cycleAgain();
    });
};

const addToEmployee = () => {
  return inquirer
    .prompt([
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
        name: "roleId",
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
        name: "managerId",
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
    ])
    .then(function (employeeInput) {
      console.log(employeeInput);
      addEmployee(
        employeeInput.first,
        employeeInput.last,
        employeeInput.roleId,
        employeeInput.managerId
      );
      console.log(
        employeeInput.title + " was successfully added to your database"
      );
    })
    .then(function () {
      cycleAgain();
    });
};

const updateEmployeeRole = () => {
  let employees = [];
  getAllEmployees().then(function ([results]) {
    employees = results;
    employees = employees.map((x) => {
      return { value: x, name: `${x.first_name} ${x.last_name}` };
    });
    console.log(employees);

    inquirer
      .prompt([
        {
          type: "list",
          name: "choice",
          message:
            "Which employee's information would you like to update? Please select one of the following: (Required)",
          choices: employees,
        },
      ])
      .then(function (data) {
        let roles = [];
        getAllRoles().then(function ([results]) {
          roles = results;
          roles = roles.map((x) => {
            return { value: x, name: `${x.title}` };
          });
          console.log(data.choice);
          inquirer
            .prompt([
              {
                type: "list",
                name: "roleid",
                message:
                  "What is the ID of the employee's new role? (Required)",
                choices: roles,
              },
            ])
            .then(function (roleData) {
              console.log(roleData.roleid);
              updateEmployee(data.choice.id, roleData.roleid.role_id).then(
                function () {
                  cycleAgain();
                }
              );
            });
        });
      });
    //change DB with updateEmployee()
    //console.log a success message
  });
};

openingFunction();
