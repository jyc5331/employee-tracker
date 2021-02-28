// get the client
const mysql = require("mysql2");

// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "company",
  password: "sharingan",
});

const getAllDepartments = () => {
  return connection
    .promise()
    .query("SELECT department.id, department.name FROM department");
};

const getAllRoles = () => {
  return connection.promise().query(
    `SELECT  role.title, role.id AS role_id, department.name AS department, role.salary 
      FROM role 
      LEFT JOIN department ON department.id = role.department_id`
  );
};

const getAllEmployees = () => {
  return connection.promise()
    .query(`SELECT employee.id, employee.first_name, employee.last_name, role_id, manager_id AS manager, role.title, role.salary, department.name AS department FROM employee
  LEFT JOIN role ON role.id = employee.role_id
  LEFT JOIN department ON department.id = role.department_id;`);
  //HELP how to join manager onto manager ID?
};

const addDepartment = (name) => {
  return connection
    .promise()
    .query(`INSERT INTO department (name) VALUES('${name}')`);
};

const addRole = (title, salary, department) => {
  return connection
    .promise()
    .query(
      `INSERT INTO role (title, salary, department_id) VALUES('${title}', '${salary}', '${department}')`
    );
};

const addEmployee = (first, last, role, manager) => {
  return connection
    .promise()
    .query(
      `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES('${first}', '${last}', '${role}', '${manager}')`
    );
};

const updateEmployee = (employeeID, roleID) => {
  return connection.promise().query(
    `UPDATE employee 
    SET role_id = ${roleID}
    WHERE id = ${employeeID}`
  );
};

module.exports = {
  getAllDepartments,
  getAllRoles,
  getAllEmployees,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployee,
};
