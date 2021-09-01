import React, { useState } from "react";
import cs from "classnames";
import Link from "next/link";
import Button from "components/button";
import { Twirl as Hamburger } from "hamburger-react";
import classes from "./index.module.scss";
import useTheme from "lib/context/theme-provider";

const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLight } = useTheme();
  const handleClose = () => setIsOpen(false);

  return (
    <div className={classes.container}>
      <div className={classes.burger}>
        <Hamburger
          toggled={isOpen}
          toggle={setIsOpen}
          color={isLight ? "#e36208" : "#68b1d8"}
        />
      </div>

      <div className={cs(classes.overlay, { [classes.show]: isOpen })}>
        <div className={cs(classes.menubar, { [classes.light]: isLight })}>
          <Link passHref href="/#about">
            <div
              className={cs(
                classes.menuItem,
                { [classes.light]: isLight },
                "clickable"
              )}
              onClick={handleClose}
            >
              <div
                className={cs(classes.itemNumber, { [classes.light]: isLight })}
              >
                0001:
              </div>{" "}
              <div>About</div>
            </div>
          </Link>
          <Link passHref href="/#career">
            <div
              className={cs(
                classes.menuItem,
                { [classes.light]: isLight },
                "clickable"
              )}
              onClick={handleClose}
            >
              <div
                className={cs(classes.itemNumber, { [classes.light]: isLight })}
              >
                0010:
              </div>{" "}
              <div>Experience</div>
            </div>
          </Link>
          <Link passHref href="/#work">
            <div
              className={cs(
                classes.menuItem,
                { [classes.light]: isLight },
                "clickable"
              )}
              onClick={handleClose}
            >
              <div
                className={cs(classes.itemNumber, { [classes.light]: isLight })}
              >
                0011:
              </div>{" "}
              <div>Work</div>
            </div>
          </Link>
          <Link passHref href="/#contact">
            <div
              className={cs(
                classes.menuItem,
                { [classes.light]: isLight },
                "clickable"
              )}
              onClick={handleClose}
            >
              <div
                className={cs(classes.itemNumber, { [classes.light]: isLight })}
              >
                0100:
              </div>{" "}
              <div>Contact</div>
            </div>
          </Link>

          <div className={cs(classes.menuItem, { [classes.light]: isLight })}>
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
