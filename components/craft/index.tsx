import React from "react";
import Image from "next/image";
import classes from "./index.module.scss";
import { FaMedium } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { FaGitSquare } from "react-icons/fa";
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
  isReverse?: boolean;
  links: Array<{ icon: "website" | "medium" | "git"; url: string }>;
};

const Craft = ({
  title,
  description,
  techStack,
  url,
  image,
  isReverse,
  links,
}: CraftProps) => {
  const { isLight } = useTheme();

  const renderLink = (icon: "website" | "medium" | "git", url: string) => {
    if (icon === "website") {
      return (
        <CgWebsite
          onClick={() => window.open(url, "_blank")}
          fill={isLight ? "#000" : "#fff"}
          className={classNames("clickable", classes.linkIcon)}
        />
      );
    } else if (icon === "medium") {
      return (
        <FaMedium
          onClick={() => window.open(url, "_blank")}
          fill={isLight ? "#000" : "#fff"}
          className={classNames("clickable", classes.linkIcon)}
        />
      );
    } else if (icon === "git") {
      return (
        <FaGitSquare
          onClick={() => window.open(url, "_blank")}
          fill={isLight ? "#000" : "#fff"}
          className={classNames("clickable", classes.linkIcon)}
        />
      );
    }
  };

  return (
    <div className={classes.container}>
      {isReverse ? (
        <>
          <div className={classes.info}>
            <div
              className={classNames(
                classes.header,
                {
                  [classes.reverse]: isReverse,
                },
                {
                  [classes.light]: isLight,
                }
              )}
            >
              Featured Craft
            </div>
            <div
              className={classNames(
                classes.subtitle,
                {
                  [classes.reverse]: isReverse,
                },
                {
                  [classes.light]: isLight,
                }
              )}
            >
              <Link href={title.url}>
                <a target="_blank">{title.text}</a>
              </Link>
            </div>
            <div className={classes.body}>
              <div
                className={classNames(
                  classes.bodyContent,
                  {
                    [classes.reverse]: isReverse,
                  },
                  {
                    [classes.light]: isLight,
                  }
                )}
              >
                {description}
              </div>
            </div>
            <div
              className={classNames(
                classes.footer,
                {
                  [classes.reverse]: isReverse,
                },
                {
                  [classes.light]: isLight,
                }
              )}
            >
              {techStack.map(tech => (
                <span
                  key={tech}
                  className={classNames(classes.footerItem, {
                    [classes.reverse]: isReverse,
                  })}
                >
                  {tech}
                </span>
              ))}
            </div>

            <div
              className={classNames(classes.links, {
                [classes.reverse]: isReverse,
              })}
            >
              {links.map(({ icon, url }) => renderLink(icon, url))}
            </div>
          </div>

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
        </>
      ) : (
        <>
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
              className={classNames(classes.header, {
                [classes.light]: isLight,
              })}
            >
              Featured Craft
            </div>
            <div
              className={classNames(classes.subtitle, {
                [classes.light]: isLight,
              })}
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
              className={classNames(classes.footer, {
                [classes.light]: isLight,
              })}
            >
              {techStack.map(tech => (
                <span key={tech} className={classes.footerItem}>
                  {tech}
                </span>
              ))}
            </div>

            <div className={classes.links}>
              {links.map(({ icon, url }) => renderLink(icon, url))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Craft;
