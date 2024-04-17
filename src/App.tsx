import { Routes, Route } from 'react-router-dom';

import Header from './components/Header.tsx';
import Home from './components/pages/Home.tsx';
import Cart from './components/pages/Cart.tsx';
import NotFound from './components/pages/NotFound.tsx';
import './scss/app.scss';
import FullPizza from './components/pages/FullPizza.tsx';

function App() {
	console.log('render');

	return (
		<div className="wrapper">
			<Header />
			<div className="content">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/pizza/:id" element={<FullPizza/>}></Route>
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
