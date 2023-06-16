import React from "react";
import CTA from "./CTA";
import ME from "../../assets/me1.png";
import HeaderSocials from "./HeaderSocials";
import "./header.css";
type Props = {};

const Header = (props: Props) => {
  return (
    <header id="header">
      <div className="container header__container">
        <h5>Hello</h5>
        <h1>Jongseok Jung</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>

        <div className="me">
          <img src={ME} alt="me" className="profile__pic" />
        </div>
      </div>
    </header>
  );
};

export default Header;
