import React, {useState} from 'react';

import './CourseGoalList.css';
import CourseGoalListItem from '../CourseGoalListItem/CourseGoalListItem'

const CourseGoalList = ({goals}) => {
    const handleGoalClick = id => console.log(id);
    return (
        <div>
            {
                goals.map((el) => {
                    <CourseGoalListItem key={e.id} goal={el.goal} id={id} onGoalClick={handleGoalClick}/>
                })
            }
        </div>
    )
}

export default CourseGoalList;