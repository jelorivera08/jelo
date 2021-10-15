import { useEffect, useState } from 'react';
import Cursor from 'components/cursor';
import IconBar from 'sections/icon-bar';
import styles from './styles.module.scss';

const subs = 'I write code, not tragedies.'.split('');

const Hello = () => {
  const [subtitle, setSubtitle] = useState<string[]>([]);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < subs.length) {
        setSubtitle((s) => [...s, subs[i]]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 120);

    return () => {
      clearInterval(interval);
      setSubtitle([]);
    };
  }, []);

  return (
    <>
      <div className={styles.container}>
        <span>Hi, I&apos;m Jelo.</span>
        <div className={styles.subtitle}>
          <span>{subtitle.join('')} </span>
          <Cursor />
        </div>
      </div>
      {subtitle.length === subs.length && <IconBar />}
    </>
  );
};

export default Hello;
