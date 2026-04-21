const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

const router = express.Router();

// ======================
// REGISTER
// ======================
router.post("/register", async (req, res, next) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = await User.create({
      email: req.body.email,
      password: hashedPassword,
      role: req.body.role || "user"
    });

    res.status(201).json({ message: "User created", user });

  } catch (err) {
    next(err);
  }
});

// ======================
// LOGIN
// ======================
router.post("/login", async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { email: req.body.email } });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const valid = await bcrypt.compare(req.body.password, user.password);

    if (!valid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ token });

  } catch (err) {
    next(err);
  }
});

// ======================
// LOGOUT (simple token invalidation response)
// ======================
router.post("/logout", (req, res) => {
  res.json({ message: "Logout successful (client should delete token)" });
});

module.exports = router;