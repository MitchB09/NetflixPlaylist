import { EpisodePlaylist } from "../types";

const TheOffice: EpisodePlaylist = {
  name: "An Office Christmas",
  episodes: [
    {
      url: "https://www.netflix.com/watch/70069642",
      season: "2",
      episode: "10",
      title: "Christmas Party",
      imageUrl: process.env.PUBLIC_URL + "/favicon.ico",
    },
    {
      url: "https://www.netflix.com/watch/70080627",
      season: "3",
      episode: "10",
      title: "A Benihana Christmas",
      imageUrl: process.env.PUBLIC_URL + "/favicon.ico",
    },
  ],
};

export default TheOffice;
