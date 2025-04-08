import { IUser } from "@/types/user.type";
import mongoose, { Schema } from "mongoose";

const userSchema: Schema<IUser> = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  image: { type: String },
  role: {
    type: String,
    required: true,
    enum: ["user", "admin"],
    default: "user",
  },
});

export default mongoose.models.User ||
  mongoose.model<IUser>("User", userSchema);
