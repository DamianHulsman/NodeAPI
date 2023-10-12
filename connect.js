const mysql = require('mysql');
try {
const conn = mysql.createConnection({
 host: "localhost",
 user: "root",
 password: "",
 database: "nodeapi",
});

conn.connect();
console.log('Connected!');
module.exports = conn;
} catch(err) {
    console.log(err + `\n\n\n\n\n`);
    console.log('Connect failed! Maybe MySQL is not running');
}
// console.log(conn);
