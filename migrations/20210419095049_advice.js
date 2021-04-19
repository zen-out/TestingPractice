exports.up = function (knex) {
  return knex.schema.createTable("advice", (table) => {
    table.increments();
    table.string("name");
    table.string("advice");
    table.timestamps(false, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("advice");
};
