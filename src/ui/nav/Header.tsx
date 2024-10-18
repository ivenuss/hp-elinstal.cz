import React from "react";
import { Nav } from "./Nav";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <header>
      <Nav />
    </header>
  );
};
