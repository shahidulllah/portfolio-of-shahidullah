import mongoose, { Schema, Document } from "mongoose";

export interface IBlog extends Document {
  title: string;
  content: string;
  image: string;
  category: string;
}

const BlogSchema = new Schema<IBlog>({
  title: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
});

export default mongoose.models.Blog ||
  mongoose.model<IBlog>("Blog", BlogSchema);
