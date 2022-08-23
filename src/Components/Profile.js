import React, { useContext } from "react";
import LoginContext from "./LoginContext";

const Profile = () => {
  const { username } = useContext(LoginContext);

  return (
    <>
      <h1>Profile</h1>
      <h3>Username : {username}</h3>
    </>
  );
};

export default Profile;
