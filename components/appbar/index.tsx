import React from "react";
import Icon from "components/icon";
import Button from "components/button";
import classes from "./index.module.scss";

const AppBar = () => (
  <div className={classes.container}>
    <div className={classes.icon}>
      <Icon />
    </div>
    <div className={classes.menubar}>
      <div className={classes.menuItem}>
        <span className={classes.menuNumber}>0001</span>: About
      </div>
      <div className={classes.menuItem}>
        <span className={classes.menuNumber}>0010</span>: Experience
      </div>
      <div className={classes.menuItem}>
        <span className={classes.menuNumber}>0011</span>: Work
      </div>
      <div className={classes.menuItem}>
        <span className={classes.menuNumber}>0100</span>: Contact
      </div>

      <div className={classes.menuItem}>
        <Button className={classes.button}>Resume</Button>
      </div>
    </div>
  </div>
);

export default AppBar;
