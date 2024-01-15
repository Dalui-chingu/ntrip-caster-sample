const mongoose=require('mongoose')

  
  // Define the BaseStation Schema
  const CurrentSchema = new mongoose.Schema({
    baseStationName: {
      type: String,
      required: true,
      unique: true,
    },
    users:[{
      name:{
        type:String,
        required:true
      },
      latitude:{
        type:Number,
        required:true
      },
      longitude:{
        type:Number,
        required:true
      }
    }],
    
          // Array of users
  });
  
  const Currents = mongoose.model('connecteduser', CurrentSchema); // Adjust the model name
module.exports = Currents