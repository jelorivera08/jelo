import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiGithub, FiInstagram, FiTwitter, FiMail } from 'react-icons/fi';
import { RiLinkedinLine } from 'react-icons/ri';
import { FaMediumM } from 'react-icons/fa';
import { EMAIL, GITHUB, IG, TWITTER, LINKEDIN, MEDIUM } from 'lib/constants';
import styles from './styles.module.scss';

const iconMill = [
  <FiGithub
    key="FiGithub"
    className={styles.icon}
    onClick={() => window.open(GITHUB, '_blank')}
  />,
  <RiLinkedinLine
    key="RiLinkedinLine"
    className={styles.icon}
    onClick={() => window.open(LINKEDIN, '_blank')}
  />,
  <a key="FiMail" href={`mailto:${EMAIL}`}>
    <FiMail className={styles.icon} />
  </a>,
  <FiInstagram
    key="FiInstagram"
    className={styles.icon}
    onClick={() => window.open(IG, '_blank')}
  />,
  <FiTwitter
    key="FiTwitter"
    className={styles.icon}
    onClick={() => window.open(TWITTER, '_blank')}
  />,
  <FaMediumM
    key="FaMediumM"
    className={styles.icon}
    onClick={() => window.open(MEDIUM, '_blank')}
  />,
];

const IconBar = () => {
  const [icons, setIcons] = useState<JSX.Element[]>([]);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < iconMill.length) {
        setIcons((s) => [...s, iconMill[i]]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 400);

    return () => {
      clearInterval(interval);
      setIcons([]);
    };
  }, []);

  return (
    <>
      <div className={styles.container}>{icons.map((i) => i)}</div>
      {icons.length === iconMill.length && (
        <div className={styles.buttonContainer}>
          <button className={styles.button}>
            <Link href="/resume.pdf">
              <a target="_blank">my resumé</a>
            </Link>
          </button>
        </div>
      )}
    </>
  );
};

export default IconBar;
