// src/routes/userRoutes.js

const express = require('express');
const { handleError } = require('../helpers/expressHelper'); // Import helper error handler
const router = express.Router();

// Example route
router.get('/', (req, res, next) => {
  try {
    // Imagine this is fetching users from the database
    const users = [{ id: 1, name: 'John Doe' }];
    res.json(users);
  } catch (err) {
    next(err); // Pass error to the global error handler
  }
});

// Example route with parameter validation
router.post('/create', (req, res, next) => {
  const { name, email } = req.body;

  if (!name || !email) {
    const error = new Error('Name and Email are required');
    error.statusCode = 400; // Bad Request
    return next(error); // Pass the error to the global handler
  }

  // If no error, proceed with the creation logic
  res.status(201).json({ message: 'User created successfully!' });
});

module.exports = router;
