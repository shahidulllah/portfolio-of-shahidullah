import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  link: String,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Project ||
  mongoose.model("Project", projectSchema);
