import React from 'react';
import cartEmptyPng from '../../assets/img/empty-cart.png';
import { Link } from 'react-router-dom';

const CartEmpty: React.FC  = () => {
	return (
		<div className="content">
			<div className="container container--cart">
				<div className="cart cart--empty">
					<h2>The Cart is Empty 😕</h2>
					<p>
						You probably haven't ordered pizza yet.
						<br />
						To order pizza, go to the main page.
					</p>
					<img src={cartEmptyPng} alt="Empty cart" />
					<Link to="/" className="button button--black">
						<span>To the Main Page</span>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default CartEmpty;
