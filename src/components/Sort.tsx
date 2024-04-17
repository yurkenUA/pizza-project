import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSortType } from '../redux/slices/filterSlice';

type SortItem = {
	title: string;
	sortProperty: string;
};

export const sortList: SortItem[] = [
	{ title: 'popularity', sortProperty: 'rating' },
	{ title: 'price', sortProperty: 'price' },
	{ title: 'alphabetically', sortProperty: 'title' },
];

function Sort() {
	const [isVisible, setIsVisible] = useState(false);
	const sortType: SortItem = useSelector((state: any) => state.filters.sortType);
	const dispatch = useDispatch();

	const sortRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (sortRef.current && !e.composedPath().includes(sortRef.current)) {
				setIsVisible(false);
			}
		};
		document.body.addEventListener('click', handleClickOutside);

		return () => document.body.removeEventListener('click', handleClickOutside);
	}, []);

	const onSetSortCategory = (obj: SortItem) => {
		dispatch(setSortType(obj));
		setIsVisible(false);
	};
	return (
		<div ref={sortRef} className="sort">
			<div
				onClick={() => setIsVisible(!isVisible)}
				className={isVisible ? 'sort__label sort__label_visible' : 'sort__label'}>
				<svg
					width="10"
					height="6"
					viewBox="0 0 10 6"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
						fill="#2C2C2C"
					/>
				</svg>
				<b>Sort by:</b>
				<span>{sortType.title}</span>
			</div>
			{isVisible && (
				<div className="sort__popup">
					<ul>
						{sortList.map((obj, i) => (
							<li
								key={i}
								onClick={() => onSetSortCategory(obj)}
								className={sortType.sortProperty === obj.sortProperty ? 'active' : ''}>
								{obj.title}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
}

export default Sort;
