const { DataTypes } = require('sequelize')
const sequelize = require('../database/db')

const Workout = sequelize.define('Workout', {
  type: DataTypes.STRING,
  duration: DataTypes.INTEGER,
  calories: DataTypes.INTEGER
})

module.exports = Workout