import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import Spinner from '../Spinner';
import { Link } from 'react-router-dom';

const FullPizza: React.FC = () => {
	const [pizza, setPizza] = useState<{
		imageUrl: string;
		title: string;
		price: number;
	}>();
	const { id } = useParams();
	const navigate = useNavigate();
	useEffect(() => {
		const fetchPizza = async () => {
			try {
				const { data } = await axios.get(`https://660f3f19356b87a55c510409.mockapi.io/items/${id}`);
				setPizza(data);
			} catch (error) {
				console.log(error);
				navigate('/');
			}
		};
		fetchPizza();
	}, [id, navigate]);
	return !pizza ? (
		<Spinner />
	) : (
		<div className="container">
			<div
				style={{
					maxWidth: '500px',
					margin: '0 auto',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
				}}>
				<img src={pizza.imageUrl} alt={pizza.title} />
				<h2>{pizza.title}</h2>

				<h4>{pizza.price} $</h4>
				<Link to="/" className="button button--outline button--add go-back-btn">
					<svg
						width="8"
						height="14"
						viewBox="0 0 8 14"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M7 13L1 6.93015L6.86175 1"
							stroke="#D3D3D3"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>

					<span>Come Back</span>
				</Link>
			</div>
		</div>
	);
};

export default FullPizza;
