import React, { useState } from "react";
import Login from "../Components/Login";
import Profile from "../Components/Profile";
import LoginContext from "../Components/LoginContext";

const UseContext = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [username, setUsername] = useState("");

  return (
    <div>
      <LoginContext.Provider
        value={{ username, setUsername, showProfile, setShowProfile }}
      >
        {showProfile ? <Profile /> : <Login />}
      </LoginContext.Provider>
    </div>
  );
};

export default UseContext;
