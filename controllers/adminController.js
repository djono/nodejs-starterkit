const fs=require('fs');
const errorController = require('../routes/error');
const userModel=require('../models/userModel');

exports.userDB=class{
     static saveTable=(req,res,next)=>{
          username=req.params.username;
          password=req.params.password;
          userModel.crud.saveData(null,username,password)
          .then((result)=>{
               if(result) {
                    res.statusCode=200;
                    res.setHeader('Content-Type','text/json');
                    res.write(JSON.stringify([result=>1,message=>'Data has been saved successfully']));
                    res.end();
               } else {
                    res.statusCode=200;
                    res.setHeader('Content-Type','text/json');
                    res.write(JSON.stringify([result=>1,message=>'Data has been failed to save']));
                    res.end();
               }
          })
          .catch(err=>errorController.getDataNotFound);
     }

     static updateTable=(req,res,next)=>{

     }
}

exports.adminURL=(req,res)=>{
     console.log(req.headers,'\n\r',req.method,'\n\r',req.url);
     if(req.url==='/stop'){
          process.exit();
     }
     else if(req.url==='/print'){
          fs.writeFile('request_content.txt',JSON.parse(req.headers),(err)=>{
               res.statusCode=302;
               res.setHeader('Location','/');
               return res.end();
          });
          res.statusCode=302;
          res.setHeader('Content-Type','text/html');
          res.write('<html><header><title>Test Print File</title></header><body><h1>Print to file has been done!</h1></body></html>');
          res.end();
     }
     else if(req.url=='/other'){
          justanotherhandler(res);
     }
     else {
          res.setHeader('Content-type','text/html');
          res.write('<html><header><title>Test Response</title></header><body><h1>Hello World2!</h1></body></html>');
          res.end();
     }
}