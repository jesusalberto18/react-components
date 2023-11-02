import React from "react";
import { Route, Switch } from "react-router-dom";

interface MainProps {
  children: React.ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <main className="main">
      {children}
    </main>
  );
};

export default Main;