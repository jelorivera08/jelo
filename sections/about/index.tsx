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
import useTheme from "lib/context/theme-provider";

const About = ({ asPath }: AboutProps) => {
  const matrix = useTheMatrix();
  const [isHoveringImage, setIsHoveringImage] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const wasInViewport = useWasOnScreen(ref);
  const { isLight } = useTheme();

  useEffect(() => {
    if (asPath === "about") {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [asPath]);

  return (
    <section
      id="about"
      ref={ref}
      className={cs(
        classes.container,
        { [classes.show]: wasInViewport },
        { [classes.light]: isLight }
      )}
    >
      <div className={classes.content}>
        <div className={classes.header}>
          <div className={cs(classes.headerText, { [classes.light]: isLight })}>
            <span className={cs(classes.number, { [classes.light]: isLight })}>
              {" "}
              0001:{" "}
            </span>
            About me
          </div>
          <div className={classes.matrix}>{matrix}</div>
        </div>
        <div className={classes.body}>
          <div
            className={cs(classes.text, { [classes.textShow]: wasInViewport })}
          >
            <p className={cs({ [classes.light]: isLight })}>
              Hi, I&apos;m Jelo and I am passionate about all things code. My
              first encounter with software was way back in{" "}
              <span
                className={cs(
                  classes.highlight,
                  {
                    [classes.light]: isLight,
                  },
                  "clickable"
                )}
              >
                <Link href={UNIVERSITY}>
                  <a target="_blank">my University</a>
                </Link>
              </span>{" "}
              thesis. The thesis was about video streaming compressing using C
              and C++. It was my catalyst into entering the realm of software
              engineering.
            </p>

            <p className={cs({ [classes.light]: isLight })}>
              Nowadays, I&apos;ve had the pleasure of working at
              <span
                className={cs(classes.highlight, "clickable", {
                  [classes.light]: isLight,
                })}
              >
                <Link href={METROBANK}>
                  <a target="_blank"> a huge banking corporation</a>
                </Link>
              </span>
              ,
              <span
                className={cs(
                  classes.highlight,
                  {
                    [classes.light]: isLight,
                  },
                  "clickable"
                )}
              >
                <Link href={GOFLUENT}>
                  <a target="_blank">
                    {" "}
                    an international language learning company
                  </a>
                </Link>
              </span>
              , and
              <span
                className={cs(
                  classes.highlight,
                  {
                    [classes.light]: isLight,
                  },
                  "clickable"
                )}
              >
                <Link href={VC}>
                  <a target="_blank"> a start-up.</a>
                </Link>
              </span>{" "}
              Now, I am working at{" "}
              <span
                className={cs(
                  classes.highlight,
                  {
                    [classes.light]: isLight,
                  },
                  "clickable"
                )}
              >
                <Link href={SG}>
                  <a target="_blank"> Scentre Group</a>
                </Link>
              </span>{" "}
              as a Software Engineer who is focused on building different
              digital platforms connecting consumers, retailers and the
              business.
            </p>

            <div className={cs({ [classes.light]: isLight })}>
              Here are some of the technologies I have used to build my recent
              projects.
            </div>

            <div className={classes.listContainer}>
              <div className={classes.list}>
                <div className={classes.listItem}>
                  <div
                    className={cs(classes.bullet, { [classes.light]: isLight })}
                  />
                  <span className={cs({ [classes.light]: isLight })}>
                    React
                  </span>
                </div>
                <div className={classes.listItem}>
                  <div
                    className={cs(classes.bullet, { [classes.light]: isLight })}
                  />
                  <span className={cs({ [classes.light]: isLight })}>
                    Javascript
                  </span>
                </div>
                <div className={classes.listItem}>
                  <div
                    className={cs(classes.bullet, { [classes.light]: isLight })}
                  />
                  <span className={cs({ [classes.light]: isLight })}>
                    Typescript
                  </span>
                </div>
              </div>

              <div className={classes.list}>
                <div className={classes.listItem}>
                  <div
                    className={cs(classes.bullet, { [classes.light]: isLight })}
                  />
                  <span className={cs({ [classes.light]: isLight })}>
                    Node JS
                  </span>
                </div>
                <div className={classes.listItem}>
                  <div
                    className={cs(classes.bullet, { [classes.light]: isLight })}
                  />
                  <span className={cs({ [classes.light]: isLight })}>
                    Google Cloud Platform
                  </span>
                </div>
                <div className={classes.listItem}>
                  <div
                    className={cs(classes.bullet, { [classes.light]: isLight })}
                  />
                  <span className={cs({ [classes.light]: isLight })}>
                    GraphQL
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            className={classes.image}
            onMouseEnter={() => setIsHoveringImage(true)}
            onMouseLeave={() => setIsHoveringImage(false)}
          >
            <Image src={me} alt="jelo" className={classes.circle} />
            <div
              className={cs(
                classes.imageDecor,
                { [classes.light]: isLight },
                {
                  [classes.enlarge]: isHoveringImage,
                }
              )}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
