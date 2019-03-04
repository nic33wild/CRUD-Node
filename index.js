//import package mysql
const mysql = require("mysql");
const express = require("express");
var app = express();
const bodyparser = require("body-parser");

app.use(bodyparser.json());

//create mysql connection
var mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "nicola",
  password: "casa",
  database: "employenodedb"
});

mysqlConnection.connect(err => {
  if (!err) console.log("DB connection succeded.");
  else
    console.log(
      "DB connection failed \n Error : " + JSON.stringify(err, undefined, 2)
    );
});

app.listen(3000, () =>
  console.log("Express server is running at port number 3000")
);

app.get("/employees", (req, res) => {
  mysqlConnection.query("SELECT * FROM employee", (err, rows, fields) => {
    if (!err) console.log(rows[0].EmpID);
    else console.log(err);
  });
});
