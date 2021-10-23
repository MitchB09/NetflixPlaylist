import React from "react";
import Typography from "@mui/material/Typography";

import "./App.css";
import PlaylistDetails from "./components/playlist-details";
import TheOffice from "./resources/office";
import TreeHouseOfHorrors from "./resources/treehouse-of-horrors";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h4">Playlists</Typography>
      </header>
      <PlaylistDetails playlist={TheOffice} />
      <PlaylistDetails playlist={TreeHouseOfHorrors} />
    </div>
  );
}

export default App;
