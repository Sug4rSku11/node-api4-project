require('dotenv').config()
const path = require('path')
const express = require('express')

const server = express()
server.use(express.json())
//server.use(express.static(path.join(__dirname, 'client/build')))

const users = [
    { 
        username: "desiree",
        password: "garcia"
    },
    {
        username: "joseph",
        password: "garcia"
    }
]

server.get('/api/users', (req, res) => {
    res.json(users)
})
const PORT = process.env.PORT || 8080

server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})