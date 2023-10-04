import React from "react";
import AvailableMeals from '../../Meals/AvailableMeals/AvailableMeals';
import MealsSummary from './MealsSummary/MealsSummary';
import styles from './Main.module.css';
import { Box } from "@mui/material";

const Main = () => {
    return(
        <main>
            <Box component='div' className={styles['main-image']}/>
            <MealsSummary/>
            <AvailableMeals/>
        </main>
    )
}

export default Main