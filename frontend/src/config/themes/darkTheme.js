import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
	basic: {
		colorText: 'rgba(255,255,255,1)',
		colorLink: 'rgba(39,177,99,1)',
		labelColorText: 'rgba(133,133,142,1)',
		basicColor: 'rgba(39,177,99,1)',
		borderColor: 'rgba(96,159,127, 0.4)',
		borderActiveColor: 'rgba(96,159,127, 1)',
		tableRowBackgroundColor: 'rgba(27,27,40,1)',
		mainBackgroundColor: 'rgba(22,23,33,1)',
		panelBackgroundColor: 'rgba(33,33,45,1)',
		inputBackgroundColor: 'rgba(29,29,44,1)',
		panelEventBackgroundColor: 'rgba(36,36,53,1)',
		dropListActiveItemBackground: 'rgba(39,38,53)',
	},
	basicButtons: {
		colorDefault: 'rgba(221,221,236,1)',
		colorDefaultHover: 'rgba(255,255,255,1)',
		colorApply: 'rgba(38,170,97,1)',
		colorApplyHover: 'rgba(96,159,127, 1)',
		colorEdit: 'rgba(221,221,236,1)',
		colorEditHover: 'rgba(255,255,255,1)',
		colorDelete: 'rgba(238,90,56,1)',
		colorDeleteHover: 'rgba(255,0,0,1)',
		colorPlay: 'rgba(96,159,127, 1)',
		colorPlayHover: 'rgba(39,177,99,1)',
		colorPause: 'rgba(112,108,164,1)',
		colorPauseHover: 'rgba(101,96,148,1)',
	},
	typography: {
		fontFamily: 'Comfortaa',
		fontSize: 16,
	},
});
