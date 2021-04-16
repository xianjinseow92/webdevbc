// jshint esversion:6

const express = require("express");
const app = express(); // funciton that represents express module.
const port = 3000;

// What should happen when a browser gets in touch with our server and makes a 'get' 
// .get() method: what HAPPENS when someone makes a 'get' request on the HOME root ("/") the slash
app.get('/', (req, res) => {
    /**
     * @param req Returns all information associated with the request MADE TO the server
     * @param res 
     */
    console.log(req); // request returns all the information that's associated with the request that was made to the server

    // response the server can make when the request gets triggered at the route location
    res.send("<h1>Hello, World!</h1>");
})

// Contact Page
const contactDoc = `
    <body style="background: grey;">
        <h1 style="color: white">Contact me at 97919342</h1>
    </body>
`
app.get("/contact", (req, res) => {
    res.send(contactDoc);
})

// About Page
const aboutDoc = `
    <h1>My name is Xian Jin</h1>
    <h2>I really love keyboards -- I love building them and typing on them!</h2>
`
app.get('/about', (req, res) => {
    res.send(aboutDoc);
})

// Hobbies Page
const hobbiesDoc = `
    <ul>
        <li>Coffee</li>
        <li>Beer</li>
        <li>Keyboards</li>
    </ul>
`
app.get('/hobbies', (req, res) => {
    res.send(hobbiesDoc);
})

// Listen on a specific port for any HTTP request that gets sent to server
app.listen(port, () => {
    console.log(`Example app listening at http:localhost:${port}`);
})