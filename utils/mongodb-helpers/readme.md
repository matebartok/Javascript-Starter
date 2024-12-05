# MongoDB Helpers

This folder contains reusable templates and functions for working with MongoDB in Node.js projects.

## Contents
1. **connection.js**: Establishes a MongoDB connection.
2. **templates/**: Includes sample schemas, aggregation pipelines, and common queries.
3. **operations/**: Handles CRUD operations.
4. **utils/**: Includes validation and error handling utilities.

## Usage
### 1. Connecting to MongoDB
```javascript
const { connectDB, closeDB } = require('./connection');

(async () => {
  const db = await connectDB();
  const usersCollection = db.collection('users');
  const allUsers = await usersCollection.find().toArray();
  console.log(allUsers);
  await closeDB();
})();