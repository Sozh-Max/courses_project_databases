import React from 'react';
import { useSelector } from 'react-redux';

import Box from '@mui/material/Box';

import { ButtonIconCustom, iconTypes } from '../UIComponents';

import { styles } from './styles';

export const Header = () => {
	const { isAuthenticated } = useSelector(state => state.user);

	return (
		<Box component='header' sx={styles.wrapper}>
			<Box sx={styles.container}>
				<Box sx={styles.userBlock}>
					{!isAuthenticated && (
						<ButtonIconCustom
							customType={iconTypes.LOGIN_USER}
							title='Авторизация/Регистрация'
						/>
					)}
				</Box>
			</Box>
		</Box>
	)
}