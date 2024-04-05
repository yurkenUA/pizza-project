import React, { useEffect, useState } from 'react';

import Categories from '../Categories';
import PizzaBlock from '../PizzaBlock/';
import Sort from '../Sort';
import Skeleton from '../PizzaBlock/Skeleton';

function Home() {
	const [pizzas, setPizzas] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetch('https://660f3f19356b87a55c510409.mockapi.io/items')
			.then((res) => res.json())
			.then((data) => {
				setPizzas(data);
				setIsLoading(false);
			});
		window.scrollTo(0, 0);
	}, []);
	return (
		<div className="container">
			<div className="content__top">
				<Categories />
				<Sort />
			</div>
			<h2 className="content__title">All Pizzas</h2>
			<div className="content__items">
				{isLoading
					? [...new Array(8)].map((_, i) => <Skeleton key={i} />)
					: pizzas.map((pizzaObj) => <PizzaBlock {...pizzaObj} key={pizzaObj.id} />)}
			</div>
		</div>
	);
}

export default Home;
