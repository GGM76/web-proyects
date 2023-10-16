/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.hasTable('home').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('home', function (table) {
        table.string('sku').primary().notNullable().unique()
        table.string('ml').notNullable()
        table.string('aws').notNullable()
        table.string('title').notNullable() // que no puede quedar nulo (not null)
        table.text('description')
        table.string('variant').notNullable()
        table.string('hex').notNullable()
        table.boolean('active').defaultTo(true) // defaulTo especifico un valor por defecto
        table.timestamp('created_at').defaultTo(knex.fn.now()) // knex.fn.now() me devuelve la fecha/hora actual
      })
    }
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.hasTable('home').then(function (exists) {
    if (exists) {
      return knex.schema.dropTable('home')
    }
  })
}
