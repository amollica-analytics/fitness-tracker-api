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
 * The connection string is read from the environment variable DATABASE_URL.
 */
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  logging: false
})

/**
 * Export the Sequelize connection so it can be used
 * throughout the application (models, server, seed scripts).
 */
module.exports = sequelize