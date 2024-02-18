//auth.js
const mysql = require("mysql2");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    port: process.env.DATABASE_PORT,
    database: process.env.DATABASE
});


exports.studentReg = (req, res)=>{
    console.log(req.body);
     const { 
        studentfirstname,
        studentemail, 
        studentphonenumber, 
        studentusername, 
        studentpassword,
        studentpasswordconfirm
        
 } = req.body; 


 db.query('select student_email from student where student_email = ?', [studentemail], async(error, results)=>{
if(error){
    console.log(error);
}
if(results.length > 0){
    return res.render('studentReg',{
        message : 'email is already is in use'
    });
} else if(studentpassword !== studentpasswordconfirm){
    return res.render('studentReg',{
        message : 'password do not match'
    });
}

    let hashedPass = await bcrypt.hash(studentpassword, 8);
    console.log(hashedPass);
    db.query('insert into student set ?', {student_name : studentfirstname, student_email : studentemail,
         student_phone : studentphonenumber, student_user_id : studentusername, student_password : hashedPass}, (error, results)=>{
            if(error){
                console.log(error);
            }else{
                console.log(results);
                return res.render('studentReg',{
                    message : 'user registered'
                });
            }
         })
 });
}



exports.register = (req, res) => {
    console.log(req.body);
    const {
        intName,
        intemail,
        intphone,
        intusername,
        intpassword,
        intconfirmPassword
    } = req.body;

    db.query('SELECT interviewer_email FROM interviewer WHERE interviewer_email = ?', [intemail], async (error, results) => {
        if (error) {
            console.log(error);
        }
        if (results.length > 0) {
            return res.render('register', {
                message: 'Email is already in use'
            });
        } else if (intpassword !== intconfirmPassword) {
            return res.render('register', {
                message: 'Passwords do not match'
            });
        }

        let hashedPass = await bcrypt.hash(intpassword, 8);
        console.log(hashedPass);
        db.query('INSERT INTO interviewer SET ?', {
            interviewer_name: intName,
            interviewer_email: intemail,
            interviewer_phone: intphone,
            interviewer_user_id: intusername,
            interviewer_password: hashedPass
        }, (error, results) => {
            if (error) {
                console.log(error);
            } else {
                console.log(results);
                return res.render('register', {
                    message: 'User registered'
                });
            }
        });
    });
}

// exports.login = (req, res) => {
//     const { username, password } = req.body;
//     console.log(username);
//     db.query('SELECT * FROM student WHERE student_user_id = ?', [username], async (error, results) => {
//         if (error) {
//             console.log(error);
//             res.render('index', {
//                 message: 'An error occurred. Please try again later.'
//             });
//         } else if (results.length === 0) {
//             res.render('index', {
//                 message: 'Invalid username or password.'
//             });
//         } else {
//             console.log(results);
//             const user = results[0];
//             console.log(user);
//             const isMatch = await bcrypt.compare(password, user.student_password);
//             console.log(isMatch);
//             if (isMatch) {
//                 // Passwords match, login successful
//                 // You can set up sessions or JWT tokens here
//                 res.redirect('/dropdown'); // Redirect to the dropdown page
//             } else {
//                 // Passwords don't match
//                 res.render('index', {
//                     message: 'Invalid username or password.'
//                 });
//             }
//         }
//     });
// };