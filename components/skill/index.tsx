import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import classes from './index.module.css';

const MAX_RATING = 10;

export default function Skill({
  skillName,
  rating,
}: {
  skillName: string;
  rating: number;
}) {
  return (
    <div className={classes.skill_container}>
      <div className={classes.skill_text}>{skillName}</div>
      <div className={classes.skill_stars}>
        {new Array(rating).fill(0).map((_, i) => (
          <AiFillStar key={i} className={`${classes.star}`} fill="#FFD700" />
        ))}
        {new Array(MAX_RATING - rating).fill(0).map((_, i) => (
          <AiOutlineStar className={classes.star_outline} key={i} />
        ))}
      </div>
    </div>
  );
}
