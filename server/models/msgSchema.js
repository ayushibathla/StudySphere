import mongoose from 'mongoose';
import validator from 'validator';
const msgSchema = new mongoose.Schema({
  name:{
    type:String,
    required:[true,"Name Required"],
  },
  email:{
    type:String,
    required:[true,"Email Required"],
    validate:[validator.isEmail,"Please provide valid email"]
  },
  message:{
    type:String,
    required:[true,"Message required"]
  }
})

export const msgModel = mongoose.model("Message",msgSchema);