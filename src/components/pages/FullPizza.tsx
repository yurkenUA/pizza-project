import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

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
		<p>Downloading...</p>
	) : (
		<div className="container">
			<img src={pizza.imageUrl} alt={pizza.title} />
			<h2>{pizza.title}</h2>
			<h4>{pizza.price} $</h4>
		</div>
	);
}

export default FullPizza;
