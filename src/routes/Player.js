import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Player(props) {
  useEffect(() => {
    props.funcNav(false);
  }, []);
  console.log("player", props);
  return (
    <ul>
      <li>
        <Link to="/editplayer">Edit</Link>
      </li>
      <li>
        <Link to="/replay">Replay</Link>
      </li>
      <li>
        <Link to="/dataplayer">Data</Link>
      </li>
    </ul>
  );
}

export default Player;
