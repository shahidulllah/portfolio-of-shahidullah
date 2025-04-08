import { Document } from "mongoose";

export interface IProject extends Document {
  _id: string;
  title: string;
  description: string;
  image: string;
  liveUrl: string;
  githubUrl: string;
}
