const express = require('express')
const app = express()
const morgan = require("morgan")

app.use(express.json())
app.use(morgan('dev'))


app.get('/', (req, res) => {
    res.send("something")
})

app.listen(7000, () => {
    console.log("The server is running on port 7000");
})