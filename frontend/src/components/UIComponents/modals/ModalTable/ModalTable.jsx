import React from 'react';

import { ModalWrapper } from '../ModalWrapper';
import { TableComponent } from '../../../TableComponent';

export const ModalTable = ({
	columns,
	rows,
	...props
}) => {

	return (
		<ModalWrapper
			{...props}
		>
			<TableComponent
				columns={columns}
				rows={rows}
			/>
		</ModalWrapper>
	)
}