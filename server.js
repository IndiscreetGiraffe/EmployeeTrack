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