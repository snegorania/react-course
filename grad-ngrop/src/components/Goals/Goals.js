import React, {useState} from "react";
import Card from "../UI/Card/Card";
import GoalList from "./GoalList/GoalList";
import Form from "../UI/Form/Form";
import styles from './Goals.module.css';
import { nanoid } from "nanoid";

const DUMMY_GOALS = [
  { id: "p1", text: "Add goal" },
  { id: "p2", text: "Delete goal" },
  { id: "p3", text: "Update goal" },
];

const Goals = () => {
    const [goals, setGoals] = useState(DUMMY_GOALS);
  const handleDelete = id => {
    const arrayIdOrder = JSON.parse(localStorage.getItem("goalsOrder"));
    const newOrder = arrayIdOrder.filter(el => el !== id);
    localStorage.setItem("goalsOrder", JSON.stringify(newOrder));
    setGoals(prev => prev.filter(el => el.id !== id));
  };

  const handleGoalSubmit = value => { setGoals(prev => {
    return [...prev, {id: nanoid(), text: value}]
  })};

  return (
    <Card className={styles.goals}>
        <Form id='goal' placeholder='Add Goal' name='goal' onSubmit={handleGoalSubmit}/>
        <GoalList goals={goals} onDelete={handleDelete} />
    </Card>
  );
};

export default Goals;
