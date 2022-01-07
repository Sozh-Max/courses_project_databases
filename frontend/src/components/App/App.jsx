import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { ThemeProvider } from '@mui/material/styles';

import { themesAdapter } from '../../config/themes/themesAdapter';
import { AppWrapper } from '../AppWrapper';

const customHistory = createBrowserHistory();

export const App = () => {
	const { themeName } = useSelector(state => state.settings);
	const theme = themesAdapter(themeName);


	return (
		<ThemeProvider theme={theme}>
			<LocalizationProvider dateAdapter={AdapterDateFns}>
				<BrowserRouter history={customHistory}>
					<AppWrapper/>
				</BrowserRouter>
			</LocalizationProvider>
		</ThemeProvider>
	);
}
