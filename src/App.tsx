import React from "react";

import "./App.css";
import AppBar from "./components/app-bar";
import PlaylistDetails from "./components/playlist-details";
import TheOffice from "./resources/office";
import TreeHouseOfHorrors from "./resources/treehouse-of-horrors";

function App() {
  return (
    <div className="App">
      <AppBar />
      <div className="MainContent">
        <PlaylistDetails playlist={TheOffice} />
        <PlaylistDetails playlist={TreeHouseOfHorrors} />
      </div>
    </div>
  );
}

export default App;
