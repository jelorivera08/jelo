import React from "react";
import Link from "next/link";
import cs from "classnames";
import classes from "./index.module.scss";
import useTheme from "lib/context/theme-provider";

const Icon = () => {
  const { isLight } = useTheme();

  return (
    <div className={classes.container}>
      <div className={cs(classes.icon, { [classes.light]: isLight })}>
        <Link href="/">J</Link>
      </div>
    </div>
  );
};

export default Icon;
