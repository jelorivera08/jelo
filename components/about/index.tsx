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

const About = () => {
  const matrix = useTheMatrix();
  const [isHoveringImage, setIsHoveringImage] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const wasInViewport = useWasOnScreen(ref);

  return (
    <section
      id="about"
      ref={ref}
      className={cs(classes.container, { [classes.show]: wasInViewport })}
    >
      <div className={classes.content}>
        <div className={classes.header}>
          <div className={classes.headerText}>
            <span className={classes.number}> 0001: </span>About me
          </div>
          <div className={classes.matrix}>{matrix}</div>
        </div>
        <div className={classes.body}>
          <div className={classes.text}>
            <p>
              Hi, I&apos;m Jelo and I am passionate about all things code. My
              first encounter with software was way back in{" "}
              <span className={cs(classes.highlight, "clickable")}>
                <Link href={UNIVERSITY}>
                  <a target="_blank">my University</a>
                </Link>
              </span>{" "}
              thesis. The thesis was about video streaming compressing using C
              and C++. It was my catalyst into entering the realm of software
              engineering.
            </p>

            <p>
              Nowadays, I&apos;ve had the pleasure of working at
              <span className={cs(classes.highlight, "clickable")}>
                <Link href={METROBANK}>
                  <a target="_blank"> a huge banking corporation</a>
                </Link>
              </span>
              ,
              <span className={cs(classes.highlight, "clickable")}>
                <Link href={GOFLUENT}>
                  <a target="_blank">
                    {" "}
                    an international language learning company
                  </a>
                </Link>
              </span>
              , and
              <span className={cs(classes.highlight, "clickable")}>
                <Link href={VC}>
                  <a target="_blank"> a start-up.</a>
                </Link>
              </span>{" "}
              Now, I am currently working at{" "}
              <span className={cs(classes.highlight, "clickable")}>
                <Link href={SG}>
                  <a target="_blank"> Scentre Group</a>
                </Link>
              </span>{" "}
              as a Software Engineer who is focused on building different
              digital platforms connecting consumers, retailers and the
              business.
            </p>

            <div>
              Here are some of the techonologies I have used to build my recent
              projects.
            </div>

            <div className={classes.listContainer}>
              <div className={classes.list}>
                <ul>
                  <li>React</li>
                  <li>Javascript</li>
                  <li>Typescript</li>
                </ul>
              </div>

              <div className={classes.list}>
                <ul>
                  <li>Node JS</li>
                  <li>Google Cloud Platform</li>
                  <li>Next JS</li>
                </ul>
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
              className={cs(classes.imageDecor, {
                [classes.enlarge]: isHoveringImage,
              })}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
