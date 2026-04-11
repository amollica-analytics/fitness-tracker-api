const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const router = express.Router()
const { User } = require('../models')

const requireAdmin = require('../middleware/admin')
const auth = require('../middleware/auth')

router.post('/register', async (req, res) => {

  try {

    const hashedPassword = await bcrypt.hash(req.body.password, 10)

    const user = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword
    })

    res.json(user)

  } catch (error) {

    res.status(500).json({ error: error.message })

  }

})

router.post('/login', async (req, res) => {

  const user = await User.findOne({
    where: { email: req.body.email }
  })

  if (!user) {
    return res.status(400).json({ message: "User not found" })
  }

  const validPassword = await bcrypt.compare(req.body.password, user.password)

  if (!validPassword) {
    return res.status(403).json({ message: "Invalid password" })
  }

  const token = jwt.sign(
    { id: user.id, role: user.role },
    process.env.JWT_SECRET
  )

  res.json({ token })

})

router.get('/', auth, requireAdmin, async (req, res) => {

  const users = await User.findAll()

  res.json(users)

})

module.exports = router