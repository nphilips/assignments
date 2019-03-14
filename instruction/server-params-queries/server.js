const express = require('express')
const app = express()


// MIDDLEWARE
app.use(express.json())

// ROUTES
app.use('/user', require('./routes/user.js'))

app.get('*', (req, res) => {
    res.send("DOGGIES")
})


app.listen(7000, () => {
    console.log("Server is running on port 7000");
})


// STEPS TO SET UP server.js FILE
    // 1. npm init -y
    // 2. npm i express
    // 3. Create server.js
    // 4. require express
    // 5. create server object
    // 6. LISTEN