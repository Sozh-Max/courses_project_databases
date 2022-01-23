import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';

import { ButtonIconCustom, iconTypes } from '../UIComponents';
import { ModalLogin } from '../UIComponents/modals';
import { initState } from './constants';
import { ApiClient } from '../../api';
import { StoreWorker } from '../../store';

import { styles } from './styles';

export const Header = () => {
	const [ openModal, detOpenModal ] = useState(false);
	const { isAuthenticated } = useSelector(state => state.user);

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
			if (!result) {
				StoreWorker.addStatusModalItem({
					type: 'error',
					text: 'Ошибка верификации! Такого пользователя не существует, либо пароль не верный.',
				});
			} else {
				StoreWorker.addStatusModalItem({
					type: 'success',
					text: `Доброго времени суток ${result.login}`,
				});
				StoreWorker.setUsername(result.login);
				StoreWorker.setUserRole(result.role);
				StoreWorker.setAuthenticated(true);
				handleCloseModal();
			}
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