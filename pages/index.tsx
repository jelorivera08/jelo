import type { NextPage } from "next";
import Loader from "components/loader";
import AppBar from "components/appbar";
import { useRouter } from "next/router";
import SideBars from "components/sidebars";
import Intro from "components/intro";
import { stripSpecialCharacters } from "lib/util";
import { useEffect, useState } from "react";
import classes from "styles/home.module.scss";
import About from "components/about";

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
    <main className={classes.home}>
      <AppBar />
      <Intro />
      <About asPath={asPath} />
      <SideBars />
    </main>
  );
};

export default Home;
