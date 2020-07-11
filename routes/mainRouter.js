const express = require('express');

const router=express.Router();
const mainController = require('../controllers/mainController');

router.get('/', mainController.home);
router.get('/about', mainController.about);
router.get('/contact', mainController.contact);
router.get('/print',mainController.print);

router.get('/stop',(req,res,next)=>{
     process.exit();
});

module.exports=router;