const express = require('express');
const inputCheck = require('./utils/inputCheck');
const db = require('./db/connection');


const PORT = process.env.PORT || 3306;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

