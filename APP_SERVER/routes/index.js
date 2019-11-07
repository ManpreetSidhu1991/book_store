/*Manpreet kaur Sidhu 8622571*/
var express = require('express');
var router = express.Router();
const ctrlMain = require("../controllers/main.js");
const ctrlAbout = require('../controllers/about');
const ctrlBook = require('../controllers/books');
//const ctrlDisplay = require('../controllers/list_display');

//gives the name to the arrow function
const index = (req, res) => {
    res.render('index', {title: 'Welcome to book store'});
};

/* GET home page. */
router.get('/', ctrlMain.index);
router.get('/about',ctrlAbout.about);
router.get('/display',ctrlBook.display);
router.get('/list_display', ctrlBook.list_display);

module.exports = router;
