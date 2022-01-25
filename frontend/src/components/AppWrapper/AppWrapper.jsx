import React, { useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Box from '@mui/material/Box';

import { MainLayout } from '../MainLayout';
import { ApiClient } from '../../api';
import { StoreWorker } from '../../store';
import { CardsListPage, CartPage, SettingsPage } from '../../pages';
import { transformCategories } from '../../pages/SettingsPage/SettingsCategoriesPage/transform';
import {
	SettingsProductsPage,
	SettingsCategoriesPage,
	MainPage,
} from '../../pages';
import { StatusModalContainer } from '../StatusModalContainer';

import { styles } from './styles';
import { LocalStorageService } from '../../utils';
import { useSelector } from 'react-redux';

export const AppWrapper = () => {
	const { role } = useSelector(state => state.user);

	useEffect(() => {
		const user = LocalStorageService.getLocalStorageData('user');
		if (user) {
			const verificationUser = async () => {
				return ApiClient.verification(user);
			}
			verificationUser().then(data => {
				if (data?.login && data?.role) {
					StoreWorker.setUsername(data.login);
					StoreWorker.setUserRole(data.role);
					StoreWorker.setAuthenticated(true);
				}
			})
		}
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
					<Route path='/' element={<MainPage />}>
						<Route path='/' element={<CardsListPage />} />
						<Route path='/:id' element={<CardsListPage />} />
						{(role === 2) && (
							<Route path='/Cart' element={<CartPage />} />
						)}
					</Route>
					<Route path='Settings' element={<SettingsPage />}>
						<Route path='Categories' element={<SettingsCategoriesPage />} />
						<Route path='Products' element={<SettingsProductsPage />} />
					</Route>
				</Route>
			</Routes>
			<StatusModalContainer />
		</Box>
	)
}