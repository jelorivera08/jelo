import cs from "classnames";
import {
  UNIVERSITY,
  GOFLUENT,
  VC,
  METROBANK,
  SG,
  RANDOM_BINARY_STRING,
} from "lib/constant";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import classes from "./index.module.scss";
import me from "public/me.png";
import { useWasOnScreen } from "lib/hooks/useWasOnScreen";
import { useTheMatrix } from "lib/hooks/useTheMatrix";
import { AboutProps } from "types/about";

const Career = ({ asPath }: AboutProps) => {
  const matrix = useTheMatrix();
  const ref = useRef<HTMLDivElement | null>(null);
  const wasInViewport = useWasOnScreen(ref);

  useEffect(() => {
    if (asPath === "career") {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [asPath]);

  return (
    <section
      id="career"
      ref={ref}
      className={cs(classes.container, { [classes.show]: wasInViewport })}
    >
      <div className={classes.content}>
        <div className={classes.header}>
          <div className={classes.headerText}>
            <span className={classes.number}> 0010: </span>My career
          </div>
          <div className={classes.matrix}>{matrix}</div>
        </div>

        <div className={classes.body}>body</div>
      </div>
    </section>
  );
};

export default Career;
