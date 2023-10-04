import React from "react";
import AvailableMeals from '../../Meals/AvailableMeals/AvailableMeals';
import MealsSummary from './MealsSummary/MealsSummary';
import mealsImage from '../../../assets/meals.jpg';
import styles from './Main.module.css';

const Main = () => {
    return(
        <main>
            <div className={styles['main-image']}>
                <img src={mealsImage} alt="Meals" />
            </div>
            <MealsSummary/>
            <AvailableMeals/>
        </main>
    )
}

export default Main