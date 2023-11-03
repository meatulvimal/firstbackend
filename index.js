require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('Hello, world')
})

app.get('/twitter', (req, res) => {
    res.send('bisht.com')
})

app.get('/login', (req, res) => {
    res.send('<h1>pls login</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2>YouTube</h2>')
})

app.listen(process.env.PORT, () => {
    console.log(`listening on ${port}`)
})

console.log("first message");