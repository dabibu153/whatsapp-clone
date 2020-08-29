import React from "react";
import "./css/login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "./fireBase";
import { useStateValue } from "./stateProvider";

function Login() {
  const [{ user }, dispatch] = useStateValue();
  const handleSignIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({ type: "SET_USER", user: result.user });
      })
      .catch((err) => console.log("prob", err));
  };
  return (
    <div className="loginPage">
      <img
        src="https://www.freepnglogos.com/uploads/whatsapp-logo-light-green-png-0.png"
        alt=""
      />
      <Button onClick={handleSignIn}>Login With Google</Button>
    </div>
  );
}

export default Login;
