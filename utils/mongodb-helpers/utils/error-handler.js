const handleError = (error) => {
    console.error('MongoDB Error:', error.message || error);
    throw new Error('An error occurred while interacting with MongoDB');
  };
  
  module.exports = { handleError };
  