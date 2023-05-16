import React, { useRef } from "react";
import "./Sign.scss";
import CloseIcon from "@mui/icons-material/Close";
import signin from "../../assets/3293465.jpg";

function SignIn({ closeSignIn, handleLogin }) {
  const emailRef = useRef("");
  const passwordRef = useRef("");

  return (
    <div className="sign-form">
      <div className="sign-left">
        <img alt="" src={signin} />
      </div>
      <div className="sign-right">
        <div className="close-btn">
          <CloseIcon onClick={() => closeSignIn()} />
        </div>
        <div>
          <h1>Sign In</h1>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin(emailRef, passwordRef);
          }}
          className="signIn-body"
        >
          <input ref={emailRef} placeholder="email" type="text" />
          <input ref={passwordRef} placeholder="password" type="password" />
          <button type="submit" className="submit-btn">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
