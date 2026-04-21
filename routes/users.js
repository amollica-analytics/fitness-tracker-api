/**
 * User Routes
 * ---------------------------------------------------
 * Handles user registration, login, and admin user listing.
 */

const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const router = express.Router()
const { User } = require('../models')

const requireAdmin = require('../middleware/admin')
const auth = require("../middleware/auth");
const authorize = require("../middleware/authorize");
/**
 * POST /users/register
 * Register a new user account
 */
router.post('/register', async (req, res) => {

  try {

    // Hash the password before saving
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

/**
 * POST /users/login
 * Authenticate a user and return a JWT token
 */
router.post('/login', async (req, res) => {

  const user = await User.findOne({
    where: { email: req.body.email }
  })

  if (!user) {
    return res.status(400).json({ message: "User not found" })
  }

  // Compare submitted password with stored hash
  const validPassword = await bcrypt.compare(req.body.password, user.password)

  if (!validPassword) {
    return res.status(403).json({ message: "Invalid password" })
  }

  /**
   * Generate JWT token containing user id and role
   */
  const token = jwt.sign(
    { id: user.id, role: user.role },
    process.env.JWT_SECRET
  )

  res.json({ token })

})

/**
 * GET /users
 * Admin-only route to retrieve all users
 */
router.get('/', auth, requireAdmin, async (req, res) => {

  const users = await User.findAll();

  res.json(users);

})
// =========================
// DELETE USER (ADMIN ONLY)
// =========================
router.delete("/:id", auth, authorize("admin"), async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    await user.destroy();

    res.json({ message: "User deleted successfully" });

  } catch (err) {
    next(err);
  }
});

module.exports = router;

module.exports = router