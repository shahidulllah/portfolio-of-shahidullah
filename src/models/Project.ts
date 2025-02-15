import mongoose, { Schema, Document } from "mongoose";

export interface IProject extends Document {
  title: string;
  description: string;
  image: string;
  liveUrl: string;
  githubUrl: string;
}

const ProjectSchema = new Schema<IProject>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  liveUrl: { type: String, required: true },
  githubUrl: { type: String, required: true },
});

export default mongoose.models.Project ||
  mongoose.model<IProject>("Project", ProjectSchema);
