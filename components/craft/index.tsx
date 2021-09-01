import React from "react";
import Image from "next/image";
import pillars from "public/pillars.png";
import classes from "./index.module.scss";
import { FaMedium } from "react-icons/fa";
import Link from "next/link";
import { MEDIUM, MEDIUM_ARTICLE } from "lib/constant";
import classNames from "classnames";
import useTheme from "lib/context/theme-provider";

const Craft = () => {
  const { isLight } = useTheme();

  return (
    <div className={classes.container}>
      <div
        className={classes.imageContainer}
        onClick={() => window.open(MEDIUM_ARTICLE, "_blank")}
      >
        <Image
          src={pillars}
          className={classes.image}
          alt="pillars"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={classes.info}>
        <div
          className={classNames(classes.header, { [classes.light]: isLight })}
        >
          Featured Craft
        </div>
        <div
          className={classNames(classes.subtitle, { [classes.light]: isLight })}
        >
          <Link href={MEDIUM_ARTICLE}>
            <a target="_blank">Medium Articles</a>
          </Link>
        </div>
        <div className={classes.body}>
          <div
            className={classNames(classes.bodyContent, {
              [classes.light]: isLight,
            })}
          >
            Articles that covers a wide range of topics, from the latest tech
            trends to the best practices of the industry. Centered around the
            fundamentals of React and Front End Development.
          </div>
        </div>
        <div
          className={classNames(classes.footer, { [classes.light]: isLight })}
        >
          <span className={classes.footerItem}>React</span>
          <span className={classes.footerItem}>Typescript</span>
          <span className={classes.footerItem}>Webpack</span>
        </div>

        <div className={classes.links}>
          <FaMedium
            onClick={() => window.open(MEDIUM, "_blank")}
            className={classNames("clickable", classes.linkIcon)}
          />
        </div>
      </div>
    </div>
  );
};

export default Craft;
