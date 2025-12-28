import { Schema, model } from "mongoose";

const videoSchema = new Schema(
  {
    title: { type: String, required: true },
    youtubeId: { type: String, required: true }, // 🔴 IMPORTANT
    playlist: { type: Schema.Types.ObjectId, ref: "Playlist", required: true },
    duration: String,
    order: Number,
  },
  { timestamps: true }
);

export const Video = model("Video", videoSchema);
