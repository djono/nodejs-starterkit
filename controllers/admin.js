const fs=require('fs');
const express=require('express');
const adminModel=require('../models/admin');
const errorController = require('../routes/error');

const app=express();

const saveTable=(req,res,next)=>{
     adminModel.crud.saveData()
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

const updateTable=(req,res,next)=>{

}

const adminURL=(req,res)=>{
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