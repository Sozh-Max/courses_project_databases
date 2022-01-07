import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';

import Box from '@mui/material/Box';

import { MainLayout } from '../MainLayout';
import { ApiClient } from '../../api';

import { styles } from './styles';

export const AppWrapper = () => {
	useEffect(() => {
		const test = async () => {
			const a = await ApiClient.getAllCategories()
			console.log(a);
		}
		test();
	}, []);

	return (
		<Box sx={styles.wrapper}>
			<Routes>
				<Route path='/' element={<MainLayout />}>

				</Route>
			</Routes>
		</Box>
	)
}