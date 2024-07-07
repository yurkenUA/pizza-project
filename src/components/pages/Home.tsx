import React, { useEffect, useRef } from 'react';

import Categories from '../Categories.tsx';
import PizzaBlock from '../PizzaBlock/index.tsx';
import Sort, { sortList } from '../Sort.tsx';
import Skeleton from '../PizzaBlock/Skeleton.tsx';
import NotFoundBlock from '../NotFoundBlock/index.tsx';
import Pagination from '../Pagination/index.tsx';
import { useSelector } from 'react-redux';
import qs from 'qs';
import { useLocation, useNavigate } from 'react-router';
import { useAppDispatch } from '../../redux/store.ts';
import { setCategoryName, setFilters } from '../../redux/filter/slice.ts';
import { fetchPizzas } from '../../redux/pizzas/asyncActions.ts';

const Home: React.FC = () => {
	const location = useLocation();
	const { categoryName, sortType, currentPage, searchValue } = useSelector(
		(state: any) => state.filters,
	);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const isSearch = useRef(false);
	const isMounted = useRef(false);

	const { pizzas, status } = useSelector((state: any) => state.pizzas);

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
			// poprobovat uslovia i peredavat click logo?!!!!!!!!!!!!!!
			navigate(`?${queryString}`);
		}
		isMounted.current = true;
	}, [navigate, categoryName, sortType.sortProperty, currentPage]);

	useEffect(() => {
		if (location.search) {
			const params = qs.parse(location.search.substring(1));
			const sort = sortList.find((item) => params.sortBy === item.sortProperty);
			dispatch(
				setFilters({
					sortType: sort,
					searchValue: '',
					categoryName: '',
					currentPage: 0,
					...params,
					
				}));

			isSearch.current = true;

		}
	}, []);

	useEffect(() => {
		window.scrollTo(0, 0);
		if (!isSearch.current) {
			getPizzas();
		}


	}, [categoryName, sortType.sortProperty, currentPage, location.search, searchValue]);

	const visiblePizzas = pizzas
		? pizzas
				// .filter((pizzaObj) => pizzaObj.title.toLowerCase().includes(searchValue.toLowerCase()))
				.map((pizzaObj: any) => <PizzaBlock key={pizzaObj.id} {...pizzaObj} />)
		: null;

	const skeletons = [...new Array(8)].map((_, i) => <Skeleton key={i} />);

	const setActiveCategory = React.useCallback((name: string) => {
		dispatch(setCategoryName(name));
	}, []);
	return (
		<div className="container">
			<div className="content__top">
				<Categories activeCategory={categoryName} setActiveCategory={setActiveCategory} />
				<Sort/>
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
