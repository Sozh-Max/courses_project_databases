import React from 'react';

import Box from '@mui/material/Box';

import { styles } from './styles';

export const Footer = () => {

	return (
		<Box sx={styles.footer} component='footer'>
			<Box sx={styles.container}>
				<Box sx={styles.copyright}>
					© MySHop 2021-2022. All Rights Reserved
				</Box>
			</Box>
		</Box>
	)
}