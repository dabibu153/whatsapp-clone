import React from "react";
import "./css/app.css";
import Sidebar from "./sidebar";
import Chat from "./chat.js";

function App() {
  return (
    <div className="App">
      <div className="AppBody">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
