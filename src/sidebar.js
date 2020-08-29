import React, { useState, useEffect } from "react";
import "./css/sidebar.css";
import SidebarChat from "./sidebarChat.js";
import { Avatar } from "@material-ui/core";
import { BiLoaderCircle, BiMessageDetail } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import db from "./fireBase";
import { useStateValue } from "./stateProvider";

function Sidebar() {
  const [{ user }, dispatch] = useStateValue();
  const [rooms, setrooms] = useState([]);
  useEffect(() => {
    const unsubscribe = db
      .collection("chat-rooms")
      .onSnapshot((snapshot) =>
        setrooms(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
    return () => {
      unsubscribe();
    };
  }, []);

  const addChat = () => {
    const roomName = prompt("please enter name for chat");
    if (roomName) {
      db.collection("chat-rooms").add({ name: roomName });
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebarHeader">
        <div className="headerLeft">
          <Avatar src={user?.photoURL} />
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
      <div className="addNewChat" onClick={addChat}>
        Add New Chat
      </div>
      <div className="hr"></div>
      <div className="sidebarChat">
        {rooms.map((room) => (
          <SidebarChat key={room.id} id={room.id} name={room.data.name} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
