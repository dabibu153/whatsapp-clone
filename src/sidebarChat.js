import React from "react";
import "./css/sidebarChat.css";
import { Avatar } from "@material-ui/core";

function SidebarChat() {
  return (
    <div className="sidebarChat1">
      <div className="chatPhoto">
        <Avatar />
      </div>

      <div className="chatDetails">
        <div className="NameandDate">
          <div className="chatName">test1</div>
          <div className="lastChatDate">Yesterday</div>
        </div>
        <div className="lastChat">LOL hahaha</div>
      </div>
    </div>
  );
}

export default SidebarChat;
