import { Routes, Route } from 'react-router-dom';
import React, { Suspense } from 'react';

import Header from './components/Header.tsx';
import Home from './components/pages/Home.tsx';
import Spinner from './components/Spinner.tsx';

import './scss/app.scss';

const Cart = React.lazy(() => import(/* webpackChunkName: "Cart" */ './components/pages/Cart.tsx'));
const FullPizza = React.lazy(
	() => import(/* webpackChunkName: "FullPizza" */ './components/pages/FullPizza.tsx'),
);
const NotFound = React.lazy(
	() => import(/* webpackChunkName: "NotFound" */ './components/pages/NotFound.tsx'),
);

function App() {
	console.log('render');

	return (
		<div className="wrapper">
			<Header />
			<div className="content">
				<Suspense fallback={<Spinner />}>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/cart" element={<Cart />} />
						<Route path="/pizza/:id" element={<FullPizza />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</Suspense>
			</div>
		</div>
	);
}

export default App;
