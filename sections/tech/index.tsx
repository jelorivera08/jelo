import cs from 'classnames';
import React, { useState, useEffect, useRef } from 'react';
import classes from './index.module.scss';
import Skill from 'components/skill';
import { useWasOnScreen } from 'lib/hooks/useWasOnScreen';
import { useTheMatrix } from 'lib/hooks/useTheMatrix';
import { AboutProps } from 'types/about';
import useTheme from 'lib/context/theme-provider';

const Tech = ({ asPath }: AboutProps) => {
  const matrix = useTheMatrix();
  const ref = useRef<HTMLDivElement | null>(null);
  const wasInViewport = useWasOnScreen(ref);
  const { isLight } = useTheme();

  useEffect(() => {
    if (asPath === 'tech') {
      ref.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [asPath]);

  return (
    <section
      id="tech"
      ref={ref}
      className={cs(
        classes.container,
        { [classes.show]: wasInViewport },
        { [classes.light]: isLight },
      )}
    >
      <div className={classes.content}>
        <div className={classes.header}>
          <div className={cs(classes.headerText, { [classes.light]: isLight })}>
            <span className={cs(classes.number, { [classes.light]: isLight })}>
              {' '}
              0010:{' '}
            </span>
            My Tech Stack
          </div>
          <div className={classes.matrix}>{matrix}</div>
        </div>
        <div className={classes.body}>
          <Skill skillName="Typescript" rating={9} />
          <Skill skillName="React" rating={9} />
          <Skill skillName="HTML & CSS" rating={8} />
          <Skill skillName="NodeJS" rating={7} />
          <Skill skillName="Git" rating={8} />
          <Skill skillName="AWS" rating={8} />
          <Skill skillName="CI/CD Devops" rating={7} />
          <Skill skillName="Docker" rating={6} />
          <Skill skillName="Python" rating={5} />
        </div>
      </div>
    </section>
  );
};

export default Tech;
