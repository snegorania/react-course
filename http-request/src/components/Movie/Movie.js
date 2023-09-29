import React from 'react';

import styles from './Movie.module.css';

const Movie = ({title, reliaseDate, openingText}) => {
    return (
        <li className={styles.movie}>
            <h2>{title}</h2>
            <h3>{reliaseDate}</h3>
            <p>{openingText}</p>
        </li>
    )
}

export default Movie;