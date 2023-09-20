import React, { useState } from "react";
import "./App.css";
import CourseGoalInput from "./components/CourseGoal/CourseGoalInput/CourseGoalInput";
import CourseGoalList from "./components/CourseGoal/CourseGoalList/CourseGoalList";

const defaultGoals = [
  {id: '1', goal: 'Make project'},
  {id: '2', goal: 'End course'},
  {id: '3', goal: 'Learn react'}
];

function App() {
  const [goals, setGoals] = useState(defaultGoals);
  const handleFormSubmit = goal => {
    setGoals((prev) => {return [goal,...prev]})
  }

  const handleDelete = id => {
    setGoals((prev) => {
      return prev.filter(el => el.id !== id);
    })
  }
  return (
    <div className="wrapper">
      <CourseGoalInput onFormSubmit={handleFormSubmit}/>
      <CourseGoalList goals={goals} onDelete={handleDelete}/>
    </div>
  );
}

export default App;
