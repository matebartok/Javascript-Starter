// src/helpers/expressHelper.js

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');

// Middleware to log requests
const requestLogger = morgan('dev');

// Middleware for enabling CORS
const corsMiddleware = cors({
  origin: '*', // You can specify allowed domains here
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed HTTP methods
});

// Basic rate-limiting middleware to prevent DoS attacks
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per window
  message: 'Too many requests, please try again later.',
});

// Middleware for securing Express apps by setting HTTP headers
const securityHeaders = helmet();

// Error handling middleware
const handleError = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({ error: message });
};

// Helper function to create a simple Express server
const createServer = (routes) => {
  const app = express();

  // Setup middleware
  app.use(requestLogger); // Log requests
  app.use(corsMiddleware); // Enable CORS
  app.use(securityHeaders); // Security headers
  app.use(express.json()); // For parsing application/json
  app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded
  app.use(limiter); // Apply rate limiting

  // Attach routes (provided as a parameter)
  routes(app);

  // Global error handler
  app.use(handleError);

  return app;
};

module.exports = {
  createServer,
  handleError,
  requestLogger,
  corsMiddleware,
  limiter,
  securityHeaders,
};
