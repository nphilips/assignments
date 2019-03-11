const express = require('express')
const app = express()



app.get("/", (req, res) => {
    res.send('Hello World, prepare to meet your doom!!');
})

app.listen(4200, () => {
    console.log("The server is running on port 4200");
})