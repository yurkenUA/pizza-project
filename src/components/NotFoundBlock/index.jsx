import React from 'react';

import styles from './NotFoundBlock.module.scss';

function NotFoundBlock() {
	return (
		<div className={styles.root}>
			<h1>
				<span>😕</span>
				<br />
				Nothing was found
			</h1>
			<p className={styles.description}>
				Unfortunately, this page is not available in our React Pizza store
			</p>
		</div>
	);
}

export default NotFoundBlock;
