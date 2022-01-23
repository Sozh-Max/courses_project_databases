import React from 'react';
import { useSelector } from 'react-redux';

import Box from '@mui/material/Box';

import { StatusModal } from './StatusModal';

import { styles } from './styles';

export const StatusModalContainer = () => {
	const { statusModalList } = useSelector(state => state.settings)

	return (
		<Box sx={styles.container}>
			{statusModalList.map(element => (
				<StatusModal
					key={element.id}
					id={element.id}
					type={element.type}
					text={element.text}
				/>
			))}
		</Box>
	)
}