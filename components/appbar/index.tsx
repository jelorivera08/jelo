import React, { useState } from "react";
import Icon from "components/icon";
import Button from "components/button";
import cs from "classnames";
import Burger from "components/burger";
import classes from "./index.module.scss";
import { useMediaQuery } from "react-responsive";
import { BREAKPOINTS } from "lib/constant";
import Link from "next/link";
import { useScrollDirection } from "react-use-scroll-direction";
import { useEffect } from "react";

const AppBar = () => {
  const isMobile = useMediaQuery({ query: BREAKPOINTS.MOBILE });
  const { isScrollingDown, isScrollingUp } = useScrollDirection();
  const [wasScrollingDown, setWasScrollingDown] = useState(false);

  useEffect(() => {
    if (isScrollingDown && !wasScrollingDown) {
      setWasScrollingDown(true);
    }

    if (isScrollingUp) {
      setWasScrollingDown(false);
    }
  }, [isScrollingDown, wasScrollingDown, isScrollingUp]);

  if (isMobile) {
    return (
      <header
        className={cs(classes.header, { [classes.hide]: wasScrollingDown })}
      >
        <div className={classes.container}>
          <div className={classes.icon}>
            <Icon />
          </div>
          <Burger />
        </div>
      </header>
    );
  }

  return (
    <header
      className={cs(classes.header, { [classes.hide]: wasScrollingDown })}
    >
      <div className={classes.container}>
        <div className={classes.icon}>
          <Icon />
        </div>
        <div className={classes.menubar}>
          <Link passHref href="/#about">
            <div
              className={cs(classes.menuItem, classes.item0001, "clickable")}
            >
              <span className={classes.menuNumber}>0001</span>: About
            </div>
          </Link>
          <Link passHref href="/#career">
            <div
              className={cs(classes.menuItem, classes.item0010, "clickable")}
            >
              <span className={classes.menuNumber}>0010</span>: Experience
            </div>
          </Link>
          <Link passHref href="/#work">
            <div
              className={cs(classes.menuItem, classes.item0011, "clickable")}
            >
              <span className={classes.menuNumber}>0011</span>: Work
            </div>
          </Link>

          <Link passHref href="/#contact">
            <div
              className={cs(classes.menuItem, classes.item0100, "clickable")}
            >
              <span className={classes.menuNumber}>0100</span>: Contact
            </div>
          </Link>

          <div className={cs(classes.menuItem, classes.resume)}>
            <Button className={classes.button}>
              <Link href="/resume.pdf">
                <a target="_blank">Resume</a>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppBar;
