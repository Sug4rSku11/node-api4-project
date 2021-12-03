require('dotenv').config()
const path = require('path')
const express = require('express')

const server = express()

const PORT = process.env.PORT || 8080

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

server.use('*', (req, res) => {
    res.send(`<h1>Hello!</h1>`)
})
server.use((err, req, res, next) => {//eslint-disable-line 
    res.status(500).json({
        message: err.message,
        stack: err.stack,
    })
})


server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})