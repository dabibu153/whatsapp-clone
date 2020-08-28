import React from "react";
import "./css/sidebar.css";
import SidebarChat from "./sidebarChat.js";
import { Avatar } from "@material-ui/core";
import { BiLoaderCircle, BiMessageDetail } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarHeader">
        <div className="headerLeft">
          <Avatar />
        </div>
        <div className="headerRight">
          <BiLoaderCircle
            size={23}
            style={{ color: "#B1B3B5", paddingLeft: "10px" }}
          />
          <BiMessageDetail
            size={23}
            style={{ color: "#B1B3B5", paddingLeft: "10px" }}
          />
          <BsThreeDotsVertical
            size={23}
            style={{ color: "#B1B3B5", paddingLeft: "10px" }}
          />
        </div>
      </div>
      <div className="hr"></div>
      <div className="sidebarSearch">
        <div className="searchBar">
          <AiOutlineSearch style={{ color: "#7D8184" }} />
          <input
            placeholder="search or start new chat"
            type="text"
            style={{ borderStyle: "none", backgroundColor: "#323739" }}
          />
        </div>
      </div>
      <div className="hr"></div>
      <div className="addNewChat">Add New Chat</div>
      <div className="hr"></div>
      <div className="sidebarChat">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
}

export default Sidebar;
