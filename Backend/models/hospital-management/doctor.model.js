import mongoose from "mongoose";
const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  salary:{
    type:Number,
    required:true,
  },
  qualification:{
    type:String,
    required:true,
  },
  experienceInYear:{
    type:Number,
    default:0,
  },
  worksInHospitals:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Hospital",
    },
  ]
},
{timestamps:true});
export const Doctor =  mongoose.model("Doctor",doctorSchema);