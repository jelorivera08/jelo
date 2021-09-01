import React from "react";
import Button from "components/button";
import { EMAIL, SG } from "lib/constant";
import Link from "next/link";

import classes from "./index.module.scss";
import cs from "classnames";
import useTheme from "lib/context/theme-provider";

const Intro = () => {
  const { isLight } = useTheme();

  return (
    <section className={classes.container}>
      <div className={classes.content}>
        <h1 className={cs(classes.intro, { [classes.light]: isLight })}>
          Hi, I am
        </h1>
        <h2 className={cs(classes.name, { [classes.light]: isLight })}>
          Jelo Rivera.
        </h2>
        <div className={cs(classes.subtitle, { [classes.light]: isLight })}>
          I tinker with everything web.
        </div>
        <div className={cs(classes.body, { [classes.light]: isLight })}>
          {`I am a software engineer whose craft involves building beautiful, stable,
      and utilitarian digital platforms. Currently, I'm working on creating
      accessible, connection-centered digital products at `}
          <span
            className={cs(classes.company, "clickable", {
              [classes.light]: isLight,
            })}
          >
            <Link href={SG}>
              <a target="_blank"> Scentre Group</a>
            </Link>
          </span>
          .
        </div>

        <Button className={classes.button}>
          <a href={`mailto:${EMAIL}`}>Touch Base</a>
        </Button>
      </div>
    </section>
  );
};

export default Intro;
