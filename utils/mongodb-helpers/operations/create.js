const insertDocument = async (collection, data) => {
    return await collection.insertOne(data);
  };
  
  const insertMultipleDocuments = async (collection, dataArray) => {
    return await collection.insertMany(dataArray);
  };
  
  module.exports = { insertDocument, insertMultipleDocuments };
  