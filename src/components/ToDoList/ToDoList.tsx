import { useState } from 'react';
import { Form } from '../Form/Form';
import { ToDoItem } from '../ToDoItem/ToDoItem';
import styles from './ToDoList.module.css';

interface ITodoItem {
  id: string;
  text: string;
  completed: boolean;
  time: string;
}

export const ToDoList = () => {
  const [todos, setTodos] = useState<ITodoItem[]>([]);

  const onClickDelete = (id: string) => {
    const newTodos = todos.filter((item) => {
      if (item.id === id) {
        return false;
      }
      return true;
    });

    setTodos(newTodos);
  };

  const onClickComplete = (id: string) => {
    const newTodos = todos.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });

    setTodos(newTodos);
  };

  const addNewTodo = (text: string) => {
    if (text !== '') {
      const date = new Date();

      const newTodo = {
        id: 'id' + Math.random().toString(16).slice(2),
        text: text,
        completed: false,
        time: `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`,
      };

      const newTodos = [...todos, newTodo];
      setTodos(newTodos);
    }
  };

  return (
    <div className={styles.todoList}>
      <Form addNewTodo={addNewTodo} />
      {todos.length === 0 ? <p>Начинай уже... </p> : null}
      {todos.map((item, index) => {
        return (
          <ToDoItem
            key={item.id}
            index={index}
            text={item.text}
            onDelete={() => onClickDelete(item.id)}
            onComplete={() => onClickComplete(item.id)}
            completed={item.completed}
            time={item.time}
          />
        );
      })}
      <p>Всего дел: {todos.length}</p>
      <p>
        Выполненные:{' '}
        {todos.reduce((prev, curr) => {
          if (curr.completed) {
            return prev + 1;
          }
          return prev;
        }, 0)}
      </p>
    </div>
  );
};
