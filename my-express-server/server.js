// jshint esversion:6

const express = require("express");
const app = express(); // funciton that represents express module.
const port = 3000;

// What should happen when a browser gets in touch with our server and makes a 'get' 
// what happens when someone makes a 'get' request on the HOME root ("/") the slash
app.get('/', (req, res) => {
    // console.log(request);
    // request returns all the information that's associated with the request that was made to the server

    // response the server can make when the request gets triggered at the home location
    res.send("<h1>Hello, World!</h1>");
})

// Listen on a specific port for any HTTP request that gets sent to server
app.listen(port, () => {
    console.log(`Example app listening at http:localhost:${port}`);
})