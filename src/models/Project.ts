import { IProject } from "@/types/project.type";
import mongoose, { Schema } from "mongoose";

const ProjectSchema = new Schema<IProject>(
  {
    title: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, default: "General" },
    description: { type: String, required: true },
    technologies: [{ type: String, required: true }],
    goals: { type: String, required: true },
    challenges: [{ type: String, required: true }],
    learnings: { type: String, required: true },
    liveUrl: { type: String, required: true },
    githubUrl: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Project ||
  mongoose.model<IProject>("Project", ProjectSchema);
