import type { NextPage } from "next";
import Loader from "components/loader";
import AppBar from "components/appbar";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <AppBar />
    </div>
  );
};

export default Home;
