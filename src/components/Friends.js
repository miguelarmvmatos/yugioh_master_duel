import React, { useEffect } from "react";

import { Link } from "react-router-dom";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import "../styles/friends.css";

import friendsData from "../api/friends.json";

function Friends() {
  const data = friendsData.data;
  const follow = data.reduce((a, t) => a + (t.type === "followed"), 0);
  const online = data.reduce((a, t) => a + (t.status === "online"), 0);

  useEffect(() => {}, []);

  return (
    <div className="friendsNav">
      <div className="followed">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h3>Follow</h3>
            <h3>
              {online} / {follow}
            </h3>
          </AccordionSummary>
          <AccordionDetails>
            {data.map((friend, index) => {
              return friend.type === "followed" ? (
                <Link to={`/${friend.id}`} key={index} className="friend">
                  <div className="friendIconData">
                    <img
                      src={require(`../resources/frames/${friend.iconFrame}.png`)}
                      alt={friend.icon}
                      className="friendFrame"
                    />
                    <img
                      src={require(`../resources/icons/${friend.icon}.png`)}
                      alt={friend.icon}
                      className="friendIcon"
                    />
                    {friend.status === "online" ? (
                      <div className="status online"></div>
                    ) : (
                      <div className="status offline"></div>
                    )}
                  </div>
                  <p>{friend.nickname}</p>
                </Link>
              ) : (
                ""
              );
            })}
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="followers">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h3>Follower</h3>
          </AccordionSummary>
          <AccordionDetails>
            {data.map((friend, index) => {
              return friend.type === "follower" ? (
                <Link to={`/${friend.id}`} key={index} className="friend">
                  <div className="friendIconData">
                    <img
                      src={require(`../resources/frames/${friend.iconFrame}.png`)}
                      alt={friend.icon}
                      className="friendFrame"
                    />
                    <img
                      src={require(`../resources/icons/${friend.icon}.png`)}
                      alt={friend.icon}
                      className="friendIcon"
                    />
                  </div>
                  <p>{friend.nickname}</p>
                </Link>
              ) : (
                ""
              );
            })}
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="blocked">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h3>Block list</h3>
          </AccordionSummary>
          <AccordionDetails>
            {data.map((friend, index) => {
              return friend.type === "blocked" ? (
                <Link to={`/${friend.id}`} key={index} className="friend">
                  <div className="friendIconData">
                    <img
                      src={require(`../resources/frames/${friend.iconFrame}.png`)}
                      alt={friend.icon}
                      className="friendFrame"
                    />
                    <img
                      src={require(`../resources/icons/${friend.icon}.png`)}
                      alt={friend.icon}
                      className="friendIcon"
                    />
                  </div>
                  <p>{friend.nickname}</p>
                </Link>
              ) : (
                ""
              );
            })}
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default Friends;
