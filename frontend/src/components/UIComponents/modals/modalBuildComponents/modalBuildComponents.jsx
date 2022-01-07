import React from 'react';

import Box from '@mui/material/Box';

import { styles } from './styles';

export const RowContainer = ({ children }) => (
	<Box sx={styles.container}>{ children }</Box>
)

export const ColumnContainer = ({ children, type }) => (
	<Box
		style={{
			width: type === 'half' ? '50%' : '100%'
		}}
		sx={styles.column}
	>
		{ children }
	</Box>
)

export const LabelItem = ({ children }) => (
	<Box sx={styles.label}>{ children }</Box>
)
