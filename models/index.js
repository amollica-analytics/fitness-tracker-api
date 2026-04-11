const sequelize = require('../database/db')

const User = require('./user')
const Workout = require('./workout')
const Exercise = require('./exercise')

User.hasMany(Workout)
Workout.belongsTo(User)

Workout.hasMany(Exercise)
Exercise.belongsTo(Workout)

module.exports = {
  sequelize,
  User,
  Workout,
  Exercise
}