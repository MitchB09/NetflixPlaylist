import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import PlayArrow from "@mui/icons-material/PlayArrow";

import { EpisodePlaylist } from "../../types";

interface PlayListDetailsProps {
  playlist: EpisodePlaylist;
}

function PlayListDetails(props: PlayListDetailsProps) {
  const { playlist } = props;
  const [expanded, setExpanded] = useState<boolean>(true);

  return (
    <Paper elevation={3} sx={{ marginTop: "2em", padding: "1em" }}>
      <Typography
        variant="h4"
        sx={{ marginTop: "0.5em" }}
        color="white"
        component="div"
      >
        {playlist.name}
      </Typography>
      {expanded && (
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          {playlist.episodes.map((episode) => {
            return (
              <Grid item key={episode.title}>
                <Card variant="outlined" sx={{ display: "flex" }}>
                  {episode.imageUrl && (
                    <CardMedia
                      component="img"
                      sx={{ width: 151 }}
                      image={episode.imageUrl}
                      alt="Live from space album cover"
                    />
                  )}
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <CardContent sx={{ flex: "1 0 auto" }}>
                      <Typography component="div" variant="h5">
                        {episode.title}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        component="div"
                        sx={{ lineHeight: "1em" }}
                      >
                        {episode.description
                          ? episode.description
                          : "No description available"}
                      </Typography>
                    </CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        pl: 1,
                        pb: 1,
                      }}
                    >
                      <IconButton
                        aria-label="play/pause"
                        onClick={() => {
                          window.open(episode.url, "_blank");
                        }}
                      >
                        <PlayArrow sx={{ height: 38, width: 38 }} />
                      </IconButton>
                    </Box>
                  </Box>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      )}
    </Paper>
  );
}

export default PlayListDetails;
