import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import signin from "../../assets/Wavy_Tech-11_Single-10.jpg";
import "./Sign.scss";

function Register({ registerClose }) {
  return (
    <div className="sign-form">
      <div className="sign-left">
        <img alt="" src={signin} />
      </div>
      <div className="sign-right">
        <div className="close-btn">
          <CloseIcon onClick={() => registerClose()} />
        </div>
        <div>
          <h1>Sign Up</h1>
        </div>
        <form className="signIn-body">
          <input placeholder="username" type="text" />
          <input placeholder="email" type="text" />
          <input placeholder="password" type="password" />
          <button type="submit" className="submit-btn">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
