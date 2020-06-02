var express = require('express');
var app = express();
var mysql = require('mysql')

var cors = require('cors');
app.use(cors({origin: 'http://localhost:3000'}));

function create_connection() {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'ankith',
        database: 'website'
    })
    return connection;
}

app.get('/', (req, res) => {

    connection = create_connection();
    connection.connect();
    connection.query('Select * from projects', function (err, rows, fields) {
        if (err) {
            throw err
        }
        else {
            res.send(rows);
        }
    })
    connection.end();
});

app.get('/blog', (req, res) => {

    connection = create_connection();
    connection.connect();
    connection.query('Select id, title, published_on, image from blog', function (err, rows, fields) {
        if (err) {
            throw err
        } 
        else {
            res.send(rows);
        }
    })
    connection.end();
});

app.get('/blog/:post_id', (req, res) => {

    connection = create_connection();
    connection.connect()
    connection.query('select * from blog where id = ' + mysql.escape(req.params.post_id), function (err, rows, fields) {
        if (err) {
            throw err
        }       
        else {
            res.send(rows);
        }
    })
    connection.end();
});

app.listen(5000, () => console.log('Listening on port 5000'))