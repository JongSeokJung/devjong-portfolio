import React, { useState } from "react";
import "./nav.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CodeIcon from "@mui/icons-material/Code";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";

type Props = {};

const Nav = (props: Props) => {
  const [active, setActive] = useState("#");
  return (
    <nav>
      <a
        href="/#"
        className={active === "#" ? "active" : ""}
        onClick={() => setActive("#")}
      >
        <HomeOutlinedIcon />
      </a>
      <a
        href="#about"
        className={active === "#about" ? "active" : ""}
        onClick={() => setActive("#about")}
      >
        <PersonOutlineOutlinedIcon />
      </a>
      <a
        href="#portfolio"
        className={active === "#portfolio" ? "active" : ""}
        onClick={() => setActive("#portfolio")}
      >
        <CodeIcon />
      </a>
      <a
        href="#contact"
        className={active === "#contact" ? "active" : ""}
        onClick={() => setActive("#contact")}
      >
        <HandshakeOutlinedIcon />
      </a>
    </nav>
  );
};

export default Nav;
