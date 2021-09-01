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
import useTheme from "lib/context/theme-provider";

const SideBars = () => {
  const isMobile = useMediaQuery({ query: BREAKPOINTS.MOBILE });
  const { isLight } = useTheme();

  if (isMobile) {
    return null;
  }

  return (
    <>
      <div className={classes.left}>
        <div
          className={cs(classes.topLineLeft, {
            [classes.light]: isLight,
          })}
        />
        <div className={classes.icon}>
          <FaGithubSquare
            fill={isLight ? "#015cc5" : "#ccadbd"}
            className="clickable"
            fontSize="20px"
            onClick={() => window.open(GITHUB, "_blank")}
          />
        </div>
        <div className={classes.icon}>
          <FaMedium
            fill={isLight ? "#015cc5" : "#ccadbd"}
            className="clickable"
            fontSize="20px"
            onClick={() => window.open(MEDIUM, "_blank")}
          />
        </div>

        <div className={classes.icon}>
          <FaInstagramSquare
            fill={isLight ? "#015cc5" : "#ccadbd"}
            className="clickable"
            fontSize="20px"
            onClick={() => window.open(IG, "_blank")}
          />
        </div>
        <div className={classes.icon}>
          <FaTwitterSquare
            fill={isLight ? "#015cc5" : "#ccadbd"}
            className="clickable"
            fontSize="20px"
            onClick={() => window.open(TWITTER, "_blank")}
          />
        </div>
        <div className={classes.icon}>
          <FaLinkedin
            fill={isLight ? "#015cc5" : "#ccadbd"}
            className="clickable"
            fontSize="20px"
            onClick={() => window.open(LINKEDIN, "_blank")}
          />
        </div>
      </div>
      <div className={classes.right}>
        <div
          className={cs(classes.topLineRight, {
            [classes.light]: isLight,
          })}
        />
        <div
          className={cs(classes.text, "clickable", {
            [classes.light]: isLight,
          })}
        >
          <a href={`mailto:${EMAIL}`}>jelorivera08@gmail.com</a>
        </div>
      </div>
    </>
  );
};

export default SideBars;
