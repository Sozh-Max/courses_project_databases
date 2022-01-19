import React from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import { styles } from './styles';

export const ModalWrapper = ({
	children,
	eventClose,
	eventApply,
	title,
	buttonCancelText,
	buttonApplyText,
	maxWidth,
	styleType, // create || edit || delete
	hideDialogActions,
	...props
}) => (
	<Dialog
		aria-labelledby={`alert-dialog-title-${title}`}
		aria-describedby="alert-dialog-description"
		maxWidth={maxWidth ?? 'sm'}
		sx={styles.wrapper}
		className={styleType}
		{...props}
	>
		<IconButton
			aria-label="close"
			sx={styles.buttonClose}
			onClick={eventClose}
		>
			<CloseIcon />
		</IconButton>
		<DialogTitle sx={styles.title} id={`alert-dialog-title-${title}`}>
			{ title }
		</DialogTitle>
		<DialogContent sx={styles.content}>
			{ children }
		</DialogContent>
		{!hideDialogActions && (
			<DialogActions sx={styles.buttonContainer}>
				<Button
					onClick={eventClose}
					sx={styles.btnClose}
				>
					{ buttonCancelText ?? 'Отменить' }
				</Button>
				<Button
					onClick={eventApply}
					autoFocus
					sx={styles.btnApply}
				>
					{ buttonApplyText ?? 'Применить' }
				</Button>
			</DialogActions>
		)}
	</Dialog>
);
