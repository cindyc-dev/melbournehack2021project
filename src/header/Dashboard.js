import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router";

import { auth, db, logout } from "./firebase";

function Dashboard({ name, email, uid }) {
  return (
    <div className="dashboard">
      <div className="dashboard__container">
        Logged in as: {name}
        <div>Email: {email}</div>
        <div>User ID: {uid}</div>
        <button className="dashboard__btn" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}
export default Dashboard;