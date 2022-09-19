
exports.up = function(knex) {
  return knex.schema.createTable('movies',(table) =>{
    table.increments('id')
    table.string('name')
    table.string('Genre')
    table.string('Poster')

  })
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('movies')
  
};
