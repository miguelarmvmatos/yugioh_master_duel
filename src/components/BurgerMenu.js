import React from "react";
import { Link } from "react-router-dom";

import Friends from "./Friends";

import "../styles/burgermenu.css";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import EmailIcon from "@mui/icons-material/Email";
import FlagIcon from "@mui/icons-material/Flag";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import HandshakeIcon from "@mui/icons-material/Handshake";
import CloseIcon from "@mui/icons-material/Close";

function BurgerMenu(props) {
  return (
    <div className="burgerMenuNav">
      <div className="closeButton" onClick={() => props.funcBurger(false)}>
        <CloseIcon />
      </div>
      <ul>
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
        <li className="burgerFriends">
          <Accordion>
            <AccordionSummary>
              <HandshakeIcon />
              <p>Friends</p>
            </AccordionSummary>
            <AccordionDetails>
              <Friends />
            </AccordionDetails>
          </Accordion>
        </li>
      </ul>
    </div>
  );
}

export default BurgerMenu;
