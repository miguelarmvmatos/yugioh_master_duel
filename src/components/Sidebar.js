import React from "react";

import { Link } from "react-router-dom";

import PassButton from "./PassButton.js";
import PlayerButton from "./PlayerButton";

import "../styles/sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <PlayerButton />
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/duel"}>Duel</Link>
        </li>
        <li>
          <Link to={"/deck"}>Deck</Link>
        </li>
        <li>
          <Link to={"/solo"}>Solo</Link>
        </li>
        <li>
          <Link to={"/shop"}>Shop</Link>
        </li>
        <li>Carousel</li>
        <li>
          <PassButton />
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
