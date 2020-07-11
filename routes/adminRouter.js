const fs=require('fs');
const adminController=require('../controllers/adminController');
const express = require('express');

const router = express.Router();

//const autoready=adminController.getReady;
//router.get('/setready',adminController.getReady);

router.get('/saveUser',adminController.userDB.saveTable);

router.get('/updateUser',adminController.userDB.updateTable);

const justanotherhandler=(res)=>{
     res.setHeader('Content-type','text/html');
     res.write('<html><header><title>Test Response</title></header><body><h1>Hello World!</h1></body></html>');
     res.end();
     console.log('it\'s oke!')
}

//const requestHandler=adminController.adminURL;

// module.exports={
//      handler : requestHandler,
//      otherhandler: justanotherhandler,
//      autoready:autoready
// }
module.exports = router;
//module.exports.autoready=autoready;
//module.exports.moremodule='i\'m ready';