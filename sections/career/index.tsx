import cs from "classnames";
import React, { useEffect, useRef } from "react";
import classes from "./index.module.scss";
import { useWasOnScreen } from "lib/hooks/useWasOnScreen";
import { useTheMatrix } from "lib/hooks/useTheMatrix";
import { AboutProps } from "types/about";
import NavRail from "components/navrail";
import useTheme from "lib/context/theme-provider";

const Career = ({ asPath }: AboutProps) => {
  const matrix = useTheMatrix();
  const ref = useRef<HTMLDivElement | null>(null);
  const wasInViewport = useWasOnScreen(ref);
  const { isLight } = useTheme();

  useEffect(() => {
    if (asPath === "career") {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [asPath]);

  return (
    <section
      id="career"
      ref={ref}
      className={cs(
        classes.container,
        { [classes.light]: isLight },
        { [classes.show]: wasInViewport }
      )}
    >
      <div className={classes.content}>
        <div className={classes.header}>
          <div className={cs(classes.headerText, { [classes.light]: isLight })}>
            <span className={cs(classes.number, { [classes.light]: isLight })}>
              {" "}
              0010:{" "}
            </span>
            My career
          </div>
          <div className={classes.matrix}>{matrix}</div>
        </div>

        <div className={classes.body}>
          <NavRail />
        </div>
      </div>
    </section>
  );
};

export default Career;
