
const express = require('express');
var multer = require('multer')
var router = express.Router();
var path = require('path');

// Home page route.
router.get('/', function (req, res) {
  res.send('home page');
})

//user Registration
var registerController=require('./registration');
router.post('/registration',registerController.registration);

//userlogin
var registerController=require('./login');
router.post('/userLogin',registerController.userLogin);

//file upload
var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, 'uploadfile');
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname + '-' + Date.now());
  }
});
var upload = multer({ storage : storage}).single('userPhoto')
var fileaddController=require('./file/fileadd');
router.post("/fileUpload", upload("file"),fileaddController.fileUpload);

module.exports=router;