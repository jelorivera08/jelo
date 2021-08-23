import type { NextPage } from "next";
import Loader from "components/loader";
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
import { FaGithub, FaGithubAlt } from "react-icons/fa";

const Home: NextPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const asPath = stripSpecialCharacters(router.asPath);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <main className={classes.home}>
        <AppBar />
        <Intro />
        <About asPath={asPath} />
        <Career asPath={asPath} />
        <Work asPath={asPath} />
        <Contact asPath={asPath} />
        <SideBars />
      </main>
      <footer className={classes.footer}>
        <FaGithub
          fill="#ccadbd"
          fontSize="20px"
          onClick={() => window.open(GITHUB, "_blank")}
        />

        <Link href={GITHUB}>
          <a className={cs("clickable", classes.text)} target="_blank">
            Designed & Built by Jelo Rivera
          </a>
        </Link>
        <FaGithub
          fill="#ccadbd"
          fontSize="20px"
          onClick={() => window.open(GITHUB, "_blank")}
        />
      </footer>
    </>
  );
};

export default Home;
