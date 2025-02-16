import { IProject } from "@/types/project.type";
import mongoose, { Schema } from "mongoose";



const ProjectSchema = new Schema<IProject>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  liveUrl: { type: String, required: true },
  githubUrl: { type: String, required: true },
});

export default mongoose.models.Project ||
  mongoose.model<IProject>("Project", ProjectSchema);
