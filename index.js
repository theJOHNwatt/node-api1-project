// implement your API here
const express = require('express'); 
const db = require('./data/db.js');
const server = express();
server.use(express.json());
const port = 8000;
server.listen(port, () => console.log('\n=== API on port 8000 ===\n'));



server.post('/api/users', (req,res) => {
    const info = req.body;
    console.log('user information', info);

    db.insert(info)
    .then(data => {
        res.status(201).json(data);
    })
    .catch(err => {
        console.log('error', err);
        req.status(500).json({error: 'There was an error while saving the user to the database'});
    })
})

server.get('/api/users', (req,res) => {
    db.find()
    .then(users => {
        res.status(200).json(users);
    })
    .catch(err => {
        res.status(500).json({error: "The users information could not be retrieved."});
    });
})

