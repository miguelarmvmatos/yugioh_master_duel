import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Menu from "./components/Menu";
import Sidebar from "./components/Sidebar";

import Home from "./routes/Home";
import Online from "./routes/Online";
import Deck from "./routes/Deck";
import Solo from "./routes/Solo";
import Shop from "./routes/Shop";
import Notifications from "./routes/Notifications";
import Missions from "./routes/Missions";
import Gifts from "./routes/Gifts";
import Player from "./routes/Player";
import Gems from "./routes/Gems";
import Pass from "./routes/Pass";
import EditPlayer from "./routes/EditPlayer";
import Replay from "./routes/Replay";
import DataPlayer from "./routes/DataPlayer";

import "./styles/App.css";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Menu />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="duel" element={<Online />} />
          <Route path="deck" element={<Deck />} />
          <Route path="solo" element={<Solo />} />
          <Route path="shop" element={<Shop />} />
          <Route path="pass" element={<Pass />} />
          <Route path="player" element={<Player />} />
          <Route path="gems" element={<Gems />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="missions" element={<Missions />} />
          <Route path="gifts" element={<Gifts />} />
          <Route path="editplayer" element={<EditPlayer />} />
          <Route path="replay" element={<Replay />} />
          <Route path="dataplayer" element={<DataPlayer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
