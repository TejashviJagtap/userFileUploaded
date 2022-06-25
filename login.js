var db = require('./database');
var emailvalidate = require('email-validator');
const md5 = require('md5');

exports.userLogin = function (req, res) {
    var userEmail = req.body.userEmail;
    var password = req.body.password;


    var encrptPassword = md5(password);
    console.log(encrptPassword);

    var Email = emailvalidate.validate(userEmail);
    if (userEmail == '' && username == null) {
        res.json({
            message: "Please Enter userEmail."
        })
    } else if (password == '' && password == null) {
        res.json({
            message: "Please Enter password."
        })
    } else if (Email == false) {
        res.json({
            message: "Please Enter Valid Email."
        })
    } else {
        db.query('select userId,username from user where userEmailid=? and password=?', [userEmail,encrptPassword], (err, result) => {
            if (err) {
                res.json({
                    status: 400,
                    message: err
                })
            } else {
                res.json({
                    status: 200,
                    message: "Login Successfully.",
                    data:result
                })
            }
        })
    }
}
