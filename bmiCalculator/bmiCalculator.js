const express = require('express');
const app = express();
const port = 3000;


// Encoders
app.use(express.urlencoded({extended: true}));

// Home Page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/bmiCalculator.html');
})

app.post('/bmicalculator', (req, res) => {
    const weight = Number(req.body.weight);
    const height = Number(req.body.height);
    const BMI = Math.round((weight / (height * height)) * 100) / 100;
    res.send(`Your BMI is ${BMI}, pretty sure you're fat.
        <br>
        <a href="/">Go back</a>
    `);
})


// Hosting App
app.listen(port, (req, res) => {
    console.log(`App is hosted on localhost:${port}`);
})