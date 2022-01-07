export const styles = {
	input: (theme) => ({
		color: theme.basic.colorText,
		backgroundColor: theme.basic.inputBackgroundColor,
		width: '100%',
		borderRadius: '5px',
		fontSize: 15,
		minHeight: 34,
		border: `1px solid rgba(0,0,0,0)`,
		transition: 'box-shadow 500ms',

		'& .MuiInputBase-input': {
			minHeight: 30,
			padding: '4px 10px',
			boxSizing: 'border-box',
		},

		'&.Mui-focused': {
			border: `1px solid ${theme.basic.borderActiveColor}`,
		},

		'&.Mui-error': {
			border: `1px solid ${theme.basicButtons.colorDelete}`,
		},

		'&.input_mark': {
			//color: theme.basic.basicColor,
			boxShadow: `inset 0px 0px 7px ${theme.basic.basicColor}`
		}
	}),
}