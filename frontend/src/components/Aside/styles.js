export const styles = {
	container: (theme) => ({
		width: '250px',
		minWidth: '250px',
		backgroundColor: theme.basic.inputBackgroundColor,
		paddingTop: '10px',
		paddingBottom: '10px',
	}),
	link: (theme) => ({
		display: 'block',
		whiteSpace: 'nowrap',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		color: theme.basic.basicColor,
		textDecoration: 'none',
		padding: '10px 15px',
		'&:hover': {
			backgroundColor: 'rgba(255, 255, 255, 0.05)',
		},
	})
}