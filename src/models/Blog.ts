import { IBlog } from "@/types/blog.type";
import mongoose, { Schema } from "mongoose";

const BlogSchema = new Schema<IBlog>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    summary: { type: String },
    tags: { type: [String] },
    author: { type: String, default: "Anonymous" },
  },
  { timestamps: true }
);

export default mongoose.models.Blog ||
  mongoose.model<IBlog>("Blog", BlogSchema);
