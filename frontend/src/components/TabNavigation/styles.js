export const styles = {
	wrapper: {
		marginTop: '10px',
		paddingBottom: '10px',
		marginBottom: '10px',
		width: '100%',
		justifyContent: 'center',
		display: 'flex',
	},
	button: (theme) => ({
		color: theme.basic.labelColorText,
		textDecoration: 'none',
		borderBottom: `2px solid rgba(0,0,0,0)`,
		fontSize: 14,
		padding: '6px 12px',
		'&.active': {
			color: theme.basic.colorText,
			borderBottom: `2px solid ${theme.basic.borderActiveColor}`,
		},
		'&:hover': {
			color: theme.basic.colorText,
		},
	}),
};
