// Dependiendo la variable de entorno se usara la config necesaria
const env = process.env.NODE_ENV || 'development'
const knexfile = require('./knexfile.js')
const knex = require('knex')

module.export = knex(knexfile[env])
