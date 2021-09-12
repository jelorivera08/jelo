import type { NextPage } from "next";
import Loader from "components/loader";
import Head from "next/head";
import AppBar from "components/appbar";
import { useRouter } from "next/router";
import SideBars from "components/sidebars";
import Intro from "sections/intro";
import { stripSpecialCharacters } from "lib/util";
import { useEffect, useState } from "react";
import cs from "classnames";
import classes from "styles/home.module.scss";
import About from "sections/about";
import Work from "sections/work";
import Career from "sections/career";
import Contact from "sections/contact";
import Link from "next/link";
import { GITHUB } from "lib/constant";
import { FaGithub } from "react-icons/fa";
import classNames from "classnames";
import useTheme from "lib/context/theme-provider";

const Home: NextPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const asPath = stripSpecialCharacters(router.asPath);
  const { isLight } = useTheme();

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Head>
        <title>Jelo Rivera</title>
        <meta
          name="description"
          content="Jelo Rivera is a software engineer whose craft involves creating pleasant and utilitarian web platforms."
        />
      </Head>
      <main className={classNames(classes.home, { [classes.light]: isLight })}>
        <AppBar />
        <Intro />
        <About asPath={asPath} />
        <Career asPath={asPath} />
        <Work asPath={asPath} />
        <Contact asPath={asPath} />
        <SideBars />
      </main>
      <footer
        className={cs(classes.footer, {
          [classes.light]: isLight,
        })}
      >
        <FaGithub
          fill={isLight ? "#015cc5" : "#ccadbd"}
          fontSize="20px"
          onClick={() => window.open(GITHUB, "_blank")}
        />

        <Link href={GITHUB}>
          <a
            className={cs("clickable", classes.text, {
              [classes.light]: isLight,
            })}
            target="_blank"
          >
            Designed & Built by Jelo Rivera
          </a>
        </Link>
        <FaGithub
          fill={isLight ? "#ccadbd" : "#015cc5"}
          fontSize="20px"
          onClick={() => window.open(GITHUB, "_blank")}
        />
      </footer>
    </>
  );
};

export default Home;
