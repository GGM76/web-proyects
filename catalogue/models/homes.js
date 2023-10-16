// El modelo trae los datos de la base de datos.
// NO se encarga de validar datos, ni de resolver promesas.

// Paso #1 Necesito traer la configuración del entorno de knex y los detalles de la conexión a la base de datos.
const knex = require('../config')

// Paso #2 Crear una función que me permita insertar un registro en la tabla homes.

const create = (body) => {
  return knex
    .insert(body) // ¿Qué datos voy a insertar?
    .into('products') // ¿En qué tabla? - Homes
    .returning(
      ['sku', 'ml', 'aws', 'title', 'description ', 'variant', 'hex', 'active', 'created_at']) // ¿Qué quiero que me regrese?
}

const findAll = () => {
  return knex
    .select('*')
    .from('homes')
    .where('active', true) // Traemos solo los campos a los que no hayamos hecho soft delete
}

const findOne = (ml) => {
  return knex
    .select(['*'])
    .from('homes')
    .where({ ml: ml })
    .where('active', true)
}

const update = (sku, body) => {
  return knex
    .update(body)
    .from('homes')
    .where({ sku: sku })
    .returning(['sku', 'ml', 'aws', 'title', 'description ', 'variant', 'hex', 'active', 'created_at'])
}

// Voy a borrar un registro de manera REAL de la base de datos del
const destroy = (sku) => {
  return knex
    .del() // delete
    .from('homes')
    .where({ sku: sku })
}

// Borrado lógico, solo cambio active de true a false
const softDelete = (sku) => {
  return knex
    .update({ active: false })
    .from('homes')
    .where({ sku: sku })
}

module.exports = {
  create,
  findAll,
  findOne,
  update,
  destroy,
  softDelete
}
