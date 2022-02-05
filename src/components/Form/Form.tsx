import { ChangeEvent } from 'react';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import styles from './Form.module.css';
import { useState } from 'react';

interface IProps {
  addNewTodo: (text: string) => void;
}

export const Form = ({ addNewTodo }: IProps) => {
  const [text, setText] = useState<string>('');

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleAddNewTodo = () => {
    addNewTodo(text.trim());
    setText('');
  };

  return (
    <div className={styles.form}>
      <Input value={text} onChange={onChange} />
      <Button text='Добавить' onClick={handleAddNewTodo} />
    </div>
  );
};
