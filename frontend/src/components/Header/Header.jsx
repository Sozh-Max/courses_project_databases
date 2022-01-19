import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';

import { ButtonIconCustom, iconTypes } from '../UIComponents';

import { styles } from './styles';

export const Header = () => {
	const { isAuthenticated } = useSelector(state => state.user);

	return (
		<Box
			component='header'
			sx={styles.wrapper}
		>
			<Box sx={styles.container}>
				<Box sx={styles.row}>
					<Box sx={styles.navContainer}>
						<Box
							component={Link}
							to='/'
							sx={styles.navLink}
						>
							Сайт
						</Box>
						<Box
							component={Link}
							to='/settings'
							sx={styles.navLink}
						>
							Админка
						</Box>
					</Box>
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
		</Box>
	)
}