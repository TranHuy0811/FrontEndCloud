const express = require('express');
const app = express();
const path = require('path');


require('dotenv').config()
const port = parseInt(process.env.APP_PORT);
const { connection } = require('./connection');


app.use(express.urlencoded({ extended: true })); // built-in middleware to handle urlencoded form data
app.use(express.json()); // built-in middleware for json



app.post('/user', async (req, res) => {
    try {
        connection.query(`INSERT INTO user(username, password) VALUES(?, ?)`, [req.body.username, req.body.password], function (err) {
            if (err) throw err;
            res.status(200).send("User Added Successfully !")
        })
    }
    catch (err) {
        console.log(err)
        res.status(500).send("Internal Server Error !")
    }
})

app.get('/user', async (req, res) => {
    try {
        connection.query(`SELECT * FROM user`, function (err, result) {
            if (err) throw err;
            res.status(200).send(result)
        })
    }
    catch (err) {
        console.log(err)
        res.status(500).send("Internal Server Error !")
    }
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
    console.log(`Database is connected to ${process.env.RDS_ENDPOINT}`)
})

