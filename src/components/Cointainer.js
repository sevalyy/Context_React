import React from "react";
import Button from "./Button";
import Header from "./Header";
import Profile from "./Profile";

import { useTheme } from "../context/ThemeContext";

function Cointainer() {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <br />

      <Header />
      <hr />
      <Button />
      <br />

      <hr />
      <Profile />
    </div>
  );
}

export default Cointainer;
