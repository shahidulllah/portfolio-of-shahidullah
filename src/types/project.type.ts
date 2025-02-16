import { Document } from "mongoose";

export interface IProject extends Document {
    title: string;
    description: string;
    image: string;
    liveUrl: string;
    githubUrl: string;
  }