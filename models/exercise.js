const { DataTypes } = require('sequelize')
const sequelize = require('../database/db')

const Exercise = sequelize.define('Exercise', {
  name: DataTypes.STRING,
  sets: DataTypes.INTEGER,
  reps: DataTypes.INTEGER,
  weight: DataTypes.INTEGER
})

module.exports = Exercise