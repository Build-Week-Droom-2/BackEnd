
exports.up = function(knex) {
    return knex.schema.createTable('authentication', user => {
        user.increments();

        user.string('email').notNullable().unique();
        user.integer('account').notNullable();
        user.string('password').notNullable();
  
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExisits('authentication');
  
};
