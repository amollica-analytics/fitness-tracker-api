/**
 * Exercise Routes
 * ---------------------------------------------------
 * Handles CRUD operations for exercises.
 * All routes require authentication.
 */

const express = require('express')
const router = express.Router()

const { Exercise } = require('../models')
const auth = require('../middleware/auth')

/**
 * POST /exercises
 * Create a new exercise inside a workout
 */
router.post('/', auth, async (req, res) => {

  const exercise = await Exercise.create({
    name: req.body.name,
    sets: req.body.sets,
    reps: req.body.reps,
    weight: req.body.weight,
    WorkoutId: req.body.workoutId // associate exercise with a workout
  })

  res.json(exercise)

})

/**
 * GET /exercises
 * Retrieve all exercises
 */
router.get('/', auth, async (req, res) => {

  try {

    const exercises = await Exercise.findAll()

    res.json(exercises)

  } catch (error) {

    res.status(500).json({ error: error.message })

  }

})

/**
 * PUT /exercises/:id
 * Update an existing exercise
 */
router.put('/:id', auth, async (req, res) => {

  const exercise = await Exercise.findByPk(req.params.id)

  if (!exercise) {
    return res.status(404).json({ message: "Exercise not found" })
  }

  await exercise.update({
    name: req.body.name,
    sets: req.body.sets,
    reps: req.body.reps,
    weight: req.body.weight
  })

  res.json(exercise)

})

/**
 * DELETE /exercises/:id
 * Remove an exercise from the database
 */
router.delete('/:id', auth, async (req, res) => {

  const exercise = await Exercise.findByPk(req.params.id)

  if (!exercise) {
    return res.status(404).json({ message: "Exercise not found" })
  }

  await exercise.destroy()

  res.json({ message: "Exercise deleted successfully" })

})

module.exports = router