/**
 * Workout Model
 * ---------------------------------------------------
 * Represents a workout session created by a user.
 * Each workout belongs to a user and can contain
 * multiple exercises.
 */

const { DataTypes } = require('sequelize')
const sequelize = require('../database/db')

const Workout = sequelize.define('Workout', {

  // Type of workout (Strength, Cardio, HIIT, etc.)
  type: DataTypes.STRING,

  // Duration of workout in minutes
  duration: DataTypes.INTEGER,

  // Estimated calories burned
  calories: DataTypes.INTEGER
})

module.exports = Workout