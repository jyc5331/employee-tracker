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
  return connection.promise().query("SELECT * FROM role");
};

const getAllEmployees = () => {
  return connection.promise().query("SELECT * FROM employee");
};

const addDepartment = () => {
  // return connection.promise().query("") have this select dept then add to it
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
