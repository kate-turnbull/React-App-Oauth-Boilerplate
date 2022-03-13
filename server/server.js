const express = require('express')
const path = require('path')
const server = express()

// accept URL encoded data on POST requests
server.use(express.urlencoded({ extended: false }))

// Set up static folder
const staticFolder = path.join(__dirname, 'public')
server.use(express.static(staticFolder))

server.get('/', (req, res) => {
    res.send('hello world!')
})

server.get('/path', (req, res) => {
    const thisPath = path.join(__dirname, 'path.html')
    res.sendFile(thisPath)
})

module.exports = server 