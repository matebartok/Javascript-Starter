const deleteDocument = async (collection, filter) => {
    return await collection.deleteOne(filter);
  };
  
  const deleteManyDocuments = async (collection, filter) => {
    return await collection.deleteMany(filter);
  };
  
  module.exports = { deleteDocument, deleteManyDocuments };
  