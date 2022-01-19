import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';

import Box from '@mui/material/Box';

import { MainLayout } from '../MainLayout';
import { ApiClient } from '../../api';
import { StoreWorker } from '../../store';
import { SettingsPage } from '../../pages';
import { transformCategories } from '../../pages/SettingsPage/SettingsCategoriesPage/transform';
import {
	SettingsProductsPage,
	SettingsCategoriesPage,
	MainPage,
} from '../../pages';

import { styles } from './styles';

export const AppWrapper = () => {
	useEffect(() => {
		const getCategories = async () => {
			return await ApiClient.getAllCategories();
		}
		const getProductParams = async () => {
			return await ApiClient.getAllProductParams();
		}
		getCategories().then(data => {
			StoreWorker.setCategories(transformCategories(data));
		});
		getProductParams().then(data => {
			StoreWorker.setProductParams(data);
		});
	}, []);

	return (
		<Box sx={styles.wrapper}>
			<Routes>
				<Route path='/' element={<MainLayout />}>
					<Route path='/' element={<MainPage />} />
					<Route path='Settings' element={<SettingsPage />}>
						<Route path='Categories' element={<SettingsCategoriesPage />} />
						<Route path='Products' element={<SettingsProductsPage />} />
					</Route>
				</Route>
			</Routes>
		</Box>
	)
}