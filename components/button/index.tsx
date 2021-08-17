import React, { ReactNode } from "react";
import cs from "classnames";
import classes from "./index.module.scss";

const Icon = ({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) => <button className={cs(classes.button, className)}>{children}</button>;

export default Icon;
