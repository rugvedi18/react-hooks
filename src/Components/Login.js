import React, { useContext } from "react";
import LoginContext from "./LoginContext";

const Login = () => {
  const { setUsername, setShowProfile } = useContext(LoginContext);

  return (
    <>
      <input
        type="text"
        placeholder="Enter your username"
        onChange={(event) => setUsername(event.target.value)}
      />

      <div>
        <input type="password" placeholder="Enter your password" />
      </div>
      <button onClick={() => setShowProfile(true)}>Login</button>
      {/* {showProfile && { username }} */}
    </>
  );
};

export default Login;
