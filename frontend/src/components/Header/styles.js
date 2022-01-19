export const styles = {
	wrapper: (theme) => ({
		minHeight: '20px',
		backgroundColor: theme.basic.panelBackgroundColor,
		position: 'fixed',
		top: 0,
		left: 0,
		right: 0,
		zIndex: 10,
	}),
	container: {
		width: '1200px',
		padding: '0 15px',
		margin: '0 auto',
	},
	row: {
		marginLeft: '-15px',
		marginRight: '-15px',
		display: 'flex',
		justifyContent: 'space-between',
	},
	userBlock: {
		marginLeft: '30px',
	},
	navContainer: {
		flexGrow: 1,
		display: 'flex',
	},
	navLink: (theme) => ({
		color: theme.basic.basicColor,
		textDecoration: 'none',
		display: 'inline-block',
		padding: '8px 15px',
		'&:hover': {
			color: theme.basicButtons.colorPlay,
		}
	})
};
