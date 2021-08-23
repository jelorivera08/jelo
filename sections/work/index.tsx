import cs from "classnames";
import React, { useEffect, useRef } from "react";
import classes from "./index.module.scss";
import { useWasOnScreen } from "lib/hooks/useWasOnScreen";
import { useTheMatrix } from "lib/hooks/useTheMatrix";
import { AboutProps } from "types/about";
import NavRail from "components/navrail";

const Work = ({ asPath }: AboutProps) => {
  const matrix = useTheMatrix();
  const ref = useRef<HTMLDivElement | null>(null);
  const wasInViewport = useWasOnScreen(ref);

  useEffect(() => {
    if (asPath === "work") {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [asPath]);

  return (
    <section
      id="work"
      ref={ref}
      className={cs(classes.container, { [classes.show]: wasInViewport })}
    >
      <div className={classes.content}>
        <div className={classes.header}>
          <div className={classes.headerText}>
            <span className={classes.number}> 0011: </span>My craft
          </div>
          <div className={classes.matrix}>{matrix}</div>
        </div>

        <div className={classes.body}>
          <div className={classes.underMaintenance}>
            🛠️ Under Maintenance 🛠️
          </div>

          <div className={classes.comingSoon}>Coming Soon</div>
        </div>
      </div>
    </section>
  );
};

export default Work;
