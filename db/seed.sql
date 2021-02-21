INSERT INTO department (name)
VALUES
("Men's"),
("Women's"),
("Kid's"),
("Perfume");

INSERT INTO role (title, salary, department_id)
VALUES
("Manager", 40000.00, 1),
("Sales", 35000.00, 3),
("Customer Service", 45000.00, 4); 

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
("Bob", "Burgers", 2, NULL),
("Linda", "Burgers", 1, 1),
("Louise", "Burgers", 3, 2);   
