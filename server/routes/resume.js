import express from "express";

import{
 createResume,
 getResumes,
} from "../controllers/resumeController.js";

const resumeRouter = express.Router();

resumeRouter.post("/",createResume);
resumeRouter.get("/",getResumes);

export default resumeRouter;
