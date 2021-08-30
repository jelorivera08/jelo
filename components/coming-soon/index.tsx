import React, { ReactNode } from "react";
import classes from "./index.module.scss";

const ComingSoon = () => (
  <div className={classes.body}>
    <div className={classes.underMaintenance}>🛠️ Under Maintenance 🛠️</div>

    <div className={classes.comingSoon}>Coming Soon</div>
  </div>
);

export default ComingSoon;
