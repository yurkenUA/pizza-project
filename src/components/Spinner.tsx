import React from 'react';

const Spinner: React.FC = () => {
	return (
		<svg
			style={{ margin: '0 auto', background: 'none', display: 'block' }}
			width="200px"
			height="200px"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 200 200">
			<circle fill="#FE5F1E" stroke="#FE5F1E" strokeWidth="15" r="15" cx="40" cy="65">
				<animate
					attributeName="cy"
					calcMode="spline"
					dur="2"
					values="65;135;65;"
					keySplines=".5 0 .5 1;.5 0 .5 1"
					repeatCount="indefinite"
					begin="-.4"></animate>
			</circle>
			<circle fill="#FE5F1E" stroke="#FE5F1E" strokeWidth="15" r="15" cx="100" cy="65">
				<animate
					attributeName="cy"
					calcMode="spline"
					dur="2"
					values="65;135;65;"
					keySplines=".5 0 .5 1;.5 0 .5 1"
					repeatCount="indefinite"
					begin="-.2"></animate>
			</circle>
			<circle fill="#FE5F1E" stroke="#FE5F1E" strokeWidth="15" r="15" cx="160" cy="65">
				<animate
					attributeName="cy"
					calcMode="spline"
					dur="2"
					values="65;135;65;"
					keySplines=".5 0 .5 1;.5 0 .5 1"
					repeatCount="indefinite"
					begin="0"></animate>
			</circle>
		</svg>
	);
};

export default Spinner;
