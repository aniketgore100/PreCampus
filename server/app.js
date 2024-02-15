// app.js
const express = require("express");
const mysql = require("mysql2");
const dotenv = require('dotenv');
const app = express();
const path = require('path');

dotenv.config({ path: './.env' });
app.set('view engine', 'hbs');

const publicdir = path.join(__dirname, './public');
app.use(express.static(publicdir));

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    port: process.env.DATABASE_PORT,
    database: process.env.DATABASE
});

db.connect((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("mysql connected");
    }
});

// Routes
const pagesRouter = require('./routes/pages');
const authRouter = require('./routes/auth');

app.use('/', pagesRouter);
app.use('/auth', authRouter);

app.listen(5000, () => {
    console.log("server started on 5000 : ");
});
