import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import GemsButton from "./GemsButton";
import Friends from "./Friends";

import "../styles/menu.css";

import EmailIcon from "@mui/icons-material/Email";
import FlagIcon from "@mui/icons-material/Flag";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import HandshakeIcon from "@mui/icons-material/Handshake";
import MenuIcon from "@mui/icons-material/Menu";

function Menu() {
  const [burgerState, setBurgerStatus] = useState(false);
  const friendsTrigger = {
    transform: `${burgerState ? "translateX(0)" : "translateX(100%)"}`,
  };

  let friendsRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (!friendsRef.current.contains(event.target)) {
        setBurgerStatus(false);
      }
    });
  });

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
        <li onClick={() => setBurgerStatus(true)}>
          <HandshakeIcon />
          <p>Friend</p>
        </li>
        <li>
          <MenuIcon />
          <p>Submenu</p>
        </li>
      </ul>
      <div
        className="friends"
        style={friendsTrigger}
        show={burgerState}
        ref={friendsRef}
      >
        <Friends />
      </div>
    </div>
  );
}

export default Menu;
