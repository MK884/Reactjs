import { useState } from "preact/hooks";
import preactLogo from "./assets/preact.svg";
import viteLogo from "/vite.svg";
import "./app.css";
import UserContextProvider from "./Context/UserContextProvider";
import { Login } from "./Components/Login";
import { Profile } from "./Components/Profile";

export function App() {
  return (
    <UserContextProvider>
      <h1 className="text-3xl font-bold underline">Simple Context UseCase</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  );
}
