import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';

import { styles } from './styles';

export const Aside = () => {
	const {categories} = useSelector(state => state.siteData);

	return (
		<Box
			component="aside"
			sx={styles.container}
		>
			{categories.map(elem => (
				<Box
					key={elem.id}
					component={Link}
					to={`/${elem.id}`}
					sx={styles.link}
					title={elem.description}
				>
					{elem.title}
				</Box>
			))}
		</Box>
	);
};