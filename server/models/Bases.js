const mongoose=require('mongoose')
const baseStationsSchema = mongoose.Schema({
    mountpoint: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    lastUpdated: {
      type: String, // Adjust the type based on the actual data type you want for lastUpdated
      required: true,
    },
    location: {
      latitude: {
        type: Number,
        required: true,
      },
      longitude: {
        type: Number,
        required: true,
      },
    },
    authorized: {
      type: Boolean,
      required: true,
    },
  });
  
  const BaseStation = mongoose.model('BaseStation', baseStationsSchema); // Adjust the model name
module.exports = BaseStation 