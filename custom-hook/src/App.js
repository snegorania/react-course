import React, { useCallback, useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './hooks/usehttp';

function App() {
  const {isLoading, error, fetchTasks} = useHttp();
  const [tasks, setTasks] = useState([]);
  const tasksHandler = useCallback((data) => {
    const loadedTasks = [];

      for (const taskKey in data) {
        loadedTasks.push({ id: taskKey, text: data[taskKey].text });
      }

      setTasks(loadedTasks);
  }, [])

  useEffect(() => {
    fetchTasks('https://react-learn-project-c7c1a-default-rtdb.firebaseio.com/tasks.json', tasksHandler);
  }, [fetchTasks,tasksHandler]);

  const taskAddHandler = (task) => {
    setTasks((prev) => {
      return [...prev, task]
    })
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
