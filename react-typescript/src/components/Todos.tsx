import React from 'react';
import ToDo from '../models/todo';
import Todo from './TodoItem';
import styles from './Todos.module.css';
import { useContext } from 'react';
import { toDosContext } from '../context/todos-context';


const Todos: React.FC<{items: ToDo[]}> = ({items}) => {
    const ctx = useContext(toDosContext);
    const handleRemove = (id: string) => {
        ctx.remove(id);
    }

    return (
        <ul className={styles.todos}>
            {items.map(el => <Todo key={el.id} text={el.text} onRemove={handleRemove.bind(null, el.id)}/>)}
        </ul>
    )
}

export default Todos;