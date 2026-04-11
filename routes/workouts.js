const express = require('express')
const router = express.Router()

const { Workout } = require('../models')
const auth = require('../middleware/auth')

router.get('/', auth, async (req, res) => {

  const workouts = await Workout.findAll({
    where: { UserId: req.user.id }
  })

  res.json(workouts)

})

router.post('/', auth, async (req, res) => {

  const workout = await Workout.create({
    type: req.body.type,
    duration: req.body.duration,
    calories: req.body.calories,
    UserId: req.user.id
  })

  res.json(workout)

})

router.put('/:id', auth, async (req, res) => {

  const workout = await Workout.findByPk(req.params.id)

  if (!workout) {
    return res.status(404).json({ message: "Workout not found" })
  }

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

router.delete('/:id', auth, async (req, res) => {

  const workout = await Workout.findByPk(req.params.id)

  if (!workout) {
    return res.status(404).json({ message: "Workout not found" })
  }

  if (workout.UserId !== req.user.id) {
    return res.status(403).json({ message: "Not your workout" })
  }

  await workout.destroy()

  res.json({ message: "Workout deleted" })

})

module.exports = router