import React from 'react';
import styles from './Header.module.css';

import mealsImage from '../../../assets/meals.jpg'

import HeaderCartButton from '../HeaderCartButton/HeaderCartButton';

const Header = ({onShowCart}) => {
    return <React.Fragment>
        <header className={styles.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton onClick={onShowCart}/>
        </header>
        <div className={styles['main-image']}>
            <img src={mealsImage} alt="Meals Image" />
        </div>
    </React.Fragment>
};

export default Header