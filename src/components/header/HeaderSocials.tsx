import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

type Props = {};

const HeaderSocials = (props: Props) => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/jongsjung/"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedInIcon />
      </a>
      <a
        href="https://github.com/JongSeokJung"
        target="_blank"
        rel="noreferrer"
      >
        <GitHubIcon />
      </a>
    </div>
  );
};

export default HeaderSocials;
