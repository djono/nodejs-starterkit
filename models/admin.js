const mysql=require('mysql2');
const db = require('../util/database');

const userTable = {
     tablename : 'user',
     primaryKey : 'user_id',
     structure : [
          user_id={
               type: INTEGER,
               autoIncrement: true,
               allowNull: false,
               primaryKey: true
          },
          username={
               type : STRING,
               allowNull : false
          },
          password={
               type : STRING,
               allowNull : false
          }
     ]
};

const userCRUD=class{
     constructor(user_id, username, password) {
          this.user_id = user_id;
          this.username = username;
          this.password = password;
     }

     static saveData(){
          return db.execute('INSERT INTO ${userTable.tablename} (username, password) VALUES (?, ?)',
          [this.username,this.password]);
     }

     static editData(){
          return db.execute('UPDATE ${userTable.tablename} SET (username=?, password=?) WHERE user_id = ?',
          [this.username,this.password,this.user_id]);
     }

     static deleteData(){
          return db.execute('delete ${userTable.tablename} WHERE user_id = ?',
          [this.user_id]);
     }

     static fetchAll() {
          return db.execute('SELECT * FROM ${userTable.tablename}');
     }

     static fetchById(user_id) {
          return db.execute('SELECT * FROM ${userTable.tablename} WHERE user_id = ?', [user_id]);
     }
}

module.exports = {
     user:userTable,
     crud:userCRUD
}