// app.js
const express = require("express");
const mysql = require("mysql2");
const dotenv = require('dotenv');
const app = express();
const path = require('path');
const sendEmail = require('./public/send_mail');
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

app.use(express.urlencoded({ extended: true }))
const pagesRouter = require('./routes/pages');
const authRouter = require('./routes/auth');


app.use('/', pagesRouter);
app.use('/auth', authRouter);


app.post('/send_mail', (req, res) => {
    const { stream, year, subject } = req.body;
    sendEmail(stream, year, subject);
    res.send('Email sent successfully!');
  });
  

app.listen(5000, () => {
    console.log("server started on 5000 : ");
});
