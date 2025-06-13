import { Document } from "mongoose";

export interface IProject extends Document {
  _id: string;
  title: string;
  image: string;
  features: string[];
  category: string;
  description: string;
  technologies: string[];
  goals: string;
  challenges: string[];
  futurePlans: string[];
  learnings: string;
  liveUrl: string;
  githubUrl: {
    client: string;
    server: string;
  };
  createdAt: string;
  updatedAt: string;
}
