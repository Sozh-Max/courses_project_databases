import React, { useState } from 'react';

import Box from '@mui/material/Box';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import Switch from '@mui/material/Switch';

import { ColumnContainer, LabelItem, RowContainer } from '../modalBuildComponents';
import { InputBaseCustom } from '../../inputs';
import { ModalWrapper } from '../ModalWrapper';

import { styles } from './styles';
import { FormControlLabel, FormGroup } from '@mui/material';

export const ModalLogin = ({
	core,
	setCore,
	eventApply,
	...props
}) => {
	const [showPassword, setShowPassword] = useState(false);

	const handleClickShowPassword = () => setShowPassword(!showPassword);

	const handleMouseDownPassword = e => e.preventDefault();

	const handleChangeCore = (type, data) => {
		if (typeof type === 'string') {
			setCore({
				...core,
				[type]: data,
			});
		}
		if (Array.isArray(type) & !data) {
			const obj = {};
			type.forEach(elem => {
				obj[elem.key] = elem.value;
			})
			setCore({
				...core,
				...obj,
			});
		}
	};

	const validate = () => {
		let result = true;
		const errors = {}
		if (!core.login.trim().length) {
			result = false;
			errors['loginError'] = true;
		}
		if (!core.password.trim().length) {
			result = false;
			errors['passwordError'] = true;
		}
		if (!result) {
			setCore({
				...core,
				...errors,
			});
		}
		return result;
	}

	const sendApplyData = () => {
		if (validate()) {
			eventApply();
		}
	};

	return (
		<ModalWrapper
			{...props}
			eventApply={sendApplyData}
		>
			<RowContainer>
				<ColumnContainer>
					<LabelItem>Логин</LabelItem>
					<InputBaseCustom
						placeholder='Введите Логин'
						value={core.login}
						error={core.loginError}
						onChange={(e) => {
							handleChangeCore([{
								key: 'login',
								value: e.target.value,
							}, {
								key: 'loginError',
								value: false,
							}]);
						}}
					/>
				</ColumnContainer>
			</RowContainer>

			<RowContainer>
				<ColumnContainer>
					<LabelItem>Пароль</LabelItem>
					<Box sx={styles.inputContainer}>
						<InputBaseCustom
							value={core.password}
							error={core.passwordError}
							placeholder='Введите Пароль'
							className='input-custom-password'
							type={showPassword ? 'text': 'password'}
							onChange={(e) => {
								handleChangeCore([{
									key: 'password',
									value: e.target.value,
								}, {
									key: 'passwordError',
									value: false,
								}]);
							}}
						/>
						<IconButton
							aria-label='toggle password visibility'
							onClick={handleClickShowPassword}
							onMouseDown={handleMouseDownPassword}
							sx={styles.eyeButton}
						>
							{showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
						</IconButton>
					</Box>
				</ColumnContainer>
			</RowContainer>

			<RowContainer>
				<FormGroup>
					<FormControlLabel
						sx={styles.switch}
						control={
							<Switch
								checked={!core.isLogin}
								size='small'
								onChange={() => {
									setCore({
										...core,
										isLogin: !core.isLogin,
									})
								}}
							/>
						}
						label={core.isLogin ? 'К регистрации' : 'Хочу войти'}
					/>
				</FormGroup>
			</RowContainer>
		</ModalWrapper>
	)
}
