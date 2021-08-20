import React from "react";
import { useState } from "react";
import cs from "classnames";
import { Option } from "types/career";
import classes from "./index.module.scss";

const options = [
  {
    id: "Scentre Group",
    key: "Scentre Group",
    value: (
      <>
        <div className={classes.header}>
          <span>Full Stack Web Engineer</span>{" "}
          <span className={classes.company}>@ Scentre Group</span>
        </div>

        <div className={classes.date}>June 2020 - Present</div>

        <div className={classes.content}>
          <div className={classes.text}>
            <div className={classes.bullet} />
            <span className={classes.listText}>
              Create and develop data agnostic and mobile-responsive web
              components.
            </span>
          </div>

          <div className={classes.text}>
            <div className={classes.bullet} />
            <span className={classes.listText}>
              Write modern, performant, maintainable code across different
              platforms of our infrastructure.
            </span>
          </div>

          <div className={classes.text}>
            <div className={classes.bullet} />
            <span className={classes.listText}>
              Develop and maintain code around diverse set of technologies such
              as JavaScript, TypeScript, React, Contentful, Braze, Google Cloud
              Platform, Node.
            </span>
          </div>

          <div className={classes.text}>
            <div className={classes.bullet} />
            <span className={classes.listText}>
              Work with multi-disciplinary and diverse teams of engineers,
              designers, product owners on a daily basis.
            </span>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "Virtual Control",
    key: "Virtual Control",
    value: (
      <>
        <div className={classes.header}>
          <span>Senior Front End Engineer</span>{" "}
          <span className={classes.company}>@ Virtual Control</span>
        </div>

        <div className={classes.date}>August 2019 - June 2020</div>

        <div className={classes.content}>
          <div className={classes.text}>
            <div className={classes.bullet} />
            <span className={classes.listText}>
              Worked with a team of two designers, two node engineers, two other
              react engineers and a product owner to build a front end UI for
              our cargo shipping clients. A bright-eyed start up environment.
            </span>
          </div>

          <div className={classes.text}>
            <div className={classes.bullet} />
            <span className={classes.listText}>
              Integrated AI (machine learning) API created by our team in Kiev
              to our Single Page Application using Relay, GraphQL and Express.
            </span>
          </div>

          <div className={classes.text}>
            <div className={classes.bullet} />
            <span className={classes.listText}>
              Worked closely with our clients on a daily basis for constant
              product feed back.
            </span>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "GoFluent",
    key: "GoFluent",
    value: (
      <>
        <div className={classes.header}>
          <span>Front End Engineer</span>{" "}
          <span className={classes.company}>@ GoFluent</span>
        </div>

        <div className={classes.date}>October 2017 - August 2019</div>

        <div className={classes.content}>
          <div className={classes.text}>
            <div className={classes.bullet} />
            <span className={classes.listText}>
              Developed and shipped highly interactive web applications
              specializing in video conferencing using React and Webpack.
            </span>
          </div>

          <div className={classes.text}>
            <div className={classes.bullet} />
            <span className={classes.listText}>
              Built and shipped new wep pages from the legacy website into
              React, integrating micro services API into the front end.
            </span>
          </div>

          <div className={classes.text}>
            <div className={classes.bullet} />
            <span className={classes.listText}>
              Structured our front-end data schema for efficient consumption and
              performant interaction event at simultatneous actions from
              multiple users.
            </span>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "Metrobank",
    key: "Metrobank",
    value: (
      <>
        <div className={classes.header}>
          <span>Software Engineer</span>{" "}
          <span className={classes.company}>@ Metrobank</span>
        </div>

        <div className={classes.date}>April 2017 - October 2017</div>

        <div className={classes.content}>
          <div className={classes.text}>
            <div className={classes.bullet} />
            <span className={classes.listText}>
              Worked in a newly created team amidst a giant banking corporation
              focused on delivering new digital features for the bank&apos;s
              e-commerce and retail banking.
            </span>
          </div>

          <div className={classes.text}>
            <div className={classes.bullet} />
            <span className={classes.listText}>
              Tested and developed components for the brand new UITF single page
              application backed by micro services API (AWS).
            </span>
          </div>

          <div className={classes.text}>
            <div className={classes.bullet} />
            <span className={classes.listText}>
              Worked closely with clients putting data security at the top of
              our feature building.
            </span>
          </div>
        </div>
      </>
    ),
  },
];

const NavRail = () => {
  const [active, setActive] = useState<number>(0);
  const handleClick = (val: number) => () => setActive(val);

  const renderOptionKey = (option: Option, index: number) => {
    const isActive = index === active;

    return (
      <div
        className={cs(classes.option, {
          [classes.selected]: isActive,
        })}
        key={option.id}
        onClick={handleClick(index)}
      >
        {option.key}
      </div>
    );
  };

  const renderOptionValue = (option: Option, index: number) => {
    const isActive = index === active;

    return (
      <div
        key={option.id}
        className={cs(classes.body, {
          [classes.optionValueAnimation]: isActive,
        })}
      >
        {option.value}
      </div>
    );
  };

  return (
    <div className={classes.rail}>
      <div className={classes.selection}>{options.map(renderOptionKey)}</div>
      <div className={classes.content}>{options.map(renderOptionValue)}</div>
    </div>
  );
};

export default NavRail;
