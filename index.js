require('dotenv').config()
const path = require('path')
const express = require('express')

const server = express()
server.use(express.json())
//server.use(express.static(path.join(__dirname, 'client/build')))

server.get('/api/users', (req, res) => {
    res.json([
        { id:1, username: "Desiree"},
        { id:2, username: "Adrian"},
        { id:3, username: "Matthew"},
        { id:4, username: "Joseph"},
        { id:5, username: "Gunner"}
    ])
})
const PORT = process.env.PORT || 8080

server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})