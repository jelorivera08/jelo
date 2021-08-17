import type { NextPage } from "next";
import Loader from "components/loader";
import AppBar from "components/appbar";
import SideBars from "components/sidebars";
import Intro from "components/intro";
import { useEffect, useState } from "react";
import classes from "styles/home.module.scss";

const Home: NextPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={classes.home}>
      <AppBar />
      <Intro />
      <SideBars />
    </div>
  );
};

export default Home;
