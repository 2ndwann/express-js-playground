var express = require('express');
var router = express.Router();

console.log("Contact form handler starting...");

/* Contact form handling */
router.post('/contact', function(req, res){
    console.log("Form data:");
    console.log("First name:", req.body['first-name']);
    //res.send("Recieved your request! Your name is: ", req.body['first-name']);
    res.send("[new] recieved ur request");
});