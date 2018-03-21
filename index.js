// run with: node index.js
const express = require('express');
var bodyParser = require('body-parser');

const app = express();

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', (req, res) => {
    res.send(`
    <html>
        <h1>Hello World!</h1>
        <a href="/ratemyname">Rate My Name</a>
    </html>`);
});

app.get ('/ratemyname', (req, res) => {
    res.send(`
    <html>
        <h1>Rate my name!</h1>
        <br>
        <form action="/ratemyname" method="post">
            <p>Name:</p>
            <br>
            <input type="text" name="name">
            <br>
            <input type="submit" value="Submit">
        </form>
    </html>`);
});

app.post('/ratemyname', urlencodedParser, function (req, res) {
    console.log(req.body.name);
    var rating;
    req.body.name.length >= 5 ? rating = "a nice long name!" : rating = "a shitty short name.";
    res.send(`
    <html>
        <h1>You have ${rating}</h1>
        <a href="/">Return home</a>
    </html>`);
});

app.listen(3000, () => console.log('Name rating app listening on port 3000!'));