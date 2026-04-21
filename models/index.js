/**
 * Models Index File
 * ---------------------------------------------------
 * This file loads all models and defines the
 * relationships between them.
 *
 * Relationships:
 * - A User can have many Workouts
 * - A Workout belongs to one User
 * - A Workout can have many Exercises
 * - An Exercise belongs to one Workout
 */

const sequelize = require('../database/db')

// Import models
const User = require('./user')
const Workout = require('./workout')
const Exercise = require('./exercise')

/**
 * Model Relationships
 */

// One user can create multiple workouts
User.hasMany(Workout)

// Each workout belongs to a specific user
Workout.belongsTo(User)

// A workout can contain multiple exercises
Workout.hasMany(Exercise)

// Each exercise belongs to a workout
Exercise.belongsTo(Workout)

/**
 * Export models and database connection
 * so they can be accessed by routes and seed scripts.
 */
module.exports = {
  sequelize,
  User,
  Workout,
  Exercise
}