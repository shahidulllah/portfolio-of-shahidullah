import { IBlog } from "@/types/blog.type";
import mongoose, { Schema } from "mongoose";

const BlogSchema = new Schema<IBlog>({
  title: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String, default: "" },
  category: { type: String, required: true },
});

export default mongoose.models.Blog ||
  mongoose.model<IBlog>("Blog", BlogSchema);
