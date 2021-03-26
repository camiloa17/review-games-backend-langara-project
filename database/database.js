const mysql = require('mysql2');

// async function connect() {
//   // create the connection
//   try {
//     const connection = await mysql.createConnection({
//         host: 'localhost',
//         user: 'root',
//         password: '',
//         database: 'storyworlddb'
//       });
//       return connection;
//   } catch (error) {
//       console.log(error);
//   }
  
// }

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'storyworlddb'
  });

module.exports=connection;