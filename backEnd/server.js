// backend code for the client interface

const express = require('express');
const mysql = require('mysql');
const cors = require('cors');


const app= express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'login',
    port: 3307

})

// Sign up api post request
app.post('/signup', (req, res) => {
    const sql = "INSERT INTO users (`name`, `email`, `password`) VALUES (?)";
    const values = [req.body.name, req.body.email, req.body.password];
    db.query(sql, [values], (error, data)=>{
        if(error){
            return res.json('error');

        }
        else{
            return res.json(data);
        }
    });
})

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM users WHERE `email` = ? AND `password` = ?";
    db.query(sql, [req.body.email, req.body.password], (error, data)=>{
        if(error){
            return res.json('error');

        }
        if(data.length > 0){
            return res.json('Success');
        }
        else{
            return res.json(Failded);
        }
    });
})


const port = 8080; // Change this to a different port number
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});