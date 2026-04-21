/**
 * Exercise Model
 * ---------------------------------------------------
 * Represents a single exercise within a workout.
 * Each exercise belongs to a specific workout and
 * contains details such as sets, reps, and weight used.
 */

const { DataTypes } = require('sequelize')
const sequelize = require('../database/db')

/**
 * Define the Exercise table structure.
 * Sequelize automatically creates an "id" primary key.
 */
const Exercise = sequelize.define('Exercise', {

  // Name of the exercise (ex: Bench Press, Squat, Deadlift)
  name: DataTypes.STRING,

  // Number of sets performed
  sets: DataTypes.INTEGER,

  // Number of repetitions per set
  reps: DataTypes.INTEGER,

  // Weight used for the exercise (in lbs)
  weight: DataTypes.INTEGER
})

/**
 * Export the model so it can be used in routes
 * and other parts of the application.
 */
module.exports = Exercise