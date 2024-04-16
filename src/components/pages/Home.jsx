import React, { useEffect, useRef } from 'react';

import Categories from '../Categories';
import PizzaBlock from '../PizzaBlock/';
import Sort, { sortList } from '../Sort';
import Skeleton from '../PizzaBlock/Skeleton';
import NotFoundBlock from '../NotFoundBlock';
import Pagination from '../Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryName, setFilters } from '../../redux/slices/filterSlice';
import qs from 'qs';
import { useNavigate } from 'react-router';
import { fetchPizzas } from '../../redux/slices/pizzasSlice';

function Home() {
	const { categoryName, sortType, currentPage, searchValue } = useSelector(
		(state) => state.filters,
	);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const isSearch = useRef(false);
	const isMounted = useRef(false);

	const { pizzas, status } = useSelector((state) => state.pizzas);

	const getPizzas = () => {
		dispatch(fetchPizzas({ categoryName, sortType, searchValue, currentPage }));
	};

	useEffect(() => {
		if (isMounted.current) {
			const queryString = qs.stringify({
				categoryName,
				sortBy: sortType.sortProperty,
				currentPage,
			});
			navigate(`?${queryString}`);
		}
		isMounted.current = true;
	}, [navigate, categoryName, sortType.sortProperty, currentPage]);

	useEffect(() => {
		if (window.location.search) {
			const params = qs.parse(window.location.search.substring(1));
			const sort = sortList.find((item) => params.sortBy === item.sortProperty);
			dispatch(setFilters({ ...params, sortType: sort }));

			isSearch.current = true;
		}
	}, []);

	useEffect(() => {
		window.scrollTo(0, 0);
		if (!isSearch.current) {
			getPizzas();
		}

		isSearch.current = false;
	}, [categoryName, sortType.sortProperty, currentPage, window.location.search, searchValue]);

	const visiblePizzas = pizzas
		? pizzas
				// .filter((pizzaObj) => pizzaObj.title.toLowerCase().includes(searchValue.toLowerCase()))
				.map((pizzaObj) => <PizzaBlock key={pizzaObj.id} {...pizzaObj} />)
		: null;

	const skeletons = [...new Array(8)].map((_, i) => <Skeleton key={i} />);

	const setActiveCategory = (name) => {
		dispatch(setCategoryName(name));
	};
	return (
		<div className="container">
			<div className="content__top">
				<Categories activeCategory={categoryName} setActiveCategory={setActiveCategory} />
				<Sort />
			</div>
			<h2 className="content__title">{categoryName} Pizzas</h2>
			{pizzas ? (
				<div className="content__items">{status === 'loading' ? skeletons : visiblePizzas}</div>
			) : (
				<NotFoundBlock />
			)}
			<Pagination currentPage={currentPage} />
		</div>
	);
}

export default Home;
