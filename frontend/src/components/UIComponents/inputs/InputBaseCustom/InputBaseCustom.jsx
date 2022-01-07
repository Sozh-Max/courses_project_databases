import React from 'react';

import InputBase from '@mui/material/InputBase';

import { styles } from './styles';

export const InputBaseCustom = ({
	...props
}) => {

	return (
		<InputBase
			sx={styles.input}
			{ ...props }
		/>
	)
}
