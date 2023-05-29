import React, { useContext } from "react";
import "./Settings.scss";
import ipad from "../../../assets/ipad.png";
import { LoginContext } from "../../../Context/LoginContext";
import UserNoteLogged from "../../UserNoteLogged";

function Settings() {
  const { userData } = useContext(LoginContext);
  const [user] = userData;
  return user?._id ? (
    <section className="settings">
      <h2>Settings</h2>

      <form className="update-form">
        <div className="form-content">
          <div className="update-left">
            <div>
              <label>Username</label>
              <input
                type="text"
                placeholder="Username"
                value={user?.username}
              />
            </div>
            <div>
              <label>Email</label>
              <input type="text" placeholder="Email" value={user?.email} />
            </div>

            <div>
              <label>New Password</label>
              <input type="text" placeholder="New Password" />
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
        <button>Update</button>
      </form>
    </section>
  ) : (
    <>
      <UserNoteLogged />
    </>
  );
}

export default Settings;
