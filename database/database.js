const mysql = require('mysql2');


const connection = mysql.createPool({
  connectionLimit:10,
  host: process.env.DBHOST,
  user: process.env.DBUSER,
  password: process.env.DBPASSWORD,
  database: process.env.DBNAME
});

connection.on('error',(err)=>{
  console.log(err);
})

module.exports=connection;