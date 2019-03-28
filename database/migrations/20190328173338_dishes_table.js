exports.up = function(knex, Promise) {
return knex.schema.createTable('dishes', table => {
    //id
    table.increments();
    // name
    table.string('name', 128).notNullable();
})
};

exports.down = function(knex, Promise) {
return knex.schema.dropTableIfExists('dishes')
};