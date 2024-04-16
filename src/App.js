import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/pages/Home';
import Cart from './components/pages/Cart';
import NotFound from './components/pages/NotFound';
import './scss/app.scss';
import FullPizza from './components/pages/FullPizza';

function App() {
	console.log('render');

	return (
		<div className="wrapper">
			<Header />
			<div className="content">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/pizza/:id" element={<FullPizza />}></Route>
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
