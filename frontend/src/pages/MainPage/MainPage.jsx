import React from 'react';
import { Outlet } from 'react-router-dom';

import Box from '@mui/material/Box';

import { Aside } from '../../components/Aside';

import { styles } from './styles';

export const MainPage = () => {

	return (
		<Box sx={styles.container}>
			<Box sx={styles.row}>
				<Aside />
				<Box>
					<Outlet />
				</Box>
			</Box>
		</Box>
	)
}