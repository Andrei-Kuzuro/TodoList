import { Form } from "../Form/Form";
import { ToDoItem } from "../ToDoItem/ToDoItem";
import styles from "./ToDoList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { ITodosState } from "../../redux/reducers/todosReducer";

export const ToDoList = () => {
  const state = useSelector((state: ITodosState) => state);

  const todos = state.todos;

  const dispatch = useDispatch();

  const onClickDelete = (id: string) => {
    dispatch({ type: "DELETE_TODO", id });
  };

  const onClickComplete = (id: string) => {
    dispatch({ type: "COMPLETE_TODO", id });
  };

  const addNewTodo = (text: string) => {
    if (text !== "") {
      dispatch({ type: "ADD_TODO", text: text });
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
        Выполненные:{" "}
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
