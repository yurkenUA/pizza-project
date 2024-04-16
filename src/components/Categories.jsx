import { v4 as uuidv4 } from 'uuid';

function Categories({ activeCategory, setActiveCategory }) {
	const categories = ['All', 'Meat', 'Vegeterian', 'Grill', 'Spicy', 'Closed'];

	return (
		<div className="categories">
			<ul>
				{categories.map((category) => (
					<li
						key={uuidv4()}
						onClick={(e) => setActiveCategory(e.target.innerText)}
						className={activeCategory === category ? 'active' : ''}>
						{category}
					</li>
				))}
			</ul>
		</div>
	);
}

export default Categories;
