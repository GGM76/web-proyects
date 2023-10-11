/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.hasTable('users').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('users', function (table) {
        table.increments('user_id').primary()
        table.string('name').notNullable()
        table.string('last_name').notNullable()
        table.string('email').notNullable().unique()
        table.string('phone').notNullable().unique()
        table.string('description')
        table.string('password').notNullable()
        table.boolean('active').notNullable().defaultTo(true)// especifico el valor por defecto
        table.timestamp('created_at').defaultTo(knex.fn.now())// devuelve la fecha actual moemnto creado
      })
    }
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.hasTable('users').then(function (exists) {
    if (exists) {
      return knex.schema.dropTable('users')
    }
  })
}
