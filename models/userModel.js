const db = require('../util/database');
const mysql = require('../util/mysql');
const errorController = require('../routes/error');

const userTable = {
     TABLE : 'users',
     PRIMARY_KEY : 'user_id',
     FIELDS : {
          user_id : {
               type: 'int',
               length: 11,
               autoincrement: true,
               null: false
          },
          username : {
               type : 'varchar',
               length : 100,
               null : null
          },
          password : {
               type : 'varchar',
               length : 200,
               null : false
          }
     },
     ENGINE : 'InnoDB',
     AUTO_INCREMENT : 1,
     CHARSET : 'latin1'
};
//create table user
mysql.createSchema(userTable);

const userCRUD=class{
     constructor(user_id, username, password) {
          this.user_id = user_id;
          this.username = username;
          this.password = password;
     }

     static saveData(){
          return db.execute('INSERT INTO ${userTable.TABLE} (username, password) VALUES (?, ?)',
          [this.username,this.password]);
     }

     static editData(){
          return db.execute('UPDATE ${userTable.TABLE} SET (username=?, password=?) WHERE user_id = ?',
          [this.username,this.password,this.user_id]);
     }

     static deleteData(){
          return db.execute('delete ${userTable.TABLE} WHERE user_id = ?',
          [this.user_id]);
     }

     static fetchAll() {
          return db.execute('SELECT * FROM ${userTable.TABLE}');
     }

     static fetchById(user_id) {
          return db.execute('SELECT * FROM ${userTable.TABLE} WHERE user_id = ?', [this.user_id]);
     }
}


module.exports = {
     user:userTable,
     crud:userCRUD,
}
