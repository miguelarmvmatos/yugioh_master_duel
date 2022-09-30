import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import GemsButton from "./GemsButton";
import Friends from "./Friends";
import BurgerMenu from "./BurgerMenu";

import "../styles/menu.css";

import EmailIcon from "@mui/icons-material/Email";
import FlagIcon from "@mui/icons-material/Flag";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import HandshakeIcon from "@mui/icons-material/Handshake";
import MenuIcon from "@mui/icons-material/Menu";

function Menu() {
  const [burgerFriendState, setBurgerFriendStatus] = useState(false);
  const [burgerState, setBurgerStatus] = useState(false);
  const friendsTrigger = {
    transform: `${burgerFriendState ? "translateX(0)" : "translateX(100%)"}`,
  };
  const burgerTrigger = {
    transform: `${burgerState ? "translateX(0)" : "translateX(100%)"}`,
  };

  let friendsRef = useRef();
  let burgerRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (!friendsRef.current.contains(event.target)) {
        setBurgerFriendStatus(false);
      }
      if (!burgerRef.current.contains(event.target)) {
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
        <li onClick={() => setBurgerFriendStatus(true)}>
          <HandshakeIcon />
          <p>Friends</p>
        </li>
        <li className="burgerNav" onClick={() => setBurgerStatus(true)}>
          <MenuIcon />
        </li>
      </ul>
      <div
        className="friends"
        style={friendsTrigger}
        show={burgerFriendState}
        ref={friendsRef}
      >
        <Friends funcFriends={setBurgerFriendStatus} />
      </div>
      <div
        className="burgerMenu"
        style={burgerTrigger}
        show={burgerState}
        ref={burgerRef}
      >
        <BurgerMenu funcBurger={setBurgerStatus} />
      </div>
    </div>
  );
}

export default Menu;
