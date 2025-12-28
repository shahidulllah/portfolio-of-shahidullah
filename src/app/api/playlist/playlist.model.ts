import { Schema, model } from "mongoose";

const playlistSchema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true },
    category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
    thumbnail: String,
  },
  { timestamps: true }
);

export const Playlist = model("Playlist", playlistSchema);
