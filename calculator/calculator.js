const express = require('express');
const app = express();
const port = 3000; 


// Home Page
const homeContent = `
    <h1 style="color: #47525e">
        Hello, World!
    </h1>
`
const homeDocBody = `
    <body style="background-color: #ededed"> 
        ${homeContent}
    </body>
`
const homeDoc = `
    ${homeDocBody}
`;


app.get("/", (req, res) => {
    res.send(homeDoc);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${[port]}`);
})