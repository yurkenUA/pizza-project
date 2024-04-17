import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton: React.FC = (props: any) => (
	<ContentLoader
		className="pizza-block"
		speed={2}
		width={280}
		height={466}
		viewBox="0 0 280 466"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb"
		{...props}>
		<circle cx="130" cy="120" r="120" />
		<rect x="0" y="267" rx="4" ry="4" width="280" height="27" />
		<rect x="0" y="310" rx="10" ry="10" width="280" height="88" />
		<rect x="135" y="419" rx="30" ry="30" width="145" height="45" />
		<rect x="0" y="431" rx="5" ry="5" width="103" height="27" />
	</ContentLoader>
);

export default Skeleton;
