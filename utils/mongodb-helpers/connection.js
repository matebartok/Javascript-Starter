const { MongoClient } = require('mongodb');

const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/mydatabase';
let client;

const connectDB = async () => {
  if (!client) {
    client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    console.log('Connected to MongoDB');
  }
  return client.db(); // Return the default database instance
};

const closeDB = async () => {
  if (client) {
    await client.close();
    client = null;
    console.log('MongoDB connection closed');
  }
};

module.exports = { connectDB, closeDB };
