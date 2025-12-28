import { Video } from "./video.model";

export const getVideosByPlaylist = async (req, res) => {
  const { playlistId } = req.params;
  const videos = await Video.find({ playlist: playlistId }).sort({ order: 1 });
  res.json(videos);
};
