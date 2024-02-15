const express = require('express');
const router = express.Router();

router.get("/",  (req, res)=>{
    res.render("index")
});


router.get("/dropdown", (req, res) => {
    res.render("Dropdown");
});


router.get("/register", (req, res) => {
    res.render("register");
});

router.get("/studentReg", (req, res) => {
    res.render("studentReg");
});

module.exports = router;