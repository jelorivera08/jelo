import React from "react";
import Icon from "components/icon";
import Button from "components/button";
import cs from "classnames";
import Burger from "components/burger";
import classes from "./index.module.scss";
import { useMediaQuery } from "react-responsive";
import { BREAKPOINTS } from "lib/constant";

const AppBar = () => {
  const isMobile = useMediaQuery({ query: BREAKPOINTS.MOBILE });

  if (isMobile) {
    return (
      <div className={classes.container}>
        <div className={classes.icon}>
          <Icon />
        </div>
        <Burger />
      </div>
    );
  }

  return (
    <div className={classes.container}>
      <div className={classes.icon}>
        <Icon />
      </div>
      <div className={classes.menubar}>
        <div className={cs(classes.menuItem, classes.item0001, "clickable")}>
          <span className={classes.menuNumber}>0001</span>: About
        </div>
        <div className={cs(classes.menuItem, classes.item0010, "clickable")}>
          <span className={classes.menuNumber}>0010</span>: Experience
        </div>
        <div className={cs(classes.menuItem, classes.item0011, "clickable")}>
          <span className={classes.menuNumber}>0011</span>: Work
        </div>
        <div className={cs(classes.menuItem, classes.item0100, "clickable")}>
          <span className={classes.menuNumber}>0100</span>: Contact
        </div>

        <div className={cs(classes.menuItem, classes.resume)}>
          <Button className={classes.button}>Resume</Button>
        </div>
      </div>
    </div>
  );
};

export default AppBar;
