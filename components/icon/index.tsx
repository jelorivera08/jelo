import React from "react";
import Link from "next/link";

import classes from "./index.module.scss";

const Icon = () => (
  <div className={classes.container}>
    <div className={classes.icon}>
      <Link href="/">J</Link>
    </div>
  </div>
);

export default Icon;
