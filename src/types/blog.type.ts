import { Document } from "mongoose";

export interface IBlog extends Document {
  _id: string;
  title: string;
  content: string;
  image?: string;
  category: string;
}
