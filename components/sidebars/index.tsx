import {
  EMAIL,
  GITHUB,
  IG,
  TWITTER,
  MEDIUM,
  LINKEDIN,
  BREAKPOINTS,
} from "lib/constant";
import React from "react";
import {
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaMedium,
} from "react-icons/fa";
import classes from "./index.module.scss";
import cs from "classnames";
import { useMediaQuery } from "react-responsive";

const SideBars = () => {
  const isMobile = useMediaQuery({ query: BREAKPOINTS.MOBILE });

  if (isMobile) {
    return null;
  }

  return (
    <>
      <div className={classes.left}>
        <div className={classes.topLineLeft} />
        <div className={classes.icon}>
          <FaGithubSquare
            fill="#ccadbd"
            className="clickable"
            fontSize="20px"
            onClick={() => window.open(GITHUB, "_blank")}
          />
        </div>
        <div className={classes.icon}>
          <FaMedium
            fill="#ccadbd"
            className="clickable"
            fontSize="20px"
            onClick={() => window.open(MEDIUM, "_blank")}
          />
        </div>

        <div className={classes.icon}>
          <FaInstagramSquare
            fill="#ccadbd"
            className="clickable"
            fontSize="20px"
            onClick={() => window.open(IG, "_blank")}
          />
        </div>
        <div className={classes.icon}>
          <FaTwitterSquare
            fill="#ccadbd"
            className="clickable"
            fontSize="20px"
            onClick={() => window.open(TWITTER, "_blank")}
          />
        </div>
        <div className={classes.icon}>
          <FaLinkedin
            fill="#ccadbd"
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
};

export default SideBars;
