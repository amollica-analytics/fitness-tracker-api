const bcrypt = require('bcrypt')

const { sequelize, User, Workout, Exercise } = require('../models')

async function seed() {

  await sequelize.sync({ force: true })

  const password = await bcrypt.hash("password123", 10)

  const admin = await User.create({
    username: "admin",
    email: "admin@test.com",
    password: password,
    role: "admin"
  })

  const user = await User.create({
    username: "anthony",
    email: "anthony@test.com",
    password: password,
    role: "user"
  })

  const workout = await Workout.create({
    type: "Strength",
    duration: 60,
    calories: 400,
    UserId: user.id
  })

  await Exercise.create({
    name: "Bench Press",
    sets: 3,
    reps: 10,
    weight: 185,
    WorkoutId: workout.id
  })

  console.log("Database seeded!")

  process.exit()

}

seed()