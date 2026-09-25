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
      experience:{
        type:[
          {
            company:String ,
            position:String,
            startDate:String,
            endDate:String,
            description:String,
          }
        ],
        default:[]
      },

      education:{
        type:[
          {
            institution:String,
            degree:String,
            startDate:String,
            endDate:String,
          }
        ],
        default:[]
      },

      skills:[
        {
          type:String,
        },
      ],
      projects:{
        type:[
          {
            title:String,
            description:String,
            technologies:[String]
          }
        ],
        default:[]
      }
    },
    timeStamps:true,
  
});

const User = mongoose.model('User', userSchema);

export default User;