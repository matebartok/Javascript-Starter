// src/helpers/validationHelper.js

const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  
  module.exports = {
    validateEmail,
  };


//   You can use this helper in your route handlers like so:

// src/routes/userRoutes.js

const { validateEmail } = require('../helpers/validationHelper');

router.post('/create', (req, res, next) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return next(new Error('Name and Email are required'));
  }

  if (!validateEmail(email)) {
    return next(new Error('Invalid email format'));
  }

  // Continue with user creation logic here
  res.status(201).json({ message: 'User created successfully!' });
});