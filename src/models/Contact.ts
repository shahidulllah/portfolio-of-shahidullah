import { IContact } from "@/types/contact.type";
import mongoose, { Schema } from "mongoose";

const ContactSchema = new Schema<IContact>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
});

export default mongoose.models.Contact ||
  mongoose.model<IContact>("Contact", ContactSchema);
