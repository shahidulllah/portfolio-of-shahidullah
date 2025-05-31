import { Document } from "mongoose";

export interface IProject extends Document {
  _id: string;
  title: string;
  image: string;
  category: string;
  description: string;
  technologies: string[];
  goals: string;
  challenges: string[];
  learnings: string;
  liveUrl: string;
  githubUrl: string;
  createdAt: string;
  updatedAt: string;
}
