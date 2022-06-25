

var db=require('./database');
var emailvalidate = require('email-validator');
var md5 = require('md5');

exports.registration = function (req, res) {
    var username = req.body.username;
    var userEmail = req.body.userEmail;
    var password = req.body.password;


    var encrptPassword=md5(password);
   
    var Email = emailvalidate.validate(userEmail);

    if (username =='' && username == null) {
        res.json({
            message: "Please Enter userName."
        })
    } else if (userEmail == '' && username == null) {
        res.json({
            message: "Please Enter userEmail."
        })
    } else if (password == '' && password == null) {
        res.json({
            message: "Please Enter password."
        })
    } else if (Email ==false) {
            res.json({
                message: "Please Enter Valid Email."
            })
        } else {

            db.query("insert into user (username,userEmailid,password) values(?,?,?)",[username,userEmail,encrptPassword,], (err, result) => {
                 if (err) {
                     res.json({
                         status: 400,
                         message: err
                     })
                 } else {
                     res.json({
                         status: 200,
                         message: "Registerd Successfully."
                     })
     
                 }
             })
        }
    }

