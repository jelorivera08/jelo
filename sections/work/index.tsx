import cs from "classnames";
import React, { useEffect, useRef } from "react";
import classes from "./index.module.scss";
import { useWasOnScreen } from "lib/hooks/useWasOnScreen";
import { useTheMatrix } from "lib/hooks/useTheMatrix";
import { AboutProps } from "types/about";
import pillars from "public/pillars.png";
import ComingSoon from "components/coming-soon";
import Craft from "components/craft";
import useTheme from "lib/context/theme-provider";
import ariankitektura from "public/ariankitektura.png";
import { MEDIUM, MEDIUM_ARTICLE, ARIANKITEKTURA } from "lib/constant";

const Work = ({ asPath }: AboutProps) => {
  const matrix = useTheMatrix();
  const ref = useRef<HTMLDivElement | null>(null);
  const wasInViewport = useWasOnScreen(ref);
  const { isLight } = useTheme();

  useEffect(() => {
    if (asPath === "work") {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [asPath]);

  return (
    <section
      id="work"
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
              0011:{" "}
            </span>
            My craft
          </div>
          <div className={classes.matrix}>{matrix}</div>
        </div>

        <div className={classes.body}>
          <Craft
            title={{
              text: "Ariankitektura Studios",
              url: ARIANKITEKTURA,
            }}
            description="Ariankitektura is a studio web platform exhibiting the various projects built and designed by Architent Arian Sustento."
            techStack={["React", "NextJS", "Sass"]}
            url={ARIANKITEKTURA}
            image={ariankitektura}
          />

          <Craft
            title={{
              text: "Medium Articles",
              url: MEDIUM_ARTICLE,
            }}
            description="Articles that covers a wide range of topics, from the latest tech
            trends to the best practices of the industry. Centered around the
            fundamentals of React and Front End Development."
            techStack={["React", "Typescript", "Webpack"]}
            url={MEDIUM}
            image={pillars}
          />
        </div>
      </div>
    </section>
  );
};

export default Work;
