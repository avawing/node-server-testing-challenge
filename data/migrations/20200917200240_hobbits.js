
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('hobbits', tbl=>{
      tbl.increments();
      tbl.string('name').notNullable();
  })
};

exports.down = function(knex, Promise) {
  
};
