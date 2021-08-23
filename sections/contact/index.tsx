import cs from "classnames";
import React, { useEffect, useRef } from "react";
import classes from "./index.module.scss";
import { useWasOnScreen } from "lib/hooks/useWasOnScreen";
import { useTheMatrix } from "lib/hooks/useTheMatrix";
import { AboutProps } from "types/about";
import Button from "components/button";
import { EMAIL } from "lib/constant";

const Contact = ({ asPath }: AboutProps) => {
  const matrix = useTheMatrix();
  const ref = useRef<HTMLDivElement | null>(null);
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
      className={cs(classes.container, { [classes.show]: wasInViewport })}
    >
      <div className={classes.content}>
        <div className={classes.header}>
          <div className={classes.headerText}>
            <span className={classes.number}> 0100: </span>Finally,
          </div>
          <div className={classes.matrix}>{matrix}</div>
        </div>

        <div className={classes.body}>
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
