const isValidId = (id) => {
    const ObjectId = require('mongodb').ObjectId;
    return ObjectId.isValid(id);
  };
  
  module.exports = { isValidId };
  