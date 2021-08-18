import Link from "next/link";
import Button from "components/button";
import React from "react";
import classes from "styles/fourohfour.module.scss";

const ErrorPage = () => (
  <div className={classes.container}>
    <div>
      <h1 className={classes.fourohfour}>404!</h1>
      <div className={classes.button}>
        <Button>
          <Link href="/"> Go Back Home</Link>
        </Button>
      </div>
    </div>
  </div>
);

export default ErrorPage;
