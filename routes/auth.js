const express = require("express");
const router = express.Router();
const User = require("../models/Users");

// Add user
router.post("/signup", async (req, res) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
    quiz_topics: req.body.topics,
  });
  try {
    const newUser = await user.save();
    res.json(newUser);
  } catch (err) {
    res.json(err);
  }
});

// Check User
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
      password: req.body.password,
    });
    res.json(user);
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;