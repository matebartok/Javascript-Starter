const findAll = async (collection, query = {}, options = {}) => {
    return await collection.find(query, options).toArray();
  };
  
  const findOne = async (collection, query) => {
    return await collection.findOne(query);
  };
  
  module.exports = { findAll, findOne };
  