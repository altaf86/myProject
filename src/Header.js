import React, { useContext } from "react";
import { UserAuthContext } from "./context/UserContext";
const Header = () => {
  const { name } = useContext(UserAuthContext);
  console.log(name);
  return (
    <>
      <h1>my name is {name}</h1>
    </>
  );
};

export default Header;
