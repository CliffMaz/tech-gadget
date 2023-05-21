import React, { useRef, useState, useContext } from "react";
import "./Sign.scss";
import CloseIcon from "@mui/icons-material/Close";
import signin from "../../assets/3293465.jpg";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { LoginContext } from "../../Context/LoginContext";

function SignIn({ closeSignIn }) {
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const { userData } = useContext(LoginContext);

  const [user, setUser] = userData;

  const [inputHandling, setInputHandling] = useState([]);

  const notifySuccess = (succ) => {
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

  const notifyError = (err) => {
    toast.success(`🦄 ${err}`, {
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

  const handleLogin = () => {
    const userM = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    axios
      .post("http://localhost:4001/api/auth/login", userM)
      .then((res) => {
        const loggedInUser = res.data.user;
        //loggedInUser.isLoggedIn = true;
        localStorage.setItem("auth-token", res.data.token);
        setUser({ ...user, ...loggedInUser });

        notifySuccess("logged in Successfully");
        setTimeout(() => {
          closeSignIn();
        }, 3000);
      })
      .catch((err) => {
        console.log(err?.response?.data);
        setInputHandling([...err?.response?.data]);
        notifyError("failed to create a user");
      });
  };

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
          {inputHandling
            .filter((data) => data?.context?.key === "email")
            .map((data, key) => (
              <label key={key} className="error">
                {data.message}
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
          {inputHandling
            .filter((data) => data?.error === "Email or password is incorrect")
            .map((data) => (
              <label className="error">{data.error}</label>
            ))}
          <button type="submit" className="submit-btn">
            Sign In
          </button>
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

export default SignIn;
