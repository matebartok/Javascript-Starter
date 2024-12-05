const getAverageAgeByActivity = async (collection) => {
    return await collection.aggregate([
      { $match: { isActive: true } },
      { $group: { _id: null, avgAge: { $avg: '$age' } } }
    ]).toArray();
  };
  
  module.exports = { getAverageAgeByActivity };