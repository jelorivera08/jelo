import React from "react";
import Image from "next/image";
import classes from "./index.module.scss";
import { FaMedium } from "react-icons/fa";
import Link from "next/link";
import classNames from "classnames";
import useTheme from "lib/context/theme-provider";

type CraftProps = {
  title: {
    text: string;
    url: string;
  };
  description: string;
  techStack: string[];
  url: string;
  image: StaticImageData;
};

const Craft = ({ title, description, techStack, url, image }: CraftProps) => {
  const { isLight } = useTheme();

  return (
    <div className={classes.container}>
      <div
        className={classes.imageContainer}
        onClick={() => window.open(url, "_blank")}
      >
        <Image
          src={image}
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
          <Link href={title.url}>
            <a target="_blank">{title.text}</a>
          </Link>
        </div>
        <div className={classes.body}>
          <div
            className={classNames(classes.bodyContent, {
              [classes.light]: isLight,
            })}
          >
            {description}
          </div>
        </div>
        <div
          className={classNames(classes.footer, { [classes.light]: isLight })}
        >
          {techStack.map(tech => (
            <span key={tech} className={classes.footerItem}>
              {tech}
            </span>
          ))}
        </div>

        <div className={classes.links}>
          <FaMedium
            onClick={() => window.open(url, "_blank")}
            className={classNames("clickable", classes.linkIcon)}
          />
        </div>
      </div>
    </div>
  );
};

export default Craft;
