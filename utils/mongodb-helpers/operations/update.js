const updateDocument = async (collection, filter, updateData) => {
    return await collection.updateOne(filter, { $set: updateData });
  };
  
  const updateManyDocuments = async (collection, filter, updateData) => {
    return await collection.updateMany(filter, { $set: updateData });
  };
  
  module.exports = { updateDocument, updateManyDocuments };
  