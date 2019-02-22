//import package mysql
const mysql = require("mysql");

//create mysql connection
var mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "nicola",
  password: "casa",
  database: "employenodedb"
});

mysqlConnection.connect(err => {
  if (!err) console.log("DB connection succeded.");
  else console.log("DB connection failed \n Error : " + JSON.stringify(err, undefined, 2));
});
