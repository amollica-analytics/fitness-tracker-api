require('dotenv').config()

const express = require('express')

const { sequelize } = require('./models')

const userRoutes = require('./routes/users')
const workoutRoutes = require('./routes/workouts')
const exerciseRoutes = require('./routes/exercises')

const app = express()

app.use(express.json())

app.use('/users', userRoutes)
app.use('/workouts', workoutRoutes)
app.use('/exercises', exerciseRoutes)

sequelize.sync().then(() => {

  app.listen(3000, () => {

    console.log("Server running on port 3000")

  })

})