import { Button } from "../Button/Button";
import styles from "./ToDoItem.module.css";
import { useState } from "react";

export interface IProps {
  text: string;
  index: number;
  time: string;
  completed: boolean;
  onDelete: () => void;
  onComplete: () => void;
}

export const ToDoItem = ({
  text,
  index,
  time,
  onDelete,
  onComplete,
  completed,
}: IProps) => {
  const [showTime, setShowTime] = useState(false);

  const toggleShowTime = () => {
    setShowTime(!showTime);
  };

  return (
    <div className={styles.wrapper}>
      <Button text="&#10004;" onClick={onComplete} />
      <p
        onClick={toggleShowTime}
        className={styles.todoText}
        style={{ textDecoration: completed ? "line-through" : "none" }}
      >
        <span className={styles.todoIndex}>{index + 1}</span>
        {text}
      </p>
      {showTime ? <p>{time}</p> : null}
      <Button text="&#10006;" onClick={onDelete} />
    </div>
  );
};
