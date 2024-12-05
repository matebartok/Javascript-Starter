// src/routes/userRoutes.js

const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// Define user-related routes
router.get('/', userController.getUsers); // List all users
router.get('/:id', userController.getUserById); // Get a user by ID
router.post('/', userController.createUser); // Create a new user
router.put('/:id', userController.updateUser); // Update a user by ID
router.delete('/:id', userController.deleteUser); // Delete a user by ID


// Using middlewares 

router.get('/profile', authenticateToken, rateLimitMiddleware, (req, res) => {
    res.json({ message: 'This is your profile!' });
  });
  
  router.get('/admin', authenticateToken, adminMiddleware, (req, res) => {
    res.json({ message: 'Welcome, Admin!' });
  });



module.exports = router;
