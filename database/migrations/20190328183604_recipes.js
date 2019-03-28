exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes', table =>{
        //id
        table.increments();
        //name of recipe
        table.string('name',188).notNullable().unique();
        //foreign key to connect recipe to dish id
        table.integer("dish_id")
        .notNullable()
        .references("id")
        .inTable("dishes")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
        // whats in it
        table.string("ingredients");
        //time to make
        table.string("time");
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipes');
    };
