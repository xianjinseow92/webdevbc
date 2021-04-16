const express = require('express');

const app = express();
app.use(express.urlencoded({extended: true})); // when we are trying to parse data coming from a HTML form
const port = 3000; 

// Home Page
app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post("/", (req, res) => {

    console.log(req.body); // only available because of express.urlencoded. Allows us to parse HTTP Requests
    const num1 = Number(req.body.num1);
    const num2 = Number(req.body.num2);
    const result = num1 + num2;

    if (isNaN(result)) {
        res.send(
            `<h1>You didn't enter numbers, did you?</h1>
            <h1><a href="/">Click here to go back</a></h1>`
        );
    } else {
        res.send(`
            <h1>Thanks for sending that.</h1>
            <h2>Your computed number is ${result}</h2>
            <h1><a href="/">Click here to go back</a></h1>
    `);
    }
})

// Spin up server on a port
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${[port]}`);
});
