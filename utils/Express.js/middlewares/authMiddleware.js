// src/middleware/authMiddleware.js

const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(403).json({ message: 'Access denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = authenticateToken;


// You can then use this middleware in any route:

const authenticateToken = require('../middleware/authMiddleware');

router.get('/profile', authenticateToken, (req, res) => {
  res.json({ message: 'This is your profile!' });
});