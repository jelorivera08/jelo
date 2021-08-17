import React from "react";
import classes from "./index.module.scss";

const Loader = () => (
  <div className={classes.container}>
    <div className={classes.circle}>
      <div className={classes.icon}>J</div>
    </div>
  </div>
);

export default Loader;
