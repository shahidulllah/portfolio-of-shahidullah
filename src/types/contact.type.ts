import { Document } from "mongoose";

export interface IContact extends Document {
  _id: string;
  name: string;
  email: string;
  message: string;
}
