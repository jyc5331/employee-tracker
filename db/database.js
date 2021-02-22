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
  return connection.promise().query("SELECT * FROM department");
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
    .query(`SELECT employee.first_name, employee.last_name, role_id, manager_id AS manager, role.title, role.salary, department.name AS department FROM employee
  LEFT JOIN role ON role.id = employee.role_id
  LEFT JOIN department ON department.id = role.department_id;`);
};

const addDepartment = () => {
  return connection
    .promise()
    .query("INSERT INTO department (name) VALUES(`${departmentInput.name}`)");
  //
};

const addRole = () => {
  // return connection.promise().query("") have this select dept then add to it
  //
};

const addEmployee = () => {
  // return connection.promise().query("") have this select dept then add to it
  //
};

const updateEmployee = () => {};

// // simple query
// connection.query(
//   'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45',
//   function (err, results, fields) {
//     console.log(results); // results contains rows returned by server
//     console.log(fields); // fields contains extra meta data about results, if available
//   }
// );

// // with placeholder
// connection.query(
//   "SELECT * FROM `table` WHERE `name` = ? AND `age` > ?",
//   ["Page", 45],
//   function (err, results) {
//     console.log(results);
//   }
// );

module.exports = {
  getAllDepartments,
  getAllRoles,
  getAllEmployees,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployee,
};
