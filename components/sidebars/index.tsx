import { EMAIL, GITHUB, IG, TWITTER, LINKEDIN } from "lib/constant";
import React from "react";
import {
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaLinkedin,
} from "react-icons/fa";
import classes from "./index.module.scss";
import cs from "classnames";

const AppBar = () => (
  <>
    <div className={classes.left}>
      <div className={classes.topLineLeft} />
      <div className={classes.icon}>
        <FaGithubSquare
          fill="#c9d8b6"
          className="clickable"
          fontSize="20px"
          onClick={() => window.open(GITHUB, "_blank")}
        />
      </div>
      <div className={classes.icon}>
        <FaInstagramSquare
          fill="#c9d8b6"
          className="clickable"
          fontSize="20px"
          onClick={() => window.open(IG, "_blank")}
        />
      </div>
      <div className={classes.icon}>
        <FaTwitterSquare
          fill="#c9d8b6"
          className="clickable"
          fontSize="20px"
          onClick={() => window.open(TWITTER, "_blank")}
        />
      </div>
      <div className={classes.icon}>
        <FaLinkedin
          fill="#c9d8b6"
          className="clickable"
          fontSize="20px"
          onClick={() => window.open(LINKEDIN, "_blank")}
        />
      </div>
    </div>
    <div className={classes.right}>
      <div className={classes.topLineRight} />
      <div className={cs(classes.text, "clickable")}>
        <a href={`mailto:${EMAIL}`}>jelorivera08@gmail.com</a>
      </div>
    </div>
  </>
);

export default AppBar;
