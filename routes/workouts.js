/**
 * Workout Routes
 * ---------------------------------------------------
 * Allows authenticated users to create, view,
 * update, and delete their workouts.
 */

const express = require('express')
const router = express.Router()

const { Workout } = require('../models')
const auth = require('../middleware/auth')

/**
 * GET /workouts
 * Retrieve workouts belonging to the logged-in user
 */
router.get('/', auth, async (req, res) => {

  const workouts = await Workout.findAll({
    where: { UserId: req.user.id }
  })

  res.json(workouts)

})

/**
 * POST /workouts
 * Create a new workout
 */
router.post('/', auth, async (req, res) => {

  const workout = await Workout.create({
    type: req.body.type,
    duration: req.body.duration,
    calories: req.body.calories,
    UserId: req.user.id
  })

  res.json(workout)

})

/**
 * PUT /workouts/:id
 * Update a workout (only if owned by the user)
 */
router.put('/:id', auth, async (req, res) => {

  const workout = await Workout.findByPk(req.params.id)

  if (!workout) {
    return res.status(404).json({ message: "Workout not found" })
  }

  // Ensure the logged-in user owns the workout
  if (workout.UserId !== req.user.id) {
    return res.status(403).json({ message: "Not your workout" })
  }

  await workout.update({
    type: req.body.type,
    duration: req.body.duration,
    calories: req.body.calories
  })

  res.json(workout)

})

/**
 * DELETE /workouts/:id
 * Delete a workout (only if owned by the user)
 */
router.delete('/:id', auth, async (req, res) => {

  try {

    const workout = await Workout.findByPk(req.params.id)

    if (!workout) {
      return res.status(404).json({ message: "Workout not found" })
    }

    // Ensure the logged-in user owns the workout
    if (workout.UserId !== req.user.id) {
      return res.status(403).json({ message: "Not authorized to delete this workout" })
    }

    await workout.destroy()

    res.json({ message: "Workout deleted successfully" })

  } catch (error) {

    res.status(500).json({ error: error.message })

  }

})

module.exports = router