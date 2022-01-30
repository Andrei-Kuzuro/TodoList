import { ChangeEventHandler } from 'react';
import styles from './Input.module.css';

interface IProps {
	value: string;
	onChange: ChangeEventHandler<HTMLInputElement>;
}

export const Input = ( { onChange, value }: IProps ) => {
	return <input className={styles.input} onChange={onChange} value={value}/>;
};
