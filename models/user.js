/**
 * User Model
 * ---------------------------------------------------
 * Represents a registered user in the system.
 * Users can log in, create workouts, and track exercises.
 */

const { DataTypes } = require('sequelize')
const sequelize = require('../database/db')

const User = sequelize.define('User', {

  // Username displayed in the application
  username: {
    type: DataTypes.STRING,
    allowNull: true
  },

  // Email used for login (must be unique)
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },

  // Hashed password stored securely
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },

  // Role determines user permissions (user or admin)
  role: {
    type: DataTypes.STRING,
    defaultValue: "user"
  }
})

module.exports = User