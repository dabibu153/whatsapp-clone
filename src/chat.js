import React, { useState } from "react";
import "./css/chat.css";
import { Avatar } from "@material-ui/core";
import { AiOutlineSearch } from "react-icons/ai";
import { ImAttachment } from "react-icons/im";
import { BsThreeDotsVertical, BsMic } from "react-icons/bs";
import { GrEmoji } from "react-icons/gr";

function Chat() {
  const [message, setmessage] = useState("");

  const sendmessage = (e) => {
    e.preventdefault();
  };
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
      <div className="chatBoxMain">
        <div className={`singleMessageBox ${true && "IsentThis"}`}>
          <div className="senderandSent">
            <div className="sender">Dabibu</div>
            <div className="sentMessage">
              hello there lalalallaallalalalalalalalala
            </div>
          </div>
          <div className="sentTime">8:00 P.M</div>
        </div>
      </div>

      <div className="chatBoxFooter">
        <div className="emojiLogo">
          <GrEmoji
            size={23}
            style={{ color: "#B1B3B5", paddingRight: "10px" }}
          />
        </div>
        <div className="chatInput">
          <form>
            <input
              type="text"
              value={message}
              onChange={(e) => setmessage(e.target.value)}
              style={{
                borderStyle: "none",
                height: "30px",
                borderRadius: "15px",
                width: "100%",
                backgroundColor: "#33383B",
              }}
            />
            <button
              type="submit"
              onClick={sendmessage}
              style={{ display: "none" }}
            ></button>
          </form>
        </div>
        <div className="micLogo">
          <BsMic size={23} style={{ color: "#B1B3B5", paddingLeft: "10px" }} />
        </div>
      </div>
    </div>
  );
}

export default Chat;
