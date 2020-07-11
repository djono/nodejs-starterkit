const db = require('./database');

exports.createSchema=(constructor)=>{
     //let arrFields=[];
     let fields={},item={};
     let primarykey="";
     let autoincrement=false;
     let table=constructor.TABLE;
     let sql="CREATE TABLE IF NOT EXISTS `"+ table + "` (";
     if(constructor['PRIMARY_KEY']!==undefined) primarykey=constructor['PRIMARY_KEY'];
     if(constructor['FIELDS']!==undefined){
          fields=constructor['FIELDS'];
          for(field in fields){
               //arrFields[field]=fields[field];
               item=fields[field];
               sql+="`"+field+"` ";
               if(primarykey==="") primarykey=field;
               if(primarykey==field && item['autoincrement']!==undefined) autoincrement=true;
               if(item['type']!==undefined) sql+=fields[field]['type'];
               if(item['length']!==undefined) sql+="(" + fields[field]['length'] + ")";
               if(item['default']!==undefined) sql+=" DEFAULT "+fields[field]['default'];
               if(item['null']!==undefined) {
                    if(fields[field]['null']) sql+=" NULL";
                    else sql+=" NOT NULL";
               }
               if(item['autoincrement']!==undefined) sql+=" AUTO_INCREMENT,";
               else sql+=",";
          }
          sql+="PRIMARY KEY (`"+primarykey+"`)";
     }
     if(constructor['ENGINE']!==undefined){
          sql+=") ENGINE="+constructor['ENGINE'];
     } else sql+=") ENGINE=MyISAM";
     if(constructor['AUTO_INCREMENT']!==undefined) sql+=" AUTO_INCREMENT="+constructor['AUTO_INCREMENT'];
     else if(!autoincrement) sql+=" AUTO_INCREMENT=1";
     if(constructor['CHARSET']!==undefined) sql+=" DEFAULT CHARSET="+constructor['CHARSET'];
     else sql+=" DEFAULT CHARSET=latin1";
     console.log(sql);
     db.execute(sql);
 } 