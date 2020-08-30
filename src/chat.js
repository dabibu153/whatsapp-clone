import React, { useState, useEffect } from "react";
import "./css/chat.css";
import { Avatar } from "@material-ui/core";
import { AiOutlineSearch } from "react-icons/ai";
import { ImAttachment } from "react-icons/im";
import { BsThreeDotsVertical, BsMic } from "react-icons/bs";
import { GrEmoji } from "react-icons/gr";
import { useParams } from "react-router-dom";
import db from "./fireBase";
import { useStateValue } from "./stateProvider";
import firebase from "firebase";

function Chat() {
  const [message, setmessage] = useState("");
  const [roomName, setRoomName] = useState("");
  const { roomId } = useParams();
  const [seed, setseed] = useState("");
  const [textMessages, settextMessages] = useState([]);
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    if (roomId) {
      db.collection("chat-rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomName(snapshot.data().name));
      db.collection("chat-rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("time", "asc")
        .onSnapshot((snapshot) =>
          settextMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [roomId]);

  useEffect(() => {
    setseed(Math.floor(Math.random() * 5000));
  }, [roomId]);

  const sendmessage = (e) => {
    e.preventDefault();
    console.log(message);
    setmessage("");

    db.collection("chat-rooms").doc(roomId).collection("messages").add({
      text: message,
      name: user.displayName,
      time: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };
  return (
    <div className="chatBox">
      <div className="chatBoxHeader">
        <div className="cbhLeft">
          <div className="cbhAvatar">
            <Avatar
              src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
            />
          </div>
          <div className="cbhDetails">
            <div className="cbhdName">{roomName}</div>
            <div className="cbhdPeople">
              {new Date(
                textMessages[textMessages.length - 1]?.time?.toDate()
              ).toUTCString()}
            </div>
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
        {textMessages?.map((message) => (
          <div
            className={`singleMessageBox ${
              user.displayName === message.name && "IsentThis"
            }`}
          >
            <div className="senderandSent">
              <div className="sender">{message.name}</div>
              <div className="sentMessage">{message.text}</div>
            </div>
            <div className="sentTime">
              {new Date(message.time?.toDate()).toUTCString()}
            </div>
          </div>
        ))}
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
