import { Playlist } from "./playlist.model";

export const getPlaylistsByCategory = async (req, res) => {
  const { slug } = req.params;
  const playlists = await Playlist.find().populate("category");
  res.json(playlists);
};
