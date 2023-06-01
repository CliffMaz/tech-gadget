import React, { useRef, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import signin from "../../assets/Wavy_Tech-11_Single-10.jpg";
import "./Sign.scss";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register({ registerClose, signIn }) {
  const fullnameRef = useRef("");
  const usernameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const [inputHandling, setInputHandling] = useState([]);

  const notifySuccess = (succ) => {
    toast.success(`🦄 ${succ}`, {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleRegister = () => {
    const newUser = {
      fullname: fullnameRef.current.value,
      username: usernameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    axios
      .post("http://localhost:4001/api/auth/register", newUser)
      .then((res) => {
        notifySuccess("user created");
        setTimeout(() => {
          registerClose();
        }, 3000);
      })
      .catch((err) => {
        setInputHandling([...err.response.data]);
        //notifyError("failed to create a user");
      });
  };
  return (
    <div className="sign-form">
      <div className="sign-left">
        <img alt="" src={signin} />
      </div>
      <div className="sign-right">
        <div className="close-btn">
          <CloseIcon
            onClick={(e) => {
              e.preventDefault();
              registerClose();
            }}
          />
        </div>
        <div>
          <h1>Sign Up</h1>
        </div>
        <form
          className="signIn-body"
          onSubmit={(e) => {
            e.preventDefault();
            handleRegister();
          }}
        >
          <input ref={fullnameRef} placeholder="fullname" type="text" />
          {inputHandling
            .filter((data) => data?.context?.key === "fullname")
            .map((data, key) => (
              <label key={key} className="error">
                {data.message}
              </label>
            ))}

          <input ref={usernameRef} placeholder="username" type="text" />
          {inputHandling
            .filter((data) => data?.context?.key === "username")
            .map((data, key) => (
              <label key={key} className="error">
                {data.message}
              </label>
            ))}
          <input ref={emailRef} placeholder="email" type="text" />
          {inputHandling
            .filter((data) => data?.context?.key === "email")
            .map((data, key) => (
              <label key={key} className="error">
                {data.message}
              </label>
            ))}
          {inputHandling
            .filter((data) => data?.context === "emailUsed")
            .map((data, key) => (
              <label key={key} className="error">
                {data.emailUsed}
              </label>
            ))}
          <input ref={passwordRef} placeholder="password" type="password" />
          {inputHandling
            .filter((data) => data?.context?.key === "password")
            .map((data, key) => (
              <label key={key} className="error">
                {data.message}
              </label>
            ))}

          <button type="submit" className="submit-btn">
            Sign Up
          </button>
          <p
            className="aUser"
            onClick={(e) => {
              e.preventDefault();
              registerClose();
              signIn();
            }}
          >
            already a user Sign In
          </p>
        </form>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default Register;
