import React from 'react';
import { Outlet } from 'react-router-dom';

import Box from '@mui/material/Box';

import { TabNavigation } from '../../components/TabNavigation';
import { settingsNavList } from './constants';

import { styles } from './styles';

export const SettingsPage = () => {

	return (
		<Box sx={styles.container}>
			<TabNavigation
				navigationList={settingsNavList}
			/>

			<Outlet />
		</Box>
	)
}
