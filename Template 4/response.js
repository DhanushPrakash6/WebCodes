const { log, error } = require('console');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mysql = require('mysql');
const app = express();
const connection = mysql.createConnection({
    host:'localhost',
    port:3306,
    database:'test',
    user:'root',
    password:''
});

connection.connect((error)=>{
    // var sql = "CREATE TABLE USERNAME (Email VARCHAR(255), Password VARCHAR(255))";
    // connection.query(sql, function (err, result) {
    //     if (err) throw err;
    //     console.log("Table created");
    // });
    if(error) {
        log("UnSuccessful")
    }
    else {
        log("Connected Successfully")
    }
});

// var jsonParser = bodyParser.json();
const PORT = 3000;
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(express.static(path.join(__dirname, '/public')))

app.post('/', urlencodedParser, function(req, res, next) {
    log(req.body)
    var sql = "INSERT INTO USERNAME (Email, Password) VALUES ('" + req.body.Email + "', '" + req.body.Password + "')";
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
    res.send("<h1>Welcome " + req.body.Email + "</h1>");
});

app.listen(PORT, function (err) {
    if (err) error(err);
    log("Server listening on PORT", PORT);
});