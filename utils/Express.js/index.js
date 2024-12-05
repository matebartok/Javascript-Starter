// src/index.js

const { createServer } = require('./helpers/expressHelper');
const userRoutes = require('./routes/userRoutes'); // Example routes

const app = createServer((app) => {
  // Define your app's routes here
  app.use('/api/users', userRoutes);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
