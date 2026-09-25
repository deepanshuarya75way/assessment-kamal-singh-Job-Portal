import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema({
  
    userId:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User",
      required:true,
    },
    name:{
      type:String,
      required:true,
      trim:true,
    },
    summary:{
      type:String,
      default:"",
      experience:[
        {
          company:{
            type:String,
            default:"",
          },
          position:{
            type:String,
            default:"",
          },
          endDate:{
            type:String,
            default:"",
          },
        },
      ],

      education:[
        {
          institutuion:{
            type:String,
            default:"",
          },
          degree:{
            type:String,
            default:"",
          },
          startDate:{
            type:String,
            default:"",
          },
          endDate:{
            type:String,
            default:"",
          },
        },
      ],

      skills:[
        {
          type:String,
        },
      ],
      projects:[
        {
          title:{
            type:String,
            default:"",
          },
          description:{
            type:String,
            default:"",
          },
          technologies:[
            {
              type:String,
            },
          ],
        },
      ],
    },
    timeStamps:true,
  
});

const User = mongoose.model('User', userSchema);

export default User;