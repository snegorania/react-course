import React from 'react';

import styles from './CourseGoalListItem.module.css';
import Card from '../../UI/Card/Card';

const CourseGoalListItem = ({goal, id, onGoalClick}) => {
    const handleClick = () => onGoalClick(id);
    return (
        <div onClick={handleClick}>
            <Card className={styles.goal} id={id}>
                <h2 className={styles['goal-heading']}>{goal}</h2>
            </Card>
        </div>
    )
}

export default CourseGoalListItem;