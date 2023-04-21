import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import classes from './index.module.scss';
import cs from 'classnames';
import useTheme from 'lib/context/theme-provider';

const MAX_RATING = 10;

export default function Skill({
  skillName,
  rating,
}: {
  skillName: string;
  rating: number;
}) {
  const { isLight } = useTheme();

  return (
    <div className={classes.skill_container}>
      <div className={cs(classes.skill_text, { [classes.light]: isLight })}>
        {skillName}
      </div>
      <div className={classes.skill_stars}>
        {new Array(rating).fill(0).map((_, i) => (
          <AiFillStar
            key={i}
            className={cs(classes.star)}
            fill={isLight ? '#e36208' : '#FFD700'}
          />
        ))}
        {new Array(MAX_RATING - rating).fill(0).map((_, i) => (
          <AiOutlineStar
            className={cs(classes.star_outline, { [classes.light]: isLight })}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}
