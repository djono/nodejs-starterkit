const express = require('express');

const router=express.Router();
const mainController = require('../controllers/main');

router.get('/', mainController.home);

router.use('/print',mainController.print);

router.use('/stop',(req,res,next)=>{
     process.exit();
});

module.exports=router;