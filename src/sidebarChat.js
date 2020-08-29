import React, { useState, useEffect } from "react";
import "./css/sidebarChat.css";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import db from "./fireBase";

function SidebarChat(props) {
  const [seed, setseed] = useState("");
  const [lastMessage, setlastMessage] = useState("");

  useEffect(() => {
    if (props.id) {
      db.collection("chat-rooms")
        .doc(props.id)
        .collection("messages")
        .orderBy("time", "desc")
        .onSnapshot((snapshot) =>
          setlastMessage(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, []);

  useEffect(() => {
    setseed(Math.floor(Math.random() * 5000));
  }, []);
  return (
    <Link to={`/chatroom/${props.id}`} style={{ textDecoration: "none" }}>
      <div className="sidebarChat1">
        <div className="chatPhoto">
          <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        </div>

        <div className="chatDetails">
          <div className="NameandDate">
            <div className="chatName">{props.name}</div>
            {/* <div className="lastChatDate">Yesterday</div> */}
          </div>
          <div className="lastChat">{lastMessage[0]?.text}</div>
        </div>
      </div>
    </Link>
  );
}

export default SidebarChat;
