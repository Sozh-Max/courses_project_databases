export const styles = {
	wrapper: (theme) => ({
		'& .MuiPaper-root.MuiDialog-paperScrollPaper': {
			backgroundColor: theme.basic.mainBackgroundColor,
			color: theme.basic.colorText,
			padding: '15px 40px 25px',
		},
		'&.create .MuiPaper-root': {
			borderLeft: `4px solid ${theme.basic.basicColor} `,
		},
		'&.delete .MuiPaper-root': {
			borderLeft: `4px solid ${theme.basicButtons.colorDelete} `,
		},
	}),
	buttonClose: (theme) => ({
		color: theme.basicButtons.colorDelete,
		padding: '5px',
		width: 38,
		height: 38,
		position: 'absolute',
		top: 15,
		right: 40,

		'&:hover': {
			color: theme.basicButtons.colorDeleteHover,
		}
	}),
	title: {
		padding: '0px 40px 15px 0px',
		fontSize: 20,
		minHeight: '47px',
	},
	content: {
		padding: 0,
		overflow: 'hidden',
	},
	buttonContainer: {
		padding: '10px 0 0',
	},
	btnClose: (theme) => ({
		color: theme.basicButtons.colorDelete,
		padding: '5px 15px',
		textTransform: 'none',

		'&:hover': {
			color: theme.basicButtons.colorDeleteHover,
		}
	}),
	btnApply: (theme) => ({
		color: theme.basicButtons.colorApply,
		padding: '5px 15px',
		textTransform: 'none',
		marginLeft: '20px',

		'&:hover': {
			color: theme.basicButtons.colorApplyHover,
		}
	}),
}