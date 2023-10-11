/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 Colocamos la logica para crear columnas tablas etc */
exports.up = function (knex) {
  return knex.schema.hasTable('homes').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('homes', function (table) {
        table.increments('house_id').primary()
        table.string('title').notNullable()
        table.text('description')
        table.integer('guests')
        table.text('address')
        table.decimal('rental_price', 12, 2)
        table.boolean('active').notNullable().defaultTo(true)// especifico el valor por defecto
        table.timestamp('created_at').defaultTo(knex.fn.now())// devuelve la fecha actual moemnto creado
      })
    }
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 Colocamos la logica para deshacer los cambios de arriba */
exports.down = function (knex) {
  return knex.schema.hasTable('homes').then(function (exists) {
    if (exists) {
      return knex.schema.dropTable('homes')
    }
  })
}

/* Para crear una migracion knex migrate:make nombre de la migracion

ejecutar migraciones sobre export
knex migrate:latest corre la ultima migracion
knex migrate:up corre todos las migraciones
knex migrate:up migracion.js es para migrar en especifico
*/