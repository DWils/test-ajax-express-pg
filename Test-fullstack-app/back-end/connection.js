const {Client} = require('pg');

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "perle1226",
    database: "postgres"
})

module.exports = client

// let data = []

// client.connect();

// client.query(`select * from personnes`, (err, res)=> {
//     if (!err) {
//         data = res.rows;
//     } else {
//         data = err.message;
//     }
//     console.log(data);
//     client.end;
// })