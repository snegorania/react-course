import React, { useState } from "react";
import "./App.css";
import CourseGoalListItem from "./components/CourseGoal/CourseGoalListItem/CourseGoalListItem";
import Button from "./components/UI/Button/Button";
import Input from "./components/UI/Input/Input";
import Card from "./components/UI/Card/Card";

function App() {
  const [val, setVal] = useState("");
  const handleEnter = (value) => {
    setVal(value);
  };
  return (
    <div>
    <Card className={'form'}>
      <Input id={"goal"} name={"goal"} onEnter={handleEnter} value={val} placeholder={'Enter Goal'}/>
      <Button />
    </Card>
    <CourseGoalListItem goal={'Goal'}/>
    </div>
  );
}

export default App;
