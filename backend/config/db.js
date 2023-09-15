const config = require('../knexfile.js')
const knex = require('knex')(config)

knex.migrate.latest([config]) // Migrations automatically
module.exports = knex