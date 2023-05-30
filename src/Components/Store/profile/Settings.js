import React, { useContext, useRef, useState } from "react";
import "./Settings.scss";
import ipad from "../../../assets/ipad.png";
import { LoginContext } from "../../../Context/LoginContext";
import UserNoteLogged from "../../UserNoteLogged";
import axios from "axios";

function Settings() {
  const { userData } = useContext(LoginContext);
  const [user, setUser] = userData;
  const fullnameRef = useRef("");
  const usernameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  let toUpdateUser = { ...user, password: "" };

  const token = localStorage.getItem("auth-token");
  const handleSubmit = (e) => {
    console.log(toUpdateUser);
    e.preventDefault();
    if (fullnameRef.current.value !== "") {
      toUpdateUser = {
        ...toUpdateUser,
        fullname: fullnameRef.current.value,
      };
      console.log("full", toUpdateUser);
    }
    if (usernameRef.current.value !== "") {
      toUpdateUser = { ...toUpdateUser, username: usernameRef.current.value };
      console.log("usern", toUpdateUser);
    }
    if (emailRef.current.value !== "") {
      toUpdateUser = {
        ...toUpdateUser,
        email: emailRef.current.value,
      };
      console.log("email", toUpdateUser);
    }
    console.log(toUpdateUser);

    axios
      .put(
        `http://localhost:4001/api/user/update`,
        toUpdateUser,

        {
          headers: { authtoken: token },
        }
      )
      .then((res) => {
        setUser(res.data.ne);
        console.log(res.data.ne);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return user?._id ? (
    <section className="settings">
      <h2>Settings</h2>

      <form className="update-form" onSubmit={handleSubmit}>
        <div className="form-content">
          <div className="update-left">
            <div>
              <label>Fullname</label>
              <input ref={fullnameRef} type="text" placeholder="Fullname" />
            </div>
            <div>
              <label>Username</label>
              <input ref={usernameRef} type="text" placeholder="Username" />
            </div>
            <div>
              <label>Email</label>
              <input ref={emailRef} type="text" placeholder="Email" />
            </div>

            <div>
              <label>New Password</label>
              <input ref={passwordRef} type="text" placeholder="New Password" />
            </div>
            <div>
              <label>Confirm Password</label>
              <input type="text" placeholder="Comfirm Password" />
            </div>
            <div>
              <label>Display Picture</label>
              <input type="file" />
            </div>
          </div>
          <div className="update-right">
            <img src={ipad} />
          </div>
        </div>
        <button type="submit">Update</button>
      </form>
    </section>
  ) : (
    <>
      <UserNoteLogged />
    </>
  );
}

export default Settings;
