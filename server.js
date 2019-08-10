'use strict'

//. in our brainlets source, in server.js, you can see that not only does it contain this express code, but also the code for socket.io, rooms, and authority switching. clearly some of those if not all should be divided into their own scripts. it made that code file 877 lines long.

var __dirname = process.cwd();

import express from 'express'
const app = express()

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

var server = app.listen(process.env.PORT || 8888, () => {
    let host = server.address().address
    let port = server.address().port
    console.log("http server listening on" + host + ":" + port)
})

server.on('error', (error) => {
    console.log(`server error: ${error}`)
})


//. Nengi