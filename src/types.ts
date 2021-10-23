export class EpisodePlaylist {
  name!: string;
  episodes!: Episode[];
}

export class Episode {
  url!: string;
  season!: string;
  episode!: string;
  title!: string;
  description?: string;
  imageUrl?: string;
}
