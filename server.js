const express = require('express')

const server = express()

server.get('/', (req, res) => {
    res.status(200).json({ api: 'running' });
  });

server.listen(4444, ()=>{console.log("AAAAA")})

module.exports = server