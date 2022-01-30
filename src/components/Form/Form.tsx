import { ChangeEvent } from 'react';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import styles from './Form.module.css';

interface IProps {
	text: string;
	setText: ( value: string ) => void;
	addNewTodo: () => void;
}

export const Form = ( { addNewTodo, text, setText }: IProps ) => {
	const onChange = ( event: ChangeEvent<HTMLInputElement> ) => {
		setText(event.target.value);
	};
	
	return (
		<div className={styles.form}>
			<Input value={text} onChange={onChange}/>
			<Button text='Добавить' onClick={addNewTodo}/>
		</div>
	);
};
