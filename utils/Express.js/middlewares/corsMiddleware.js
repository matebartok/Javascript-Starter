// src/middleware/corsMiddleware.js

const cors = require('cors');

const corsOptions = {
  origin: ['http://example.com', 'http://localhost:3000'], // Allowed origins
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true, // Allow cookies
};

const corsMiddleware = cors(corsOptions);

module.exports = corsMiddleware;