const express = require('express')
const app = express()
const port = 3002
const connection = require('./database')
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors())

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    connection.query("SELECT * FROM mock_table", function(err, results){
        if(err) throw err;
        res.send(results);
    });
})

app.post('/add', (req, res) => {
    fname = req.body.name;
    age = req.body.age;
    country = req.body.country;
    phone_number = req.body.phone_number;

    let sql = "INSERT INTO mock_table (name, age, country, phone_number) VALUES(?, ?, ?, ? )";
    connection.query(sql, [fname, age, country, phone_number], (err, results) => {
        if(err) {
            console.log(err)
        } else {
            res.send('Banda Added')
        }
    })
    // console.log(req)
})

app.listen(port, ()=> {
    console.log(`${port} is running.`)
    connection.connect(function(err){
        if(err) throw err;
        console.log('Database Connected!');
    })
})