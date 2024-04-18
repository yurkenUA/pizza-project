import ReactPaginate from 'react-paginate';

import style from './Pagination.module.scss';
import { useDispatch } from 'react-redux';
import React from 'react';
import { setCurrentPage } from '../../redux/filter/slice';

const  Pagination: React.FC<{currentPage: number}> = ({ currentPage }) => {
	const dispatch = useDispatch();

	const handlePageClick = (page: number) => {
		dispatch(setCurrentPage(page));
	};
	return (
		<>
			<ReactPaginate
				className={style.root}
				breakLabel="..."
				nextLabel=">"
				onPageChange={(e) => handlePageClick(e.selected + 1)}
				pageRangeDisplayed={5}
				pageCount={5}
				forcePage={currentPage - 1}
				previousLabel="<"
				renderOnZeroPageCount={null}
			/>
		</>
	);
}

export default Pagination;
