var db = require('./../database');
exports.fileUpload=function(req,res){

    var userId=req.body.userId;
    var file=req.file;

    var val = Math.floor(1000 + Math.random() * 9000);
    console.log(val);

    if (!file ) {
        res.json({
            message: "Please Upload File."
        })
    }else{
        db.query("insert into files(`userId`, `fileName`, `generatedCode`) values(?,?,?)",[],(err, result) => {
            if (err) {
                res.json({
                    status: 400,
                    message: err
                })
            } else {
                res.json({
                    status: 200,
                    message: "Upload Successfully."
                })

            }
        })
    }

}