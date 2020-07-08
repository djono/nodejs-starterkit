const fs=require('fs');
const express=require('express');

const app=express();

const home=(req,res,next)=>{
     app.setHeader('Content-type','text/html');
     app.send('<h1>Hello World!</h1>');
}

const print=(req,res,next)=>{
     fs.writeFile('request_content.txt',JSON.parse(req.headers),(err)=>{
          app.statusCode=302;
          //res.setHeader('Location','/');
          //return res.end();
          app.setHeader('Content-Type','text/html');
          app.send('<h1>Failed to print!</h1>');
     });
     app.statusCode=302;
     app.setHeader('Content-Type','text/html');
     app.send('<h1>Print to file has been done!</h1>');
}
