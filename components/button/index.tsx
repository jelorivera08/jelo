import React, { ReactNode } from "react";
import cs from "classnames";
import classes from "./index.module.scss";
import useTheme from "lib/context/theme-provider";

const Icon = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const { isLight } = useTheme();

  return (
    <button
      className={cs(classes.button, className, { [classes.light]: isLight })}
    >
      {children}
    </button>
  );
};

export default Icon;
