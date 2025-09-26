const User = require("../models/userModel");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// Function to create a JWT token
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "6h" });
}

// GET /users
const getAllUsers = async (req, res) => {
    try {
    const users = await User.find({}).sort({ createdAt: -1 });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve users" });
  }
};

// POST /users/signup
// User signing up
const createUser = async (req, res) => {
    const { name, email, password, phone_number,
        gender, date_of_birth, membership_status } = req.body;
    try {
    const newUser = await User.signup(name, email, password, phone_number,
        gender, date_of_birth, membership_status );
    const token = createToken(newUser._id); // Create a token for the new user
    res.status(201).json({message: "User created",user: newUser, token:token});
  } catch (error) {
    res.status(400).json({ message: "Failed to create user", error: error.message });
  }
};

//POST /users/login
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
    const user = await User.login(email, password);

    const token=createToken(user._id);
    res.status(200).json({message: "Login successful",user: user, token:token});
  } catch (error) {
    res.status(400).json({ message: "Invalid email or password", error: error.message });
    }
    };

module.exports = {
  getAllUsers,
  createUser,
  loginUser,
};