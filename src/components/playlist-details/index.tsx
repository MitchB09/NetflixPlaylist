import React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { EpisodePlaylist } from "../../types";

interface PlayListDetailsProps {
  playlist: EpisodePlaylist;
}

function PlayListDetails(props: PlayListDetailsProps) {
  const { playlist } = props;
  return (
    <>
      <Typography variant="h2" component="div">
        {playlist.name}
      </Typography>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="stretch"
        spacing={3}
      >
        {playlist.episodes.map((episode) => {
          return (
            <Grid item>
              <Card key={episode.title} sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {episode.title}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {episode.description
                      ? episode.description
                      : "No description available"}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    onClick={() => {
                      window.open(episode.url, "_blank");
                    }}
                    size="small"
                  >
                    Watch
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

export default PlayListDetails;
