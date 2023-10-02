import useHttp from '../../hooks/usehttp';

import Section from '../UI/Section';
import TaskForm from './TaskForm';

const NewTask = (props) => {
    const {isLoading, error, fetchTasks} = useHttp();
    const handleData = (data) => {
        const generatedId = data.name; // firebase-specific => "name" contains generated id
        const createdTask = { id: generatedId, text: data[data.name].text };

        props.onAddTask(createdTask);
    }

  const enterTaskHandler = async (taskText) => {
    fetchTasks('https://react-learn-project-c7c1a-default-rtdb.firebaseio.com/tasks.json', handleData, {
        method: 'POST',
        body: JSON.stringify({ text: taskText }),
        headers: {
          'Content-Type': 'application/json',
        },
    });
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;