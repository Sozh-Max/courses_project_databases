import React from 'react';
import { Outlet } from 'react-router-dom';

import Box from '@mui/material/Box';

import { Header } from '../Header';

import { styles } from './styles';

export const MainLayout = () => {

	return (
		<Box sx={styles.getWrapperStyles}>
			<Header />

			<Box component='main' sx={styles.main}>
				<Outlet />
			</Box>
		</Box>
	)
}
