import { createSlice } from '@reduxjs/toolkit';

import { DARK_THEME } from '../../config/themes';

const settingsSlice = createSlice({
	name: 'settings',
	initialState: {
		themeName: DARK_THEME,
		statusModalList: [],
		isShowLoader: false,
	},
	reducers: {
		showLoader(state) {
			state.isShowLoader = true;
		},
		hideLoader(state) {
			state.isShowLoader = false;
		},
		addStatusModalItem(state, action) {
			action.payload.id = Date.now();
			state.statusModalList = [ ...state.statusModalList, action.payload ];
		},
		removeStatusModalItem(state, action) {
			state.statusModalList = state.statusModalList.filter(el => el.id !== action.payload);
		},
	},
});

export const settingsReducer = settingsSlice.reducer;
export const {
	showLoader,
	hideLoader,
	addStatusModalItem,
	removeStatusModalItem,
} = settingsSlice.actions;
