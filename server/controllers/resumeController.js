import Resume from "../models/resume.js";

export const createResume = async (req ,res)=>{
  try{
    const {name} = req.body;
    if(!name || !name.trim()){
      return res.status(400).json({
        message:" Resume name is required",
      });

    }

    const resume = await Resume.create({
      userId:req.userId,
      name:name.trim(),
    });

    return res.status(201).json({
      message:"resume created successfully",
      resume,
    });
  }catch(error){
    console.error("error:",error);
    
    return res.status(500).json({
      message:"faild to create resume",
    });
  }
};

// get all resume

export const getResumes = async (req , res) => {
  try{
    const resumes = await Resume.find({
      userId:req.user.id,
    }).sort({
      createdAt:-1
    });
    return res.status(200).json({
      resumes,
    });
  } catch(error){
    console.error("get resume error",error)
    return res.status(500).json({
      message:"Failed to get resume",
    });
  }
};

module.exports = {
  createResume,
  getResumes
}