import cs from "classnames";
import React, { useEffect, useRef } from "react";
import classes from "./index.module.scss";
import { useWasOnScreen } from "lib/hooks/useWasOnScreen";
import { useTheMatrix } from "lib/hooks/useTheMatrix";
import { AboutProps } from "types/about";
import Button from "components/button";
import { EMAIL } from "lib/constant";
import useTheme from "lib/context/theme-provider";

const Contact = ({ asPath }: AboutProps) => {
  const matrix = useTheMatrix();
  const ref = useRef<HTMLDivElement | null>(null);
  const { isLight } = useTheme();
  const wasInViewport = useWasOnScreen(ref);

  useEffect(() => {
    if (asPath === "contact") {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [asPath]);

  return (
    <section
      id="contact"
      ref={ref}
      className={cs(
        classes.container,
        { [classes.light]: isLight },
        { [classes.show]: wasInViewport }
      )}
    >
      <div className={classes.content}>
        <div className={cs(classes.header, { [classes.light]: isLight })}>
          <div className={classes.headerText}>
            <span className={cs(classes.number, { [classes.light]: isLight })}>
              {" "}
              0100:{" "}
            </span>
            Finally,
          </div>
          <div className={classes.matrix}>{matrix}</div>
        </div>

        <div className={cs(classes.body, { [classes.light]: isLight })}>
          <div className={classes.subtitle}>Ping me up!</div>

          <div className={classes.text}>
            Whether it be a question, a problem, or just a suggestion, I’m
            always happy to help.
          </div>

          <Button className={classes.button}>
            <a href={`mailto:${EMAIL}`}>Say Hi</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
