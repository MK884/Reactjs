import React from "react";
import { LevelContext } from "../Context/LevelContext";

export const Section = ({ children }) => {
  const level = React.useContext(LevelContext);
  return (
    <section>
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
};
