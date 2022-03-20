const client = require('./connection.js');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json())
app.use(cors());

app.listen(3300, () => {
    console.log("Server is now listenning at port 3300");
})

client.connect();

app.get('/personnes', (req, res) => {
    client.query(`select * from personnes`, (err, result) => {
        if (!err) {
            res.send(result.rows);
        } else {
            res.send(err.message);
        }
    });
    client.end;
})

app.get('/personnes/:id', (req, res) => {
    client.query(`select * from personnes where id=${req.params.id}`, (err, result) => {
        if (!err) {
            res.send(result.rows);
        } else {
            res.send(err.message);
        }
    });
    client.end;
});
