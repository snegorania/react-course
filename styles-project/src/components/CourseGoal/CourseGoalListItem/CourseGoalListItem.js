import React from 'react';

import './CourseGoalListItem.css';
import Card from '../../UI/Card/Card';

const CourseGoalListItem = ({goal, id, onGoalClick}) => {
    const handleClick = id => onGoalClick(id);
    return (
        <Card className={'goal'} onClick={handleClick}>
            <h2 className="goal-heading">{goal}</h2>
        </Card>
    )
}

export default CourseGoalListItem;