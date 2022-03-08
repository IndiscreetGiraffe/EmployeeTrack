INSERT INTO department (name)
VALUES
    ('Sales'),
    ('Finance'),
    ('Egineering'),
    ('Legal');

INSERT INTO employeeroles (title, salary, department_id)
VALUES
    ('Salesperson', 80000, 1),
    ('Accountant', 125000, 2),
    ('Account Manager', 160000, 2),
    ('Software Engineer', 120000, 3),
    ('Lead Engineer', 150000, 3),
    ('Lawyer', 190000, 4),
    ('Legal Team Lead', 250000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
    ('Leslie', 'Knorpe', 1, null),
    ('Kevin', 'Malone', 2, 1),
    ('Angela', 'Schrute', 3, 1),
    ('Jim', 'Halpert', 4, 2),
    ('Dwight', 'Schrute', 5, 2),
    ('Stanley', 'Hudson', 6, 3),
    ('Nelly', 'Burtram', 7, 3);