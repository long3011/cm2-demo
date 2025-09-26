const {
    getAllUsers,
    createUser,
    loginUser,
} = require("../controllers/userControllers");
const express = require("express");
const router = express.Router();

// GET /users - Retrieve all users
router.get("/", getAllUsers);

// POST /users/signup - Create a new user (sign up)
router.post("/signup", createUser);

// POST /users/login - User login
router.post("/login", loginUser);

module.exports = router;