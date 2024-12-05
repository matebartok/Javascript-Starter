const getAllDocuments = async (collection) => {
    return await collection.find().toArray();
  };
  
  const getDocumentById = async (collection, id) => {
    return await collection.findOne({ _id: new ObjectId(id) });
  };
  
  const countDocuments = async (collection, query) => {
    return await collection.countDocuments(query);
  };
  
  module.exports = { getAllDocuments, getDocumentById, countDocuments };
  