import React, { useRef, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import signin from "../../assets/Wavy_Tech-11_Single-10.jpg";
import "./Sign.scss";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Password } from "@mui/icons-material";

function Register({ registerClose, signIn }) {
  const fullnameRef = useRef("");
  const usernameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const [inputError, setInputError] = useState(false);
  const [inputHandling, setInputHandling] = useState([]);

  const notify = (succ) => {
    toast.success(`🦄 ${succ}`, {
      position: "top-center",
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
        notify("User Created Successfully");
        setTimeout(() => {
          registerClose();
        }, 3000);
      })
      .catch((err) => {
        setInputHandling([...err.response.data]);
        setInputError(true);
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
            .map((data) => (
              <label className="error">{data.message}</label>
            ))}

          <input ref={usernameRef} placeholder="username" type="text" />
          {inputHandling
            .filter((data) => data?.context?.key === "username")
            .map((data) => (
              <label className="error">{data.message}</label>
            ))}
          <input ref={emailRef} placeholder="email" type="text" />
          {inputHandling
            .filter((data) => data?.context?.key === "email")
            .map((data) => (
              <label className="error">{data.message}</label>
            ))}
          {inputHandling
            .filter((data) => data?.context === "emailUsed")
            .map((data) => (
              <label className="error">{data.emailUsed}</label>
            ))}
          <input ref={passwordRef} placeholder="password" type="password" />
          {inputHandling
            .filter((data) => data?.context?.key === "password")
            .map((data) => (
              <label className="error">{data.message}</label>
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
