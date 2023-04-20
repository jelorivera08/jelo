import React, { useState } from 'react';
import Icon from 'components/icon';
import Button from 'components/button';
import cs from 'classnames';
import Burger from 'components/burger';
import classes from './index.module.scss';
import { useMediaQuery } from 'react-responsive';
import { BREAKPOINTS } from 'lib/constant';
import Link from 'next/link';
import { useScrollDirection } from 'react-use-scroll-direction';
import { useEffect } from 'react';
import useTheme from 'lib/context/theme-provider';
import { ImSun } from 'react-icons/im';
import { FaMoon } from 'react-icons/fa';

const AppBar = () => {
  const isMobile = useMediaQuery({ query: BREAKPOINTS.MOBILE });
  const { isScrollingDown, isScrollingUp } = useScrollDirection();
  const [wasScrollingDown, setWasScrollingDown] = useState(false);
  const { toggleTheme, isLight } = useTheme();

  useEffect(() => {
    if (isScrollingDown && !wasScrollingDown) {
      setWasScrollingDown(true);
    }

    if (isScrollingUp) {
      setWasScrollingDown(false);
    }
  }, [isScrollingDown, wasScrollingDown, isScrollingUp]);

  if (isMobile) {
    return (
      <header
        className={cs(classes.header, { [classes.hide]: wasScrollingDown })}
      >
        <div className={cs(classes.container, { [classes.light]: isLight })}>
          <div className={classes.icon}>
            <Icon />
          </div>
          <div className={classes.burgetAndDM}>
            <div
              className={cs(classes.darkModeContainer, {
                [classes.light]: isLight,
              })}
              onClick={toggleTheme}
            >
              <FaMoon
                size={20}
                fill="#1d1d1d"
                className={cs(classes.moon, {
                  [classes.isSelectedMode]: isLight,
                })}
              />
              <ImSun
                size={20}
                fill="#f9d71c"
                className={cs(classes.sun, {
                  [classes.isSelectedMode]: !isLight,
                })}
              />
            </div>

            <Burger />
          </div>
        </div>
      </header>
    );
  }

  return (
    <header
      className={cs(classes.header, { [classes.hide]: wasScrollingDown })}
    >
      <div className={cs(classes.container, { [classes.light]: isLight })}>
        <div className={classes.icon}>
          <Icon />
        </div>
        <div className={classes.menubar}>
          <div
            className={cs(classes.darkModeContainer, {
              [classes.light]: isLight,
            })}
            style={{
              margin: '0 12px',
            }}
            onClick={toggleTheme}
          >
            <FaMoon
              size={20}
              fill="#1d1d1d"
              className={cs(classes.moon, {
                [classes.isSelectedMode]: isLight,
              })}
            />
            <ImSun
              size={20}
              fill="#f9d71c"
              className={cs(classes.sun, {
                [classes.isSelectedMode]: !isLight,
              })}
            />
          </div>

          <Link passHref href="/#about">
            <div
              className={cs(
                classes.menuItem,
                { [classes.light]: isLight },
                classes.item0001,
                'clickable',
              )}
            >
              <span
                className={cs(classes.menuNumber, { [classes.light]: isLight })}
              >
                0001
              </span>
              : About
            </div>
          </Link>
          <Link passHref href="/#tech">
            <div
              className={cs(
                classes.menuItem,
                { [classes.light]: isLight },
                classes.item0001,
                'clickable',
              )}
            >
              <span
                className={cs(classes.menuNumber, { [classes.light]: isLight })}
              >
                0010
              </span>
              : Tech
            </div>
          </Link>
          <Link passHref href="/#career">
            <div
              className={cs(
                classes.menuItem,
                { [classes.light]: isLight },
                classes.item0010,
                'clickable',
              )}
            >
              <span
                className={cs(classes.menuNumber, { [classes.light]: isLight })}
              >
                0011
              </span>
              : Experience
            </div>
          </Link>
          <Link passHref href="/#work">
            <div
              className={cs(
                classes.menuItem,
                { [classes.light]: isLight },
                classes.item0011,
                'clickable',
              )}
            >
              <span
                className={cs(classes.menuNumber, { [classes.light]: isLight })}
              >
                0100
              </span>
              : Work
            </div>
          </Link>

          <Link passHref href="/#contact">
            <div
              className={cs(
                classes.menuItem,
                { [classes.light]: isLight },
                classes.item0100,
                'clickable',
              )}
            >
              <span
                className={cs(classes.menuNumber, { [classes.light]: isLight })}
              >
                0101
              </span>
              : Contact
            </div>
          </Link>

          <div
            className={cs(
              classes.menuItem,
              { [classes.light]: isLight },
              classes.resume,
            )}
          >
            <Button className={classes.button}>
              <Link href="/resume.pdf">
                <a target="_blank">Resume</a>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppBar;
