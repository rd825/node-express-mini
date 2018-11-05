// implement your API here

// import axios from 'axios'; ES2015 Modules but node doesn't support
// Node supports CommonJS

// console.log('\nHello FSW14\n')

const express = require('express');
const greeter = require('./greeter');
const server = express();
const db = require('./data/db');

server.get('/', (req, res) => {
    res.json('alive');
})

server.get('/greet', (req,res) => {
    res.json({hello: 'stranger'})
})

server.get('/api/users', (req,res) => {
    db.find()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => {
            res
                .status(500)
                .json({message: 'failed,', error: err})
        })
})

server.get('/api/users/:id', (req,res) => {
    const id = req.params.id;
    db.findById()
        .then(user => {
            if (user) {
                res.status(200).json(user);
            }
            res.status(404).json({message: "user doesn't exist"});
        })
        .catch(err => {
            res
                .status(500)
                .json({message: 'failed,', error: err})
        })
})

server.get(`/greet/:person`, greeter);

server.listen(9000, () => console.log('Server live'));