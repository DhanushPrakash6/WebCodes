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

app.post('/signup', urlencodedParser, function(req, res) {
    // log(req.body)
    var sql = "INSERT INTO USERNAME (Email, Password) VALUES ('" + req.body.Email + "', '" + req.body.Password + "')";
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
    res.sendFile(path.join(__dirname, 'public/page.html'));
});

app.post('/login', urlencodedParser, function(request, response) {
    var username = request.body.Email;
    var password = request.body.Password;

    if (username && password) {
        connection.query(' SELECT Email, Password FROM USERNAME WHERE Email = "' + username +'" AND Password = "' + password +'" ',function(err, results, fields) {
            if (err) throw err;
            // console.log(username);
            if (results.length > 0) {
                response.send('Welcome back, ' + request.body.Email + '!');
            } else {
                response.send('Incorrect Username and/or Password!');
            }           
            response.end();
        });
    } else {
        response.send('Please enter Username and Password!');
        response.end();
    }
});

// app.get('/login', function(request, response) {
//     if (request.session.loggedin) {
//         response.send('Welcome back, ' + request.session.username + '!');
//     } else {
//         response.send('Please login to view this page!');
//     }
//     response.end();
// });

app.listen(PORT, function (err) {
    if (err) error(err);
    log("Server listening on PORT", PORT);
});