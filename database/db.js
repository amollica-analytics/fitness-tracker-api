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

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set")
}

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

module.exports = sequelize