import ReactPaginate from 'react-paginate';

import style from './Pagination.module.scss';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../../redux/slices/filterSlice';

function Pagination({ currentPage }) {
	const dispatch = useDispatch();

	const handlePageClick = (event) => {
		dispatch(setCurrentPage(event.selected + 1));
	};
	return (
		<>
			<ReactPaginate
				className={style.root}
				breakLabel="..."
				nextLabel=">"
				onPageChange={handlePageClick}
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
