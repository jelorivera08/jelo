import React, { useState } from "react";
import cs from "classnames";
import Button from "components/button";
import { Twirl as Hamburger } from "hamburger-react";
import classes from "./index.module.scss";

const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={classes.container}>
      <div className={classes.burger}>
        <Hamburger toggled={isOpen} toggle={setIsOpen} color="#f1ecc3" />
      </div>

      <div className={cs(classes.overlay, { [classes.show]: isOpen })}>
        <div className={cs(classes.menubar)}>
          <div className={cs(classes.menuItem, "clickable")}>
            <div className={classes.itemNumber}>0001:</div> <div>About</div>
          </div>
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
            <Button className={classes.button}>Resume</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Burger;
