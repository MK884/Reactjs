import React from "react";
import UserContext from "../Context/UserContext";
import { useContext } from "preact/hooks";

export const Login = () => {
  const { setUser } = useContext(UserContext);
  const [UserName, setUserName] = React.useState("");
  const [Password, setPassword] = React.useState("");

  const handleBtn = (e) => {
    setUser({ UserName, Password });
  };

  return (
    <>
      <input
        type="text"
        placeholder="username"
        value={UserName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={Password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleBtn}>Submit</button>
    </>
  );
};
