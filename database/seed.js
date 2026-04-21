/**
 * Database Seed Script
 * ---------------------------------------------------
 * This script populates the database with initial data
 * for development and testing.
 *
 * It creates:
 * - Admin user
 * - Regular user
 * - Sample workout
 * - Sample exercise
 *
 * To run:
 * node database/seed.js
 */

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

app.post("/login", async (req, res) => {

 try {

   const user = await User.findOne({ where: { email: req.body.email } });

   if (!user) {
     return res.status(401).json({ message: "Invalid credentials" });
   }

   const validPassword = await bcrypt.compare(req.body.password, user.password);

   if (!validPassword) {
     return res.status(401).json({ message: "Invalid credentials" });
   }

   const token = jwt.sign(
     { id: user.id, role: user.role },
     process.env.JWT_SECRET,
     { expiresIn: "1h" }
   );

   res.json({ token });

 } catch (error) {
   res.status(500).json({ message: "Login error" });
 }

});

// Import database connection and models
const { sequelize, User, Workout, Exercise } = require('../models')

async function seed() {

  /**
   * Sync database models and reset tables.
   * force: true will DROP existing tables and recreate them.
   * This ensures a fresh database every time the seed runs.
   */
  await sequelize.sync({ force: true })

  /**
   * Hash the password before storing it.
   * This prevents passwords from being stored in plain text.
   */
  const password = await bcrypt.hash("password123", 10)

  /**
   * Create an admin user
   */
  const admin = await User.create({
    username: "admin",
    email: "admin@test.com",
    password: password,
    role: "admin"
  })

  /**
   * Create a regular user
   */
  const user = await User.create({
    username: "anthony",
    email: "anthony@test.com",
    password: password,
    role: "user"
  })

  /**
   * Create a workout belonging to the regular user.
   * UserId establishes the relationship between
   * the workout and the user.
   */
  const workout = await Workout.create({
    type: "Strength",
    duration: 60,
    calories: 400,
    UserId: user.id
  })

  /**
   * Create an exercise linked to the workout.
   * WorkoutId connects the exercise to its workout.
   */
  await Exercise.create({
    name: "Bench Press",
    sets: 3,
    reps: 10,
    weight: 185,
    WorkoutId: workout.id
  })

  // Confirm seeding completed successfully
  console.log("Database seeded!")

  // Exit process after script completes
  process.exit()

}

// Run the seed function
seed()