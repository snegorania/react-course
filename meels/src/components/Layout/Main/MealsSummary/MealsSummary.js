import classes from './MealsSummary.module.css';
import { Typography } from '@mui/material';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <Typography component='h2' variant='h2'>Delicious Food, Delivered To You</Typography>
      <Typography component='p' variant='p'>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </Typography>
      <Typography component='p' variant='p'>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </Typography>
    </section>
  );
};

export default MealsSummary;
