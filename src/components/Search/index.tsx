import React, { useRef, useCallback, useState } from 'react';
import debounce from 'lodash.debounce';

import styles from './Search.module.scss';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../redux/slices/filterSlice';
 
const  Search: React.FC = () => {
	const dispatch = useDispatch();
	const [value, setValue] = useState('');

	const inputRef = useRef<HTMLInputElement>(null);

	const onCleanSearch = () => {
		setValue('');
		dispatch(setSearchValue(''));
		inputRef.current?.focus();
	};

	const updateSearchValue = useCallback(
		debounce((str: string) => {
			dispatch(setSearchValue(str));
		}, 500),
		[],
	);

	const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
		updateSearchValue(e.target.value);
	};

	return (
		<div className={styles.root}>
			<svg
				className={styles.icon}
				xmlns="http://www.w3.org/2000/svg"
				x="0px"
				y="0px"
				width="100"
				height="100"
				viewBox="0 0 50 50">
				<path d="M 21 3 C 11.654545 3 4 10.654545 4 20 C 4 29.345455 11.654545 37 21 37 C 24.701287 37 28.127393 35.786719 30.927734 33.755859 L 44.085938 46.914062 L 46.914062 44.085938 L 33.875 31.046875 C 36.43682 28.068316 38 24.210207 38 20 C 38 10.654545 30.345455 3 21 3 z M 21 5 C 29.254545 5 36 11.745455 36 20 C 36 28.254545 29.254545 35 21 35 C 12.745455 35 6 28.254545 6 20 C 6 11.745455 12.745455 5 21 5 z"></path>
			</svg>
			<input
				ref={inputRef}
				value={value}
				onChange={onChangeInput}
				className={styles.input}
				type="text"
				placeholder="Search pizza..."
			/>
			{value && (
				<svg
					className={styles.closeIcon}
					onClick={onCleanSearch}
					xmlns="http://www.w3.org/2000/svg"
					x="0px"
					y="0px"
					width="100"
					height="100"
					viewBox="0 0 24 24">
					<path d="M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z"></path>
				</svg>
			)}
		</div>
	);
}

export default Search;
