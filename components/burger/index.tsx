import React, { useState } from "react";
import cs from "classnames";
import Link from "next/link";
import Button from "components/button";
import { Twirl as Hamburger } from "hamburger-react";
import classes from "./index.module.scss";

const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <div className={classes.container}>
      <div className={classes.burger}>
        <Hamburger toggled={isOpen} toggle={setIsOpen} color="#ccadbd" />
      </div>

      <div className={cs(classes.overlay, { [classes.show]: isOpen })}>
        <div className={cs(classes.menubar)}>
          <Link passHref href="/#about">
            <div
              className={cs(classes.menuItem, "clickable")}
              onClick={handleClose}
            >
              <div className={classes.itemNumber}>0001:</div> <div>About</div>
            </div>
          </Link>
          <div className={cs(classes.menuItem, "clickable")}>
            <div className={classes.itemNumber}>0010:</div>{" "}
            <div>Experience</div>
          </div>
          <div className={cs(classes.menuItem, "clickable")}>
            <div className={classes.itemNumber}>0011:</div> <div>Work</div>
          </div>
          <div className={cs(classes.menuItem, "clickable")}>
            <div className={classes.itemNumber}>0100:</div> <div>Contact</div>
          </div>

          <div className={cs(classes.menuItem)}>
            <Button className={classes.button}>
              <Link href="/resume.pdf">
                <a target="_blank">Resume</a>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Burger;
