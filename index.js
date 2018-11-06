// implement your API here

// import axios from 'axios'; ES2015 Modules but node doesn't support
// Node supports CommonJS

// console.log('\nHello FSW14\n')

const express = require('express');
const greeter = require('./greeter');
const server = express();
const db = require('./data/db');

server.use(express.json()); // teaches express to parse body

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

server.post('/api/users', async (req,res) => {
    console.log('body', req.body);
    try {
        const userData = req.body;
        const userId = await db.insert(userData);
        res.status(201).json(userId)
    }
    catch (error) {
        res.status(500).json({message: 'error creating user', error: error})
    }
})

server.delete('/api/users/:id', (req, res) => {
    
})

server.listen(9000, () => console.log('Server live'));