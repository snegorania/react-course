import React from 'react';

import './CourseGoalList.css';
import CourseGoalListItem from '../CourseGoalListItem/CourseGoalListItem'

const CourseGoalList = ({goals, onDelete}) => {
    const handleGoalClick = id => onDelete(id);
    return (
        <div className='goal-list'>
            {
                goals.map((el) => {
                    return <CourseGoalListItem key={el.id} goal={el.goal} id={el.id} onGoalClick={handleGoalClick}/>
                })
            }
        </div>
    )
}

export default CourseGoalList;