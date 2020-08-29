import React, { useState } from "react";
import "./css/app.css";
import Sidebar from "./sidebar";
import Chat from "./chat.js";
import Login from "./login";
import { useStateValue } from "./stateProvider";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <div className="AppBody">
          <Router>
            <Sidebar />
            <Switch>
              <Route path="/chatroom/:roomId" exact>
                <Chat />
              </Route>
              <Route path="/" exact>
                <div></div>
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
