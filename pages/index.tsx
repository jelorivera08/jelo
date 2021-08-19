import type { NextPage } from "next";
import Loader from "components/loader";
import AppBar from "components/appbar";
import SideBars from "components/sidebars";
import Intro from "components/intro";
import { useEffect, useState } from "react";
import classes from "styles/home.module.scss";
import About from "components/about";

const Home: NextPage = () => {
  const [isLoading, setIsLoading] = useState(true);

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
      <About />
      <SideBars />
    </main>
  );
};

export default Home;
