
exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('toDos', function (table) {
        table.increments('id').primary()
        table.string('to_do_text').notNullable()
        table.boolean('is_completed').notNullable()
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('toDos')
}
