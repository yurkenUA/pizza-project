import React, { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

function Categories() {
	const categories = ['All', 'Meat', 'Vegeterian', 'Grill', 'Spicy', 'Closed'];

	const [activeCategory, setActiveCategory] = useState(categories[0]);

	const onChooseCategory = (e) => {
		setActiveCategory(e.target.innerText);
	};
	return (
		<div className="categories">
			<ul>
				{categories.map((category) => (
					<li
						key={uuidv4()}
						onClick={onChooseCategory}
						className={activeCategory === category ? 'active' : ''}>
						{category}
					</li>
				))}
			</ul>
		</div>
	);
}

export default Categories;
