import React, { useState } from 'react';

import Box from '@mui/material/Box';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import { ColumnContainer, LabelItem, RowContainer } from '../modalBuildComponents';
import { InputBaseCustom } from '../../inputs';
import { ModalWrapper } from '../ModalWrapper';
import { initLoginState } from './constants';

export const ModalLogin = ({
	core,
	setCore,
	eventApply,
	...props
}) => {
	const [ core, setCore ] = useState(initLoginState);

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
		if (!core.letter.trim().length) {
			result = false;
			errors['letterError'] = true;
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
					<LabelItem>Login</LabelItem>
					<InputBaseCustom
						placeholder='Enter Login'
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
					<LabelItem>Password</LabelItem>
					<Box sx={styles.inputContainer}>
						<InputBaseCustom
							value={core.login}
							error={core.loginError}
							placeholder='Enter Password'
							className='input-custom-password'
							type={showPassword ? 'text': 'password'}
							onChange={e => {
								setPasswordData(e.target.value);
								setPasswordError(false);
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
		</ModalWrapper>
	)
}
