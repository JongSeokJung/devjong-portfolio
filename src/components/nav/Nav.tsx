import React from "react";
import "./nav.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CodeIcon from "@mui/icons-material/Code";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";

type Props = {};

const Nav = (props: Props) => {
  return (
    <nav>
      <a href="#header">
        <HomeOutlinedIcon />
      </a>
      <a href="#about">
        <PersonOutlineOutlinedIcon />
      </a>
      <a href="#portfolio">
        <CodeIcon />
      </a>
      <a href="#contact">
        <HandshakeOutlinedIcon />
      </a>
    </nav>
  );
};

export default Nav;
