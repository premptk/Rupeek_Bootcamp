const express = require('express')
const app = express()
const path = require("path")

const cors = require('cors')
app.use(cors())
app.use(express.json())   
app.use(express.urlencoded({extended: true})); 
require('./db/conn')

const static_path = path.join(__dirname, "/public");

app.use(express.static(static_path))
// console.log(path.join(__dirname, "/public"))

// if static is not present
app.get('/', (req, res) => {
    res.send("Frontend is not working properly!")
})

app.listen(3000, ()=>{
    console.log('Server is running!')
})


