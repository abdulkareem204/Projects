import express from "express";
import bcrypt from "bcrypt";
import User from "../models/User.js";

const router = express.Router();

// Register
router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  const user = new User({ username, password: hashed });
  await user.save();
  res.json({ message: "User registered successfully" });
});

// Login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) return res.status(400).json({ message: "User not found" });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(400).json({ message: "Invalid credentials" });

  req.session.userId = user._id;
  res.json({ message: "Login successful" });
});

// Check session
router.get("/me", async (req, res) => {
  if (!req.session.userId) {
    return res.status(200).json({ 
      loggedIn: false 
    });
  }

  const user = await User.findById(req.session.userId).select("username");

  return res.status(200).json({
    loggedIn: true,
    username: user.username
  });
});



// Logout
router.post("/logout", (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.status(500).json({ success: false });
    }

    res.clearCookie("connect.sid"); // default session cookie name
    res.status(200).json({ success: true });
  });
});


export default router;
