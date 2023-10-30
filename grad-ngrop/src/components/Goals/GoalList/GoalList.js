import React, { useState, useEffect } from "react";
import { DragDropContext, Draggable } from "react-beautiful-dnd";
import { StrictModeDroppable as Droppable } from "../../../utils/StrictModeDroppable";
import Goal from "../Goal/Goal";
import styles from "./GoalList.module.css";

const GoalList = ({ goals, onDelete }) => {
  const [goalsList, setGoals] = useState(goals);

  useEffect(() => {
    const arrayIdOrder = JSON.parse(localStorage.getItem("goalsOrder"));
    if (!arrayIdOrder && goals.length) {
      const idsOrderArray = goals.map((goal) => goal.id);
      localStorage.setItem("goalsOrder", JSON.stringify(idsOrderArray));
    }

    let myArr;

    if (arrayIdOrder.length && goals.length) {
      myArr = arrayIdOrder.map((pos) => {
        return goals.find((el) => el.id === pos);
      });
      const newItems = goals.filter((el) => {
        return !arrayIdOrder.includes(el.id);
      });
      if (newItems.length) {
        myArr = [...newItems, ...myArr];
      }
    }

    setGoals(myArr);
  }, [goals]);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const goals = [...goalsList];
    const [reorderedItem] = goals.splice(result.source.index, 1);
    goals.splice(result.destination.index, 0, reorderedItem);
    const idsOrderArray = goals.map((el) => el.id);
    localStorage.setItem("goalsOrder", JSON.stringify(idsOrderArray));
    setGoals(goals);
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="goals">
        {(provided) => (
          <ul
            {...provided.droppableProps}
            ref={provided.innerRef}
            className={styles.list}
          >
            {goalsList.map((el, index) => {
              return (
                <Draggable key={el.id} draggableId={el.id} index={index}>
                  {(provided) => (
                    <li
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                      className={styles["list-item"]}
                    >
                      <Goal text={el.text} id={el.id} onDelete={onDelete} />
                    </li>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default GoalList;
