const { static } = require("express");

exports.date_helper=class{
     
     static getDateNow=(format='fulldate')=>{
          let d=new Date(); 
          let datetime=d.getFullYear()+'-'+d.getMonth() +'-'+d.getDate();
          return datetime;
     }
     
}
