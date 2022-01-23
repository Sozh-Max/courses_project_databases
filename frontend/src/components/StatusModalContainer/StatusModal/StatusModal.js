import React, { useState, useEffect } from 'react';
import clsx from 'clsx';

import Box from '@mui/material/Box';

import { StoreWorker } from '../../../store';

import { styles } from './styles';

export const StatusModal = ({
	id,
	type,
	text,
}) => {
	const [ idTimeout, setIdTimeout ] = useState(null);

	const addHiddenComponent = () => {
		setIdTimeout(
			setTimeout(() => {
				StoreWorker.removeStatusModalItem(id)
			}, 4000)
		);
	}

	useEffect(() => {
		addHiddenComponent();
	}, [])

	return (
		<Box
			className={clsx(
				{'error_message': type === 'error'},
				{'success_message': type === 'success'},
			)}
			tabIndex={0}
			onBlur={addHiddenComponent}
			sx={styles.container}
			onFocus={() => clearTimeout(idTimeout)}
		>
			{text}
		</Box>
	)
}