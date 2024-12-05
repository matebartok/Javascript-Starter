// src/middleware/sanitizeMiddleware.js

const sanitizeMiddleware = (req, res, next) => {
    for (const key in req.query) {
      req.query[key] = req.query[key].replace(/[^\w\s]/gi, ''); // Example: Remove special characters
    }
    next();
  };
  
  module.exports = sanitizeMiddleware;