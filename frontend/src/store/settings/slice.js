import { createSlice } from '@reduxjs/toolkit';

import { DARK_THEME } from '../../config/themes';

const settingsSlice = createSlice({
	name: 'settings',
	initialState: {
		themeName: DARK_THEME,
		isShowLoader: false,
	},
	reducers: {
		showLoader(state) {
			state.isShowLoader = true;
		},
		hideLoader(state) {
			state.isShowLoader = false;
		},
	},
});

export const settingsReducer = settingsSlice.reducer;
export const {
	showLoader,
	hideLoader,
} = settingsSlice.actions;
