export const styles = {
	modalContent: {
		zIndex: 3000,
		'& .MuiDialog-paper': {
			background: 'none',
			boxShadow: 'none',
			overflow: 'visible',
		},
	},
	getSpinnerStyles: (theme) => ({
		color: theme.basic.basicColor,
	}),
}
