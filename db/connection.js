const mysql = require ('mysql2');

const db = mysql.createConnection( 
    {
        host: 'localhost',
        user:'root',
        password: 'Octavia6114!',
        database: 'employee_tracker'
    },
    console.log('Connected to the Employee Database.')
);

module.exports = db;