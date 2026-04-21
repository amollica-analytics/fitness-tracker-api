/**
 * Database Configuration
 * ---------------------------------------------------
 * This file initializes the Sequelize ORM connection
 * to the SQLite database used by the Fitness Tracker API.
 *
 * Sequelize allows us to interact with the database
 * using JavaScript models instead of raw SQL queries.
 */

const { Sequelize } = require('sequelize')

/**
 * Create a new Sequelize instance.
 *
 * dialect: specifies the type of database (SQLite in this case)
 * storage: path to the SQLite database file
 */
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database/database.sqlite'
})

/**
 * Export the Sequelize connection so it can be used
 * throughout the application (models, server, seed scripts).
 */
module.exports = sequelize