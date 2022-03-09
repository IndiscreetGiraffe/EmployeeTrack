const express = require('express');
const inputCheck = require('./utils/inputCheck');
const db = require('./db/connection');


const PORT = process.env.PORT || 3306;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/api/department', (req, res) => {
    const sql = `SELECT * FROM department`;

    db.query(sql, (err, row) => {
        if (err) {
            res.status(500).json({ error: "Error" });
            return;
        }
        res.json({
            message: 'success',
            data: row
        });
    });
});

app.post('/api/department', ({ body }, res) => {
    const errors = inputCheck(body, 'department_name');
    if (errors) {
        res.status(400).json({ error: errors });
        return;
    }
    const sql = `INSERT INTO department (department_name)
                    VALUES (?)`;
    const params = [body.department_name];

    db.query(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success!',
            data: body
        });
    });
});