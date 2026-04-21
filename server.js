/**
 * Main Server File
 */

const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

// ======================
// IMPORTS
// ======================
const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");

// ⚠️ Make sure these exist in your project
const userRoutes = require("./routes/users");
const workoutRoutes = require("./routes/workouts");
const exerciseRoutes = require("./routes/exercises");

const sequelize = require("./database/db"); // adjust if needed

// ======================
// INIT APP
// ======================
const app = express();
const PORT = process.env.PORT || 3000;

// ======================
// MIDDLEWARE
// ======================
app.use(express.json());
app.use(logger);

// ======================
// ROUTES
// ======================
app.use("/users", userRoutes);
app.use("/workouts", workoutRoutes);
app.use("/exercises", exerciseRoutes);
const authRoutes = require("./routes/auth");

app.use("/auth", authRoutes);
app.get("/", (req, res) => {
  res.json({
    message: "Fitness Tracker API is running 🚀",
    endpoints: {
      users: "/users",
      workouts: "/workouts",
      exercises: "/exercises"
    }
  })
})
// ======================
// ERROR HANDLER (MUST BE LAST MIDDLEWARE)
// ======================
app.use(errorHandler);

// ======================
// DATABASE + SERVER START
// ======================
sequelize.sync({ alter: true })
  .then(() => {
    console.log("Database connected successfully");

    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database connection failed:", err);
  });