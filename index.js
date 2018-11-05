// implement your API here

// import axios from 'axios'; ES2015 Modules but node doesn't support
// Node supports CommonJS

// console.log('\nHello FSW14\n')

const express = require('express');
const greeter = require('./greeter');
const server = express();

server.get('/', (req, res) => {
    res.json('alive');
})

server.get('/greet', (req,res) => {
    res.json({hello: 'stranger'})
})

server.get(`/greet/:person`, greeter);

server.listen(9000, () => console.log('Server live'));