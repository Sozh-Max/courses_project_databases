import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';

import { ButtonIconCustom, iconTypes } from '../UIComponents';
import { ModalLogin } from '../UIComponents/modals';
import { initState } from './constants';
import { ApiClient } from '../../api';
import { StoreWorker } from '../../store';
import { LocalStorageService } from '../../utils';

import { styles } from './styles';

export const Header = () => {
	const [ openModal, detOpenModal ] = useState(false);
	const { isAuthenticated, userName, userCart } = useSelector(state => state.user);

	const [ coreData, setCoreData ] = useState(initState);

	const handleOpenModal = () => {
		detOpenModal(true);
	}

	const handleCloseModal = () => {
		setCoreData(initState);
		detOpenModal(false);
	}

	const sendLogin = async () => {
		await ApiClient.login({
				login: coreData.login,
				password: coreData.password,
			}
		).then(result => {
			if (result?.login && result?.role && result?.id) {
				StoreWorker.addStatusModalItem({
					type: 'success',
					text: `Доброго времени суток ${result.login}`,
				});
				StoreWorker.setUsername(result.login);
				StoreWorker.setUserRole(result.role);
				StoreWorker.setUserId(result.id);
				StoreWorker.setAuthenticated(true);
				LocalStorageService.setLocalStorageData('user', {id: result.id, token: result.token})
				handleCloseModal();
			} else {
				StoreWorker.addStatusModalItem({
					type: 'error',
					text: 'Ошибка верификации! Такого пользователя не существует, либо пароль не верный.',
				});
			}
		}).catch(error => {
			StoreWorker.addStatusModalItem({
				type: 'error',
				text: error,
			});
		})
	}

	const sendRegistration = async () => {
		await ApiClient.registration({
			login: coreData.login,
			password: coreData.password,
		}).then(result => {
			if (!result) {
				StoreWorker.addStatusModalItem({
					type: 'error',
					text: 'Регистрация не прошла, возможно данный пользователь уже существует.',
				});
			} else {
				StoreWorker.addStatusModalItem({
					type: 'success',
					text: 'Спасибо за регистрацию, Вы можете авторизироваться.',
				});
				handleCloseModal();
			}
		}).catch(error => {
			StoreWorker.addStatusModalItem({
				type: 'error',
				text: error,
			});
		})
	}

	const handleLogout = () => {
		StoreWorker.setUsername(null);
		StoreWorker.setUserRole(null);
		StoreWorker.setUserId(null);
		StoreWorker.setAuthenticated(false);
		StoreWorker.resetUserCart();
		LocalStorageService.setLocalStorageData('user', null);
	}

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
								onClick={handleOpenModal}
							/>
						)}
						{isAuthenticated && (
							<>
								<Box
									component={Link}
									to='/Orders'
									sx={styles.navLink}
								>
									История заказов
								</Box>
								<Box
									component={Link}
									to='/Cart'
									sx={styles.navLink}
								>
									{(userCart.length > 0)
										? `В корзине ${userCart.length} шт`
										: 'Корзина пуста'
									}
								</Box>
								<Box sx={styles.userName}>
									{ userName }
								</Box>
								<ButtonIconCustom
									title='Выйти'
									customType={iconTypes.LOGOUT}
									onClick={handleLogout}
								/>
							</>
						)}
					</Box>
				</Box>
			</Box>
			{openModal && (
				<ModalLogin
					open={openModal}
					title={coreData.isLogin ? 'Вход' : 'Регистрация'}
					core={coreData}
					setCore={setCoreData}
					eventApply={coreData.isLogin ? sendLogin : sendRegistration}
					eventClose={handleCloseModal}
				/>
			)}
		</Box>
	)
}