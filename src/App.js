import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Menu from "./components/Menu";
import Sidebar from "./components/Sidebar";
import GoBack from "./components/GoBack";

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
import FriendDetail from "./routes/FriendDetail";

import "./styles/App.css";

function App() {
  const [showNav, setShowNav] = useState(true);
  console.log("shownav", showNav);
  return (
    <div className="app">
      <BrowserRouter>
        {showNav && <Menu />}
        {showNav && <Sidebar />}
        {!showNav && <GoBack funcNav={setShowNav} />}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="duel" element={<Online funcNav={setShowNav} />} />
          <Route path="deck" element={<Deck funcNav={setShowNav} />} />
          <Route path="solo" element={<Solo funcNav={setShowNav} />} />
          <Route path="shop" element={<Shop funcNav={setShowNav} />} />
          <Route path="pass" element={<Pass funcNav={setShowNav} />} />
          <Route path="player" element={<Player funcNav={setShowNav} />} />
          <Route path="gems" element={<Gems funcNav={setShowNav} />} />
          <Route
            path="notifications"
            element={<Notifications funcNav={setShowNav} />}
          />
          <Route path="missions" element={<Missions funcNav={setShowNav} />} />
          <Route path="gifts" element={<Gifts funcNav={setShowNav} />} />
          <Route
            path="editplayer"
            element={<EditPlayer funcNav={setShowNav} />}
          />
          <Route path="replay" element={<Replay funcNav={setShowNav} />} />
          <Route
            path="dataplayer"
            element={<DataPlayer funcNav={setShowNav} />}
          />
          <Route
            path="friend/:id"
            element={<FriendDetail funcNav={setShowNav} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
