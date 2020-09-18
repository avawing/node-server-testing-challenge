const db = require('./knexconfig')

function add(item){
    db('hobbits').insert(item)
    .then(id => {
        return findById(id[0])
    })
    .catch(err => {
        return err
    })

}

function remove(id){
    return db('hobbits').where({id}).del()
}

function findById(id){
    return db('hobbits').where({id}).first()
}

module.exports = {add, remove}