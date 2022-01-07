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
		display: 'flex',
		margin: '0 auto',
		justifyContent: 'space-between',
	},
	userBlock: {
		marginLeft: '30px',
	}
};
