import cs from "classnames";
import useTheme from "lib/context/theme-provider";
import React from "react";
import classes from "./index.module.scss";

const ComingSoon = () => {
  const { isLight } = useTheme();

  return (
    <div className={cs(classes.body, { [classes.light]: isLight })}>
      <div
        className={cs(classes.underMaintenance, { [classes.light]: isLight })}
      >
        🛠️ Under Maintenance 🛠️
      </div>

      <div className={cs(classes.comingSoon, { [classes.light]: isLight })}>
        Coming Soon
      </div>
    </div>
  );
};

export default ComingSoon;
