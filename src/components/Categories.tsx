import React from 'react';

type CategoriesProps = {
	activeCategory: string;
	setActiveCategory: (name: string) => void;
}

const Categories: React.FC<CategoriesProps>  = React.memo(({ activeCategory, setActiveCategory }) => {
	const categories = ['All', 'Meat', 'Vegeterian', 'Grill', 'Spicy', 'Closed'];
	return (
		<div className="categories">
			<ul>
				{categories.map((category) => (
					<li
						key={crypto.randomUUID()}
						onClick={(e) => setActiveCategory((e.target as HTMLElement).innerText)}
						className={activeCategory === category ? 'active' : ''}>
						{category}
					</li>
				))}
			</ul>
		</div>
	);
})

export default Categories;
