import React from "react";
import { Link } from "react-router-dom";

import GemsButton from "./GemsButton";

import "../styles/menu.css";

import EmailIcon from "@mui/icons-material/Email";
import FlagIcon from "@mui/icons-material/Flag";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import HandshakeIcon from "@mui/icons-material/Handshake";
import MenuIcon from "@mui/icons-material/Menu";

function Menu() {
  return (
    <div className="menu">
      <ul>
        <li className="gemsButton">
          <GemsButton />
        </li>
        <li>
          <Link to="notifications">
            <EmailIcon />
            <p>Notifications</p>
          </Link>
        </li>
        <li>
          <Link to="missions">
            <FlagIcon />
            <p>Missions</p>
          </Link>
        </li>
        <li>
          <Link to="Gifts">
            <CardGiftcardIcon />
            <p>Gift Box</p>
          </Link>
        </li>
        <li>
          <HandshakeIcon />
          <p>Friend</p>
        </li>
        <li>
          <MenuIcon />
          <p>Submenu</p>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
