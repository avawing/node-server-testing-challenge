const express = require('express')
const db = require('./dbhelper')

const server = express()
server.use(express.json())
server.get('/', (req, res) => {
    res.status(200).json({ api: 'running' });
  });

  server.post('/', (req, res)=>{
      db.add(req.body)
      .then(hobbit => {
          if(hobbit.length){
              res.status(201).json(hobbit).end()
          }else{
              res.status(400).json({message: "Bad Request"}).end()
          }
      })
      .catch(err=>{
          res.status(500).json({message: err})
      })
  })

  server.delete('/:id', (req, res)=>{
      db.remove(req.params.id)
      .then(num =>{
          if(num === 1){
              res.status(204).json({message: "DELETED"}).end()
          }else{
              res.status(404).json({message:"File Not Found"}).end()
          }
      })
      .catch(err=>{
          res.status(500).json({message: "Now you fucked up"}).end()
      })
  })
server.listen(4444, ()=>{console.log("AAAAA")})

module.exports = server