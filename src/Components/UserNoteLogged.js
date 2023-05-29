import React from "react";

function UserNoteLogged() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
        fontSize: "20px",
      }}
    >
      <p>You need to be a signed in user to access this page.</p>
    </div>
  );
}

export default UserNoteLogged;
