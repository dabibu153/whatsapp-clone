import React from "react";
import "./css/chat.css";
import { Avatar } from "@material-ui/core";
import { AiOutlineSearch } from "react-icons/ai";
import { ImAttachment } from "react-icons/im";
import { BsThreeDotsVertical, BsMic } from "react-icons/bs";
import { GrEmoji } from "react-icons/gr";

function Chat() {
  return (
    <div className="chatBox">
      <div className="chatBoxHeader">
        <div className="cbhLeft">
          <div className="cbhAvatar">
            <Avatar />
          </div>
          <div className="cbhDetails">
            <div className="cbhdName">Test1</div>
            <div className="cbhdPeople">a,b,c,d...</div>
          </div>
        </div>
        <div className="cbhOtherIcons">
          <AiOutlineSearch
            size={23}
            style={{ color: "#B1B3B5", paddingLeft: "30px" }}
          />
          <ImAttachment
            size={23}
            style={{ color: "#B1B3B5", paddingLeft: "30px" }}
          />
          <BsThreeDotsVertical
            size={23}
            style={{ color: "#B1B3B5", paddingLeft: "30px" }}
          />
        </div>
      </div>
      <div className="chatBoxMain"></div>
      <div className="chatBoxFooter">
        <div className="emojiLogo">
          <GrEmoji
            size={23}
            style={{ color: "#B1B3B5", paddingRight: "10px" }}
          />
        </div>
        <div className="chatInput">
          <input
            type="text"
            style={{
              borderStyle: "none",
              height: "30px",
              borderRadius: "15px",
              width: "100%",
              backgroundColor: "#33383B",
            }}
          />
        </div>
        <div className="micLogo">
          <BsMic size={23} style={{ color: "#B1B3B5", paddingLeft: "10px" }} />
        </div>
      </div>
    </div>
  );
}

export default Chat;
