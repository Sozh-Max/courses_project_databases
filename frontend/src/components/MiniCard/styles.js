export const styles = {
	wrapper: {
		display: 'flex',
		flexDirection: 'column',
		width: '33.333%',
		boxSizing: 'border-box',
		padding: '15px',
	},
	container: {
		display: 'flex',
		flexDirection: 'column',
		flexGrow: 1,
		boxShadow: '0 0 5px rgba(255, 255, 255, 0.1)',
	},
	imageBlock: {
		paddingBottom: '100%',
		position: 'relative',
		backgroundColor: 'rgba(255, 255, 255, 0.8)',

		'& img': {
			display: 'block',
			position: 'absolute',
			margin: 'auto',
			maxWidth: '95%',
			maxHeight: '95%',
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		}
	},
	content: {
		flexGrow: 1,
		textAlign: 'center',
		padding: '10px',
		display: 'flex',
		flexDirection: 'column',
	},
	contentDesc: {
		flexGrow: 1,
		display: 'flex',
		flexDirection: 'column',
	},
	contentTitle: (theme) => ({
		fontWeight: 700,
		fontSize: 18,
		marginBottom: '10px',
		color: theme.basic.basicColor,
	}),
	categoryTitle: (theme) => ({
		fontSize: 16,
		color: theme.basic.labelColorText,
		marginBottom: '10px',
		cursor: 'pointer',
	}),
	params: {
		flexGrow: 1,
	},
	paramItem: {
		fontSize: 12,
		marginBottom: '5px',
	},
	priceBlock: {
		fontSize: 14,
	},
	price: (theme) => ({
		color: theme.basicButtons.colorPauseHover,
		fontWeight: 700,
		fontSize: 18,
	}),
	buttonContainer: {
		marginTop: '15px',
		marginBottom: '5px',
	},
}