const fs=require('fs');
const adminController=require('../controllers/admin');
const express = require('express');

const router = express.Router();

router.get('/save',adminController.saveTable);
const justanotherhandler=(res)=>{
     res.setHeader('Content-type','text/html');
     res.write('<html><header><title>Test Response</title></header><body><h1>Hello World!</h1></body></html>');
     res.end();
     console.log('it\'s oke!')
}

const requestHandler=adminController.adminURL;

module.exports={
     handler : requestHandler,
     otherhandler: justanotherhandler
}

module.exports.moremodule='i\'m ready';